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

const RatingController = { store }

export default RatingController