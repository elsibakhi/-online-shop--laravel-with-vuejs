import { queryParams, type QueryParams } from './../../../../../wayfinder'

/**
* @see \Modules\Finance\Http\Controllers\InvoiceController::buy
* @see Modules/Finance/app/Http/Controllers/InvoiceController.php:15
* @route '/invoice/buy/{transaction}'
*/
export const buy = (args: { transaction: string | number } | [transaction: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: buy.url(args, options),
    method: 'get',
})

buy.definition = {
    methods: ['get','head'],
    url: '/invoice/buy/{transaction}',
}

/**
* @see \Modules\Finance\Http\Controllers\InvoiceController::buy
* @see Modules/Finance/app/Http/Controllers/InvoiceController.php:15
* @route '/invoice/buy/{transaction}'
*/
buy.url = (args: { transaction: string | number } | [transaction: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return buy.definition.url
            .replace('{transaction}', parsedArgs.transaction.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\InvoiceController::buy
* @see Modules/Finance/app/Http/Controllers/InvoiceController.php:15
* @route '/invoice/buy/{transaction}'
*/
buy.get = (args: { transaction: string | number } | [transaction: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: buy.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Finance\Http\Controllers\InvoiceController::buy
* @see Modules/Finance/app/Http/Controllers/InvoiceController.php:15
* @route '/invoice/buy/{transaction}'
*/
buy.head = (args: { transaction: string | number } | [transaction: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: buy.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Finance\Http\Controllers\InvoiceController::downloadInvoice
* @see Modules/Finance/app/Http/Controllers/InvoiceController.php:26
* @route '/invoice/buy/{transaction}/download'
*/
export const downloadInvoice = (args: { transaction: string | number } | [transaction: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: downloadInvoice.url(args, options),
    method: 'get',
})

downloadInvoice.definition = {
    methods: ['get','head'],
    url: '/invoice/buy/{transaction}/download',
}

/**
* @see \Modules\Finance\Http\Controllers\InvoiceController::downloadInvoice
* @see Modules/Finance/app/Http/Controllers/InvoiceController.php:26
* @route '/invoice/buy/{transaction}/download'
*/
downloadInvoice.url = (args: { transaction: string | number } | [transaction: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return downloadInvoice.definition.url
            .replace('{transaction}', parsedArgs.transaction.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Finance\Http\Controllers\InvoiceController::downloadInvoice
* @see Modules/Finance/app/Http/Controllers/InvoiceController.php:26
* @route '/invoice/buy/{transaction}/download'
*/
downloadInvoice.get = (args: { transaction: string | number } | [transaction: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: downloadInvoice.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Finance\Http\Controllers\InvoiceController::downloadInvoice
* @see Modules/Finance/app/Http/Controllers/InvoiceController.php:26
* @route '/invoice/buy/{transaction}/download'
*/
downloadInvoice.head = (args: { transaction: string | number } | [transaction: string | number ] | string | number, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: downloadInvoice.url(args, options),
    method: 'head',
})

const InvoiceController = { buy, downloadInvoice }

export default InvoiceController