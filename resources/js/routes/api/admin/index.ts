import { queryParams, type QueryParams } from './../../../wayfinder'

/**
* @see \Modules\Admin\Http\Controllers\AdminController::index
* @see Modules/Admin/app/Http/Controllers/AdminController.php:13
* @route '/api/v1/admin'
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
    url: '/api/v1/admin',
}

/**
* @see \Modules\Admin\Http\Controllers\AdminController::index
* @see Modules/Admin/app/Http/Controllers/AdminController.php:13
* @route '/api/v1/admin'
*/
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Admin\Http\Controllers\AdminController::index
* @see Modules/Admin/app/Http/Controllers/AdminController.php:13
* @route '/api/v1/admin'
*/
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Admin\Http\Controllers\AdminController::index
* @see Modules/Admin/app/Http/Controllers/AdminController.php:13
* @route '/api/v1/admin'
*/
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Admin\Http\Controllers\AdminController::store
* @see Modules/Admin/app/Http/Controllers/AdminController.php:29
* @route '/api/v1/admin'
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
    url: '/api/v1/admin',
}

/**
* @see \Modules\Admin\Http\Controllers\AdminController::store
* @see Modules/Admin/app/Http/Controllers/AdminController.php:29
* @route '/api/v1/admin'
*/
store.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Admin\Http\Controllers\AdminController::store
* @see Modules/Admin/app/Http/Controllers/AdminController.php:29
* @route '/api/v1/admin'
*/
store.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Admin\Http\Controllers\AdminController::show
* @see Modules/Admin/app/Http/Controllers/AdminController.php:34
* @route '/api/v1/admin/{admin}'
*/
export const show = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ['get','head'],
    url: '/api/v1/admin/{admin}',
}

/**
* @see \Modules\Admin\Http\Controllers\AdminController::show
* @see Modules/Admin/app/Http/Controllers/AdminController.php:34
* @route '/api/v1/admin/{admin}'
*/
show.url = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { admin: args }
    }

    if (Array.isArray(args)) {
        args = {
            admin: args[0],
        }
    }

    const parsedArgs = {
        admin: args.admin,
    }

    return show.definition.url
            .replace('{admin}', parsedArgs.admin.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admin\Http\Controllers\AdminController::show
* @see Modules/Admin/app/Http/Controllers/AdminController.php:34
* @route '/api/v1/admin/{admin}'
*/
show.get = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Admin\Http\Controllers\AdminController::show
* @see Modules/Admin/app/Http/Controllers/AdminController.php:34
* @route '/api/v1/admin/{admin}'
*/
show.head = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Admin\Http\Controllers\AdminController::update
* @see Modules/Admin/app/Http/Controllers/AdminController.php:50
* @route '/api/v1/admin/{admin}'
*/
export const update = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ['put','patch'],
    url: '/api/v1/admin/{admin}',
}

/**
* @see \Modules\Admin\Http\Controllers\AdminController::update
* @see Modules/Admin/app/Http/Controllers/AdminController.php:50
* @route '/api/v1/admin/{admin}'
*/
update.url = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { admin: args }
    }

    if (Array.isArray(args)) {
        args = {
            admin: args[0],
        }
    }

    const parsedArgs = {
        admin: args.admin,
    }

    return update.definition.url
            .replace('{admin}', parsedArgs.admin.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admin\Http\Controllers\AdminController::update
* @see Modules/Admin/app/Http/Controllers/AdminController.php:50
* @route '/api/v1/admin/{admin}'
*/
update.put = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Admin\Http\Controllers\AdminController::update
* @see Modules/Admin/app/Http/Controllers/AdminController.php:50
* @route '/api/v1/admin/{admin}'
*/
update.patch = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Admin\Http\Controllers\AdminController::destroy
* @see Modules/Admin/app/Http/Controllers/AdminController.php:55
* @route '/api/v1/admin/{admin}'
*/
export const destroy = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ['delete'],
    url: '/api/v1/admin/{admin}',
}

/**
* @see \Modules\Admin\Http\Controllers\AdminController::destroy
* @see Modules/Admin/app/Http/Controllers/AdminController.php:55
* @route '/api/v1/admin/{admin}'
*/
destroy.url = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { admin: args }
    }

    if (Array.isArray(args)) {
        args = {
            admin: args[0],
        }
    }

    const parsedArgs = {
        admin: args.admin,
    }

    return destroy.definition.url
            .replace('{admin}', parsedArgs.admin.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admin\Http\Controllers\AdminController::destroy
* @see Modules/Admin/app/Http/Controllers/AdminController.php:55
* @route '/api/v1/admin/{admin}'
*/
destroy.delete = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const admin = {
    index,
    store,
    show,
    update,
    destroy,
}

export default admin