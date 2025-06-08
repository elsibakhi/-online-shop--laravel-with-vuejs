<?php

namespace Modules\Customer\Services;

use App\Repositories\UserRepository;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Modules\Customer\Models\Post;
use Modules\Customer\Notifications\UserCommentOnPost;
use Modules\Customer\Notifications\UserLikePost;
use Modules\Customer\Notifications\UserMentionUser;
use Modules\Customer\Repositories\PostRepository;
use Modules\Vendor\Repositories\ItemRepository;

class PostService
{
    public function __construct(protected PostRepository $postRepository) {}

    /**
     * Get the posts owned by auth user
     *
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function getAuthUserPosts()
    {

        return $this->postRepository->GetPostsByUserId(auth()->id());
    }

    /**
     * Storing post,comment or reply
     */
    public function store(array $data): Post
    {

        return DB::transaction(function () use ($data): Post {
            $data['user_id'] = auth()->id();

            $content = $data['content'];

            // Process user mentions
            $usernames = collect(Str::of($content)->matchAll('/@(\w+)/'))->unique();
            $users_mentions = [];

            foreach ($usernames as $username) {
                $user = resolve(UserRepository::class)->findByUsername($username);
                if ($user) {
                    $users_mentions[] = $user;
                    $content = str_replace('@'.$username, '<b class="user-mention">'.e($username).'</b>', $content);
                }
            }

            // Process item mentions
            $codes = collect(Str::of($content)->matchAll('/&(\w+)/'))->unique();
            $items_mentions = [];

            foreach ($codes as $code) {
                $item = resolve(ItemRepository::class)->findByCode($code);
                if ($item) {
                    $items_mentions[] = $item;
                    $content = str_replace('&'.$code, '<b   class="item-mention" style="cursor: pointer;"  data-item="'.$item->id.'" >'.e($code).'</b>', $content);
                }
            }

            // Update content after replacements
            $data['content'] = $content;

            $post = $this->postRepository->store($data, $users_mentions, $items_mentions);

            foreach ($users_mentions as $user) {

                if ($user->id != auth()->id()) {
                    $user->notify(new UserMentionUser($post, auth()->user()));

                }

            }

            if ($post->post_id) {

                $parentPost = $post->parentPost;
                $parentPostOwner = $parentPost->user;

                if ((auth()->id() != $parentPostOwner->id)) {

                    $parentPostOwner->notify(new UserCommentOnPost($parentPost, auth()->user()));
                }

            }

            return $post;
        });

    }

    /**
     * like a post,comment or reply
     *
     * @param  mixed  $postId
     * @return void
     */
    public function like($postId)
    {
        $post = $this->postRepository->like($postId, auth()->id());

        $postOwner = $post->user;

        if (auth()->id() != $postOwner->id) {

            $postOwner->notify(new UserLikePost($post, auth()->user()));
        }

    }

    /**
     * unlike a post,comment or reply
     *
     * @param  mixed  $postId
     * @return void
     */
    public function unlike($postId)
    {
        $this->postRepository->unlike($postId, auth()->id());
    }

    /**
     * Get the posts for timeline
     *
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function GetPostsForTimeline()
    {
        return $this->postRepository->GetPostsForTimeline();
    }

    /**
     * Delete post , comment or reply
     *
     * @param  mixed  $id
     */
    public function destroy($id): void
    {
        $this->postRepository->delete($id, auth()->id());
    }

    /**
     * Get the post by post id
     *
     * @param  mixed  $id
     */
    public function getPost($id): ?Post
    {
        return $this->postRepository->findBasePost($id);
    }
}
