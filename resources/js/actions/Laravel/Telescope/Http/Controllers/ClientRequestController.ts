import { queryParams, type QueryParams } from './../../../../../wayfinder'

/**
* @see \Laravel\Telescope\Http\Controllers\ClientRequestController::index
* @see vendor/laravel/telescope/src/Http/Controllers/ClientRequestController.php:33
* @route '/telescope/telescope-api/client-requests'
*/
export const index = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: index.url(options),
    method: 'post',
})

index.definition = {
    methods: ['post'],
    url: '/telescope/telescope-api/client-requests',
}

/**
* @see \Laravel\Telescope\Http\Controllers\ClientRequestController::index
* @see vendor/laravel/telescope/src/Http/Controllers/ClientRequestController.php:33
* @route '/telescope/telescope-api/client-requests'
*/
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Laravel\Telescope\Http\Controllers\ClientRequestController::index
* @see vendor/laravel/telescope/src/Http/Controllers/ClientRequestController.php:33
* @route '/telescope/telescope-api/client-requests'
*/
index.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: index.url(options),
    method: 'post',
})

/**
* @see \Laravel\Telescope\Http\Controllers\ClientRequestController::show
* @see vendor/laravel/telescope/src/Http/Controllers/ClientRequestController.php:51
* @route '/telescope/telescope-api/client-requests/{telescopeEntryId}'
*/
export const show = (args: { telescopeEntryId: string | number } | [telescopeEntryId: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ['get','head'],
    url: '/telescope/telescope-api/client-requests/{telescopeEntryId}',
}

/**
* @see \Laravel\Telescope\Http\Controllers\ClientRequestController::show
* @see vendor/laravel/telescope/src/Http/Controllers/ClientRequestController.php:51
* @route '/telescope/telescope-api/client-requests/{telescopeEntryId}'
*/
show.url = (args: { telescopeEntryId: string | number } | [telescopeEntryId: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { telescopeEntryId: args }
    }

    if (Array.isArray(args)) {
        args = {
            telescopeEntryId: args[0],
        }
    }

    const parsedArgs = {
        telescopeEntryId: args.telescopeEntryId,
    }

    return show.definition.url
            .replace('{telescopeEntryId}', parsedArgs.telescopeEntryId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Laravel\Telescope\Http\Controllers\ClientRequestController::show
* @see vendor/laravel/telescope/src/Http/Controllers/ClientRequestController.php:51
* @route '/telescope/telescope-api/client-requests/{telescopeEntryId}'
*/
show.get = (args: { telescopeEntryId: string | number } | [telescopeEntryId: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Laravel\Telescope\Http\Controllers\ClientRequestController::show
* @see vendor/laravel/telescope/src/Http/Controllers/ClientRequestController.php:51
* @route '/telescope/telescope-api/client-requests/{telescopeEntryId}'
*/
show.head = (args: { telescopeEntryId: string | number } | [telescopeEntryId: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show.url(args, options),
    method: 'head',
})

const ClientRequestController = { index, show }

export default ClientRequestController