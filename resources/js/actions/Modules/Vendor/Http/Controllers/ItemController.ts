import { queryParams, type QueryParams } from './../../../../../wayfinder'

/**
* @see \Modules\Vendor\Http\Controllers\ItemController::loadItems
* @see Modules/Vendor/app/Http/Controllers/ItemController.php:43
* @route '/item/load'
*/
export const loadItems = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: loadItems.url(options),
    method: 'get',
})

loadItems.definition = {
    methods: ['get','head'],
    url: '/item/load',
}

/**
* @see \Modules\Vendor\Http\Controllers\ItemController::loadItems
* @see Modules/Vendor/app/Http/Controllers/ItemController.php:43
* @route '/item/load'
*/
loadItems.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return loadItems.definition.url + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\ItemController::loadItems
* @see Modules/Vendor/app/Http/Controllers/ItemController.php:43
* @route '/item/load'
*/
loadItems.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: loadItems.url(options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\ItemController::loadItems
* @see Modules/Vendor/app/Http/Controllers/ItemController.php:43
* @route '/item/load'
*/
loadItems.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: loadItems.url(options),
    method: 'head',
})

/**
* @see \Modules\Vendor\Http\Controllers\ItemController::loadAllItems
* @see Modules/Vendor/app/Http/Controllers/ItemController.php:56
* @route '/item/load/all'
*/
export const loadAllItems = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: loadAllItems.url(options),
    method: 'get',
})

loadAllItems.definition = {
    methods: ['get','head'],
    url: '/item/load/all',
}

/**
* @see \Modules\Vendor\Http\Controllers\ItemController::loadAllItems
* @see Modules/Vendor/app/Http/Controllers/ItemController.php:56
* @route '/item/load/all'
*/
loadAllItems.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return loadAllItems.definition.url + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\ItemController::loadAllItems
* @see Modules/Vendor/app/Http/Controllers/ItemController.php:56
* @route '/item/load/all'
*/
loadAllItems.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: loadAllItems.url(options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\ItemController::loadAllItems
* @see Modules/Vendor/app/Http/Controllers/ItemController.php:56
* @route '/item/load/all'
*/
loadAllItems.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: loadAllItems.url(options),
    method: 'head',
})

/**
* @see \Modules\Vendor\Http\Controllers\ItemController::search
* @see Modules/Vendor/app/Http/Controllers/ItemController.php:133
* @route '/item/search'
*/
export const search = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: search.url(options),
    method: 'get',
})

search.definition = {
    methods: ['get','head'],
    url: '/item/search',
}

/**
* @see \Modules\Vendor\Http\Controllers\ItemController::search
* @see Modules/Vendor/app/Http/Controllers/ItemController.php:133
* @route '/item/search'
*/
search.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\ItemController::search
* @see Modules/Vendor/app/Http/Controllers/ItemController.php:133
* @route '/item/search'
*/
search.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: search.url(options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\ItemController::search
* @see Modules/Vendor/app/Http/Controllers/ItemController.php:133
* @route '/item/search'
*/
search.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: search.url(options),
    method: 'head',
})

/**
* @see \Modules\Vendor\Http\Controllers\ItemController::index
* @see Modules/Vendor/app/Http/Controllers/ItemController.php:23
* @route '/item'
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
    url: '/item',
}

/**
* @see \Modules\Vendor\Http\Controllers\ItemController::index
* @see Modules/Vendor/app/Http/Controllers/ItemController.php:23
* @route '/item'
*/
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\ItemController::index
* @see Modules/Vendor/app/Http/Controllers/ItemController.php:23
* @route '/item'
*/
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\ItemController::index
* @see Modules/Vendor/app/Http/Controllers/ItemController.php:23
* @route '/item'
*/
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Vendor\Http\Controllers\ItemController::store
* @see Modules/Vendor/app/Http/Controllers/ItemController.php:83
* @route '/item'
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
    url: '/item',
}

