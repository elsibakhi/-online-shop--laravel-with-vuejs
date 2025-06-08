import { queryParams, type QueryParams } from './../../../../../wayfinder'

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::index
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:13
* @route '/api/v1/finances'
*/
const index6e428e6a315252f28cfdf7c4ca9d2c31 = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index6e428e6a315252f28cfdf7c4ca9d2c31.url(options),
    method: 'get',
})

index6e428e6a315252f28cfdf7c4ca9d2c31.definition = {
    methods: ['get','head'],
    url: '/api/v1/finances',
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::index
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:13
* @route '/api/v1/finances'
*/
index6e428e6a315252f28cfdf7c4ca9d2c31.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index6e428e6a315252f28cfdf7c4ca9d2c31.definition.url + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::index
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:13
* @route '/api/v1/finances'
*/
index6e428e6a315252f28cfdf7c4ca9d2c31.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index6e428e6a315252f28cfdf7c4ca9d2c31.url(options),
    method: 'get',
})

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::index
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:13
* @route '/api/v1/finances'
*/
index6e428e6a315252f28cfdf7c4ca9d2c31.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index6e428e6a315252f28cfdf7c4ca9d2c31.url(options),
    method: 'head',
})

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::index
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:13
* @route '/finances'
*/
const indexf0841a7f0d92f195d3eedca750e02010 = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: indexf0841a7f0d92f195d3eedca750e02010.url(options),
    method: 'get',
})

indexf0841a7f0d92f195d3eedca750e02010.definition = {
    methods: ['get','head'],
    url: '/finances',
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::index
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:13
* @route '/finances'
*/
indexf0841a7f0d92f195d3eedca750e02010.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return indexf0841a7f0d92f195d3eedca750e02010.definition.url + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::index
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:13
* @route '/finances'
*/
indexf0841a7f0d92f195d3eedca750e02010.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: indexf0841a7f0d92f195d3eedca750e02010.url(options),
    method: 'get',
})

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::index
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:13
* @route '/finances'
*/
indexf0841a7f0d92f195d3eedca750e02010.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: indexf0841a7f0d92f195d3eedca750e02010.url(options),
    method: 'head',
})

export const index = {
    '/api/v1/finances': index6e428e6a315252f28cfdf7c4ca9d2c31,
    '/finances': indexf0841a7f0d92f195d3eedca750e02010,
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::store
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:29
* @route '/api/v1/finances'
*/
const store6e428e6a315252f28cfdf7c4ca9d2c31 = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store6e428e6a315252f28cfdf7c4ca9d2c31.url(options),
    method: 'post',
})

store6e428e6a315252f28cfdf7c4ca9d2c31.definition = {
    methods: ['post'],
    url: '/api/v1/finances',
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::store
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:29
* @route '/api/v1/finances'
*/
store6e428e6a315252f28cfdf7c4ca9d2c31.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store6e428e6a315252f28cfdf7c4ca9d2c31.definition.url + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::store
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:29
* @route '/api/v1/finances'
*/
store6e428e6a315252f28cfdf7c4ca9d2c31.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store6e428e6a315252f28cfdf7c4ca9d2c31.url(options),
    method: 'post',
})

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::store
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:29
* @route '/finances'
*/
const storef0841a7f0d92f195d3eedca750e02010 = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: storef0841a7f0d92f195d3eedca750e02010.url(options),
    method: 'post',
})

storef0841a7f0d92f195d3eedca750e02010.definition = {
    methods: ['post'],
    url: '/finances',
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::store
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:29
* @route '/finances'
*/
storef0841a7f0d92f195d3eedca750e02010.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return storef0841a7f0d92f195d3eedca750e02010.definition.url + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::store
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:29
* @route '/finances'
*/
storef0841a7f0d92f195d3eedca750e02010.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: storef0841a7f0d92f195d3eedca750e02010.url(options),
    method: 'post',
})

