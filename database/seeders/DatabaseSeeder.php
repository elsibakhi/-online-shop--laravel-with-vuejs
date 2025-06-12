<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Modules\Admin\Database\Seeders\AdminDatabaseSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Baraa Elsibakhi',
            'username' => 'elsibakhi',
            'email' => 'baraa@gmail.com',
            'role' => 'admin',
           
        ])->profile()->create([
            'timezone'=>'Asia/Gaza',
            
        ]);
        User::factory()->create([
            'name' => 'Ali',
            'username' => 'shaheen',
            'email' => 'ali@gmail.com',
            'role' => 'vendor',
            'balance' => 1000,
        ])->profile()->create([
            'timezone'=>'Asia/Qatar',
            
        ]);
        User::factory()->create([
            'name' => 'Abood',
            'username' => 'sheikh',
            'email' => 'abood@gmail.com',
            'role' => 'vendor',
            'balance' => 1000,
        ])->profile()->create([
            'timezone'=>'Africa/Algiers',
            
        ]);
        User::factory()->create([
            'name' => 'Mohammed',
            'username' => 'mohd',
            'email' => 'mohd@gmail.com',
            'role' => 'customer',
            'balance' => 1000,
        ])->profile()->create([
            'timezone'=>'Asia/Gaza',
            
        ]);
        User::factory()->create([
            'name' => 'Hazem',
            'username' => 'zooma',
            'email' => 'hazem@gmail.com',
            'role' => 'customer',
            'balance' => 1000,
        ])->profile()->create([
            'timezone'=>'Africa/Cairo',
            
        ]);

        $this->call([

            SpecificationSeeder::class,
            AdminDatabaseSeeder::class,
        ]);
    }
}