/**
* @see \Modules\Vendor\Http\Controllers\ItemController::store
* @see Modules/Vendor/app/Http/Controllers/ItemController.php:83
* @route '/item'
*/
store.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\ItemController::store
* @see Modules/Vendor/app/Http/Controllers/ItemController.php:83
* @route '/item'
*/
store.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Vendor\Http\Controllers\ItemController::edit
* @see Modules/Vendor/app/Http/Controllers/ItemController.php:97
* @route '/item/{item}/edit'
*/
export const edit = (args: { item: string | number } | [item: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ['get','head'],
    url: '/item/{item}/edit',
}

/**
* @see \Modules\Vendor\Http\Controllers\ItemController::edit
* @see Modules/Vendor/app/Http/Controllers/ItemController.php:97
* @route '/item/{item}/edit'
*/
edit.url = (args: { item: string | number } | [item: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { item: args }
    }

    if (Array.isArray(args)) {
        args = {
            item: args[0],
        }
    }

    const parsedArgs = {
        item: args.item,
    }

    return edit.definition.url
            .replace('{item}', parsedArgs.item.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\ItemController::edit
* @see Modules/Vendor/app/Http/Controllers/ItemController.php:97
* @route '/item/{item}/edit'
*/
edit.get = (args: { item: string | number } | [item: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\ItemController::edit
* @see Modules/Vendor/app/Http/Controllers/ItemController.php:97
* @route '/item/{item}/edit'
*/
edit.head = (args: { item: string | number } | [item: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Vendor\Http\Controllers\ItemController::update
* @see Modules/Vendor/app/Http/Controllers/ItemController.php:111
* @route '/item/{item}'
*/
export const update = (args: { item: string | number } | [item: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ['put','patch'],
    url: '/item/{item}',
}

/**
* @see \Modules\Vendor\Http\Controllers\ItemController::update
* @see Modules/Vendor/app/Http/Controllers/ItemController.php:111
* @route '/item/{item}'
*/
update.url = (args: { item: string | number } | [item: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { item: args }
    }

    if (Array.isArray(args)) {
        args = {
            item: args[0],
        }
    }

    const parsedArgs = {
        item: args.item,
    }

    return update.definition.url
            .replace('{item}', parsedArgs.item.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\ItemController::update
* @see Modules/Vendor/app/Http/Controllers/ItemController.php:111
* @route '/item/{item}'
*/
update.put = (args: { item: string | number } | [item: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Vendor\Http\Controllers\ItemController::update
* @see Modules/Vendor/app/Http/Controllers/ItemController.php:111
* @route '/item/{item}'
*/
update.patch = (args: { item: string | number } | [item: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Vendor\Http\Controllers\ItemController::destroy
* @see Modules/Vendor/app/Http/Controllers/ItemController.php:125
* @route '/item/{item}'
*/
export const destroy = (args: { item: string | number } | [item: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ['delete'],
    url: '/item/{item}',
}

/**
* @see \Modules\Vendor\Http\Controllers\ItemController::destroy
* @see Modules/Vendor/app/Http/Controllers/ItemController.php:125
* @route '/item/{item}'
*/
destroy.url = (args: { item: string | number } | [item: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { item: args }
    }

    if (Array.isArray(args)) {
        args = {
            item: args[0],
        }
    }

    const parsedArgs = {
        item: args.item,
    }

    return destroy.definition.url
            .replace('{item}', parsedArgs.item.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\ItemController::destroy
* @see Modules/Vendor/app/Http/Controllers/ItemController.php:125
* @route '/item/{item}'
*/
destroy.delete = (args: { item: string | number } | [item: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Vendor\Http\Controllers\ItemController::show
* @see Modules/Vendor/app/Http/Controllers/ItemController.php:70
* @route '/item/{item}'
*/
export const show = (args: { item: string | number } | [item: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ['get','head'],
    url: '/item/{item}',
}

/**
* @see \Modules\Vendor\Http\Controllers\ItemController::show
* @see Modules/Vendor/app/Http/Controllers/ItemController.php:70
* @route '/item/{item}'
*/
show.url = (args: { item: string | number } | [item: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { item: args }
    }

    if (Array.isArray(args)) {
        args = {
            item: args[0],
        }
    }

    const parsedArgs = {
        item: args.item,
    }

    return show.definition.url
            .replace('{item}', parsedArgs.item.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Vendor\Http\Controllers\ItemController::show
* @see Modules/Vendor/app/Http/Controllers/ItemController.php:70
* @route '/item/{item}'
*/
show.get = (args: { item: string | number } | [item: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Vendor\Http\Controllers\ItemController::show
* @see Modules/Vendor/app/Http/Controllers/ItemController.php:70
* @route '/item/{item}'
*/
show.head = (args: { item: string | number } | [item: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show.url(args, options),
    method: 'head',
})

const ItemController = { loadItems, loadAllItems, search, index, store, edit, update, destroy, show }

export default ItemController