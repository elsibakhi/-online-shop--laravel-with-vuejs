import { queryParams, type QueryParams } from './../../../../../wayfinder'

/**
* @see \Modules\Admin\Http\Controllers\CategoryController::index
* @see Modules/Admin/app/Http/Controllers/CategoryController.php:16
* @route '/category'
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
    url: '/category',
}

/**
* @see \Modules\Admin\Http\Controllers\CategoryController::index
* @see Modules/Admin/app/Http/Controllers/CategoryController.php:16
* @route '/category'
*/
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Admin\Http\Controllers\CategoryController::index
* @see Modules/Admin/app/Http/Controllers/CategoryController.php:16
* @route '/category'
*/
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Admin\Http\Controllers\CategoryController::index
* @see Modules/Admin/app/Http/Controllers/CategoryController.php:16
* @route '/category'
*/
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Admin\Http\Controllers\CategoryController::create
* @see Modules/Admin/app/Http/Controllers/CategoryController.php:0
* @route '/category/create'
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
    url: '/category/create',
}

/**
* @see \Modules\Admin\Http\Controllers\CategoryController::create
* @see Modules/Admin/app/Http/Controllers/CategoryController.php:0
* @route '/category/create'
*/
create.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Admin\Http\Controllers\CategoryController::create
* @see Modules/Admin/app/Http/Controllers/CategoryController.php:0
* @route '/category/create'
*/
create.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Admin\Http\Controllers\CategoryController::create
* @see Modules/Admin/app/Http/Controllers/CategoryController.php:0
* @route '/category/create'
*/
create.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Admin\Http\Controllers\CategoryController::store
* @see Modules/Admin/app/Http/Controllers/CategoryController.php:24
* @route '/category'
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
    url: '/category',
}

/**
* @see \Modules\Admin\Http\Controllers\CategoryController::store
* @see Modules/Admin/app/Http/Controllers/CategoryController.php:24
* @route '/category'
*/
store.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Admin\Http\Controllers\CategoryController::store
* @see Modules/Admin/app/Http/Controllers/CategoryController.php:24
* @route '/category'
*/
store.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Admin\Http\Controllers\CategoryController::show
* @see Modules/Admin/app/Http/Controllers/CategoryController.php:0
* @route '/category/{category}'
*/
export const show = (args: { category: string | number } | [category: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ['get','head'],
    url: '/category/{category}',
}

/**
* @see \Modules\Admin\Http\Controllers\CategoryController::show
* @see Modules/Admin/app/Http/Controllers/CategoryController.php:0
* @route '/category/{category}'
*/
show.url = (args: { category: string | number } | [category: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

    if (Array.isArray(args)) {
        args = {
            category: args[0],
        }
    }

    const parsedArgs = {
        category: args.category,
    }

    return show.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admin\Http\Controllers\CategoryController::show
* @see Modules/Admin/app/Http/Controllers/CategoryController.php:0
* @route '/category/{category}'
*/
show.get = (args: { category: string | number } | [category: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Admin\Http\Controllers\CategoryController::show
* @see Modules/Admin/app/Http/Controllers/CategoryController.php:0
* @route '/category/{category}'
*/
show.head = (args: { category: string | number } | [category: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Admin\Http\Controllers\CategoryController::edit
* @see Modules/Admin/app/Http/Controllers/CategoryController.php:32
* @route '/category/{category}/edit'
*/
export const edit = (args: { category: string | number } | [category: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ['get','head'],
    url: '/category/{category}/edit',
}

/**
* @see \Modules\Admin\Http\Controllers\CategoryController::edit
* @see Modules/Admin/app/Http/Controllers/CategoryController.php:32
* @route '/category/{category}/edit'
*/
edit.url = (args: { category: string | number } | [category: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

    if (Array.isArray(args)) {
        args = {
            category: args[0],
        }
    }

    const parsedArgs = {
        category: args.category,
    }

    return edit.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admin\Http\Controllers\CategoryController::edit
* @see Modules/Admin/app/Http/Controllers/CategoryController.php:32
* @route '/category/{category}/edit'
*/
edit.get = (args: { category: string | number } | [category: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Admin\Http\Controllers\CategoryController::edit
* @see Modules/Admin/app/Http/Controllers/CategoryController.php:32
* @route '/category/{category}/edit'
*/
edit.head = (args: { category: string | number } | [category: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Admin\Http\Controllers\CategoryController::update
* @see Modules/Admin/app/Http/Controllers/CategoryController.php:38
* @route '/category/{category}'
*/
export const update = (args: { category: string | number } | [category: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ['put','patch'],
    url: '/category/{category}',
}

/**
* @see \Modules\Admin\Http\Controllers\CategoryController::update
* @see Modules/Admin/app/Http/Controllers/CategoryController.php:38
* @route '/category/{category}'
*/
update.url = (args: { category: string | number } | [category: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

    if (Array.isArray(args)) {
        args = {
            category: args[0],
        }
    }

    const parsedArgs = {
        category: args.category,
    }

    return update.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admin\Http\Controllers\CategoryController::update
* @see Modules/Admin/app/Http/Controllers/CategoryController.php:38
* @route '/category/{category}'
*/
update.put = (args: { category: string | number } | [category: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Admin\Http\Controllers\CategoryController::update
* @see Modules/Admin/app/Http/Controllers/CategoryController.php:38
* @route '/category/{category}'
*/
update.patch = (args: { category: string | number } | [category: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Admin\Http\Controllers\CategoryController::destroy
* @see Modules/Admin/app/Http/Controllers/CategoryController.php:46
* @route '/category/{category}'
*/
export const destroy = (args: { category: string | number } | [category: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ['delete'],
    url: '/category/{category}',
}

/**
* @see \Modules\Admin\Http\Controllers\CategoryController::destroy
* @see Modules/Admin/app/Http/Controllers/CategoryController.php:46
* @route '/category/{category}'
*/
destroy.url = (args: { category: string | number } | [category: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

    if (Array.isArray(args)) {
        args = {
            category: args[0],
        }
    }

    const parsedArgs = {
        category: args.category,
    }

    return destroy.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Admin\Http\Controllers\CategoryController::destroy
* @see Modules/Admin/app/Http/Controllers/CategoryController.php:46
* @route '/category/{category}'
*/
destroy.delete = (args: { category: string | number } | [category: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const CategoryController = { index, create, store, show, edit, update, destroy }

export default CategoryController