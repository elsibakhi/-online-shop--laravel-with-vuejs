<?php

use App\Models\User;
use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});

Broadcast::channel('Auction.{auctionId}', function (User $user, int $auctionId) {

    if ($user->canJoinAuction($auctionId)) {

        return $user;

    }

});