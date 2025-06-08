import { queryParams, type QueryParams } from './../../../../wayfinder'

/**
* @see \App\Http\Controllers\NotificationController::get
* @see app/Http/Controllers/NotificationController.php:8
* @route '/notification/get'
*/
export const get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: get.url(options),
    method: 'get',
})

get.definition = {
    methods: ['get','head'],
    url: '/notification/get',
}

/**
* @see \App\Http\Controllers\NotificationController::get
* @see app/Http/Controllers/NotificationController.php:8
* @route '/notification/get'
*/
get.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return get.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::get
* @see app/Http/Controllers/NotificationController.php:8
* @route '/notification/get'
*/
get.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: get.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NotificationController::get
* @see app/Http/Controllers/NotificationController.php:8
* @route '/notification/get'
*/
get.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: get.url(options),
    method: 'head',
})

const NotificationController = { get }

export default NotificationController