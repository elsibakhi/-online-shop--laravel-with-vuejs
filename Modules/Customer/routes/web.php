<?php

use Illuminate\Foundation\Http\Middleware\HandlePrecognitiveRequests;
use Illuminate\Support\Facades\Route;
use Modules\Customer\Http\Controllers\CartController;
use Modules\Customer\Http\Controllers\CustomerController;
use Modules\Customer\Http\Controllers\PostController;
use Modules\Customer\Http\Controllers\RatingController;

Route::middleware(['auth', 'verified'])->group(function (): void {
    Route::get('post/timeline', [PostController::class, 'timeline'])->name('post.timeline');
    Route::get('post/load/{type?}', [PostController::class, 'load'])->name('post.load');
    Route::get('post/load/one/{post}', [PostController::class, 'loadPost'])->name('post.load.one');
    Route::post('post/like/{post}', [PostController::class, 'like'])->name('post.like');
    Route::post('post/unlike/{post}', [PostController::class, 'unlike'])->name('post.unlike');
    Route::resource('post', PostController::class)->only(['index', 'store', 'update', 'destroy', 'show']);

    // Rating
    Route::post('rate/{item}', [RatingController::class, 'store'])->middleware([HandlePrecognitiveRequests::class])->name('item.rate');
    Route::get('rating/list/{item}', [RatingController::class, 'load'])->name('item.ratings.list');

});

Route::get('/cart/load', [CartController::class, 'load'])->name('cart.load');
Route::post('/cart/addorupdate', [CartController::class, 'addOrUpdate'])->name('cart.addOrUpdate');
Route::delete('/cart/{item}', [CartController::class, 'remove'])->name('cart.remove');
Route::delete('/cart', [CartController::class, 'empty'])->name('cart.empty');

Route::middleware(['guest'])->group(function (): void {
    Route::get('/customer/load', [CustomerController::class, 'load'])->name('customer.load');
    Route::get('/', [CustomerController::class, 'index']);

});
