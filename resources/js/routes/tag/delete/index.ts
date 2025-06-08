import { queryParams, type QueryParams } from './../../../wayfinder'

/**
* @see \Modules\Admin\Http\Controllers\TagController::multi
* @see Modules/Admin/app/Http/Controllers/TagController.php:60
* @route '/tag/multi/delete'
*/
export const multi = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: multi.url(options),
    method: 'delete',
})

multi.definition = {
    methods: ['delete'],
    url: '/tag/multi/delete',
}

/**
* @see \Modules\Admin\Http\Controllers\TagController::multi
* @see Modules/Admin/app/Http/Controllers/TagController.php:60
* @route '/tag/multi/delete'
*/
multi.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return multi.definition.url + queryParams(options)
}

/**
* @see \Modules\Admin\Http\Controllers\TagController::multi
* @see Modules/Admin/app/Http/Controllers/TagController.php:60
* @route '/tag/multi/delete'
*/
multi.delete = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: multi.url(options),
    method: 'delete',
})

const delete = {
    multi,
}

export default delete