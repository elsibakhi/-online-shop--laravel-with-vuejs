<?php

namespace Modules\Admin\Http\Controllers;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Modules\Admin\Http\Requests\StoreCategoryRequest;
use Modules\Admin\Http\Requests\UpdateCategoryRequest;
use Modules\Admin\Services\CategoryService;

class CategoryController extends Controller
{
    //
    public function __construct(protected CategoryService $categoryService) {}

    public function index()
    {

        $categories = $this->categoryService->showAll();

        return Inertia::render('Admin::Category/index', compact('categories'));
    }

    public function store(StoreCategoryRequest $request)
    {

        $this->categoryService->store($request->validated());

        return to_route('category.index')->with('message', trans('admin::messages.category.added'));
    }

    public function edit($category)
    {

        return $this->categoryService->find($category);
    }

    public function update(UpdateCategoryRequest $request, $category)
    {

        $this->categoryService->update($category, $request->validated());

        return to_route('category.index')->with('message', trans('admin::messages.category.updated'));
    }

    public function destroy($category)
    {
        $this->categoryService->delete($category);

        return to_route('category.index')->with('message', trans('admin::messages.category.deleted'));
    }
}
