import load from './load'
import { queryParams, type QueryParams } from './../../wayfinder'

/**
* @see \Modules\Customer\Http\Controllers\PostController::timeline
* @see Modules/Customer/app/Http/Controllers/PostController.php:118
* @route '/post/timeline'
*/
export const timeline = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: timeline.url(options),
    method: 'get',
})

timeline.definition = {
    methods: ['get','head'],
    url: '/post/timeline',
}

/**
* @see \Modules\Customer\Http\Controllers\PostController::timeline
* @see Modules/Customer/app/Http/Controllers/PostController.php:118
* @route '/post/timeline'
*/
timeline.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return timeline.definition.url + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\PostController::timeline
* @see Modules/Customer/app/Http/Controllers/PostController.php:118
* @route '/post/timeline'
*/
timeline.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: timeline.url(options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\PostController::timeline
* @see Modules/Customer/app/Http/Controllers/PostController.php:118
* @route '/post/timeline'
*/
timeline.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: timeline.url(options),
    method: 'head',
})

import { queryParams, type QueryParams, validateParameters } from './../../wayfinder'

/**
* @see \Modules\Customer\Http\Controllers\PostController::load
* @see Modules/Customer/app/Http/Controllers/PostController.php:30
* @route '/post/load/{type?}'
*/
export const load = (args?: { type?: string | number } | [type: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: load.url(args, options),
    method: 'get',
})

load.definition = {
    methods: ['get','head'],
    url: '/post/load/{type?}',
}

