<?php
$uri = urldecode(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));

// Rewrite /app/assets/* → /assets/* (SPA compiled bundles, no file duplication)
if (strpos($uri, '/app/assets/') === 0) {
    $assetPath = __DIR__ . '/assets/' . substr($uri, strlen('/app/assets/'));
    if (file_exists($assetPath) && !is_dir($assetPath)) {
        $ext = pathinfo($assetPath, PATHINFO_EXTENSION);
        $mime = [
            'js'    => 'application/javascript',
            'css'   => 'text/css',
            'svg'   => 'image/svg+xml',
            'png'   => 'image/png',
            'jpg'   => 'image/jpeg',
            'woff2' => 'font/woff2',
            'woff'  => 'font/woff',
        ];
        header('Content-Type: ' . ($mime[$ext] ?? 'application/octet-stream'));
        header('Cache-Control: public, max-age=31536000, immutable');
        readfile($assetPath);
        exit;
    }
}

$file = __DIR__ . $uri;

// Serve real static files directly (images, fonts, auth-bridge, favicon, etc.)
if ($uri !== '/' && file_exists($file) && !is_dir($file)) {
    return false;
}

// Marketing pretty-URL pages
$marketingPages = [
    '/how-it-works' => 'how-it-works.html',
    '/services'     => 'services.html',
    '/locations'    => 'locations.html',
    '/resources'    => 'resources.html',
    '/request'      => 'request.html',
];
if (isset($marketingPages[$uri])) {
    readfile(__DIR__ . '/' . $marketingPages[$uri]);
    exit;
}

// Legacy /app prefix → SPA shell
if ($uri === '/app' || strpos($uri, '/app/') === 0) {
    readfile(__DIR__ . '/app/index.html');
    exit;
}

// SPA routes served at root (React Router handles these internally)
$spaExactRoutes = [
    '/signin', '/signup', '/verify', '/profile',
    '/payments', '/products', '/roles', '/permissions',
    '/shippers', '/shoppers', '/blogs', '/custom-declaration',
    '/custom', '/payment',
];
$spaPrefixes = [
    '/shopper/', '/shipper/', '/admin/', '/blogs/',
    '/view/', '/payment/', '/custom/',
];

$isSpa = in_array($uri, $spaExactRoutes);
if (!$isSpa) {
    foreach ($spaPrefixes as $p) {
        if (strpos($uri, $p) === 0) { $isSpa = true; break; }
    }
}
if ($isSpa) {
    readfile(__DIR__ . '/app/index.html');
    exit;
}

// Root and everything else → marketing landing
readfile(__DIR__ . '/index.html');
