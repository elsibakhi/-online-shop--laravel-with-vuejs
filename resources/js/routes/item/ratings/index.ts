import { queryParams, type QueryParams } from './../../../wayfinder'

/**
* @see \Modules\Customer\Http\Controllers\RatingController::list
* @see Modules/Customer/app/Http/Controllers/RatingController.php:45
* @route '/rating/list/{item}'
*/
export const list = (args: { item: string | number } | [item: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: list.url(args, options),
    method: 'get',
})

list.definition = {
    methods: ['get','head'],
    url: '/rating/list/{item}',
}

/**
* @see \Modules\Customer\Http\Controllers\RatingController::list
* @see Modules/Customer/app/Http/Controllers/RatingController.php:45
* @route '/rating/list/{item}'
*/
list.url = (args: { item: string | number } | [item: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return list.definition.url
            .replace('{item}', parsedArgs.item.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\RatingController::list
* @see Modules/Customer/app/Http/Controllers/RatingController.php:45
* @route '/rating/list/{item}'
*/
list.get = (args: { item: string | number } | [item: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: list.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\RatingController::list
* @see Modules/Customer/app/Http/Controllers/RatingController.php:45
* @route '/rating/list/{item}'
*/
list.head = (args: { item: string | number } | [item: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: list.url(args, options),
    method: 'head',
})

const ratings = {
    list,
}

export default ratings