export const store = {
    '/api/v1/finances': store6e428e6a315252f28cfdf7c4ca9d2c31,
    '/finances': storef0841a7f0d92f195d3eedca750e02010,
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::show
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:34
* @route '/api/v1/finances/{finance}'
*/
const show3afb12cb7880c698ab81605fc3fb80d4 = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show3afb12cb7880c698ab81605fc3fb80d4.url(args, options),
    method: 'get',
})

show3afb12cb7880c698ab81605fc3fb80d4.definition = {
    methods: ['get','head'],
    url: '/api/v1/finances/{finance}',
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::show
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:34
* @route '/api/v1/finances/{finance}'
*/
show3afb12cb7880c698ab81605fc3fb80d4.url = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return show3afb12cb7880c698ab81605fc3fb80d4.definition.url
            .replace('{finance}', parsedArgs.finance.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::show
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:34
* @route '/api/v1/finances/{finance}'
*/
show3afb12cb7880c698ab81605fc3fb80d4.get = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show3afb12cb7880c698ab81605fc3fb80d4.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::show
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:34
* @route '/api/v1/finances/{finance}'
*/
show3afb12cb7880c698ab81605fc3fb80d4.head = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show3afb12cb7880c698ab81605fc3fb80d4.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::show
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:34
* @route '/finances/{finance}'
*/
const showbc7b8fa6736024d1861aac6546f053d7 = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: showbc7b8fa6736024d1861aac6546f053d7.url(args, options),
    method: 'get',
})

showbc7b8fa6736024d1861aac6546f053d7.definition = {
    methods: ['get','head'],
    url: '/finances/{finance}',
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::show
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:34
* @route '/finances/{finance}'
*/
showbc7b8fa6736024d1861aac6546f053d7.url = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return showbc7b8fa6736024d1861aac6546f053d7.definition.url
            .replace('{finance}', parsedArgs.finance.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::show
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:34
* @route '/finances/{finance}'
*/
showbc7b8fa6736024d1861aac6546f053d7.get = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: showbc7b8fa6736024d1861aac6546f053d7.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::show
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:34
* @route '/finances/{finance}'
*/
showbc7b8fa6736024d1861aac6546f053d7.head = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: showbc7b8fa6736024d1861aac6546f053d7.url(args, options),
    method: 'head',
})

export const show = {
    '/api/v1/finances/{finance}': show3afb12cb7880c698ab81605fc3fb80d4,
    '/finances/{finance}': showbc7b8fa6736024d1861aac6546f053d7,
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::update
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:50
* @route '/api/v1/finances/{finance}'
*/
const update3afb12cb7880c698ab81605fc3fb80d4 = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update3afb12cb7880c698ab81605fc3fb80d4.url(args, options),
    method: 'put',
})

update3afb12cb7880c698ab81605fc3fb80d4.definition = {
    methods: ['put','patch'],
    url: '/api/v1/finances/{finance}',
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::update
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:50
* @route '/api/v1/finances/{finance}'
*/
update3afb12cb7880c698ab81605fc3fb80d4.url = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return update3afb12cb7880c698ab81605fc3fb80d4.definition.url
            .replace('{finance}', parsedArgs.finance.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::update
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:50
* @route '/api/v1/finances/{finance}'
*/
update3afb12cb7880c698ab81605fc3fb80d4.put = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update3afb12cb7880c698ab81605fc3fb80d4.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::update
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:50
* @route '/api/v1/finances/{finance}'
*/
update3afb12cb7880c698ab81605fc3fb80d4.patch = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: update3afb12cb7880c698ab81605fc3fb80d4.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::update
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:50
* @route '/finances/{finance}'
*/
const updatebc7b8fa6736024d1861aac6546f053d7 = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: updatebc7b8fa6736024d1861aac6546f053d7.url(args, options),
    method: 'put',
})

