import { queryParams, type QueryParams } from './../../../../../wayfinder'

/**
* @see \Modules\Finance\Http\Controllers\OrderController::getBalance
* @see Modules/Finance/app/Http/Controllers/OrderController.php:89
* @route '/balance'
*/
export const getBalance = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: getBalance.url(options),
    method: 'get',
})

getBalance.definition = {
    methods: ['get','head'],
    url: '/balance',
}

/**
* @see \Modules\Finance\Http\Controllers\OrderController::getBalance
* @see Modules/Finance/app/Http/Controllers/OrderController.php:89
* @route '/balance'
*/
getBalance.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return getBalance.definition.url + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\OrderController::getBalance
* @see Modules/Finance/app/Http/Controllers/OrderController.php:89
* @route '/balance'
*/
getBalance.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: getBalance.url(options),
    method: 'get',
})

/**
* @see \Modules\Finance\Http\Controllers\OrderController::getBalance
* @see Modules/Finance/app/Http/Controllers/OrderController.php:89
* @route '/balance'
*/
getBalance.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: getBalance.url(options),
    method: 'head',
})

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

/**
* @see \Modules\Finance\Http\Controllers\OrderController::buyNowFromStripeCheckoutPage
* @see Modules/Finance/app/Http/Controllers/OrderController.php:28
* @route '/order/stripe/checkout/page'
*/
export const buyNowFromStripeCheckoutPage = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: buyNowFromStripeCheckoutPage.url(options),
    method: 'get',
})

buyNowFromStripeCheckoutPage.definition = {
    methods: ['get','head'],
    url: '/order/stripe/checkout/page',
}

/**
* @see \Modules\Finance\Http\Controllers\OrderController::buyNowFromStripeCheckoutPage
* @see Modules/Finance/app/Http/Controllers/OrderController.php:28
* @route '/order/stripe/checkout/page'
*/
buyNowFromStripeCheckoutPage.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return buyNowFromStripeCheckoutPage.definition.url + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\OrderController::buyNowFromStripeCheckoutPage
* @see Modules/Finance/app/Http/Controllers/OrderController.php:28
* @route '/order/stripe/checkout/page'
*/
buyNowFromStripeCheckoutPage.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: buyNowFromStripeCheckoutPage.url(options),
    method: 'get',
})

/**
* @see \Modules\Finance\Http\Controllers\OrderController::buyNowFromStripeCheckoutPage
* @see Modules/Finance/app/Http/Controllers/OrderController.php:28
* @route '/order/stripe/checkout/page'
*/
buyNowFromStripeCheckoutPage.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: buyNowFromStripeCheckoutPage.url(options),
    method: 'head',
})

/**
* @see \Modules\Finance\Http\Controllers\OrderController::buyNowFromStripeCheckoutSuccess
* @see Modules/Finance/app/Http/Controllers/OrderController.php:37
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
* @see Modules/Finance/app/Http/Controllers/OrderController.php:37
* @route '/order/stripe/checkout/success'
*/
buyNowFromStripeCheckoutSuccess.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return buyNowFromStripeCheckoutSuccess.definition.url + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\OrderController::buyNowFromStripeCheckoutSuccess
* @see Modules/Finance/app/Http/Controllers/OrderController.php:37
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
* @see Modules/Finance/app/Http/Controllers/OrderController.php:37
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
* @see Modules/Finance/app/Http/Controllers/OrderController.php:47
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
* @see Modules/Finance/app/Http/Controllers/OrderController.php:47
* @route '/order/stripe/checkout/cancel'
*/
buyNowFromStripeCheckoutCancel.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return buyNowFromStripeCheckoutCancel.definition.url + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\OrderController::buyNowFromStripeCheckoutCancel
* @see Modules/Finance/app/Http/Controllers/OrderController.php:47
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
* @see Modules/Finance/app/Http/Controllers/OrderController.php:47
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
* @see Modules/Finance/app/Http/Controllers/OrderController.php:57
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
* @see Modules/Finance/app/Http/Controllers/OrderController.php:57
* @route '/order/buy-now/from-balance'
*/
buyNowFormBalance.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return buyNowFormBalance.definition.url + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\OrderController::buyNowFormBalance
* @see Modules/Finance/app/Http/Controllers/OrderController.php:57
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
* @see Modules/Finance/app/Http/Controllers/OrderController.php:75
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
* @see Modules/Finance/app/Http/Controllers/OrderController.php:75
* @route '/order/checkout/cart/from-balance'
*/
CheckoutItemsCartFormBalance.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return CheckoutItemsCartFormBalance.definition.url + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\OrderController::CheckoutItemsCartFormBalance
* @see Modules/Finance/app/Http/Controllers/OrderController.php:75
* @route '/order/checkout/cart/from-balance'
*/
CheckoutItemsCartFormBalance.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: CheckoutItemsCartFormBalance.url(options),
    method: 'post',
})

const OrderController = { getBalance, buyNow, buyNowFromStripeCheckoutPage, buyNowFromStripeCheckoutSuccess, buyNowFromStripeCheckoutCancel, buyNowFormBalance, CheckoutItemsCartFormBalance }

export default OrderController