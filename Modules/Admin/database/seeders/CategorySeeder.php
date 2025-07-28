<?php

namespace Modules\Admin\Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Modules\Admin\Models\Category;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        Category::create(['name' => 'Electronics'])
            ->subCategories()->createMany($this->withSlugs([
                'Mobile Phones',
                'Laptops & Computers',
                'Tablets',
                'Accessories',
                'Smartwatches & Wearables',
                'Cameras & Photography',
                'Home Appliances',
            ]));

        Category::create(['name' => 'Fashion'])
            ->subCategories()->createMany($this->withSlugs([
                'Men’s Clothing',
                'Women’s Clothing',
                'Shoes',
                'Bags & Accessories',
                'Watches & Jewelry',
            ]));

        Category::create(['name' => 'Beauty & Personal Care'])
            ->subCategories()->createMany($this->withSlugs([
                'Skincare',
                'Makeup',
                'Hair Care',
                'Perfumes & Fragrances',
                'Personal Hygiene',
            ]));

        Category::create(['name' => 'Home & Furniture'])
            ->subCategories()->createMany($this->withSlugs([
                'Living Room Furniture',
                'Bedroom Furniture',
                'Kitchen & Dining',
                'Home Decor',
                'Cleaning & Organization',
            ]));

        Category::create(['name' => 'Sports & Outdoor'])
            ->subCategories()->createMany($this->withSlugs([
                'Exercise Equipment',
                'Sportswear & Shoes',
                'Camping & Hiking Gear',
                'Bicycles & Accessories',
                'Swimming & Water Sports',
            ]));

        Category::create(['name' => 'Toys & Kids'])
            ->subCategories()->createMany($this->withSlugs([
                'Baby Clothing & Accessories',
                'Educational Toys',
                'Action Figures & Dolls',
                'Puzzles & Board Games',
                'School Supplies',
            ]));

        Category::create(['name' => 'Automotive & Tools'])
            ->subCategories()->createMany($this->withSlugs([
                'Car Accessories',
                'Tools & Hardware',
                'Motorcycle Gear',
                'Vehicle Electronics',
            ]));

        Category::create(['name' => 'Grocery & Food'])
            ->subCategories()->createMany($this->withSlugs([
                'Fresh Produce',
                'Packaged Foods',
                'Beverages',
                'Health & Wellness',
            ]));

        Category::create(['name' => 'Books & Stationery'])
            ->subCategories()->createMany($this->withSlugs([
                'Fiction & Non-Fiction Books',
                'Academic & Professional Books',
                'Notebooks & Planners',
                'Office Supplies',
            ]));

        Category::create(['name' => 'Gaming & Entertainment'])
            ->subCategories()->createMany($this->withSlugs([
                'Gaming Consoles',
                'Gaming Accessories',
                'Video Games',
                'Board Games & Card Games',
            ]));
    }

    private function withSlugs(array $names): array
    {
        return array_map(fn($name) => [
            'name' => $name,
            'slug' => Str::slug($name),
        ], $names);
    }
}
