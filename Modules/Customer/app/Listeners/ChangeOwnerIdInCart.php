<?php

namespace Modules\Customer\Listeners;

use Modules\Customer\Events\CartOwnerIdChanged;
use Modules\Customer\Repositories\CartRepository;

class ChangeOwnerIdInCart
{
    /**
     * Create the event listener.
     */
    public function __construct() {}

    /**
     * Handle the event.
     */
    public function handle(CartOwnerIdChanged $event): void
    {

        resolve(CartRepository::class)->authticateCart($event->ownerId, $event->session_id);

    }
}
