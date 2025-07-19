import { queryParams, type QueryParams } from './../../wayfinder'

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::register
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:63
* @route '/register/google'
*/
export const register = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: register.url(options),
    method: 'get',
})

register.definition = {
    methods: ['get','head'],
    url: '/register/google',
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::register
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:63
* @route '/register/google'
*/
register.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::register
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:63
* @route '/register/google'
*/
register.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: register.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::register
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:63
* @route '/register/google'
*/
register.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: register.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::callback
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:68
* @route '/register/google/callback'
*/
export const callback = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: callback.url(options),
    method: 'get',
})

callback.definition = {
    methods: ['get','head'],
    url: '/register/google/callback',
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::callback
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:68
* @route '/register/google/callback'
*/
callback.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return callback.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::callback
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:68
* @route '/register/google/callback'
*/
callback.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: callback.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::callback
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:68
* @route '/register/google/callback'
*/
callback.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: callback.url(options),
    method: 'head',
})

const google = {
    register,
    callback,
}

export default google