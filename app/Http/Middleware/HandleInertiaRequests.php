<?php

namespace App\Http\Middleware;

use App\Helpers\SideBarLoader;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Modules\Admin\Models\Category;

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

       $shared =[
        ...parent::share($request),
     
        'csrf_token' => csrf_token(),
        'message' => session()->get('message'),
        
        
    ];

       if($request->user()) {
            $shared['auth'] = [
                'user' => $request->user(),
                'notifications' => $request->user()->notifications,
                'unread_notifications_count' => $request->user()->unreadNotifications()->count(),
            ];
            $shared['sidebar'] = (new SideBarLoader)();
            $shared['customerConfig'] = config('customer');

        } else {
            $shared['auth'] = [
                'user' => null,
                'notifications' => [],
                'unread_notifications_count' => 0,
            ];
            $shared['categories'] = Category::with('subcategories')->get();
        }

        return $shared;
    }
}
