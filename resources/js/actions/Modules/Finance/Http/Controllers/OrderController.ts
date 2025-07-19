import { queryParams, type QueryParams } from './../../../../../wayfinder'

/**
* @see \Modules\Finance\Http\Controllers\OrderController::buyNow
* @see Modules/Finance/app/Http/Controllers/OrderController.php:22
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
* @see Modules/Finance/app/Http/Controllers/OrderController.php:22
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
* @see Modules/Finance/app/Http/Controllers/OrderController.php:22
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
* @see Modules/Finance/app/Http/Controllers/OrderController.php:22
* @route '/order/buy-now/{item}'
*/
buyNow.head = (args: { item: string | number } | [item: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: buyNow.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Finance\Http\Controllers\OrderController::getStripeCheckoutPage
* @see Modules/Finance/app/Http/Controllers/OrderController.php:30
* @route '/order/stripe/checkout/page'
*/
export const getStripeCheckoutPage = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: getStripeCheckoutPage.url(options),
    method: 'get',
})

getStripeCheckoutPage.definition = {
    methods: ['get','head'],
    url: '/order/stripe/checkout/page',
}

/**
* @see \Modules\Finance\Http\Controllers\OrderController::getStripeCheckoutPage
* @see Modules/Finance/app/Http/Controllers/OrderController.php:30
* @route '/order/stripe/checkout/page'
*/
getStripeCheckoutPage.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return getStripeCheckoutPage.definition.url + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\OrderController::getStripeCheckoutPage
* @see Modules/Finance/app/Http/Controllers/OrderController.php:30
* @route '/order/stripe/checkout/page'
*/
getStripeCheckoutPage.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: getStripeCheckoutPage.url(options),
    method: 'get',
})

/**
* @see \Modules\Finance\Http\Controllers\OrderController::getStripeCheckoutPage
* @see Modules/Finance/app/Http/Controllers/OrderController.php:30
* @route '/order/stripe/checkout/page'
*/
getStripeCheckoutPage.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: getStripeCheckoutPage.url(options),
    method: 'head',
})

/**
* @see \Modules\Finance\Http\Controllers\OrderController::createCheckoutSession
* @see Modules/Finance/app/Http/Controllers/OrderController.php:39
* @route '/order/stripe/checkout/session'
*/
export const createCheckoutSession = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: createCheckoutSession.url(options),
    method: 'post',
})

createCheckoutSession.definition = {
    methods: ['post'],
    url: '/order/stripe/checkout/session',
}

/**
* @see \Modules\Finance\Http\Controllers\OrderController::createCheckoutSession
* @see Modules/Finance/app/Http/Controllers/OrderController.php:39
* @route '/order/stripe/checkout/session'
*/
createCheckoutSession.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return createCheckoutSession.definition.url + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\OrderController::createCheckoutSession
* @see Modules/Finance/app/Http/Controllers/OrderController.php:39
* @route '/order/stripe/checkout/session'
*/
createCheckoutSession.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: createCheckoutSession.url(options),
    method: 'post',
})

/**
* @see \Modules\Finance\Http\Controllers\OrderController::returnFromCheckoutSession
* @see Modules/Finance/app/Http/Controllers/OrderController.php:48
* @route '/order/stripe/checkout/return'
*/
export const returnFromCheckoutSession = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: returnFromCheckoutSession.url(options),
    method: 'get',
})

returnFromCheckoutSession.definition = {
    methods: ['get','head'],
    url: '/order/stripe/checkout/return',
}

/**
* @see \Modules\Finance\Http\Controllers\OrderController::returnFromCheckoutSession
* @see Modules/Finance/app/Http/Controllers/OrderController.php:48
* @route '/order/stripe/checkout/return'
*/
returnFromCheckoutSession.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return returnFromCheckoutSession.definition.url + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\OrderController::returnFromCheckoutSession
* @see Modules/Finance/app/Http/Controllers/OrderController.php:48
* @route '/order/stripe/checkout/return'
*/
returnFromCheckoutSession.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: returnFromCheckoutSession.url(options),
    method: 'get',
})

/**
* @see \Modules\Finance\Http\Controllers\OrderController::returnFromCheckoutSession
* @see Modules/Finance/app/Http/Controllers/OrderController.php:48
* @route '/order/stripe/checkout/return'
*/
returnFromCheckoutSession.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: returnFromCheckoutSession.url(options),
    method: 'head',
})

/**
* @see \Modules\Finance\Http\Controllers\OrderController::buyNowFromStripeCheckoutSuccess
* @see Modules/Finance/app/Http/Controllers/OrderController.php:59
* @route '/order/stripe/checkout/success'
*/
export const buyNowFromStripeCheckoutSuccess = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: buyNowFromStripeCheckoutSuccess.url(options),
    method: 'get',
})

buyNowFromStripeCheckoutSuccess.definition = {
    methods: ['get','head'],
    url: '/order/stripe/checkout/success',
}

