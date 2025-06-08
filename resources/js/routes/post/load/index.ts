import { queryParams, type QueryParams } from './../../../wayfinder'

/**
* @see \Modules\Customer\Http\Controllers\PostController::one
* @see Modules/Customer/app/Http/Controllers/PostController.php:45
* @route '/post/load/one/{post}'
*/
export const one = (args: { post: string | number } | [post: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: one.url(args, options),
    method: 'get',
})

one.definition = {
    methods: ['get','head'],
    url: '/post/load/one/{post}',
}

/**
* @see \Modules\Customer\Http\Controllers\PostController::one
* @see Modules/Customer/app/Http/Controllers/PostController.php:45
* @route '/post/load/one/{post}'
*/
one.url = (args: { post: string | number } | [post: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return one.definition.url
            .replace('{post}', parsedArgs.post.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\PostController::one
* @see Modules/Customer/app/Http/Controllers/PostController.php:45
* @route '/post/load/one/{post}'
*/
one.get = (args: { post: string | number } | [post: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: one.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\PostController::one
* @see Modules/Customer/app/Http/Controllers/PostController.php:45
* @route '/post/load/one/{post}'
*/
one.head = (args: { post: string | number } | [post: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: one.url(args, options),
    method: 'head',
})

const load = {
    one,
}

export default load