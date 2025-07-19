import { queryParams, type QueryParams } from './../../../../../wayfinder'

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

/**
* @see \Modules\Finance\Http\Controllers\BalanceController::getStripeCheckoutPage
* @see Modules/Finance/app/Http/Controllers/BalanceController.php:34
* @route '/balance/stripe/checkout/page'
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
    url: '/balance/stripe/checkout/page',
}

/**
* @see \Modules\Finance\Http\Controllers\BalanceController::getStripeCheckoutPage
* @see Modules/Finance/app/Http/Controllers/BalanceController.php:34
* @route '/balance/stripe/checkout/page'
*/
getStripeCheckoutPage.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return getStripeCheckoutPage.definition.url + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\BalanceController::getStripeCheckoutPage
* @see Modules/Finance/app/Http/Controllers/BalanceController.php:34
* @route '/balance/stripe/checkout/page'
*/
getStripeCheckoutPage.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: getStripeCheckoutPage.url(options),
    method: 'get',
})

/**
* @see \Modules\Finance\Http\Controllers\BalanceController::getStripeCheckoutPage
* @see Modules/Finance/app/Http/Controllers/BalanceController.php:34
* @route '/balance/stripe/checkout/page'
*/
getStripeCheckoutPage.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: getStripeCheckoutPage.url(options),
    method: 'head',
})

/**
* @see \Modules\Finance\Http\Controllers\BalanceController::createCheckoutSession
* @see Modules/Finance/app/Http/Controllers/BalanceController.php:43
* @route '/balance/stripe/checkout/session'
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
    url: '/balance/stripe/checkout/session',
}

/**
* @see \Modules\Finance\Http\Controllers\BalanceController::createCheckoutSession
* @see Modules/Finance/app/Http/Controllers/BalanceController.php:43
* @route '/balance/stripe/checkout/session'
*/
createCheckoutSession.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return createCheckoutSession.definition.url + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\BalanceController::createCheckoutSession
* @see Modules/Finance/app/Http/Controllers/BalanceController.php:43
* @route '/balance/stripe/checkout/session'
*/
createCheckoutSession.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: createCheckoutSession.url(options),
    method: 'post',
})

/**
* @see \Modules\Finance\Http\Controllers\BalanceController::returnFromCheckoutSession
* @see Modules/Finance/app/Http/Controllers/BalanceController.php:52
* @route '/balance/stripe/checkout/return'
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
    url: '/balance/stripe/checkout/return',
}

/**
* @see \Modules\Finance\Http\Controllers\BalanceController::returnFromCheckoutSession
* @see Modules/Finance/app/Http/Controllers/BalanceController.php:52
* @route '/balance/stripe/checkout/return'
*/
returnFromCheckoutSession.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return returnFromCheckoutSession.definition.url + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\BalanceController::returnFromCheckoutSession
* @see Modules/Finance/app/Http/Controllers/BalanceController.php:52
* @route '/balance/stripe/checkout/return'
*/
returnFromCheckoutSession.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: returnFromCheckoutSession.url(options),
    method: 'get',
})

/**
* @see \Modules\Finance\Http\Controllers\BalanceController::returnFromCheckoutSession
* @see Modules/Finance/app/Http/Controllers/BalanceController.php:52
* @route '/balance/stripe/checkout/return'
*/
returnFromCheckoutSession.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: returnFromCheckoutSession.url(options),
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

/**
* @see \Modules\Finance\Http\Controllers\BalanceController::goToOnboardingLink
* @see Modules/Finance/app/Http/Controllers/BalanceController.php:120
* @route '/balance/stripe/onboarding/link'
*/
export const goToOnboardingLink = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: goToOnboardingLink.url(options),
    method: 'get',
})

goToOnboardingLink.definition = {
    methods: ['get','head'],
    url: '/balance/stripe/onboarding/link',
}

/**
* @see \Modules\Finance\Http\Controllers\BalanceController::goToOnboardingLink
* @see Modules/Finance/app/Http/Controllers/BalanceController.php:120
* @route '/balance/stripe/onboarding/link'
*/
goToOnboardingLink.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return goToOnboardingLink.definition.url + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\BalanceController::goToOnboardingLink
* @see Modules/Finance/app/Http/Controllers/BalanceController.php:120
* @route '/balance/stripe/onboarding/link'
*/
goToOnboardingLink.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: goToOnboardingLink.url(options),
    method: 'get',
})

/**
* @see \Modules\Finance\Http\Controllers\BalanceController::goToOnboardingLink
* @see Modules/Finance/app/Http/Controllers/BalanceController.php:120
* @route '/balance/stripe/onboarding/link'
*/
goToOnboardingLink.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: goToOnboardingLink.url(options),
    method: 'head',
})

/**
* @see \Modules\Finance\Http\Controllers\BalanceController::returnFromOnboarding
* @see Modules/Finance/app/Http/Controllers/BalanceController.php:140
* @route '/balance/stripe/onboarding/return'
*/
export const returnFromOnboarding = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: returnFromOnboarding.url(options),
    method: 'get',
})

returnFromOnboarding.definition = {
    methods: ['get','head'],
    url: '/balance/stripe/onboarding/return',
}

/**
* @see \Modules\Finance\Http\Controllers\BalanceController::returnFromOnboarding
* @see Modules/Finance/app/Http/Controllers/BalanceController.php:140
* @route '/balance/stripe/onboarding/return'
*/
returnFromOnboarding.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return returnFromOnboarding.definition.url + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\BalanceController::returnFromOnboarding
* @see Modules/Finance/app/Http/Controllers/BalanceController.php:140
* @route '/balance/stripe/onboarding/return'
*/
returnFromOnboarding.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: returnFromOnboarding.url(options),
    method: 'get',
})

/**
* @see \Modules\Finance\Http\Controllers\BalanceController::returnFromOnboarding
* @see Modules/Finance/app/Http/Controllers/BalanceController.php:140
* @route '/balance/stripe/onboarding/return'
*/
returnFromOnboarding.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: returnFromOnboarding.url(options),
    method: 'head',
})

const BalanceController = { index, getStripeCheckoutPage, createCheckoutSession, returnFromCheckoutSession, withdrawal, goToOnboardingLink, returnFromOnboarding }

export default BalanceController