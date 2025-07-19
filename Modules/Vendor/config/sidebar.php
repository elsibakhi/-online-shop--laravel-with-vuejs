<?php

return [

    [
        'id' => 'item',
        'title' => __('Items'),
        'url' => '#',
        'isActive' => false,
        'items' => [

            [
                'title' => __('My Items'),
                'role' => 'vendor',
                'url' => 'item.index',

            ],
            [
                'title' => __('All Items'),
                'url' => 'item.index',
                'params' => [
                    'loading' => 'all',
                ],

            ],
        ],
    ],

];
