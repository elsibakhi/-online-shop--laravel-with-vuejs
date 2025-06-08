import { queryParams, type QueryParams } from './../../../../wayfinder'

/**
* @see \Modules\Finance\Http\Controllers\OrderController::fromBalance
* @see Modules/Finance/app/Http/Controllers/OrderController.php:75
* @route '/order/checkout/cart/from-balance'
*/
export const fromBalance = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: fromBalance.url(options),
    method: 'post',
})

fromBalance.definition = {
    methods: ['post'],
    url: '/order/checkout/cart/from-balance',
}

/**
* @see \Modules\Finance\Http\Controllers\OrderController::fromBalance
* @see Modules/Finance/app/Http/Controllers/OrderController.php:75
* @route '/order/checkout/cart/from-balance'
*/
fromBalance.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return fromBalance.definition.url + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\OrderController::fromBalance
* @see Modules/Finance/app/Http/Controllers/OrderController.php:75
* @route '/order/checkout/cart/from-balance'
*/
fromBalance.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: fromBalance.url(options),
    method: 'post',
})

const cart = {
    fromBalance,
}

export default cart