import { queryParams, type QueryParams } from './../../../../../wayfinder'

/**
* @see \Modules\Admin\Http\Controllers\SubCategoryController::index
* @see Modules/Admin/app/Http/Controllers/SubCategoryController.php:16
* @route '/subcategory'
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
    url: '/subcategory',
}

/**
* @see \Modules\Admin\Http\Controllers\SubCategoryController::index
* @see Modules/Admin/app/Http/Controllers/SubCategoryController.php:16
* @route '/subcategory'
*/
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Admin\Http\Controllers\SubCategoryController::index
* @see Modules/Admin/app/Http/Controllers/SubCategoryController.php:16
* @route '/subcategory'
*/
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Admin\Http\Controllers\SubCategoryController::index
* @see Modules/Admin/app/Http/Controllers/SubCategoryController.php:16
* @route '/subcategory'
*/
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Admin\Http\Controllers\SubCategoryController::create
* @see Modules/Admin/app/Http/Controllers/SubCategoryController.php:0
* @route '/subcategory/create'
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
    url: '/subcategory/create',
}

/**
* @see \Modules\Admin\Http\Controllers\SubCategoryController::create
* @see Modules/Admin/app/Http/Controllers/SubCategoryController.php:0
* @route '/subcategory/create'
*/
create.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Admin\Http\Controllers\SubCategoryController::create
* @see Modules/Admin/app/Http/Controllers/SubCategoryController.php:0
* @route '/subcategory/create'
*/
create.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Admin\Http\Controllers\SubCategoryController::create
* @see Modules/Admin/app/Http/Controllers/SubCategoryController.php:0
* @route '/subcategory/create'
*/
create.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Admin\Http\Controllers\SubCategoryController::store
* @see Modules/Admin/app/Http/Controllers/SubCategoryController.php:24
* @route '/subcategory'
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
    url: '/subcategory',
}

