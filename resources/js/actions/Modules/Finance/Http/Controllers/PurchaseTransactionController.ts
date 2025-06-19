import { queryParams, type QueryParams } from './../../../../../wayfinder'

/**
* @see \Modules\Finance\Http\Controllers\PurchaseTransactionController::index
* @see Modules/Finance/app/Http/Controllers/PurchaseTransactionController.php:17
* @route '/purchase/transactions'
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
    url: '/purchase/transactions',
}

/**
* @see \Modules\Finance\Http\Controllers\PurchaseTransactionController::index
* @see Modules/Finance/app/Http/Controllers/PurchaseTransactionController.php:17
* @route '/purchase/transactions'
*/
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\PurchaseTransactionController::index
* @see Modules/Finance/app/Http/Controllers/PurchaseTransactionController.php:17
* @route '/purchase/transactions'
*/
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Finance\Http\Controllers\PurchaseTransactionController::index
* @see Modules/Finance/app/Http/Controllers/PurchaseTransactionController.php:17
* @route '/purchase/transactions'
*/
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Finance\Http\Controllers\PurchaseTransactionController::destroy
* @see Modules/Finance/app/Http/Controllers/PurchaseTransactionController.php:25
* @route '/purchase/transactions/{transaction}'
*/
export const destroy = (args: { transaction: number | { id: number } } | [transaction: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ['delete'],
    url: '/purchase/transactions/{transaction}',
}

/**
* @see \Modules\Finance\Http\Controllers\PurchaseTransactionController::destroy
* @see Modules/Finance/app/Http/Controllers/PurchaseTransactionController.php:25
* @route '/purchase/transactions/{transaction}'
*/
destroy.url = (args: { transaction: number | { id: number } } | [transaction: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { transaction: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { transaction: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            transaction: args[0],
        }
    }

    const parsedArgs = {
        transaction: typeof args.transaction === 'object'
        ? args.transaction.id
        : args.transaction,
    }

    return destroy.definition.url
            .replace('{transaction}', parsedArgs.transaction.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\PurchaseTransactionController::destroy
* @see Modules/Finance/app/Http/Controllers/PurchaseTransactionController.php:25
* @route '/purchase/transactions/{transaction}'
*/
destroy.delete = (args: { transaction: number | { id: number } } | [transaction: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const PurchaseTransactionController = { index, destroy }

export default PurchaseTransactionController