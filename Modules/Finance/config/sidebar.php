<?php

return [

    [
        'id' => 'finance',
        'title' => __('Finance'),
        'url' => '#',
        'isActive' => false,
        'items' => [

            [
                'title' => __('Purchase Transactions'),
                'url' => 'purchase-transactions.index',
            ],
            [
                'title' => __('My Balance'),
                'url' => 'balance.index',
            ],

        ],
    ],

];
