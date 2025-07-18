<?php

namespace App\Http\Middleware;

use App\Helpers\SideBarLoader;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {

        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
                'notifications' => $request->user()?->notifications,
                'unread_notifications_count' => $request->user()?->unreadNotifications()->count(),
            ],
            'csrf_token' => csrf_token(),
            'message' => session()->get('message'),
            'sidebar' => (new SideBarLoader)(),
            'customerConfig' => config('customer'),
        ];
    }
}
