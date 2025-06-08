import { queryParams, type QueryParams } from './../../../../../wayfinder'

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::index
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:13
* @route '/api/v1/vendor'
*/
const index4f457a66455f823a9c5fc2dfd2b9c94a = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index4f457a66455f823a9c5fc2dfd2b9c94a.url(options),
    method: 'get',
})

index4f457a66455f823a9c5fc2dfd2b9c94a.definition = {
    methods: ['get','head'],
    url: '/api/v1/vendor',
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::index
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:13
* @route '/api/v1/vendor'
*/
index4f457a66455f823a9c5fc2dfd2b9c94a.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index4f457a66455f823a9c5fc2dfd2b9c94a.definition.url + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::index
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:13
* @route '/api/v1/vendor'
*/
index4f457a66455f823a9c5fc2dfd2b9c94a.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index4f457a66455f823a9c5fc2dfd2b9c94a.url(options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::index
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:13
* @route '/api/v1/vendor'
*/
index4f457a66455f823a9c5fc2dfd2b9c94a.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index4f457a66455f823a9c5fc2dfd2b9c94a.url(options),
    method: 'head',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::index
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:13
* @route '/vendor'
*/
const indexd776606bedd60322bf0deaab8e98fed7 = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: indexd776606bedd60322bf0deaab8e98fed7.url(options),
    method: 'get',
})

indexd776606bedd60322bf0deaab8e98fed7.definition = {
    methods: ['get','head'],
    url: '/vendor',
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::index
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:13
* @route '/vendor'
*/
indexd776606bedd60322bf0deaab8e98fed7.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return indexd776606bedd60322bf0deaab8e98fed7.definition.url + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::index
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:13
* @route '/vendor'
*/
indexd776606bedd60322bf0deaab8e98fed7.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: indexd776606bedd60322bf0deaab8e98fed7.url(options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::index
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:13
* @route '/vendor'
*/
indexd776606bedd60322bf0deaab8e98fed7.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: indexd776606bedd60322bf0deaab8e98fed7.url(options),
    method: 'head',
})

export const index = {
    '/api/v1/vendor': index4f457a66455f823a9c5fc2dfd2b9c94a,
    '/vendor': indexd776606bedd60322bf0deaab8e98fed7,
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::store
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:29
* @route '/api/v1/vendor'
*/
const store4f457a66455f823a9c5fc2dfd2b9c94a = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store4f457a66455f823a9c5fc2dfd2b9c94a.url(options),
    method: 'post',
})

store4f457a66455f823a9c5fc2dfd2b9c94a.definition = {
    methods: ['post'],
    url: '/api/v1/vendor',
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::store
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:29
* @route '/api/v1/vendor'
*/
store4f457a66455f823a9c5fc2dfd2b9c94a.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store4f457a66455f823a9c5fc2dfd2b9c94a.definition.url + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::store
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:29
* @route '/api/v1/vendor'
*/
store4f457a66455f823a9c5fc2dfd2b9c94a.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store4f457a66455f823a9c5fc2dfd2b9c94a.url(options),
    method: 'post',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::store
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:29
* @route '/vendor'
*/
const stored776606bedd60322bf0deaab8e98fed7 = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: stored776606bedd60322bf0deaab8e98fed7.url(options),
    method: 'post',
})

stored776606bedd60322bf0deaab8e98fed7.definition = {
    methods: ['post'],
    url: '/vendor',
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::store
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:29
* @route '/vendor'
*/
stored776606bedd60322bf0deaab8e98fed7.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return stored776606bedd60322bf0deaab8e98fed7.definition.url + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::store
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:29
* @route '/vendor'
*/
stored776606bedd60322bf0deaab8e98fed7.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: stored776606bedd60322bf0deaab8e98fed7.url(options),
    method: 'post',
})

export const store = {
    '/api/v1/vendor': store4f457a66455f823a9c5fc2dfd2b9c94a,
    '/vendor': stored776606bedd60322bf0deaab8e98fed7,
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::show
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:34
* @route '/api/v1/vendor/{vendor}'
*/
const showb92f75273c1ee07170420c93e7838a90 = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: showb92f75273c1ee07170420c93e7838a90.url(args, options),
    method: 'get',
})

