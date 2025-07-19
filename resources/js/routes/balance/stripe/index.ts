import { queryParams, type QueryParams } from './../../../wayfinder'

/**
* @see \Modules\Finance\Http\Controllers\BalanceController::checkoutPage
* @see Modules/Finance/app/Http/Controllers/BalanceController.php:34
* @route '/balance/stripe/checkout/page'
*/
export const checkoutPage = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: checkoutPage.url(options),
    method: 'get',
})

checkoutPage.definition = {
    methods: ['get','head'],
    url: '/balance/stripe/checkout/page',
}

/**
* @see \Modules\Finance\Http\Controllers\BalanceController::checkoutPage
* @see Modules/Finance/app/Http/Controllers/BalanceController.php:34
* @route '/balance/stripe/checkout/page'
*/
checkoutPage.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return checkoutPage.definition.url + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\BalanceController::checkoutPage
* @see Modules/Finance/app/Http/Controllers/BalanceController.php:34
* @route '/balance/stripe/checkout/page'
*/
checkoutPage.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: checkoutPage.url(options),
    method: 'get',
})

/**
* @see \Modules\Finance\Http\Controllers\BalanceController::checkoutPage
* @see Modules/Finance/app/Http/Controllers/BalanceController.php:34
* @route '/balance/stripe/checkout/page'
*/
checkoutPage.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: checkoutPage.url(options),
    method: 'head',
})

/**
* @see \Modules\Finance\Http\Controllers\BalanceController::checkoutSession
* @see Modules/Finance/app/Http/Controllers/BalanceController.php:43
* @route '/balance/stripe/checkout/session'
*/
export const checkoutSession = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: checkoutSession.url(options),
    method: 'post',
})

checkoutSession.definition = {
    methods: ['post'],
    url: '/balance/stripe/checkout/session',
}

/**
* @see \Modules\Finance\Http\Controllers\BalanceController::checkoutSession
* @see Modules/Finance/app/Http/Controllers/BalanceController.php:43
* @route '/balance/stripe/checkout/session'
*/
checkoutSession.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return checkoutSession.definition.url + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\BalanceController::checkoutSession
* @see Modules/Finance/app/Http/Controllers/BalanceController.php:43
* @route '/balance/stripe/checkout/session'
*/
checkoutSession.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: checkoutSession.url(options),
    method: 'post',
})

/**
* @see \Modules\Finance\Http\Controllers\BalanceController::checkoutReturn
* @see Modules/Finance/app/Http/Controllers/BalanceController.php:52
* @route '/balance/stripe/checkout/return'
*/
export const checkoutReturn = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: checkoutReturn.url(options),
    method: 'get',
})

checkoutReturn.definition = {
    methods: ['get','head'],
    url: '/balance/stripe/checkout/return',
}

/**
* @see \Modules\Finance\Http\Controllers\BalanceController::checkoutReturn
* @see Modules/Finance/app/Http/Controllers/BalanceController.php:52
* @route '/balance/stripe/checkout/return'
*/
checkoutReturn.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return checkoutReturn.definition.url + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\BalanceController::checkoutReturn
* @see Modules/Finance/app/Http/Controllers/BalanceController.php:52
* @route '/balance/stripe/checkout/return'
*/
checkoutReturn.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: checkoutReturn.url(options),
    method: 'get',
})

/**
* @see \Modules\Finance\Http\Controllers\BalanceController::checkoutReturn
* @see Modules/Finance/app/Http/Controllers/BalanceController.php:52
* @route '/balance/stripe/checkout/return'
*/
checkoutReturn.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: checkoutReturn.url(options),
    method: 'head',
})

/**
* @see \Modules\Finance\Http\Controllers\BalanceController::withdrawal
* @see Modules/Finance/app/Http/Controllers/BalanceController.php:66
* @route '/balance/stripe/withdrawal'
*/
export const withdrawal = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: withdrawal.url(options),
    method: 'post',
})

withdrawal.definition = {
    methods: ['post'],
    url: '/balance/stripe/withdrawal',
}

/**
* @see \Modules\Finance\Http\Controllers\BalanceController::withdrawal
* @see Modules/Finance/app/Http/Controllers/BalanceController.php:66
* @route '/balance/stripe/withdrawal'
*/
withdrawal.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return withdrawal.definition.url + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\BalanceController::withdrawal
* @see Modules/Finance/app/Http/Controllers/BalanceController.php:66
* @route '/balance/stripe/withdrawal'
*/
withdrawal.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: withdrawal.url(options),
    method: 'post',
})

const stripe = {
    checkoutPage,
    checkoutSession,
    checkoutReturn,
    withdrawal,
}

export default stripe