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
