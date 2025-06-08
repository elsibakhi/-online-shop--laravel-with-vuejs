<?php

namespace Modules\Admin\Http\Controllers;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Modules\Admin\Http\Requests\StoreSubCategoryRequest;
use Modules\Admin\Http\Requests\UpdateSubCategoryRequest;
use Modules\Admin\Services\SubCategoryService;

class SubCategoryController extends Controller
{
    //
    public function __construct(protected SubCategoryService $subCategoryService) {}

    public function index()
    {

        [$sub_categories,$categories] = $this->subCategoryService->showAll();

        return Inertia::render('Admin::SubCategory/index', compact('sub_categories', 'categories'));
    }

    public function store(StoreSubCategoryRequest $request)
    {

        $this->subCategoryService->store($request->validated());

        return to_route('subcategory.index')->with('message', trans('admin::messages.subcategory.added'));
    }

    public function edit($sub_category)
    {

        return $this->subCategoryService->find($sub_category);
    }

    public function update(UpdateSubCategoryRequest $request, $sub_category)
    {

        $this->subCategoryService->update($sub_category, $request->validated());

        return to_route('subcategory.index')->with('message', trans('admin::messages.subcategory.updated'));
    }

    public function destroy($sub_category)
    {
        $this->subCategoryService->delete($sub_category);

        return to_route('subcategory.index')->with('message', trans('admin::messages.subcategory.deleted'));
    }
}
