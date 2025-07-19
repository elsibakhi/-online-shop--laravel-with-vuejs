import onboarding from './onboarding'
import { queryParams, type QueryParams } from './../../wayfinder'

/**
* @see \Modules\Finance\Http\Controllers\BalanceController::onboardingLink
* @see Modules/Finance/app/Http/Controllers/BalanceController.php:120
* @route '/balance/stripe/onboarding/link'
*/
export const onboardingLink = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: onboardingLink.url(options),
    method: 'get',
})

onboardingLink.definition = {
    methods: ['get','head'],
    url: '/balance/stripe/onboarding/link',
}

/**
* @see \Modules\Finance\Http\Controllers\BalanceController::onboardingLink
* @see Modules/Finance/app/Http/Controllers/BalanceController.php:120
* @route '/balance/stripe/onboarding/link'
*/
onboardingLink.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return onboardingLink.definition.url + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\BalanceController::onboardingLink
* @see Modules/Finance/app/Http/Controllers/BalanceController.php:120
* @route '/balance/stripe/onboarding/link'
*/
onboardingLink.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: onboardingLink.url(options),
    method: 'get',
})

/**
* @see \Modules\Finance\Http\Controllers\BalanceController::onboardingLink
* @see Modules/Finance/app/Http/Controllers/BalanceController.php:120
* @route '/balance/stripe/onboarding/link'
*/
onboardingLink.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: onboardingLink.url(options),
    method: 'head',
})

const stripe = {
    onboardingLink,
    onboarding,
}

export default stripe