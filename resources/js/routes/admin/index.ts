import { queryParams, type QueryParams } from './../../wayfinder'

/**
* @see \Modules\Admin\Http\Controllers\AdminController::index
* @see Modules/Admin/app/Http/Controllers/AdminController.php:13
* @route '/admin'
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
    url: '/admin',
}

/**
* @see \Modules\Admin\Http\Controllers\AdminController::index
* @see Modules/Admin/app/Http/Controllers/AdminController.php:13
* @route '/admin'
*/
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Admin\Http\Controllers\AdminController::index
* @see Modules/Admin/app/Http/Controllers/AdminController.php:13
* @route '/admin'
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
* @route '/admin'
*/
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Admin\Http\Controllers\AdminController::create
* @see Modules/Admin/app/Http/Controllers/AdminController.php:21
* @route '/admin/create'
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
    url: '/admin/create',
}

/**
* @see \Modules\Admin\Http\Controllers\AdminController::create
* @see Modules/Admin/app/Http/Controllers/AdminController.php:21
* @route '/admin/create'
*/
create.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Admin\Http\Controllers\AdminController::create
* @see Modules/Admin/app/Http/Controllers/AdminController.php:21
* @route '/admin/create'
*/
create.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Admin\Http\Controllers\AdminController::create
* @see Modules/Admin/app/Http/Controllers/AdminController.php:21
* @route '/admin/create'
*/
create.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Admin\Http\Controllers\AdminController::store
* @see Modules/Admin/app/Http/Controllers/AdminController.php:29
* @route '/admin'
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
    url: '/admin',
}

/**
* @see \Modules\Admin\Http\Controllers\AdminController::store
* @see Modules/Admin/app/Http/Controllers/AdminController.php:29
* @route '/admin'
*/
store.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Admin\Http\Controllers\AdminController::store
* @see Modules/Admin/app/Http/Controllers/AdminController.php:29
* @route '/admin'
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
* @route '/admin/{admin}'
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
    url: '/admin/{admin}',
}

/**
* @see \Modules\Admin\Http\Controllers\AdminController::show
* @see Modules/Admin/app/Http/Controllers/AdminController.php:34
* @route '/admin/{admin}'
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
* @route '/admin/{admin}'
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
* @route '/admin/{admin}'
*/
show.head = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Admin\Http\Controllers\AdminController::edit
* @see Modules/Admin/app/Http/Controllers/AdminController.php:42
* @route '/admin/{admin}/edit'
*/
export const edit = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ['get','head'],
    url: '/admin/{admin}/edit',
}

/**
* @see \Modules\Admin\Http\Controllers\AdminController::edit
* @see Modules/Admin/app/Http/Controllers/AdminController.php:42
* @route '/admin/{admin}/edit'
*/
edit.url = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return edit.definition.url
            .replace('{admin}', parsedArgs.admin.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admin\Http\Controllers\AdminController::edit
* @see Modules/Admin/app/Http/Controllers/AdminController.php:42
* @route '/admin/{admin}/edit'
*/
edit.get = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Admin\Http\Controllers\AdminController::edit
* @see Modules/Admin/app/Http/Controllers/AdminController.php:42
* @route '/admin/{admin}/edit'
*/
edit.head = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Admin\Http\Controllers\AdminController::update
* @see Modules/Admin/app/Http/Controllers/AdminController.php:50
* @route '/admin/{admin}'
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
    url: '/admin/{admin}',
}

/**
* @see \Modules\Admin\Http\Controllers\AdminController::update
* @see Modules/Admin/app/Http/Controllers/AdminController.php:50
* @route '/admin/{admin}'
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
* @route '/admin/{admin}'
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
* @route '/admin/{admin}'
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
* @route '/admin/{admin}'
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
    url: '/admin/{admin}',
}

/**
* @see \Modules\Admin\Http\Controllers\AdminController::destroy
* @see Modules/Admin/app/Http/Controllers/AdminController.php:55
* @route '/admin/{admin}'
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
* @route '/admin/{admin}'
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
    create,
    store,
    show,
    edit,
    update,
    destroy,
}

export default admin