import { queryParams, type QueryParams } from './../../../wayfinder'

/**
* @see \Modules\Vendor\Http\Controllers\ItemController::status
* @see Modules/Vendor/app/Http/Controllers/ItemController.php:141
* @route '/item/{id}/change-status'
*/
export const status = (args: { id: string | number } | [id: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: status.url(args, options),
    method: 'post',
})

status.definition = {
    methods: ['post'],
    url: '/item/{id}/change-status',
}

/**
* @see \Modules\Vendor\Http\Controllers\ItemController::status
* @see Modules/Vendor/app/Http/Controllers/ItemController.php:141
* @route '/item/{id}/change-status'
*/
status.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    const parsedArgs = {
        id: args.id,
    }

    return status.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\ItemController::status
* @see Modules/Vendor/app/Http/Controllers/ItemController.php:141
* @route '/item/{id}/change-status'
*/
status.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: status.url(args, options),
    method: 'post',
})

const change = {
    status,
}

export default change