import { queryParams, type QueryParams } from './../../../wayfinder'

/**
* @see \Modules\Finance\Http\Controllers\OrderController::fromBalance
* @see Modules/Finance/app/Http/Controllers/OrderController.php:57
* @route '/order/buy-now/from-balance'
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
    url: '/order/buy-now/from-balance',
}

/**
* @see \Modules\Finance\Http\Controllers\OrderController::fromBalance
* @see Modules/Finance/app/Http/Controllers/OrderController.php:57
* @route '/order/buy-now/from-balance'
*/
fromBalance.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return fromBalance.definition.url + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\OrderController::fromBalance
* @see Modules/Finance/app/Http/Controllers/OrderController.php:57
* @route '/order/buy-now/from-balance'
*/
fromBalance.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: fromBalance.url(options),
    method: 'post',
})

const buyNow = {
    fromBalance,
}

export default buyNow