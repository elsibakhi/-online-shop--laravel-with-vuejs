import { queryParams, type QueryParams } from './../../../wayfinder'

/**
* @see \Modules\Admin\Http\Controllers\TagController::multi
* @see Modules/Admin/app/Http/Controllers/TagController.php:26
* @route '/tag/multi/store'
*/
export const multi = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: multi.url(options),
    method: 'post',
})

multi.definition = {
    methods: ['post'],
    url: '/tag/multi/store',
}

/**
* @see \Modules\Admin\Http\Controllers\TagController::multi
* @see Modules/Admin/app/Http/Controllers/TagController.php:26
* @route '/tag/multi/store'
*/
multi.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return multi.definition.url + queryParams(options)
}

/**
* @see \Modules\Admin\Http\Controllers\TagController::multi
* @see Modules/Admin/app/Http/Controllers/TagController.php:26
* @route '/tag/multi/store'
*/
multi.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: multi.url(options),
    method: 'post',
})

