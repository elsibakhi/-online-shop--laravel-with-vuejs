<?php

namespace Modules\Customer\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Modules\Customer\Services\CustomerService;

class CustomerController extends Controller
{
    public function __construct(protected CustomerService $customerService) {}

    /**
     *  return guest customer landing page
     */
    public function index(): Response
    {

        return Inertia::render('Customer::welcome');
    }

    /**
     * load items for guest customers grouped by category
     */
    public function load(): string
    {
        return $this->customerService->guestCustomerIndex();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request) {}

    /**
     * Show the specified resource.
     */
    public function show($id)
    {
        return view('customer::show');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        return view('customer::edit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id) {}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id) {}
}
