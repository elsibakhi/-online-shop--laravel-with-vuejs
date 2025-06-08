import { queryParams, type QueryParams } from './../../../wayfinder'

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::index
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:13
* @route '/api/v1/vendor'
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
    url: '/api/v1/vendor',
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::index
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:13
* @route '/api/v1/vendor'
*/
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::index
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:13
* @route '/api/v1/vendor'
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
* @route '/api/v1/vendor'
*/
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::store
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:29
* @route '/api/v1/vendor'
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
    url: '/api/v1/vendor',
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::store
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:29
* @route '/api/v1/vendor'
*/
store.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::store
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:29
* @route '/api/v1/vendor'
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
* @route '/api/v1/vendor/{vendor}'
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
    url: '/api/v1/vendor/{vendor}',
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::show
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:34
* @route '/api/v1/vendor/{vendor}'
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
* @route '/api/v1/vendor/{vendor}'
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
* @route '/api/v1/vendor/{vendor}'
*/
show.head = (args: { vendor: string | number } | [vendor: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::update
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:50
* @route '/api/v1/vendor/{vendor}'
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
    url: '/api/v1/vendor/{vendor}',
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::update
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:50
* @route '/api/v1/vendor/{vendor}'
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
* @route '/api/v1/vendor/{vendor}'
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
* @route '/api/v1/vendor/{vendor}'
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
* @route '/api/v1/vendor/{vendor}'
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
    url: '/api/v1/vendor/{vendor}',
}

/**
* @see \Modules\Vendor\Http\Controllers\VendorController::destroy
* @see Modules/Vendor/app/Http/Controllers/VendorController.php:55
* @route '/api/v1/vendor/{vendor}'
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
* @route '/api/v1/vendor/{vendor}'
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
    store,
    show,
    update,
    destroy,
}

export default vendor