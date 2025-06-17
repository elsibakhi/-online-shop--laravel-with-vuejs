<?php

namespace Modules\Finance\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Modules\Finance\Actions\Bid\GetAuctionPageDataAction;
use Modules\Finance\Actions\Bid\MakeBidOnAuctionAction;
use Modules\Finance\Http\Requests\CreateBidRequest;
use Modules\Vendor\Models\Auction;

class BidController extends Controller
{
    /**
     * Show the specified resource.
     */
    public function show(GetAuctionPageDataAction $getAuctionPageDataAction, Auction $auction)
    {

        $data = $getAuctionPageDataAction->execute($auction);

        return Inertia::render('Finance::Auction/AuctionBid', $data);
    }

    public function bid(CreateBidRequest $request, MakeBidOnAuctionAction $makeBidOnAuctionAction, $auction)
    {

        $makeBidOnAuctionAction->execute($request->validated(), $auction);

        return redirect()->back()->with('success', 'Bid placed successfully.');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        return view('finance::edit');
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
