<?php

namespace App\Http\Controllers;

class NotificationController extends Controller
{
    //
    public function get()
    {

        $response = [
            'notifications' => auth()->user()->notifications()->paginate(30),
            'unread_notifications_count' => auth()->user()->unreadNotifications()->count(),
        ];

        return response($response);

    }
}
