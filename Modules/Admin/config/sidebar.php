<?php

return [

    [
        'id' => 'category',
        'title' => __('Categories'),
        'url' => '#',
        'isActive' => false,
        'items' => [

            [
                'title' => __('Categories'),
                'url' => 'category.index',
            ],

            [
                'title' => __('Sub Categories'),
                'url' => 'subcategory.index',
            ],

        ],
    ],
    [
        'id' => 'tag',
        'title' => __('Tags'),
        'url' => '#',
        'isActive' => false,
        'items' => [
            [
                'title' => __('Tags'),
                'url' => 'tag.index',
            ],

        ],
    ],

];
