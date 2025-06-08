import { queryParams, type QueryParams } from './../../../../../wayfinder'

/**
* @see \Modules\Admin\Http\Controllers\TagController::storeMany
* @see Modules/Admin/app/Http/Controllers/TagController.php:26
* @route '/tag/multi/store'
*/
export const storeMany = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: storeMany.url(options),
    method: 'post',
})

storeMany.definition = {
    methods: ['post'],
    url: '/tag/multi/store',
}

/**
* @see \Modules\Admin\Http\Controllers\TagController::storeMany
* @see Modules/Admin/app/Http/Controllers/TagController.php:26
* @route '/tag/multi/store'
*/
storeMany.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return storeMany.definition.url + queryParams(options)
}

/**
* @see \Modules\Admin\Http\Controllers\TagController::storeMany
* @see Modules/Admin/app/Http/Controllers/TagController.php:26
* @route '/tag/multi/store'
*/
storeMany.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: storeMany.url(options),
    method: 'post',
})

/**
* @see \Modules\Admin\Http\Controllers\TagController::destroyMany
* @see Modules/Admin/app/Http/Controllers/TagController.php:60
* @route '/tag/multi/delete'
*/
export const destroyMany = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroyMany.url(options),
    method: 'delete',
})

destroyMany.definition = {
    methods: ['delete'],
    url: '/tag/multi/delete',
}

/**
* @see \Modules\Admin\Http\Controllers\TagController::destroyMany
* @see Modules/Admin/app/Http/Controllers/TagController.php:60
* @route '/tag/multi/delete'
*/
destroyMany.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return destroyMany.definition.url + queryParams(options)
}

/**
* @see \Modules\Admin\Http\Controllers\TagController::destroyMany
* @see Modules/Admin/app/Http/Controllers/TagController.php:60
* @route '/tag/multi/delete'
*/
destroyMany.delete = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroyMany.url(options),
    method: 'delete',
})

/**
* @see \Modules\Admin\Http\Controllers\TagController::index
* @see Modules/Admin/app/Http/Controllers/TagController.php:17
* @route '/tag'
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
    url: '/tag',
}

/**
* @see \Modules\Admin\Http\Controllers\TagController::index
* @see Modules/Admin/app/Http/Controllers/TagController.php:17
* @route '/tag'
*/
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Admin\Http\Controllers\TagController::index
* @see Modules/Admin/app/Http/Controllers/TagController.php:17
* @route '/tag'
*/
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Admin\Http\Controllers\TagController::index
* @see Modules/Admin/app/Http/Controllers/TagController.php:17
* @route '/tag'
*/
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Admin\Http\Controllers\TagController::create
* @see Modules/Admin/app/Http/Controllers/TagController.php:0
* @route '/tag/create'
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
    url: '/tag/create',
}

/**
* @see \Modules\Admin\Http\Controllers\TagController::create
* @see Modules/Admin/app/Http/Controllers/TagController.php:0
* @route '/tag/create'
*/
create.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Admin\Http\Controllers\TagController::create
* @see Modules/Admin/app/Http/Controllers/TagController.php:0
* @route '/tag/create'
*/
create.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Admin\Http\Controllers\TagController::create
* @see Modules/Admin/app/Http/Controllers/TagController.php:0
* @route '/tag/create'
*/
create.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Admin\Http\Controllers\TagController::store
* @see Modules/Admin/app/Http/Controllers/TagController.php:34
* @route '/tag'
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
    url: '/tag',
}

