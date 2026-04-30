<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('services')->insert([
            [
                'title' => 'Forwarding Service Fee',
                'price' => 0.00,
                'description' => 'Forwarding Service Fee',
                'is_required' => 1,
                'status' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Product Photo',
                'price' => 0.00,
                'description' => 'Product Photo',
                'is_required' => 0,
                'status' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Package Consolidation',
                'price' => 0.00,
                'description' => 'Package Consolidation',
                'is_required' => 0,
                'status' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Purchase Assistance',
                'price' => 0.00,
                'description' => 'Purchase Assistance',
                'is_required' => 0,
                'status' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
