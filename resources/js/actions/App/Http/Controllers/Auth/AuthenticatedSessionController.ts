import { queryParams, type QueryParams } from './../../../../../wayfinder'

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::redirectToGoogle
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:63
* @route '/register/google'
*/
export const redirectToGoogle = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: redirectToGoogle.url(options),
    method: 'get',
})

redirectToGoogle.definition = {
    methods: ['get','head'],
    url: '/register/google',
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::redirectToGoogle
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:63
* @route '/register/google'
*/
redirectToGoogle.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return redirectToGoogle.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::redirectToGoogle
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:63
* @route '/register/google'
*/
redirectToGoogle.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: redirectToGoogle.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::redirectToGoogle
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:63
* @route '/register/google'
*/
redirectToGoogle.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: redirectToGoogle.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::handleGoogleCallback
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:68
* @route '/register/google/callback'
*/
export const handleGoogleCallback = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: handleGoogleCallback.url(options),
    method: 'get',
})

handleGoogleCallback.definition = {
    methods: ['get','head'],
    url: '/register/google/callback',
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::handleGoogleCallback
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:68
* @route '/register/google/callback'
*/
handleGoogleCallback.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return handleGoogleCallback.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::handleGoogleCallback
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:68
* @route '/register/google/callback'
*/
handleGoogleCallback.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: handleGoogleCallback.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::handleGoogleCallback
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:68
* @route '/register/google/callback'
*/
handleGoogleCallback.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: handleGoogleCallback.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::create
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:25
* @route '/login'
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
    url: '/login',
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::create
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:25
* @route '/login'
*/
create.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::create
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:25
* @route '/login'
*/
create.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::create
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:25
* @route '/login'
*/
create.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::store
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:36
* @route '/login'
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
    url: '/login',
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::store
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:36
* @route '/login'
*/
store.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::store
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:36
* @route '/login'
*/
store.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::destroy
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:52
* @route '/logout'
*/
export const destroy = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: destroy.url(options),
    method: 'post',
})

destroy.definition = {
    methods: ['post'],
    url: '/logout',
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::destroy
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:52
* @route '/logout'
*/
destroy.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return destroy.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\AuthenticatedSessionController::destroy
* @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:52
* @route '/logout'
*/
destroy.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: destroy.url(options),
    method: 'post',
})

const AuthenticatedSessionController = { redirectToGoogle, handleGoogleCallback, create, store, destroy }

export default AuthenticatedSessionController