/**
* @see \Modules\Admin\Http\Controllers\TagController::store
* @see Modules/Admin/app/Http/Controllers/TagController.php:34
* @route '/tag'
*/
store.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Admin\Http\Controllers\TagController::store
* @see Modules/Admin/app/Http/Controllers/TagController.php:34
* @route '/tag'
*/
store.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Admin\Http\Controllers\TagController::show
* @see Modules/Admin/app/Http/Controllers/TagController.php:0
* @route '/tag/{tag}'
*/
export const show = (args: { tag: string | number } | [tag: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ['get','head'],
    url: '/tag/{tag}',
}

/**
* @see \Modules\Admin\Http\Controllers\TagController::show
* @see Modules/Admin/app/Http/Controllers/TagController.php:0
* @route '/tag/{tag}'
*/
show.url = (args: { tag: string | number } | [tag: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { tag: args }
    }

    if (Array.isArray(args)) {
        args = {
            tag: args[0],
        }
    }

    const parsedArgs = {
        tag: args.tag,
    }

    return show.definition.url
            .replace('{tag}', parsedArgs.tag.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admin\Http\Controllers\TagController::show
* @see Modules/Admin/app/Http/Controllers/TagController.php:0
* @route '/tag/{tag}'
*/
show.get = (args: { tag: string | number } | [tag: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Admin\Http\Controllers\TagController::show
* @see Modules/Admin/app/Http/Controllers/TagController.php:0
* @route '/tag/{tag}'
*/
show.head = (args: { tag: string | number } | [tag: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Admin\Http\Controllers\TagController::edit
* @see Modules/Admin/app/Http/Controllers/TagController.php:41
* @route '/tag/{tag}/edit'
*/
export const edit = (args: { tag: string | number } | [tag: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ['get','head'],
    url: '/tag/{tag}/edit',
}

/**
* @see \Modules\Admin\Http\Controllers\TagController::edit
* @see Modules/Admin/app/Http/Controllers/TagController.php:41
* @route '/tag/{tag}/edit'
*/
edit.url = (args: { tag: string | number } | [tag: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { tag: args }
    }

    if (Array.isArray(args)) {
        args = {
            tag: args[0],
        }
    }

    const parsedArgs = {
        tag: args.tag,
    }

    return edit.definition.url
            .replace('{tag}', parsedArgs.tag.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admin\Http\Controllers\TagController::edit
* @see Modules/Admin/app/Http/Controllers/TagController.php:41
* @route '/tag/{tag}/edit'
*/
edit.get = (args: { tag: string | number } | [tag: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Admin\Http\Controllers\TagController::edit
* @see Modules/Admin/app/Http/Controllers/TagController.php:41
* @route '/tag/{tag}/edit'
*/
edit.head = (args: { tag: string | number } | [tag: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Admin\Http\Controllers\TagController::update
* @see Modules/Admin/app/Http/Controllers/TagController.php:46
* @route '/tag/{tag}'
*/
export const update = (args: { tag: string | number } | [tag: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ['put','patch'],
    url: '/tag/{tag}',
}

/**
* @see \Modules\Admin\Http\Controllers\TagController::update
* @see Modules/Admin/app/Http/Controllers/TagController.php:46
* @route '/tag/{tag}'
*/
update.url = (args: { tag: string | number } | [tag: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { tag: args }
    }

    if (Array.isArray(args)) {
        args = {
            tag: args[0],
        }
    }

    const parsedArgs = {
        tag: args.tag,
    }

    return update.definition.url
            .replace('{tag}', parsedArgs.tag.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admin\Http\Controllers\TagController::update
* @see Modules/Admin/app/Http/Controllers/TagController.php:46
* @route '/tag/{tag}'
*/
update.put = (args: { tag: string | number } | [tag: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Admin\Http\Controllers\TagController::update
* @see Modules/Admin/app/Http/Controllers/TagController.php:46
* @route '/tag/{tag}'
*/
update.patch = (args: { tag: string | number } | [tag: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Admin\Http\Controllers\TagController::destroy
* @see Modules/Admin/app/Http/Controllers/TagController.php:53
* @route '/tag/{tag}'
*/
export const destroy = (args: { tag: string | number } | [tag: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ['delete'],
    url: '/tag/{tag}',
}

/**
* @see \Modules\Admin\Http\Controllers\TagController::destroy
* @see Modules/Admin/app/Http/Controllers/TagController.php:53
* @route '/tag/{tag}'
*/
destroy.url = (args: { tag: string | number } | [tag: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { tag: args }
    }

    if (Array.isArray(args)) {
        args = {
            tag: args[0],
        }
    }

    const parsedArgs = {
        tag: args.tag,
    }

    return destroy.definition.url
            .replace('{tag}', parsedArgs.tag.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admin\Http\Controllers\TagController::destroy
* @see Modules/Admin/app/Http/Controllers/TagController.php:53
* @route '/tag/{tag}'
*/
destroy.delete = (args: { tag: string | number } | [tag: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const TagController = { storeMany, destroyMany, index, create, store, show, edit, update, destroy }

export default TagController