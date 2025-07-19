<?php

namespace Modules\Vendor\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\SearchRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Modules\Vendor\Http\Requests\ItemRequest;
use Modules\Vendor\Services\ItemService;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
class ItemController extends Controller  implements HasMiddleware

{
    //

    public function __construct(protected ItemService $itemService) {
      
    }

        /**
     * Get the middleware that should be assigned to the controller.
     */
    public static function middleware(): array
    {
        return [
           
            new Middleware('hasRole:vendor', only: ['loadItems','store','edit','update','destroy']),
           
        ];
    }

    /**
     * index
     *
     * @return \Inertia\Response
     */
    public function index(Request $request)
    {

        $data = [];
        if ($request->query('loading') == 'all') {
            $loading = $request->query('loading');
            $data = compact(['loading']);
        } else {
            abort_unless($request->user()->hasRole('vendor'),403,'This Action Not Authorized');
           $data = $this->itemService->index();
        }

        return Inertia::render('Vendor::Item/index', $data);
    }

    /**
     * Summary of loadItems
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function loadItems()
    {

        $response = $this->itemService->loadUserItems();

        return $response;
    }

    /**
     * Summary of loadAllItems
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function loadAllItems()
    {

        $response = $this->itemService->loadAllItems();

        return $response;
    }

    /**
     * Summary of show
     *
     * @param  mixed  $item
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function show($item)
    {

        $response = $this->itemService->show($item);

        return $response;
    }

    /**
     * Summary of store
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(ItemRequest $request)
    {

        $this->itemService->store($request);

        return to_route('item.index')->with('message', trans('vendor::messages.item.added'));
    }

    /**
     * Summary of edit
     *
     * @param  mixed  $item
     * @return array
     */
    public function edit($item)
    {

        $response = $this->itemService->getItemDataForEditForm($item);

        return $response;
    }

    /**
     * Summary of update
     *
     * @param  mixed  $item
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(ItemRequest $request, $item)
    {

        $this->itemService->update($request, $item);

        return to_route('item.index')->with('message', trans('vendor::messages.item.updated'));
    }

    /**
     * Summary of destroy
     *
     * @param  mixed  $item
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy($item)
    {

        $this->itemService->destroy($item);

        return to_route('item.index')->with('message', trans('vendor::messages.item.deleted'));
    }

    public function search(SearchRequest $request)
    {
        $data = $request->validated();
        $response = $this->itemService->search($data);

        return $response->toJson();
    }

    public function changeStatus(Request $request, int $id)
    {
        $status = $request->input('status');
        $this->itemService->changeStatus($id, $status);

        return back()->with('message', 'Status changed successfully');

    }
}
