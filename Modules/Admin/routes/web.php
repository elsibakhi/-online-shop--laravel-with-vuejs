<?php

use Illuminate\Support\Facades\Route;
use Modules\Admin\Http\Controllers\AdminController;
use Modules\Admin\Http\Controllers\CategoryController;
use Modules\Admin\Http\Controllers\SubCategoryController;
use Modules\Admin\Http\Controllers\TagController;

Route::middleware(['auth', 'verified'])->group(function (): void {
    Route::resource('admin', AdminController::class)->names('admin');
    Route::resource('category', CategoryController::class);
    Route::post('tag/multi/store', [TagController::class, 'storeMany'])->name('tag.store.multi');
    Route::delete('tag/multi/delete', [TagController::class, 'destroyMany'])->name('tag.delete.multi');
    Route::resource('tag', TagController::class);
    Route::resource('subcategory', SubCategoryController::class);
});
