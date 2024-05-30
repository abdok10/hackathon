<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            [
                'roles_id' => 4,
                'email' => 'admin@gmail.com',
                'password' => Hash::make('password'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'roles_id' => 5,
                'email' => 'ali@gmail.com',
                'password' => Hash::make('password'),
                'created_at' => now(),
                'updated_at' => now(),
                
            ],[
                'roles_id' => 6,
                'email' => 'anwar@gmail.com',
                'password' => Hash::make('password'),
                'created_at' => now(),
                'updated_at' => now(), 
            ]
              ]);
    }
}
