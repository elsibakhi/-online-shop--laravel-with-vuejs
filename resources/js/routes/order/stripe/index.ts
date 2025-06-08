import { queryParams, type QueryParams } from './../../../wayfinder'

/**
* @see \Modules\Finance\Http\Controllers\OrderController::checkoutPage
* @see Modules/Finance/app/Http/Controllers/OrderController.php:28
* @route '/order/stripe/checkout/page'
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
    url: '/order/stripe/checkout/page',
}

/**
* @see \Modules\Finance\Http\Controllers\OrderController::checkoutPage
* @see Modules/Finance/app/Http/Controllers/OrderController.php:28
* @route '/order/stripe/checkout/page'
*/
checkoutPage.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return checkoutPage.definition.url + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\OrderController::checkoutPage
* @see Modules/Finance/app/Http/Controllers/OrderController.php:28
* @route '/order/stripe/checkout/page'
*/
checkoutPage.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: checkoutPage.url(options),
    method: 'get',
})

/**
* @see \Modules\Finance\Http\Controllers\OrderController::checkoutPage
* @see Modules/Finance/app/Http/Controllers/OrderController.php:28
* @route '/order/stripe/checkout/page'
*/
checkoutPage.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: checkoutPage.url(options),
    method: 'head',
})

/**
* @see \Modules\Finance\Http\Controllers\OrderController::checkoutSuccess
* @see Modules/Finance/app/Http/Controllers/OrderController.php:37
* @route '/order/stripe/checkout/success'
*/
export const checkoutSuccess = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: checkoutSuccess.url(options),
    method: 'get',
})

checkoutSuccess.definition = {
    methods: ['get','head'],
    url: '/order/stripe/checkout/success',
}

/**
* @see \Modules\Finance\Http\Controllers\OrderController::checkoutSuccess
* @see Modules/Finance/app/Http/Controllers/OrderController.php:37
* @route '/order/stripe/checkout/success'
*/
checkoutSuccess.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return checkoutSuccess.definition.url + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\OrderController::checkoutSuccess
* @see Modules/Finance/app/Http/Controllers/OrderController.php:37
* @route '/order/stripe/checkout/success'
*/
checkoutSuccess.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: checkoutSuccess.url(options),
    method: 'get',
})

/**
* @see \Modules\Finance\Http\Controllers\OrderController::checkoutSuccess
* @see Modules/Finance/app/Http/Controllers/OrderController.php:37
* @route '/order/stripe/checkout/success'
*/
checkoutSuccess.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: checkoutSuccess.url(options),
    method: 'head',
})

/**
* @see \Modules\Finance\Http\Controllers\OrderController::checkoutCancel
* @see Modules/Finance/app/Http/Controllers/OrderController.php:47
* @route '/order/stripe/checkout/cancel'
*/
export const checkoutCancel = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: checkoutCancel.url(options),
    method: 'get',
})

checkoutCancel.definition = {
    methods: ['get','head'],
    url: '/order/stripe/checkout/cancel',
}

/**
* @see \Modules\Finance\Http\Controllers\OrderController::checkoutCancel
* @see Modules/Finance/app/Http/Controllers/OrderController.php:47
* @route '/order/stripe/checkout/cancel'
*/
checkoutCancel.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return checkoutCancel.definition.url + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\OrderController::checkoutCancel
* @see Modules/Finance/app/Http/Controllers/OrderController.php:47
* @route '/order/stripe/checkout/cancel'
*/
checkoutCancel.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: checkoutCancel.url(options),
    method: 'get',
})

/**
* @see \Modules\Finance\Http\Controllers\OrderController::checkoutCancel
* @see Modules/Finance/app/Http/Controllers/OrderController.php:47
* @route '/order/stripe/checkout/cancel'
*/
checkoutCancel.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: checkoutCancel.url(options),
    method: 'head',
})

const stripe = {
    checkoutPage,
    checkoutSuccess,
    checkoutCancel,
}

export default stripe