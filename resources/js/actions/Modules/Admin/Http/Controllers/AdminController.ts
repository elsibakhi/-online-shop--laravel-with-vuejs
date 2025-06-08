import { queryParams, type QueryParams } from './../../../../../wayfinder'

/**
* @see \Modules\Admin\Http\Controllers\AdminController::index
* @see Modules/Admin/app/Http/Controllers/AdminController.php:13
* @route '/api/v1/admin'
*/
const index20847302381cd7cfe918e07b304f0869 = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index20847302381cd7cfe918e07b304f0869.url(options),
    method: 'get',
})

index20847302381cd7cfe918e07b304f0869.definition = {
    methods: ['get','head'],
    url: '/api/v1/admin',
}

/**
* @see \Modules\Admin\Http\Controllers\AdminController::index
* @see Modules/Admin/app/Http/Controllers/AdminController.php:13
* @route '/api/v1/admin'
*/
index20847302381cd7cfe918e07b304f0869.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index20847302381cd7cfe918e07b304f0869.definition.url + queryParams(options)
}

/**
* @see \Modules\Admin\Http\Controllers\AdminController::index
* @see Modules/Admin/app/Http/Controllers/AdminController.php:13
* @route '/api/v1/admin'
*/
index20847302381cd7cfe918e07b304f0869.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index20847302381cd7cfe918e07b304f0869.url(options),
    method: 'get',
})

/**
* @see \Modules\Admin\Http\Controllers\AdminController::index
* @see Modules/Admin/app/Http/Controllers/AdminController.php:13
* @route '/api/v1/admin'
*/
index20847302381cd7cfe918e07b304f0869.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index20847302381cd7cfe918e07b304f0869.url(options),
    method: 'head',
})

/**
* @see \Modules\Admin\Http\Controllers\AdminController::index
* @see Modules/Admin/app/Http/Controllers/AdminController.php:13
* @route '/admin'
*/
const index86c28804d7190bd7446b6b5f0e136398 = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index86c28804d7190bd7446b6b5f0e136398.url(options),
    method: 'get',
})

index86c28804d7190bd7446b6b5f0e136398.definition = {
    methods: ['get','head'],
    url: '/admin',
}

/**
* @see \Modules\Admin\Http\Controllers\AdminController::index
* @see Modules/Admin/app/Http/Controllers/AdminController.php:13
* @route '/admin'
*/
index86c28804d7190bd7446b6b5f0e136398.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index86c28804d7190bd7446b6b5f0e136398.definition.url + queryParams(options)
}

/**
* @see \Modules\Admin\Http\Controllers\AdminController::index
* @see Modules/Admin/app/Http/Controllers/AdminController.php:13
* @route '/admin'
*/
index86c28804d7190bd7446b6b5f0e136398.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index86c28804d7190bd7446b6b5f0e136398.url(options),
    method: 'get',
})

/**
* @see \Modules\Admin\Http\Controllers\AdminController::index
* @see Modules/Admin/app/Http/Controllers/AdminController.php:13
* @route '/admin'
*/
index86c28804d7190bd7446b6b5f0e136398.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index86c28804d7190bd7446b6b5f0e136398.url(options),
    method: 'head',
})

export const index = {
    '/api/v1/admin': index20847302381cd7cfe918e07b304f0869,
    '/admin': index86c28804d7190bd7446b6b5f0e136398,
}

/**
* @see \Modules\Admin\Http\Controllers\AdminController::store
* @see Modules/Admin/app/Http/Controllers/AdminController.php:29
* @route '/api/v1/admin'
*/
const store20847302381cd7cfe918e07b304f0869 = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store20847302381cd7cfe918e07b304f0869.url(options),
    method: 'post',
})

store20847302381cd7cfe918e07b304f0869.definition = {
    methods: ['post'],
    url: '/api/v1/admin',
}

/**
* @see \Modules\Admin\Http\Controllers\AdminController::store
* @see Modules/Admin/app/Http/Controllers/AdminController.php:29
* @route '/api/v1/admin'
*/
store20847302381cd7cfe918e07b304f0869.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store20847302381cd7cfe918e07b304f0869.definition.url + queryParams(options)
}

/**
* @see \Modules\Admin\Http\Controllers\AdminController::store
* @see Modules/Admin/app/Http/Controllers/AdminController.php:29
* @route '/api/v1/admin'
*/
store20847302381cd7cfe918e07b304f0869.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store20847302381cd7cfe918e07b304f0869.url(options),
    method: 'post',
})

/**
* @see \Modules\Admin\Http\Controllers\AdminController::store
* @see Modules/Admin/app/Http/Controllers/AdminController.php:29
* @route '/admin'
*/
const store86c28804d7190bd7446b6b5f0e136398 = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store86c28804d7190bd7446b6b5f0e136398.url(options),
    method: 'post',
})

store86c28804d7190bd7446b6b5f0e136398.definition = {
    methods: ['post'],
    url: '/admin',
}

