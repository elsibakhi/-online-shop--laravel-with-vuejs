<?php

namespace Modules\Customer\Notifications;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Modules\Customer\Models\Post;

class UserMentionUser extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct(private Post $post, private User $user) {}

    /**
     * Get the notification's delivery channels.
     */
    public function via($notifiable): array
    {
        return ['database', 'broadcast'];
    }

    /**
     * Get the mail representation of the notification.
     */
    // public function toMail($notifiable): MailMessage
    // {
    //     return (new MailMessage)
    //         ->line('The introduction to the notification.')
    //         ->action('Notification Action', 'https://laravel.com')
    //         ->line('Thank you for using our application!');
    // }

    /**
     * Get the array representation of the notification.
     */
    public function toArray($notifiable): array
    {
        return [
            'post' => [
                'id' => $this->post->id,
                'content' => $this->post->content,
                'type' => $this->post->post_id ? 'comment' : 'post',
            ],
            'user' => [
                'id' => $this->user->id,
                'name' => $this->user->name,
            ],
        ];
    }
}
