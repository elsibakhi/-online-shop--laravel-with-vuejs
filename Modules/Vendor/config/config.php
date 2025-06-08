<?php

return [
    'name' => 'Vendor',
    'items' => [

        'max_specifications' => 5,
        'max_sub_specifications' => 5,
        'max_tags_on_item' => 10,
        'min_price' => 5,
        'max_price' => 5000,
        'min_quantity' => 1,
        'max_quantity' => 50,
        'min_auction_session_hours' => 1,
        'max_auction_session_date_from_today_months' => 1,
        'extensions' => [
            'MAX_FILE_SIZE' => 1 * 1024 * 1024,
            'MAX_FILES_NUMBER' => 4,
            'ACCEPTED_IMAGE_TYPES' => [
                'image/jpg',
                'image/jpeg',
                'image/png',
                'image/webp',
            ],
            'ACCEPTED_IMAGE_EXTENSIONS' => [
                'jpg',
                'jpeg',
                'png',
                'webp',
            ],
        ],
    ],
];
