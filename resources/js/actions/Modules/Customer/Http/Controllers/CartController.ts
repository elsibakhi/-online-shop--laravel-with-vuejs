import { queryParams, type QueryParams } from './../../../../../wayfinder'

/**
* @see \Modules\Customer\Http\Controllers\CartController::load
* @see Modules/Customer/app/Http/Controllers/CartController.php:18
* @route '/cart/load'
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
    url: '/cart/load',
}

/**
* @see \Modules\Customer\Http\Controllers\CartController::load
* @see Modules/Customer/app/Http/Controllers/CartController.php:18
* @route '/cart/load'
*/
load.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return load.definition.url + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\CartController::load
* @see Modules/Customer/app/Http/Controllers/CartController.php:18
* @route '/cart/load'
*/
load.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: load.url(options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\CartController::load
* @see Modules/Customer/app/Http/Controllers/CartController.php:18
* @route '/cart/load'
*/
load.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: load.url(options),
    method: 'head',
})

/**
* @see \Modules\Customer\Http\Controllers\CartController::addOrUpdate
* @see Modules/Customer/app/Http/Controllers/CartController.php:30
* @route '/cart/addorupdate'
*/
export const addOrUpdate = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: addOrUpdate.url(options),
    method: 'post',
})

addOrUpdate.definition = {
    methods: ['post'],
    url: '/cart/addorupdate',
}

/**
* @see \Modules\Customer\Http\Controllers\CartController::addOrUpdate
* @see Modules/Customer/app/Http/Controllers/CartController.php:30
* @route '/cart/addorupdate'
*/
addOrUpdate.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return addOrUpdate.definition.url + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\CartController::addOrUpdate
* @see Modules/Customer/app/Http/Controllers/CartController.php:30
* @route '/cart/addorupdate'
*/
addOrUpdate.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: addOrUpdate.url(options),
    method: 'post',
})

/**
* @see \Modules\Customer\Http\Controllers\CartController::remove
* @see Modules/Customer/app/Http/Controllers/CartController.php:43
* @route '/cart/{item}'
*/
export const remove = (args: { item: string | number } | [item: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: remove.url(args, options),
    method: 'delete',
})

remove.definition = {
    methods: ['delete'],
    url: '/cart/{item}',
}

/**
* @see \Modules\Customer\Http\Controllers\CartController::remove
* @see Modules/Customer/app/Http/Controllers/CartController.php:43
* @route '/cart/{item}'
*/
remove.url = (args: { item: string | number } | [item: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return remove.definition.url
            .replace('{item}', parsedArgs.item.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\CartController::remove
* @see Modules/Customer/app/Http/Controllers/CartController.php:43
* @route '/cart/{item}'
*/
remove.delete = (args: { item: string | number } | [item: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: remove.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Customer\Http\Controllers\CartController::empty
* @see Modules/Customer/app/Http/Controllers/CartController.php:51
* @route '/cart'
*/
export const empty = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: empty.url(options),
    method: 'delete',
})

empty.definition = {
    methods: ['delete'],
    url: '/cart',
}

/**
* @see \Modules\Customer\Http\Controllers\CartController::empty
* @see Modules/Customer/app/Http/Controllers/CartController.php:51
* @route '/cart'
*/
empty.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return empty.definition.url + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\CartController::empty
* @see Modules/Customer/app/Http/Controllers/CartController.php:51
* @route '/cart'
*/
empty.delete = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: empty.url(options),
    method: 'delete',
})

const CartController = { load, addOrUpdate, remove, empty }

export default CartController