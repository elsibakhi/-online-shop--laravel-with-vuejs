import { queryParams, type QueryParams } from './../../wayfinder'

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::index
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:13
* @route '/vendor'
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
    url: '/vendor',
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::index
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:13
* @route '/vendor'
*/
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::index
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:13
* @route '/vendor'
*/
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::index
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:13
* @route '/vendor'
*/
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})

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
* @see \Modules\Vendor\Http\Controllers\VendorController::store
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:29
* @route '/vendor'
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
    url: '/vendor',
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::store
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:29
* @route '/vendor'
*/
store.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::store
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:29
* @route '/vendor'
*/
store.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::show
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:34
* @route '/vendor/{vendor}'
*/
export const show = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ['get','head'],
    url: '/vendor/{vendor}',
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::show
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:34
* @route '/vendor/{vendor}'
*/
show.url = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return show.definition.url
            .replace('{vendor}', parsedArgs.vendor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::show
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:34
* @route '/vendor/{vendor}'
*/
show.get = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::show
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:34
* @route '/vendor/{vendor}'
*/
show.head = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show.url(args, options),
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

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::update
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:50
* @route '/vendor/{vendor}'
*/
export const update = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ['put','patch'],
    url: '/vendor/{vendor}',
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::update
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:50
* @route '/vendor/{vendor}'
*/
update.url = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return update.definition.url
            .replace('{vendor}', parsedArgs.vendor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::update
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:50
* @route '/vendor/{vendor}'
*/
update.put = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::update
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:50
* @route '/vendor/{vendor}'
*/
update.patch = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::destroy
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:55
* @route '/vendor/{vendor}'
*/
export const destroy = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ['delete'],
    url: '/vendor/{vendor}',
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::destroy
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:55
* @route '/vendor/{vendor}'
*/
destroy.url = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return destroy.definition.url
            .replace('{vendor}', parsedArgs.vendor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::destroy
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:55
* @route '/vendor/{vendor}'
*/
destroy.delete = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const vendor = {
    index,
    create,
    store,
    show,
    edit,
    update,
    destroy,
}

export default vendor