/**
* @see \Modules\Admin\Http\Controllers\SubCategoryController::store
* @see Modules/Admin/app/Http/Controllers/SubCategoryController.php:24
* @route '/subcategory'
*/
store.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Admin\Http\Controllers\SubCategoryController::store
* @see Modules/Admin/app/Http/Controllers/SubCategoryController.php:24
* @route '/subcategory'
*/
store.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Admin\Http\Controllers\SubCategoryController::show
* @see Modules/Admin/app/Http/Controllers/SubCategoryController.php:0
* @route '/subcategory/{subcategory}'
*/
export const show = (args: { subcategory: string | number } | [subcategory: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ['get','head'],
    url: '/subcategory/{subcategory}',
}

/**
* @see \Modules\Admin\Http\Controllers\SubCategoryController::show
* @see Modules/Admin/app/Http/Controllers/SubCategoryController.php:0
* @route '/subcategory/{subcategory}'
*/
show.url = (args: { subcategory: string | number } | [subcategory: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { subcategory: args }
    }

    if (Array.isArray(args)) {
        args = {
            subcategory: args[0],
        }
    }

    const parsedArgs = {
        subcategory: args.subcategory,
    }

    return show.definition.url
            .replace('{subcategory}', parsedArgs.subcategory.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admin\Http\Controllers\SubCategoryController::show
* @see Modules/Admin/app/Http/Controllers/SubCategoryController.php:0
* @route '/subcategory/{subcategory}'
*/
show.get = (args: { subcategory: string | number } | [subcategory: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Admin\Http\Controllers\SubCategoryController::show
* @see Modules/Admin/app/Http/Controllers/SubCategoryController.php:0
* @route '/subcategory/{subcategory}'
*/
show.head = (args: { subcategory: string | number } | [subcategory: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Admin\Http\Controllers\SubCategoryController::edit
* @see Modules/Admin/app/Http/Controllers/SubCategoryController.php:32
* @route '/subcategory/{subcategory}/edit'
*/
export const edit = (args: { subcategory: string | number } | [subcategory: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ['get','head'],
    url: '/subcategory/{subcategory}/edit',
}

/**
* @see \Modules\Admin\Http\Controllers\SubCategoryController::edit
* @see Modules/Admin/app/Http/Controllers/SubCategoryController.php:32
* @route '/subcategory/{subcategory}/edit'
*/
edit.url = (args: { subcategory: string | number } | [subcategory: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { subcategory: args }
    }

    if (Array.isArray(args)) {
        args = {
            subcategory: args[0],
        }
    }

    const parsedArgs = {
        subcategory: args.subcategory,
    }

    return edit.definition.url
            .replace('{subcategory}', parsedArgs.subcategory.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admin\Http\Controllers\SubCategoryController::edit
* @see Modules/Admin/app/Http/Controllers/SubCategoryController.php:32
* @route '/subcategory/{subcategory}/edit'
*/
edit.get = (args: { subcategory: string | number } | [subcategory: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Admin\Http\Controllers\SubCategoryController::edit
* @see Modules/Admin/app/Http/Controllers/SubCategoryController.php:32
* @route '/subcategory/{subcategory}/edit'
*/
edit.head = (args: { subcategory: string | number } | [subcategory: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Admin\Http\Controllers\SubCategoryController::update
* @see Modules/Admin/app/Http/Controllers/SubCategoryController.php:38
* @route '/subcategory/{subcategory}'
*/
export const update = (args: { subcategory: string | number } | [subcategory: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ['put','patch'],
    url: '/subcategory/{subcategory}',
}

/**
* @see \Modules\Admin\Http\Controllers\SubCategoryController::update
* @see Modules/Admin/app/Http/Controllers/SubCategoryController.php:38
* @route '/subcategory/{subcategory}'
*/
update.url = (args: { subcategory: string | number } | [subcategory: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { subcategory: args }
    }

    if (Array.isArray(args)) {
        args = {
            subcategory: args[0],
        }
    }

    const parsedArgs = {
        subcategory: args.subcategory,
    }

    return update.definition.url
            .replace('{subcategory}', parsedArgs.subcategory.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admin\Http\Controllers\SubCategoryController::update
* @see Modules/Admin/app/Http/Controllers/SubCategoryController.php:38
* @route '/subcategory/{subcategory}'
*/
update.put = (args: { subcategory: string | number } | [subcategory: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Admin\Http\Controllers\SubCategoryController::update
* @see Modules/Admin/app/Http/Controllers/SubCategoryController.php:38
* @route '/subcategory/{subcategory}'
*/
update.patch = (args: { subcategory: string | number } | [subcategory: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Admin\Http\Controllers\SubCategoryController::destroy
* @see Modules/Admin/app/Http/Controllers/SubCategoryController.php:46
* @route '/subcategory/{subcategory}'
*/
export const destroy = (args: { subcategory: string | number } | [subcategory: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ['delete'],
    url: '/subcategory/{subcategory}',
}

/**
* @see \Modules\Admin\Http\Controllers\SubCategoryController::destroy
* @see Modules/Admin/app/Http/Controllers/SubCategoryController.php:46
* @route '/subcategory/{subcategory}'
*/
destroy.url = (args: { subcategory: string | number } | [subcategory: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { subcategory: args }
    }

    if (Array.isArray(args)) {
        args = {
            subcategory: args[0],
        }
    }

    const parsedArgs = {
        subcategory: args.subcategory,
    }

    return destroy.definition.url
            .replace('{subcategory}', parsedArgs.subcategory.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admin\Http\Controllers\SubCategoryController::destroy
* @see Modules/Admin/app/Http/Controllers/SubCategoryController.php:46
* @route '/subcategory/{subcategory}'
*/
destroy.delete = (args: { subcategory: string | number } | [subcategory: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const SubCategoryController = { index, create, store, show, edit, update, destroy }

export default SubCategoryController