<?php

namespace Modules\Customer\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Modules\Admin\Models\Category;
use Modules\Customer\Services\CustomerService;

class CustomerController extends Controller
{
    public function __construct(protected CustomerService $customerService) {}

    /**
     *  return guest customer landing page
     */
    public function index(): Response
    {
        $filters = [
            'category' => request()->get('category'),
            'search' => request()->get('search'),

        ];

        return Inertia::render('Customer::welcome', compact('filters'));
    }

    /**
     * load items for guest customers grouped by category
     */
    public function load(): string
    {
        return $this->customerService->guestCustomerIndex();
    }

    /**
     *  return auth customer dashboard page
     */
    public function authIndex(): Response
    {
        $filters = [
            'category' => request()->get('category'),
            'search' => request()->get('search'),

        ];

        $categories = Category::with('subCategories')->get();

        return Inertia::render('Customer::auth/dashboard', compact('categories', 'filters'));
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
