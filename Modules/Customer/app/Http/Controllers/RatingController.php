<?php

namespace Modules\Customer\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Modules\Customer\Http\Requests\StoreRatingRequest;
use Modules\Customer\Services\RatingService;

class RatingController extends Controller
{
    public function __construct(protected RatingService $ratingService) {}

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('customer::index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('customer::create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRatingRequest $request, $item)
    {

        $this->ratingService->store($item, $request->validated());

        return back();

    }

    /**
     * List ratings for a specific item as pages
     */
    public function load($item)
    {
        return $this->ratingService->loadForItem($item);
       
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