/**
* @see \Modules\Admin\Http\Controllers\AdminController::store
* @see Modules/Admin/app/Http/Controllers/AdminController.php:29
* @route '/admin'
*/
store86c28804d7190bd7446b6b5f0e136398.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store86c28804d7190bd7446b6b5f0e136398.definition.url + queryParams(options)
}

/**
* @see \Modules\Admin\Http\Controllers\AdminController::store
* @see Modules/Admin/app/Http/Controllers/AdminController.php:29
* @route '/admin'
*/
store86c28804d7190bd7446b6b5f0e136398.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store86c28804d7190bd7446b6b5f0e136398.url(options),
    method: 'post',
})

export const store = {
    '/api/v1/admin': store20847302381cd7cfe918e07b304f0869,
    '/admin': store86c28804d7190bd7446b6b5f0e136398,
}

/**
* @see \Modules\Admin\Http\Controllers\AdminController::show
* @see Modules/Admin/app/Http/Controllers/AdminController.php:34
* @route '/api/v1/admin/{admin}'
*/
const show26cb1e22760e2313e82638a861793098 = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show26cb1e22760e2313e82638a861793098.url(args, options),
    method: 'get',
})

show26cb1e22760e2313e82638a861793098.definition = {
    methods: ['get','head'],
    url: '/api/v1/admin/{admin}',
}

/**
* @see \Modules\Admin\Http\Controllers\AdminController::show
* @see Modules/Admin/app/Http/Controllers/AdminController.php:34
* @route '/api/v1/admin/{admin}'
*/
show26cb1e22760e2313e82638a861793098.url = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return show26cb1e22760e2313e82638a861793098.definition.url
            .replace('{admin}', parsedArgs.admin.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admin\Http\Controllers\AdminController::show
* @see Modules/Admin/app/Http/Controllers/AdminController.php:34
* @route '/api/v1/admin/{admin}'
*/
show26cb1e22760e2313e82638a861793098.get = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show26cb1e22760e2313e82638a861793098.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Admin\Http\Controllers\AdminController::show
* @see Modules/Admin/app/Http/Controllers/AdminController.php:34
* @route '/api/v1/admin/{admin}'
*/
show26cb1e22760e2313e82638a861793098.head = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show26cb1e22760e2313e82638a861793098.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Admin\Http\Controllers\AdminController::show
* @see Modules/Admin/app/Http/Controllers/AdminController.php:34
* @route '/admin/{admin}'
*/
const show4cf546e1e8eb784c270486797f9aa4d0 = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show4cf546e1e8eb784c270486797f9aa4d0.url(args, options),
    method: 'get',
})

show4cf546e1e8eb784c270486797f9aa4d0.definition = {
    methods: ['get','head'],
    url: '/admin/{admin}',
}

/**
* @see \Modules\Admin\Http\Controllers\AdminController::show
* @see Modules/Admin/app/Http/Controllers/AdminController.php:34
* @route '/admin/{admin}'
*/
show4cf546e1e8eb784c270486797f9aa4d0.url = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return show4cf546e1e8eb784c270486797f9aa4d0.definition.url
            .replace('{admin}', parsedArgs.admin.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admin\Http\Controllers\AdminController::show
* @see Modules/Admin/app/Http/Controllers/AdminController.php:34
* @route '/admin/{admin}'
*/
show4cf546e1e8eb784c270486797f9aa4d0.get = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show4cf546e1e8eb784c270486797f9aa4d0.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Admin\Http\Controllers\AdminController::show
* @see Modules/Admin/app/Http/Controllers/AdminController.php:34
* @route '/admin/{admin}'
*/
show4cf546e1e8eb784c270486797f9aa4d0.head = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show4cf546e1e8eb784c270486797f9aa4d0.url(args, options),
    method: 'head',
})

export const show = {
    '/api/v1/admin/{admin}': show26cb1e22760e2313e82638a861793098,
    '/admin/{admin}': show4cf546e1e8eb784c270486797f9aa4d0,
}

/**
* @see \Modules\Admin\Http\Controllers\AdminController::update
* @see Modules/Admin/app/Http/Controllers/AdminController.php:50
* @route '/api/v1/admin/{admin}'
*/
const update26cb1e22760e2313e82638a861793098 = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update26cb1e22760e2313e82638a861793098.url(args, options),
    method: 'put',
})

update26cb1e22760e2313e82638a861793098.definition = {
    methods: ['put','patch'],
    url: '/api/v1/admin/{admin}',
}

