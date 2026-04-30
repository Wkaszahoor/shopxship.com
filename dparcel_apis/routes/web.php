<?php

use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;

Route::get('/clear-cache', function () {
    Artisan::call('config:clear');
    Artisan::call('cache:clear');
    Artisan::call('config:cache');
    return 'Cache cleared';
});

// Serve React SPA for all non-API routes — handles /login, /dashboard, etc.
Route::get('/{any?}', function () {
    return view('spa');
})->where('any', '^(?!api).*');
