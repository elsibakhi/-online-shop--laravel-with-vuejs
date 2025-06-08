<?php

namespace Modules\Customer\Repositories;

use App\Models\User;
use Modules\Customer\Models\Post;

class PostRepository
{
    public function __construct(protected Post $postModel) {}

    /**
     * Get the parent post not comment or reply
     *
     * @param  mixed  $id
     */
    public function findBasePost($id): ?Post
    {
        $post = $this->postModel->find($id);

        while ($post?->post_id) {
            $post = $post->parentPost;
        }

        $post?->load([
            'likes' => fn ($q) => $q->where('user_id', auth()->id()),
            'comments' => fn ($q) => $q->with([
                'likes' => fn ($q) => $q->where('user_id', auth()->id()),
                'comments' => fn ($q) => $q->with([
                    'likes' => fn ($q) => $q->where('user_id', auth()->id()),
                ])->withCount(['likes', 'comments'])->oldest(),
            ])->withCount(['likes', 'comments'])->oldest(),
        ])
            ->loadCount(['likes', 'comments']);

        return $post;
    }

    /**
     * Get the posts that owned by auth user as pages
     */
    public function GetPostsByUserId(int $userId): \Illuminate\Contracts\Pagination\LengthAwarePaginator
    {
        return $this->getPostsForFeeds()->where('user_id', $userId)->paginate(2);
    }

    /**
     * Get the all posts in posts table as pages for timeline
     */
    public function GetPostsForTimeline(): \Illuminate\Contracts\Pagination\LengthAwarePaginator
    {
        return $this->getPostsForFeeds()->paginate(2);
    }

    /**
     * Store post in posts table and return it
     */
    public function store(array $data, array $users, array $items): Post
    {

        $post = $this->postModel->create($data);

        $post->users()->attach($users);
        $post->items()->attach($items);

        $post->load([
            'user',
            'comments',
            'likes' => fn ($q) => $q->where('user_id', auth()->id()),
        ])->loadCount(['likes', 'comments']);

        return $post;
    }

    /**
     * Attach post and user by like table in the middle if the user not liked it before
     */
    public function like(int $postId, int $userId): Post
    {
        $post = $this->postModel->query()->findOrFail($postId);
        $post->likes()->attach($userId);

        return $post;
    }

    /**
     * Detach post and user by like table in the middle if the user liked it before
     *
     * @return Post
     */
    public function unlike(int $postId, int $userId): void
    {
        $this->postModel->query()->findOrFail($postId)->likes()->detach($userId);
    }

    /**
     * Get posts for auth user or timeline feeds and eager load nasser relationships without get or paginate them
     */
    protected function getPostsForFeeds()
    {
        return $this->postModel->post() // Only main posts
            ->with([
                'likes' => fn ($q) => $q->where('user_id', auth()->id()),
                'comments' => fn ($q) => $q->with([
                    'likes' => fn ($q) => $q->where('user_id', auth()->id()),
                    'comments' => fn ($q) => $q->with([
                        'likes' => fn ($q) => $q->where('user_id', auth()->id()),
                    ])->withCount(['likes', 'comments'])->oldest(),
                ])->withCount(['likes', 'comments'])->oldest(),
            ])
            ->withCount(['likes', 'comments'])
            ->latest();

    }

    /**
     * Delete post , comment or reply
     *
     * @return void
     */
    public function delete(int $postId, int $userId)
    {
        $this->postModel->query()->where('user_id', $userId)->findOrFail($postId)->delete();
    }
}
