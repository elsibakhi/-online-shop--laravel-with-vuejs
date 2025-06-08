<?php

namespace Modules\Customer\Http\Controllers;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Modules\Customer\Http\Requests\StorePostRequest;
use Modules\Customer\Services\PostService;

class PostController extends Controller
{
    public function __construct(protected PostService $postService) {}

    /**
     * Render post index page just without loading posts
     *
     * @return \Inertia\Response
     */
    public function index()
    {

        return Inertia::render('Customer::Post/index');
    }

    /**
     * load multiple posts for user posts or timeline based on type <'posts','timeline'>
     *
     * @param  mixed  $type
     */
    public function load($type = 'posts')
    {
        if ($type == 'timeline') {
            return $this->postService->GetPostsForTimeline();
        } else {

            return $this->postService->getAuthUserPosts();
        }
    }

    /**
     * load one post by id
     *
     * @param  mixed  $post
     */
    public function loadPost($post)
    {
        return $this->postService->getPost($post);
    }

    /**
     * Show a post
     *
     * @param  mixed  $post
     * @return \Inertia\Response
     */
    public function show($post)
    {

        return Inertia::render('Customer::Post/index', ['postId' => $post]);
    }

    /**
     * store a post
     *
     * @return \Illuminate\Http\Response
     */
    public function store(StorePostRequest $request)
    {

        return response($this->postService->store($request->validated()));

    }

    /**
     * Like a post
     *
     * @param  mixed  $post
     * @return \Illuminate\Http\RedirectResponse
     */
    public function like($post)
    {
        $this->postService->like($post);

        return back();
    }

    /**
     * Unlike a post
     *
     * @param  mixed  $post
     * @return \Illuminate\Http\RedirectResponse
     */
    public function unlike($post)
    {
        $this->postService->unlike($post);

        return back();
    }

    /**
     * Delete the post
     *
     * @param  mixed  $post
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy($post)
    {
        $this->postService->destroy($post);

        return to_route('post.index');
    }

    /**
     * Show the posts timeline for all users
     *
     * @return \Inertia\Response
     */
    public function timeline()
    {

        return Inertia::render('Customer::Post/index', ['type' => 'timeline']);
    }
}
