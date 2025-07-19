<?php

use Illuminate\Support\Facades\Route;
use Modules\Vendor\Http\Controllers\ItemController;

Route::middleware(['auth', 'verified'])->group(function (): void {

    Route::get('item/load', [ItemController::class, 'loadItems'])->name('item.load');
    Route::get('item/load/all', [ItemController::class, 'loadAllItems'])->name('item.load.all');
    Route::get('item/search', [ItemController::class, 'search'])->name('item.search');

    Route::resource('item', ItemController::class)->except(['create', 'show']);
});

Route::get('item/{item}', [ItemController::class, 'show'])->name('item.show');
