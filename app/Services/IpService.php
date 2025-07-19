<?php

namespace App\Services;

use Exception;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class IpService
{
    public static function getUserLocation($ip = null)
    {
        $ip = $ip ?: request()->ip(); // Get user?s IP or use provided IP

        // Check if the data is cached
        $cacheKey = 'user_location_'.Str::slug($ip);
        if (Cache::has($cacheKey)) {
            return Cache::get($cacheKey);
        }
        try {

            $response = Http::get("http://ip-api.com/json/{$ip}?fields=countryCode,timezone,currency,lat,lon,city");
        } catch (Exception $exception) {
            return self::fallbackAction($ip);
        }
        if ($response->successful()) {

            $data = $response->json();
            if (! $data) {
                return self::fallbackAction($ip);
            }

            $data['lng'] = $data['lon'] ?? null; // Use 'lon' as 'lng' for consistency

            Cache::put($cacheKey, $data, now()->addHours(24)); // Cache for 24 hours

            return $data;
        }

        // Log the error if the request fails

        return self::fallbackAction($ip);
    }

    private static function fallbackAction($ip)
    {
        Log::error("Failed to fetch location for IP: {$ip}");

        return [
            'countryCode' => 'US',
            'timezone' => 'America/New_York',
            'currency' => 'USD',
            'lat' => null,
            'lng' => null,
            'city' => 'New York',
        ];
    }
}
