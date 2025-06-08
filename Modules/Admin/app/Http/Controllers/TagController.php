<?php

namespace Modules\Admin\Http\Controllers;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Modules\Admin\Http\Requests\DestroyTagsRequest;
use Modules\Admin\Http\Requests\StoreTagRequest;
use Modules\Admin\Http\Requests\StoreTagsRequest;
use Modules\Admin\Http\Requests\UpdateTagRequest;
use Modules\Admin\Services\TagService;

class TagController extends Controller
{
    public function __construct(protected TagService $TagService) {}

    public function index()
    {
        $tags = $this->TagService->showAll();
        Inertia::share('tagsMaxAdds', config('admin.tags.max_adds'));
        Inertia::share('tagsMaxActions', config('admin.tags.max_actions'));

        return Inertia::render('Admin::Tag/index', compact('tags'));
    }

    public function storeMany(StoreTagsRequest $request)
    {
        $tags = $this->TagService->storeMany($request->validated());

        return to_route('tag.index')->with('message', trans('admin::messages.tag.multi_added'));

    }

    public function store(StoreTagRequest $request)
    {
        $this->TagService->store($request->validated());

        return to_route('tag.index')->with('message', trans('admin::messages.tag.added'));
    }

    public function edit($tag)
    {
        return $this->TagService->find($tag);
    }

    public function update(UpdateTagRequest $request, $tag)
    {
        $this->TagService->update($tag, $request->validated());

        return to_route('tag.index')->with('message', trans('admin::messages.tag.updated'));
    }

    public function destroy($tag)
    {
        $this->TagService->delete($tag);

        return to_route('tag.index')->with('message', trans('admin::messages.tag.deleted'));
    }

    public function destroyMany(DestroyTagsRequest $request)
    {
        $this->TagService->deleteMany($request->validated());

        return to_route('tag.index')->with('message', trans('admin::messages.tag.multi_deleted'));
    }
}
