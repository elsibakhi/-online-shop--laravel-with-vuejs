import { queryParams, type QueryParams } from './../../../../../wayfinder'

/**
* @see \Modules\Finance\Http\Controllers\BidController::show
* @see Modules/Finance/app/Http/Controllers/BidController.php:18
* @route '/auction/{auction}/bid'
*/
export const show = (args: { auction: number | { id: number } } | [auction: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ['get','head'],
    url: '/auction/{auction}/bid',
}

/**
* @see \Modules\Finance\Http\Controllers\BidController::show
* @see Modules/Finance/app/Http/Controllers/BidController.php:18
* @route '/auction/{auction}/bid'
*/
show.url = (args: { auction: number | { id: number } } | [auction: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { auction: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { auction: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            auction: args[0],
        }
    }

    const parsedArgs = {
        auction: typeof args.auction === 'object'
        ? args.auction.id
        : args.auction,
    }

    return show.definition.url
            .replace('{auction}', parsedArgs.auction.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\BidController::show
* @see Modules/Finance/app/Http/Controllers/BidController.php:18
* @route '/auction/{auction}/bid'
*/
show.get = (args: { auction: number | { id: number } } | [auction: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Finance\Http\Controllers\BidController::show
* @see Modules/Finance/app/Http/Controllers/BidController.php:18
* @route '/auction/{auction}/bid'
*/
show.head = (args: { auction: number | { id: number } } | [auction: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Finance\Http\Controllers\BidController::bid
* @see Modules/Finance/app/Http/Controllers/BidController.php:26
* @route '/auction/{auction}/bid'
*/
export const bid = (args: { auction: number | { id: number } } | [auction: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: bid.url(args, options),
    method: 'post',
})

bid.definition = {
    methods: ['post'],
    url: '/auction/{auction}/bid',
}

/**
* @see \Modules\Finance\Http\Controllers\BidController::bid
* @see Modules/Finance/app/Http/Controllers/BidController.php:26
* @route '/auction/{auction}/bid'
*/
bid.url = (args: { auction: number | { id: number } } | [auction: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { auction: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { auction: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            auction: args[0],
        }
    }

    const parsedArgs = {
        auction: typeof args.auction === 'object'
        ? args.auction.id
        : args.auction,
    }

    return bid.definition.url
            .replace('{auction}', parsedArgs.auction.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\BidController::bid
* @see Modules/Finance/app/Http/Controllers/BidController.php:26
* @route '/auction/{auction}/bid'
*/
bid.post = (args: { auction: number | { id: number } } | [auction: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: bid.url(args, options),
    method: 'post',
})

const BidController = { show, bid }

export default BidController