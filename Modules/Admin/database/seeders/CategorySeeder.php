<?php

namespace Modules\Admin\Database\Seeders;

use Illuminate\Database\Seeder;
use Modules\Admin\Models\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Category::create(['name' => 'Electronics'])
            ->subCategories()->createMany([
                ['name' => 'Mobile Phones'],
                ['name' => 'Laptops & Computers'],
                ['name' => 'Tablets'],
                ['name' => 'Accessories'],
                ['name' => 'Smartwatches & Wearables'],
                ['name' => 'Cameras & Photography'],
                ['name' => 'Home Appliances'],
            ]);

        Category::create(['name' => 'Fashion'])
            ->subCategories()->createMany([
                ['name' => 'Men’s Clothing'],
                ['name' => 'Women’s Clothing'],
                ['name' => 'Shoes'],
                ['name' => 'Bags & Accessories'],
                ['name' => 'Watches & Jewelry'],
            ]);

        Category::create(['name' => 'Beauty & Personal Care'])
            ->subCategories()->createMany([
                ['name' => 'Skincare'],
                ['name' => 'Makeup'],
                ['name' => 'Hair Care'],
                ['name' => 'Perfumes & Fragrances'],
                ['name' => 'Personal Hygiene'],
            ]);

        Category::create(['name' => 'Home & Furniture'])
            ->subCategories()->createMany([
                ['name' => 'Living Room Furniture'],
                ['name' => 'Bedroom Furniture'],
                ['name' => 'Kitchen & Dining'],
                ['name' => 'Home Decor'],
                ['name' => 'Cleaning & Organization'],
            ]);

        Category::create(['name' => 'Sports & Outdoor'])
            ->subCategories()->createMany([
                ['name' => 'Exercise Equipment'],
                ['name' => 'Sportswear & Shoes'],
                ['name' => 'Camping & Hiking Gear'],
                ['name' => 'Bicycles & Accessories'],
                ['name' => 'Swimming & Water Sports'],
            ]);

        Category::create(['name' => 'Toys & Kids'])
            ->subCategories()->createMany([
                ['name' => 'Baby Clothing & Accessories'],
                ['name' => 'Educational Toys'],
                ['name' => 'Action Figures & Dolls'],
                ['name' => 'Puzzles & Board Games'],
                ['name' => 'School Supplies'],
            ]);

        Category::create(['name' => 'Automotive & Tools'])
            ->subCategories()->createMany([
                ['name' => 'Car Accessories'],
                ['name' => 'Tools & Hardware'],
                ['name' => 'Motorcycle Gear'],
                ['name' => 'Vehicle Electronics'],
            ]);

        Category::create(['name' => 'Grocery & Food'])
            ->subCategories()->createMany([
                ['name' => 'Fresh Produce'],
                ['name' => 'Packaged Foods'],
                ['name' => 'Beverages'],
                ['name' => 'Health & Wellness'],
            ]);

        Category::create(['name' => 'Books & Stationery'])
            ->subCategories()->createMany([
                ['name' => 'Fiction & Non-Fiction Books'],
                ['name' => 'Academic & Professional Books'],
                ['name' => 'Notebooks & Planners'],
                ['name' => 'Office Supplies'],
            ]);

        Category::create(['name' => 'Gaming & Entertainment'])
            ->subCategories()->createMany([
                ['name' => 'Gaming Consoles'],
                ['name' => 'Gaming Accessories'],
                ['name' => 'Video Games'],
                ['name' => 'Board Games & Card Games'],
            ]);

    }
}
