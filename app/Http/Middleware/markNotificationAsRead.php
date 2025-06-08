<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class markNotificationAsRead
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if ($notification_id = $request->query('notification')) {
            if ($user = auth()->user()) {
                $user->notifications()->find($notification_id)?->markAsRead();
            }
        }

        return $next($request);
    }
}
