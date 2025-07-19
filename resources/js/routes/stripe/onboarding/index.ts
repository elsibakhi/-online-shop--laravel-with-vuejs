import { queryParams, type QueryParams } from './../../../wayfinder'

/**
* @see \Modules\Finance\Http\Controllers\BalanceController::returnMethod
* @see Modules/Finance/app/Http/Controllers/BalanceController.php:140
* @route '/balance/stripe/onboarding/return'
*/
export const returnMethod = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: returnMethod.url(options),
    method: 'get',
})

returnMethod.definition = {
    methods: ['get','head'],
    url: '/balance/stripe/onboarding/return',
}

/**
* @see \Modules\Finance\Http\Controllers\BalanceController::returnMethod
* @see Modules/Finance/app/Http/Controllers/BalanceController.php:140
* @route '/balance/stripe/onboarding/return'
*/
returnMethod.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return returnMethod.definition.url + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\BalanceController::returnMethod
* @see Modules/Finance/app/Http/Controllers/BalanceController.php:140
* @route '/balance/stripe/onboarding/return'
*/
returnMethod.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: returnMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\Finance\Http\Controllers\BalanceController::returnMethod
* @see Modules/Finance/app/Http/Controllers/BalanceController.php:140
* @route '/balance/stripe/onboarding/return'
*/
returnMethod.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: returnMethod.url(options),
    method: 'head',
})

const onboarding = {
    return: returnMethod,
}

export default onboarding