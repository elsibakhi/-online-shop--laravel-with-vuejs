import { queryParams, type QueryParams } from './../../wayfinder'

/**
* @see \Modules\Customer\Http\Controllers\CustomerController::load
* @see Modules/Customer/app/Http/Controllers/CustomerController.php:27
* @route '/customer/load'
*/
export const load = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: load.url(options),
    method: 'get',
})

load.definition = {
    methods: ['get','head'],
    url: '/customer/load',
}

/**
* @see \Modules\Customer\Http\Controllers\CustomerController::load
* @see Modules/Customer/app/Http/Controllers/CustomerController.php:27
* @route '/customer/load'
*/
load.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return load.definition.url + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\CustomerController::load
* @see Modules/Customer/app/Http/Controllers/CustomerController.php:27
* @route '/customer/load'
*/
load.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: load.url(options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerController::load
* @see Modules/Customer/app/Http/Controllers/CustomerController.php:27
* @route '/customer/load'
*/
load.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: load.url(options),
    method: 'head',
})

const customer = {
    load,
}

export default customer