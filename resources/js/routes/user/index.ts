import { queryParams, type QueryParams } from './../../wayfinder'

/**
* @see \App\Http\Controllers\UserController::search
* @see app/Http/Controllers/UserController.php:11
* @route '/user/search/{query]'
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
    url: '/user/search/{query]',
}

/**
* @see \App\Http\Controllers\UserController::search
* @see app/Http/Controllers/UserController.php:11
* @route '/user/search/{query]'
*/
search.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::search
* @see app/Http/Controllers/UserController.php:11
* @route '/user/search/{query]'
*/
search.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: search.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::search
* @see app/Http/Controllers/UserController.php:11
* @route '/user/search/{query]'
*/
search.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: search.url(options),
    method: 'head',
})

const user = {
    search,
}

export default user