/**
* @see \Modules\Customer\Http\Controllers\PostController::load
* @see Modules/Customer/app/Http/Controllers/PostController.php:30
* @route '/post/load/{type?}'
*/
load.url = (args?: { type?: string | number } | [type: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { type: args }
    }

    if (Array.isArray(args)) {
        args = {
            type: args[0],
        }
    }

    validateParameters(args, [
        "type",
    ])

    const parsedArgs = {
        type: args?.type,
    }

    return load.definition.url
            .replace('{type?}', parsedArgs.type?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\PostController::load
* @see Modules/Customer/app/Http/Controllers/PostController.php:30
* @route '/post/load/{type?}'
*/
load.get = (args?: { type?: string | number } | [type: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: load.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\PostController::load
* @see Modules/Customer/app/Http/Controllers/PostController.php:30
* @route '/post/load/{type?}'
*/
load.head = (args?: { type?: string | number } | [type: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: load.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Customer\Http\Controllers\PostController::like
* @see Modules/Customer/app/Http/Controllers/PostController.php:80
* @route '/post/like/{post}'
*/
export const like = (args: { post: string | number } | [post: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: like.url(args, options),
    method: 'post',
})

like.definition = {
    methods: ['post'],
    url: '/post/like/{post}',
}

/**
* @see \Modules\Customer\Http\Controllers\PostController::like
* @see Modules/Customer/app/Http/Controllers/PostController.php:80
* @route '/post/like/{post}'
*/
like.url = (args: { post: string | number } | [post: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { post: args }
    }

    if (Array.isArray(args)) {
        args = {
            post: args[0],
        }
    }

    const parsedArgs = {
        post: args.post,
    }

    return like.definition.url
            .replace('{post}', parsedArgs.post.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\PostController::like
* @see Modules/Customer/app/Http/Controllers/PostController.php:80
* @route '/post/like/{post}'
*/
like.post = (args: { post: string | number } | [post: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: like.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Customer\Http\Controllers\PostController::unlike
* @see Modules/Customer/app/Http/Controllers/PostController.php:93
* @route '/post/unlike/{post}'
*/
export const unlike = (args: { post: string | number } | [post: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: unlike.url(args, options),
    method: 'post',
})

unlike.definition = {
    methods: ['post'],
    url: '/post/unlike/{post}',
}

/**
* @see \Modules\Customer\Http\Controllers\PostController::unlike
* @see Modules/Customer/app/Http/Controllers/PostController.php:93
* @route '/post/unlike/{post}'
*/
unlike.url = (args: { post: string | number } | [post: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { post: args }
    }

    if (Array.isArray(args)) {
        args = {
            post: args[0],
        }
    }

    const parsedArgs = {
        post: args.post,
    }

    return unlike.definition.url
            .replace('{post}', parsedArgs.post.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\PostController::unlike
* @see Modules/Customer/app/Http/Controllers/PostController.php:93
* @route '/post/unlike/{post}'
*/
unlike.post = (args: { post: string | number } | [post: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: unlike.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Customer\Http\Controllers\PostController::index
* @see Modules/Customer/app/Http/Controllers/PostController.php:19
* @route '/post'
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
    url: '/post',
}

/**
* @see \Modules\Customer\Http\Controllers\PostController::index
* @see Modules/Customer/app/Http/Controllers/PostController.php:19
* @route '/post'
*/
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\PostController::index
* @see Modules/Customer/app/Http/Controllers/PostController.php:19
* @route '/post'
*/
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\PostController::index
* @see Modules/Customer/app/Http/Controllers/PostController.php:19
* @route '/post'
*/
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Customer\Http\Controllers\PostController::store
* @see Modules/Customer/app/Http/Controllers/PostController.php:67
* @route '/post'
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
    url: '/post',
}

/**
* @see \Modules\Customer\Http\Controllers\PostController::store
* @see Modules/Customer/app/Http/Controllers/PostController.php:67
* @route '/post'
*/
store.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\PostController::store
* @see Modules/Customer/app/Http/Controllers/PostController.php:67
* @route '/post'
*/
store.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Customer\Http\Controllers\PostController::show
* @see Modules/Customer/app/Http/Controllers/PostController.php:56
* @route '/post/{post}'
*/
export const show = (args: { post: string | number } | [post: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ['get','head'],
    url: '/post/{post}',
}

/**
* @see \Modules\Customer\Http\Controllers\PostController::show
* @see Modules/Customer/app/Http/Controllers/PostController.php:56
* @route '/post/{post}'
*/
show.url = (args: { post: string | number } | [post: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { post: args }
    }

    if (Array.isArray(args)) {
        args = {
            post: args[0],
        }
    }

    const parsedArgs = {
        post: args.post,
    }

    return show.definition.url
            .replace('{post}', parsedArgs.post.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\PostController::show
* @see Modules/Customer/app/Http/Controllers/PostController.php:56
* @route '/post/{post}'
*/
show.get = (args: { post: string | number } | [post: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\PostController::show
* @see Modules/Customer/app/Http/Controllers/PostController.php:56
* @route '/post/{post}'
*/
show.head = (args: { post: string | number } | [post: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Customer\Http\Controllers\PostController::update
* @see Modules/Customer/app/Http/Controllers/PostController.php:0
* @route '/post/{post}'
*/
export const update = (args: { post: string | number } | [post: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ['put','patch'],
    url: '/post/{post}',
}

/**
* @see \Modules\Customer\Http\Controllers\PostController::update
* @see Modules/Customer/app/Http/Controllers/PostController.php:0
* @route '/post/{post}'
*/
update.url = (args: { post: string | number } | [post: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { post: args }
    }

    if (Array.isArray(args)) {
        args = {
            post: args[0],
        }
    }

    const parsedArgs = {
        post: args.post,
    }

    return update.definition.url
            .replace('{post}', parsedArgs.post.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\PostController::update
* @see Modules/Customer/app/Http/Controllers/PostController.php:0
* @route '/post/{post}'
*/
update.put = (args: { post: string | number } | [post: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Customer\Http\Controllers\PostController::update
* @see Modules/Customer/app/Http/Controllers/PostController.php:0
* @route '/post/{post}'
*/
update.patch = (args: { post: string | number } | [post: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Customer\Http\Controllers\PostController::destroy
* @see Modules/Customer/app/Http/Controllers/PostController.php:106
* @route '/post/{post}'
*/
export const destroy = (args: { post: string | number } | [post: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ['delete'],
    url: '/post/{post}',
}

/**
* @see \Modules\Customer\Http\Controllers\PostController::destroy
* @see Modules/Customer/app/Http/Controllers/PostController.php:106
* @route '/post/{post}'
*/
destroy.url = (args: { post: string | number } | [post: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { post: args }
    }

    if (Array.isArray(args)) {
        args = {
            post: args[0],
        }
    }

    const parsedArgs = {
        post: args.post,
    }

    return destroy.definition.url
            .replace('{post}', parsedArgs.post.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\PostController::destroy
* @see Modules/Customer/app/Http/Controllers/PostController.php:106
* @route '/post/{post}'
*/
destroy.delete = (args: { post: string | number } | [post: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const post = {
    timeline,
    load,
    like,
    unlike,
    index,
    store,
    show,
    update,
    destroy,
}

export default post