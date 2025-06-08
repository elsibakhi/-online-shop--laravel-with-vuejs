<?php

return [

    [
        'id' => 'post',
        'title' => __('Posts'),
        'url' => '#',
        'isActive' => false,
        'items' => [

            [
                'title' => __('My Posts'),
                'url' => 'post.index',
            ],
            [
                'title' => __('Timeline'),
                'url' => 'post.timeline',
            ],

        ],
    ],

];
