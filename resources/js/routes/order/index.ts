import buyNow from './buy-now'
import stripe from './stripe'
import checkout from './checkout'
import { queryParams, type QueryParams } from './../../wayfinder'

/**
* @see \Modules\Finance\Http\Controllers\OrderController::buyNow
* @see Modules/Finance/app/Http/Controllers/OrderController.php:20
* @route '/order/buy-now/{item}'
*/
export const buyNow = (args: { item: string | number } | [item: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: buyNow.url(args, options),
    method: 'get',
})

buyNow.definition = {
    methods: ['get','head'],
    url: '/order/buy-now/{item}',
}

/**
* @see \Modules\Finance\Http\Controllers\OrderController::buyNow
* @see Modules/Finance/app/Http/Controllers/OrderController.php:20
* @route '/order/buy-now/{item}'
*/
buyNow.url = (args: { item: string | number } | [item: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return buyNow.definition.url
            .replace('{item}', parsedArgs.item.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\OrderController::buyNow
* @see Modules/Finance/app/Http/Controllers/OrderController.php:20
* @route '/order/buy-now/{item}'
*/
buyNow.get = (args: { item: string | number } | [item: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: buyNow.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Finance\Http\Controllers\OrderController::buyNow
* @see Modules/Finance/app/Http/Controllers/OrderController.php:20
* @route '/order/buy-now/{item}'
*/
buyNow.head = (args: { item: string | number } | [item: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: buyNow.url(args, options),
    method: 'head',
})

const order = {
    buyNow,
    stripe,
    checkout,
}

export default order