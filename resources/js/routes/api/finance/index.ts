import { queryParams, type QueryParams } from './../../../wayfinder'

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::index
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:13
* @route '/api/v1/finances'
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
    url: '/api/v1/finances',
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::index
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:13
* @route '/api/v1/finances'
*/
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::index
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:13
* @route '/api/v1/finances'
*/
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::index
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:13
* @route '/api/v1/finances'
*/
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::store
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:29
* @route '/api/v1/finances'
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
    url: '/api/v1/finances',
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::store
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:29
* @route '/api/v1/finances'
*/
store.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::store
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:29
* @route '/api/v1/finances'
*/
store.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::show
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:34
* @route '/api/v1/finances/{finance}'
*/
export const show = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ['get','head'],
    url: '/api/v1/finances/{finance}',
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::show
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:34
* @route '/api/v1/finances/{finance}'
*/
show.url = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { finance: args }
    }

    if (Array.isArray(args)) {
        args = {
            finance: args[0],
        }
    }

    const parsedArgs = {
        finance: args.finance,
    }

    return show.definition.url
            .replace('{finance}', parsedArgs.finance.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::show
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:34
* @route '/api/v1/finances/{finance}'
*/
show.get = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::show
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:34
* @route '/api/v1/finances/{finance}'
*/
show.head = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::update
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:50
* @route '/api/v1/finances/{finance}'
*/
export const update = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ['put','patch'],
    url: '/api/v1/finances/{finance}',
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::update
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:50
* @route '/api/v1/finances/{finance}'
*/
update.url = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { finance: args }
    }

    if (Array.isArray(args)) {
        args = {
            finance: args[0],
        }
    }

    const parsedArgs = {
        finance: args.finance,
    }

    return update.definition.url
            .replace('{finance}', parsedArgs.finance.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::update
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:50
* @route '/api/v1/finances/{finance}'
*/
update.put = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::update
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:50
* @route '/api/v1/finances/{finance}'
*/
update.patch = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::destroy
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:55
* @route '/api/v1/finances/{finance}'
*/
export const destroy = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ['delete'],
    url: '/api/v1/finances/{finance}',
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::destroy
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:55
* @route '/api/v1/finances/{finance}'
*/
destroy.url = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { finance: args }
    }

    if (Array.isArray(args)) {
        args = {
            finance: args[0],
        }
    }

    const parsedArgs = {
        finance: args.finance,
    }

    return destroy.definition.url
            .replace('{finance}', parsedArgs.finance.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::destroy
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:55
* @route '/api/v1/finances/{finance}'
*/
destroy.delete = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const finance = {
    index,
    store,
    show,
    update,
    destroy,
}

export default finance