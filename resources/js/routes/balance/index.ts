import stripe from './stripe'
import { queryParams, type QueryParams } from './../../wayfinder'

/**
* @see \Modules\Finance\Http\Controllers\BalanceController::index
* @see Modules/Finance/app/Http/Controllers/BalanceController.php:21
* @route '/balance'
*/
export const index = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ['get','head'],
    url: '/balance',
}

/**
* @see \Modules\Finance\Http\Controllers\BalanceController::index
* @see Modules/Finance/app/Http/Controllers/BalanceController.php:21
* @route '/balance'
*/
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\BalanceController::index
* @see Modules/Finance/app/Http/Controllers/BalanceController.php:21
* @route '/balance'
*/
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Finance\Http\Controllers\BalanceController::index
* @see Modules/Finance/app/Http/Controllers/BalanceController.php:21
* @route '/balance'
*/
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})

const balance = {
    index,
    stripe,
}

export default balance