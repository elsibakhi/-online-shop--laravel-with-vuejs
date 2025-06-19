import { queryParams, type QueryParams } from './../../../../../wayfinder'

/**
* @see \Modules\Customer\Http\Controllers\RatingController::store
* @see Modules/Customer/app/Http/Controllers/RatingController.php:33
* @route '/rate/{item}'
*/
export const store = (args: { item: string | number } | [item: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ['post'],
    url: '/rate/{item}',
}

/**
* @see \Modules\Customer\Http\Controllers\RatingController::store
* @see Modules/Customer/app/Http/Controllers/RatingController.php:33
* @route '/rate/{item}'
*/
store.url = (args: { item: string | number } | [item: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { item: args }
    }

    if (Array.isArray(args)) {
        args = {
            item: args[0],
        }
    }

    const parsedArgs = {
        item: args.item,
    }

    return store.definition.url
            .replace('{item}', parsedArgs.item.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\RatingController::store
* @see Modules/Customer/app/Http/Controllers/RatingController.php:33
* @route '/rate/{item}'
*/
store.post = (args: { item: string | number } | [item: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Customer\Http\Controllers\RatingController::load
* @see Modules/Customer/app/Http/Controllers/RatingController.php:45
* @route '/rating/list/{item}'
*/
export const load = (args: { item: string | number } | [item: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: load.url(args, options),
    method: 'get',
})

load.definition = {
    methods: ['get','head'],
    url: '/rating/list/{item}',
}

/**
* @see \Modules\Customer\Http\Controllers\RatingController::load
* @see Modules/Customer/app/Http/Controllers/RatingController.php:45
* @route '/rating/list/{item}'
*/
load.url = (args: { item: string | number } | [item: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { item: args }
    }

    if (Array.isArray(args)) {
        args = {
            item: args[0],
        }
    }

    const parsedArgs = {
        item: args.item,
    }

    return load.definition.url
            .replace('{item}', parsedArgs.item.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\RatingController::load
* @see Modules/Customer/app/Http/Controllers/RatingController.php:45
* @route '/rating/list/{item}'
*/
load.get = (args: { item: string | number } | [item: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: load.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\RatingController::load
* @see Modules/Customer/app/Http/Controllers/RatingController.php:45
* @route '/rating/list/{item}'
*/
load.head = (args: { item: string | number } | [item: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: load.url(args, options),
    method: 'head',
})

const RatingController = { store, load }

export default RatingController