/**
* @see \Modules\Finance\Http\Controllers\OrderController::buyNowFromStripeCheckoutSuccess
* @see Modules/Finance/app/Http/Controllers/OrderController.php:59
* @route '/order/stripe/checkout/success'
*/
buyNowFromStripeCheckoutSuccess.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return buyNowFromStripeCheckoutSuccess.definition.url + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\OrderController::buyNowFromStripeCheckoutSuccess
* @see Modules/Finance/app/Http/Controllers/OrderController.php:59
* @route '/order/stripe/checkout/success'
*/
buyNowFromStripeCheckoutSuccess.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: buyNowFromStripeCheckoutSuccess.url(options),
    method: 'get',
})

/**
* @see \Modules\Finance\Http\Controllers\OrderController::buyNowFromStripeCheckoutSuccess
* @see Modules/Finance/app/Http/Controllers/OrderController.php:59
* @route '/order/stripe/checkout/success'
*/
buyNowFromStripeCheckoutSuccess.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: buyNowFromStripeCheckoutSuccess.url(options),
    method: 'head',
})

/**
* @see \Modules\Finance\Http\Controllers\OrderController::buyNowFromStripeCheckoutCancel
* @see Modules/Finance/app/Http/Controllers/OrderController.php:69
* @route '/order/stripe/checkout/cancel'
*/
export const buyNowFromStripeCheckoutCancel = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: buyNowFromStripeCheckoutCancel.url(options),
    method: 'get',
})

buyNowFromStripeCheckoutCancel.definition = {
    methods: ['get','head'],
    url: '/order/stripe/checkout/cancel',
}

/**
* @see \Modules\Finance\Http\Controllers\OrderController::buyNowFromStripeCheckoutCancel
* @see Modules/Finance/app/Http/Controllers/OrderController.php:69
* @route '/order/stripe/checkout/cancel'
*/
buyNowFromStripeCheckoutCancel.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return buyNowFromStripeCheckoutCancel.definition.url + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\OrderController::buyNowFromStripeCheckoutCancel
* @see Modules/Finance/app/Http/Controllers/OrderController.php:69
* @route '/order/stripe/checkout/cancel'
*/
buyNowFromStripeCheckoutCancel.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: buyNowFromStripeCheckoutCancel.url(options),
    method: 'get',
})

/**
* @see \Modules\Finance\Http\Controllers\OrderController::buyNowFromStripeCheckoutCancel
* @see Modules/Finance/app/Http/Controllers/OrderController.php:69
* @route '/order/stripe/checkout/cancel'
*/
buyNowFromStripeCheckoutCancel.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: buyNowFromStripeCheckoutCancel.url(options),
    method: 'head',
})

/**
* @see \Modules\Finance\Http\Controllers\OrderController::buyNowFormBalance
* @see Modules/Finance/app/Http/Controllers/OrderController.php:79
* @route '/order/buy-now/from-balance'
*/
export const buyNowFormBalance = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: buyNowFormBalance.url(options),
    method: 'post',
})

buyNowFormBalance.definition = {
    methods: ['post'],
    url: '/order/buy-now/from-balance',
}

/**
* @see \Modules\Finance\Http\Controllers\OrderController::buyNowFormBalance
* @see Modules/Finance/app/Http/Controllers/OrderController.php:79
* @route '/order/buy-now/from-balance'
*/
buyNowFormBalance.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return buyNowFormBalance.definition.url + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\OrderController::buyNowFormBalance
* @see Modules/Finance/app/Http/Controllers/OrderController.php:79
* @route '/order/buy-now/from-balance'
*/
buyNowFormBalance.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: buyNowFormBalance.url(options),
    method: 'post',
})

/**
* @see \Modules\Finance\Http\Controllers\OrderController::CheckoutItemsCartFormBalance
* @see Modules/Finance/app/Http/Controllers/OrderController.php:97
* @route '/order/checkout/cart/from-balance'
*/
export const CheckoutItemsCartFormBalance = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: CheckoutItemsCartFormBalance.url(options),
    method: 'post',
})

CheckoutItemsCartFormBalance.definition = {
    methods: ['post'],
    url: '/order/checkout/cart/from-balance',
}

/**
* @see \Modules\Finance\Http\Controllers\OrderController::CheckoutItemsCartFormBalance
* @see Modules/Finance/app/Http/Controllers/OrderController.php:97
* @route '/order/checkout/cart/from-balance'
*/
CheckoutItemsCartFormBalance.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return CheckoutItemsCartFormBalance.definition.url + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\OrderController::CheckoutItemsCartFormBalance
* @see Modules/Finance/app/Http/Controllers/OrderController.php:97
* @route '/order/checkout/cart/from-balance'
*/
CheckoutItemsCartFormBalance.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: CheckoutItemsCartFormBalance.url(options),
    method: 'post',
})

const OrderController = { buyNow, getStripeCheckoutPage, createCheckoutSession, returnFromCheckoutSession, buyNowFromStripeCheckoutSuccess, buyNowFromStripeCheckoutCancel, buyNowFormBalance, CheckoutItemsCartFormBalance }

export default OrderController