/**
* @see \Modules\Admin\Http\Controllers\AdminController::update
* @see Modules/Admin/app/Http/Controllers/AdminController.php:50
* @route '/api/v1/admin/{admin}'
*/
update26cb1e22760e2313e82638a861793098.url = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return update26cb1e22760e2313e82638a861793098.definition.url
            .replace('{admin}', parsedArgs.admin.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admin\Http\Controllers\AdminController::update
* @see Modules/Admin/app/Http/Controllers/AdminController.php:50
* @route '/api/v1/admin/{admin}'
*/
update26cb1e22760e2313e82638a861793098.put = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update26cb1e22760e2313e82638a861793098.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Admin\Http\Controllers\AdminController::update
* @see Modules/Admin/app/Http/Controllers/AdminController.php:50
* @route '/api/v1/admin/{admin}'
*/
update26cb1e22760e2313e82638a861793098.patch = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: update26cb1e22760e2313e82638a861793098.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Admin\Http\Controllers\AdminController::update
* @see Modules/Admin/app/Http/Controllers/AdminController.php:50
* @route '/admin/{admin}'
*/
const update4cf546e1e8eb784c270486797f9aa4d0 = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update4cf546e1e8eb784c270486797f9aa4d0.url(args, options),
    method: 'put',
})

update4cf546e1e8eb784c270486797f9aa4d0.definition = {
    methods: ['put','patch'],
    url: '/admin/{admin}',
}

/**
* @see \Modules\Admin\Http\Controllers\AdminController::update
* @see Modules/Admin/app/Http/Controllers/AdminController.php:50
* @route '/admin/{admin}'
*/
update4cf546e1e8eb784c270486797f9aa4d0.url = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return update4cf546e1e8eb784c270486797f9aa4d0.definition.url
            .replace('{admin}', parsedArgs.admin.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admin\Http\Controllers\AdminController::update
* @see Modules/Admin/app/Http/Controllers/AdminController.php:50
* @route '/admin/{admin}'
*/
update4cf546e1e8eb784c270486797f9aa4d0.put = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update4cf546e1e8eb784c270486797f9aa4d0.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Admin\Http\Controllers\AdminController::update
* @see Modules/Admin/app/Http/Controllers/AdminController.php:50
* @route '/admin/{admin}'
*/
update4cf546e1e8eb784c270486797f9aa4d0.patch = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: update4cf546e1e8eb784c270486797f9aa4d0.url(args, options),
    method: 'patch',
})

export const update = {
    '/api/v1/admin/{admin}': update26cb1e22760e2313e82638a861793098,
    '/admin/{admin}': update4cf546e1e8eb784c270486797f9aa4d0,
}

/**
* @see \Modules\Admin\Http\Controllers\AdminController::destroy
* @see Modules/Admin/app/Http/Controllers/AdminController.php:55
* @route '/api/v1/admin/{admin}'
*/
const destroy26cb1e22760e2313e82638a861793098 = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy26cb1e22760e2313e82638a861793098.url(args, options),
    method: 'delete',
})

destroy26cb1e22760e2313e82638a861793098.definition = {
    methods: ['delete'],
    url: '/api/v1/admin/{admin}',
}

/**
* @see \Modules\Admin\Http\Controllers\AdminController::destroy
* @see Modules/Admin/app/Http/Controllers/AdminController.php:55
* @route '/api/v1/admin/{admin}'
*/
destroy26cb1e22760e2313e82638a861793098.url = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return destroy26cb1e22760e2313e82638a861793098.definition.url
            .replace('{admin}', parsedArgs.admin.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admin\Http\Controllers\AdminController::destroy
* @see Modules/Admin/app/Http/Controllers/AdminController.php:55
* @route '/api/v1/admin/{admin}'
*/
destroy26cb1e22760e2313e82638a861793098.delete = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy26cb1e22760e2313e82638a861793098.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Admin\Http\Controllers\AdminController::destroy
* @see Modules/Admin/app/Http/Controllers/AdminController.php:55
* @route '/admin/{admin}'
*/
const destroy4cf546e1e8eb784c270486797f9aa4d0 = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy4cf546e1e8eb784c270486797f9aa4d0.url(args, options),
    method: 'delete',
})

destroy4cf546e1e8eb784c270486797f9aa4d0.definition = {
    methods: ['delete'],
    url: '/admin/{admin}',
}

/**
* @see \Modules\Admin\Http\Controllers\AdminController::destroy
* @see Modules/Admin/app/Http/Controllers/AdminController.php:55
* @route '/admin/{admin}'
*/
destroy4cf546e1e8eb784c270486797f9aa4d0.url = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return destroy4cf546e1e8eb784c270486797f9aa4d0.definition.url
            .replace('{admin}', parsedArgs.admin.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admin\Http\Controllers\AdminController::destroy
* @see Modules/Admin/app/Http/Controllers/AdminController.php:55
* @route '/admin/{admin}'
*/
destroy4cf546e1e8eb784c270486797f9aa4d0.delete = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy4cf546e1e8eb784c270486797f9aa4d0.url(args, options),
    method: 'delete',
})

export const destroy = {
    '/api/v1/admin/{admin}': destroy26cb1e22760e2313e82638a861793098,
    '/admin/{admin}': destroy4cf546e1e8eb784c270486797f9aa4d0,
}

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

const AdminController = { index, store, show, update, destroy, create, edit }

export default AdminController