showb92f75273c1ee07170420c93e7838a90.definition = {
    methods: ['get','head'],
    url: '/api/v1/vendor/{vendor}',
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::show
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:34
* @route '/api/v1/vendor/{vendor}'
*/
showb92f75273c1ee07170420c93e7838a90.url = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { vendor: args }
    }

    if (Array.isArray(args)) {
        args = {
            vendor: args[0],
        }
    }

    const parsedArgs = {
        vendor: args.vendor,
    }

    return showb92f75273c1ee07170420c93e7838a90.definition.url
            .replace('{vendor}', parsedArgs.vendor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::show
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:34
* @route '/api/v1/vendor/{vendor}'
*/
showb92f75273c1ee07170420c93e7838a90.get = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: showb92f75273c1ee07170420c93e7838a90.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::show
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:34
* @route '/api/v1/vendor/{vendor}'
*/
showb92f75273c1ee07170420c93e7838a90.head = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: showb92f75273c1ee07170420c93e7838a90.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::show
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:34
* @route '/vendor/{vendor}'
*/
const show843c688d3e780217130b058bf2346209 = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show843c688d3e780217130b058bf2346209.url(args, options),
    method: 'get',
})

show843c688d3e780217130b058bf2346209.definition = {
    methods: ['get','head'],
    url: '/vendor/{vendor}',
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::show
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:34
* @route '/vendor/{vendor}'
*/
show843c688d3e780217130b058bf2346209.url = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { vendor: args }
    }

    if (Array.isArray(args)) {
        args = {
            vendor: args[0],
        }
    }

    const parsedArgs = {
        vendor: args.vendor,
    }

    return show843c688d3e780217130b058bf2346209.definition.url
            .replace('{vendor}', parsedArgs.vendor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::show
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:34
* @route '/vendor/{vendor}'
*/
show843c688d3e780217130b058bf2346209.get = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show843c688d3e780217130b058bf2346209.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::show
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:34
* @route '/vendor/{vendor}'
*/
show843c688d3e780217130b058bf2346209.head = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show843c688d3e780217130b058bf2346209.url(args, options),
    method: 'head',
})

export const show = {
    '/api/v1/vendor/{vendor}': showb92f75273c1ee07170420c93e7838a90,
    '/vendor/{vendor}': show843c688d3e780217130b058bf2346209,
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::update
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:50
* @route '/api/v1/vendor/{vendor}'
*/
const updateb92f75273c1ee07170420c93e7838a90 = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: updateb92f75273c1ee07170420c93e7838a90.url(args, options),
    method: 'put',
})

updateb92f75273c1ee07170420c93e7838a90.definition = {
    methods: ['put','patch'],
    url: '/api/v1/vendor/{vendor}',
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::update
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:50
* @route '/api/v1/vendor/{vendor}'
*/
updateb92f75273c1ee07170420c93e7838a90.url = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { vendor: args }
    }

    if (Array.isArray(args)) {
        args = {
            vendor: args[0],
        }
    }

    const parsedArgs = {
        vendor: args.vendor,
    }

    return updateb92f75273c1ee07170420c93e7838a90.definition.url
            .replace('{vendor}', parsedArgs.vendor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::update
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:50
* @route '/api/v1/vendor/{vendor}'
*/
updateb92f75273c1ee07170420c93e7838a90.put = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: updateb92f75273c1ee07170420c93e7838a90.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::update
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:50
* @route '/api/v1/vendor/{vendor}'
*/
updateb92f75273c1ee07170420c93e7838a90.patch = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: updateb92f75273c1ee07170420c93e7838a90.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::update
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:50
* @route '/vendor/{vendor}'
*/
const update843c688d3e780217130b058bf2346209 = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update843c688d3e780217130b058bf2346209.url(args, options),
    method: 'put',
})

