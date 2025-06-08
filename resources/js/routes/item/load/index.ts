import { queryParams, type QueryParams } from './../../../wayfinder'

/**
* @see \Modules\Vendor\Http\Controllers\ItemController::all
* @see Modules/Vendor/app/Http/Controllers/ItemController.php:56
* @route '/item/load/all'
*/
export const all = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: all.url(options),
    method: 'get',
})

all.definition = {
    methods: ['get','head'],
    url: '/item/load/all',
}

/**
* @see \Modules\Vendor\Http\Controllers\ItemController::all
* @see Modules/Vendor/app/Http/Controllers/ItemController.php:56
* @route '/item/load/all'
*/
all.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return all.definition.url + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\ItemController::all
* @see Modules/Vendor/app/Http/Controllers/ItemController.php:56
* @route '/item/load/all'
*/
all.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: all.url(options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\ItemController::all
* @see Modules/Vendor/app/Http/Controllers/ItemController.php:56
* @route '/item/load/all'
*/
all.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: all.url(options),
    method: 'head',
})

const load = {
    all,
}

export default load