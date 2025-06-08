<?php

use Illuminate\Support\Facades\Route;
use Modules\Vendor\Http\Controllers\ItemController;
use Modules\Vendor\Http\Controllers\VendorController;

Route::middleware(['auth', 'verified'])->group(function (): void {
    Route::resource('vendor', VendorController::class)->names('vendor');
    Route::get('item/load', [ItemController::class, 'loadItems'])->name('item.load');
    Route::get('item/load/all', [ItemController::class, 'loadAllItems'])->name('item.load.all');
    Route::get('item/search', [ItemController::class, 'search'])->name('item.search');

    Route::resource('item', ItemController::class)->except(['create', 'show']);
});

Route::get('item/{item}', [ItemController::class, 'show'])->name('item.show');
