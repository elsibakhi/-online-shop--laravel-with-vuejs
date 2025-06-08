import { queryParams, type QueryParams } from './../../../wayfinder'

/**
* @see \Modules\Customer\Http\Controllers\CustomerController::index
* @see Modules/Customer/app/Http/Controllers/CustomerController.php:18
* @route '/api/v1/customer'
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
    url: '/api/v1/customer',
}

/**
* @see \Modules\Customer\Http\Controllers\CustomerController::index
* @see Modules/Customer/app/Http/Controllers/CustomerController.php:18
* @route '/api/v1/customer'
*/
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\CustomerController::index
* @see Modules/Customer/app/Http/Controllers/CustomerController.php:18
* @route '/api/v1/customer'
*/
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerController::index
* @see Modules/Customer/app/Http/Controllers/CustomerController.php:18
* @route '/api/v1/customer'
*/
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerController::store
* @see Modules/Customer/app/Http/Controllers/CustomerController.php:35
* @route '/api/v1/customer'
*/
export const store = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ['post'],
    url: '/api/v1/customer',
}

/**
* @see \Modules\Customer\Http\Controllers\CustomerController::store
* @see Modules/Customer/app/Http/Controllers/CustomerController.php:35
* @route '/api/v1/customer'
*/
store.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\CustomerController::store
* @see Modules/Customer/app/Http/Controllers/CustomerController.php:35
* @route '/api/v1/customer'
*/
store.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerController::show
* @see Modules/Customer/app/Http/Controllers/CustomerController.php:40
* @route '/api/v1/customer/{customer}'
*/
export const show = (args: { customer: string | number } | [customer: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ['get','head'],
    url: '/api/v1/customer/{customer}',
}

/**
* @see \Modules\Customer\Http\Controllers\CustomerController::show
* @see Modules/Customer/app/Http/Controllers/CustomerController.php:40
* @route '/api/v1/customer/{customer}'
*/
show.url = (args: { customer: string | number } | [customer: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { customer: args }
    }

    if (Array.isArray(args)) {
        args = {
            customer: args[0],
        }
    }

    const parsedArgs = {
        customer: args.customer,
    }

    return show.definition.url
            .replace('{customer}', parsedArgs.customer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\CustomerController::show
* @see Modules/Customer/app/Http/Controllers/CustomerController.php:40
* @route '/api/v1/customer/{customer}'
*/
show.get = (args: { customer: string | number } | [customer: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerController::show
* @see Modules/Customer/app/Http/Controllers/CustomerController.php:40
* @route '/api/v1/customer/{customer}'
*/
show.head = (args: { customer: string | number } | [customer: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerController::update
* @see Modules/Customer/app/Http/Controllers/CustomerController.php:56
* @route '/api/v1/customer/{customer}'
*/
export const update = (args: { customer: string | number } | [customer: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ['put','patch'],
    url: '/api/v1/customer/{customer}',
}

/**
* @see \Modules\Customer\Http\Controllers\CustomerController::update
* @see Modules/Customer/app/Http/Controllers/CustomerController.php:56
* @route '/api/v1/customer/{customer}'
*/
update.url = (args: { customer: string | number } | [customer: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { customer: args }
    }

    if (Array.isArray(args)) {
        args = {
            customer: args[0],
        }
    }

    const parsedArgs = {
        customer: args.customer,
    }

    return update.definition.url
            .replace('{customer}', parsedArgs.customer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\CustomerController::update
* @see Modules/Customer/app/Http/Controllers/CustomerController.php:56
* @route '/api/v1/customer/{customer}'
*/
update.put = (args: { customer: string | number } | [customer: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerController::update
* @see Modules/Customer/app/Http/Controllers/CustomerController.php:56
* @route '/api/v1/customer/{customer}'
*/
update.patch = (args: { customer: string | number } | [customer: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerController::destroy
* @see Modules/Customer/app/Http/Controllers/CustomerController.php:61
* @route '/api/v1/customer/{customer}'
*/
export const destroy = (args: { customer: string | number } | [customer: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ['delete'],
    url: '/api/v1/customer/{customer}',
}

/**
* @see \Modules\Customer\Http\Controllers\CustomerController::destroy
* @see Modules/Customer/app/Http/Controllers/CustomerController.php:61
* @route '/api/v1/customer/{customer}'
*/
destroy.url = (args: { customer: string | number } | [customer: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { customer: args }
    }

    if (Array.isArray(args)) {
        args = {
            customer: args[0],
        }
    }

    const parsedArgs = {
        customer: args.customer,
    }

    return destroy.definition.url
            .replace('{customer}', parsedArgs.customer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\CustomerController::destroy
* @see Modules/Customer/app/Http/Controllers/CustomerController.php:61
* @route '/api/v1/customer/{customer}'
*/
destroy.delete = (args: { customer: string | number } | [customer: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const customer = {
    index,
    store,
    show,
    update,
    destroy,
}

export default customer