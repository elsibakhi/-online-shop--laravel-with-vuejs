import { queryParams, type QueryParams } from './../../../wayfinder'

/**
* @see \Modules\Finance\Http\Controllers\InvoiceController::download
* @see Modules/Finance/app/Http/Controllers/InvoiceController.php:26
* @route '/invoice/buy/{transaction}/download'
*/
export const download = (args: { transaction: string | number } | [transaction: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: download.url(args, options),
    method: 'get',
})

download.definition = {
    methods: ['get','head'],
    url: '/invoice/buy/{transaction}/download',
}

/**
* @see \Modules\Finance\Http\Controllers\InvoiceController::download
* @see Modules/Finance/app/Http/Controllers/InvoiceController.php:26
* @route '/invoice/buy/{transaction}/download'
*/
download.url = (args: { transaction: string | number } | [transaction: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { transaction: args }
    }

    if (Array.isArray(args)) {
        args = {
            transaction: args[0],
        }
    }

    const parsedArgs = {
        transaction: args.transaction,
    }

    return download.definition.url
            .replace('{transaction}', parsedArgs.transaction.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\InvoiceController::download
* @see Modules/Finance/app/Http/Controllers/InvoiceController.php:26
* @route '/invoice/buy/{transaction}/download'
*/
download.get = (args: { transaction: string | number } | [transaction: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: download.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Finance\Http\Controllers\InvoiceController::download
* @see Modules/Finance/app/Http/Controllers/InvoiceController.php:26
* @route '/invoice/buy/{transaction}/download'
*/
download.head = (args: { transaction: string | number } | [transaction: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: download.url(args, options),
    method: 'head',
})

const buy = {
    download,
}

export default buy