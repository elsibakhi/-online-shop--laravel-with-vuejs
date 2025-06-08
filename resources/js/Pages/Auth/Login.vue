<script setup lang="ts">
import Checkbox from '@/components/Checkbox.vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/components/InputError.vue';
import TextInput from '@/components/TextInput.vue';
import InputLabel from '@/components/InputLabel.vue';
import PrimaryButton from '@/components/PrimaryButton.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import LoginForm from '@/components/LoginForm.vue';

defineProps<{
    canResetPassword?: boolean;
    status?: string;
}>();


</script>

<template>

<Head title="Login" />

    <div class="flex flex-col items-center justify-center gap-6 p-6 min-h-svh bg-muted md:p-10">
    <div class="flex flex-col w-full max-w-sm gap-6">
      <a href="#" class="flex items-center self-center gap-2 font-medium">
        <div class="flex items-center justify-center w-6 h-6 rounded-md bg-primary text-primary-foreground">
          <GalleryVerticalEnd class="size-4" />
        </div>
        Acme Inc.
      </a>
      <LoginForm  :canResetPassword="canResetPassword" />
    </div>
  </div>

</template>