update843c688d3e780217130b058bf2346209.definition = {
    methods: ['put','patch'],
    url: '/vendor/{vendor}',
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::update
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:50
* @route '/vendor/{vendor}'
*/
update843c688d3e780217130b058bf2346209.url = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { vendor: args }
    }

    if (Array.isArray(args)) {
        args = {
            vendor: args[0],
        }
    }

    const parsedArgs = {
        vendor: args.vendor,
    }

    return update843c688d3e780217130b058bf2346209.definition.url
            .replace('{vendor}', parsedArgs.vendor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::update
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:50
* @route '/vendor/{vendor}'
*/
update843c688d3e780217130b058bf2346209.put = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update843c688d3e780217130b058bf2346209.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::update
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:50
* @route '/vendor/{vendor}'
*/
update843c688d3e780217130b058bf2346209.patch = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: update843c688d3e780217130b058bf2346209.url(args, options),
    method: 'patch',
})

export const update = {
    '/api/v1/vendor/{vendor}': updateb92f75273c1ee07170420c93e7838a90,
    '/vendor/{vendor}': update843c688d3e780217130b058bf2346209,
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::destroy
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:55
* @route '/api/v1/vendor/{vendor}'
*/
const destroyb92f75273c1ee07170420c93e7838a90 = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroyb92f75273c1ee07170420c93e7838a90.url(args, options),
    method: 'delete',
})

destroyb92f75273c1ee07170420c93e7838a90.definition = {
    methods: ['delete'],
    url: '/api/v1/vendor/{vendor}',
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::destroy
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:55
* @route '/api/v1/vendor/{vendor}'
*/
destroyb92f75273c1ee07170420c93e7838a90.url = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { vendor: args }
    }

    if (Array.isArray(args)) {
        args = {
            vendor: args[0],
        }
    }

    const parsedArgs = {
        vendor: args.vendor,
    }

    return destroyb92f75273c1ee07170420c93e7838a90.definition.url
            .replace('{vendor}', parsedArgs.vendor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::destroy
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:55
* @route '/api/v1/vendor/{vendor}'
*/
destroyb92f75273c1ee07170420c93e7838a90.delete = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroyb92f75273c1ee07170420c93e7838a90.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::destroy
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:55
* @route '/vendor/{vendor}'
*/
const destroy843c688d3e780217130b058bf2346209 = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy843c688d3e780217130b058bf2346209.url(args, options),
    method: 'delete',
})

destroy843c688d3e780217130b058bf2346209.definition = {
    methods: ['delete'],
    url: '/vendor/{vendor}',
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::destroy
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:55
* @route '/vendor/{vendor}'
*/
destroy843c688d3e780217130b058bf2346209.url = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { vendor: args }
    }

    if (Array.isArray(args)) {
        args = {
            vendor: args[0],
        }
    }

    const parsedArgs = {
        vendor: args.vendor,
    }

    return destroy843c688d3e780217130b058bf2346209.definition.url
            .replace('{vendor}', parsedArgs.vendor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::destroy
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:55
* @route '/vendor/{vendor}'
*/
destroy843c688d3e780217130b058bf2346209.delete = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy843c688d3e780217130b058bf2346209.url(args, options),
    method: 'delete',
})

export const destroy = {
    '/api/v1/vendor/{vendor}': destroyb92f75273c1ee07170420c93e7838a90,
    '/vendor/{vendor}': destroy843c688d3e780217130b058bf2346209,
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::create
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:21
* @route '/vendor/create'
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
    url: '/vendor/create',
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::create
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:21
* @route '/vendor/create'
*/
create.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::create
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:21
* @route '/vendor/create'
*/
create.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::create
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:21
* @route '/vendor/create'
*/
create.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::edit
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:42
* @route '/vendor/{vendor}/edit'
*/
export const edit = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ['get','head'],
    url: '/vendor/{vendor}/edit',
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::edit
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:42
* @route '/vendor/{vendor}/edit'
*/
edit.url = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { vendor: args }
    }

    if (Array.isArray(args)) {
        args = {
            vendor: args[0],
        }
    }

    const parsedArgs = {
        vendor: args.vendor,
    }

    return edit.definition.url
            .replace('{vendor}', parsedArgs.vendor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::edit
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:42
* @route '/vendor/{vendor}/edit'
*/
edit.get = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::edit
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:42
* @route '/vendor/{vendor}/edit'
*/
edit.head = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: edit.url(args, options),
    method: 'head',
})

const VendorController = { index, store, show, update, destroy, create, edit }

export default VendorController