updatebc7b8fa6736024d1861aac6546f053d7.definition = {
    methods: ['put','patch'],
    url: '/finances/{finance}',
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::update
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:50
* @route '/finances/{finance}'
*/
updatebc7b8fa6736024d1861aac6546f053d7.url = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return updatebc7b8fa6736024d1861aac6546f053d7.definition.url
            .replace('{finance}', parsedArgs.finance.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::update
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:50
* @route '/finances/{finance}'
*/
updatebc7b8fa6736024d1861aac6546f053d7.put = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: updatebc7b8fa6736024d1861aac6546f053d7.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::update
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:50
* @route '/finances/{finance}'
*/
updatebc7b8fa6736024d1861aac6546f053d7.patch = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: updatebc7b8fa6736024d1861aac6546f053d7.url(args, options),
    method: 'patch',
})

export const update = {
    '/api/v1/finances/{finance}': update3afb12cb7880c698ab81605fc3fb80d4,
    '/finances/{finance}': updatebc7b8fa6736024d1861aac6546f053d7,
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::destroy
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:55
* @route '/api/v1/finances/{finance}'
*/
const destroy3afb12cb7880c698ab81605fc3fb80d4 = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy3afb12cb7880c698ab81605fc3fb80d4.url(args, options),
    method: 'delete',
})

destroy3afb12cb7880c698ab81605fc3fb80d4.definition = {
    methods: ['delete'],
    url: '/api/v1/finances/{finance}',
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::destroy
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:55
* @route '/api/v1/finances/{finance}'
*/
destroy3afb12cb7880c698ab81605fc3fb80d4.url = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return destroy3afb12cb7880c698ab81605fc3fb80d4.definition.url
            .replace('{finance}', parsedArgs.finance.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::destroy
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:55
* @route '/api/v1/finances/{finance}'
*/
destroy3afb12cb7880c698ab81605fc3fb80d4.delete = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy3afb12cb7880c698ab81605fc3fb80d4.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::destroy
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:55
* @route '/finances/{finance}'
*/
const destroybc7b8fa6736024d1861aac6546f053d7 = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroybc7b8fa6736024d1861aac6546f053d7.url(args, options),
    method: 'delete',
})

destroybc7b8fa6736024d1861aac6546f053d7.definition = {
    methods: ['delete'],
    url: '/finances/{finance}',
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::destroy
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:55
* @route '/finances/{finance}'
*/
destroybc7b8fa6736024d1861aac6546f053d7.url = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return destroybc7b8fa6736024d1861aac6546f053d7.definition.url
            .replace('{finance}', parsedArgs.finance.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::destroy
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:55
* @route '/finances/{finance}'
*/
destroybc7b8fa6736024d1861aac6546f053d7.delete = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroybc7b8fa6736024d1861aac6546f053d7.url(args, options),
    method: 'delete',
})

export const destroy = {
    '/api/v1/finances/{finance}': destroy3afb12cb7880c698ab81605fc3fb80d4,
    '/finances/{finance}': destroybc7b8fa6736024d1861aac6546f053d7,
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::create
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:21
* @route '/finances/create'
*/
export const create = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ['get','head'],
    url: '/finances/create',
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::create
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:21
* @route '/finances/create'
*/
create.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::create
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:21
* @route '/finances/create'
*/
create.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::create
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:21
* @route '/finances/create'
*/
create.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::edit
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:42
* @route '/finances/{finance}/edit'
*/
export const edit = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ['get','head'],
    url: '/finances/{finance}/edit',
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::edit
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:42
* @route '/finances/{finance}/edit'
*/
edit.url = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return edit.definition.url
            .replace('{finance}', parsedArgs.finance.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::edit
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:42
* @route '/finances/{finance}/edit'
*/
edit.get = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Finance\Http\Controllers\FinanceController::edit
* @see Modules/Finance/app/Http/Controllers/FinanceController.php:42
* @route '/finances/{finance}/edit'
*/
edit.head = (args: { finance: string | number } | [finance: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: edit.url(args, options),
    method: 'head',
})

const FinanceController = { index, store, show, update, destroy, create, edit }

export default FinanceController