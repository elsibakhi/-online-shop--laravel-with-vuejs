<script setup lang="ts">
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/components/InputError.vue';
import InputLabel from '@/components/InputLabel.vue';
import PrimaryButton from '@/components/PrimaryButton.vue';
import TextInput from '@/components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components//ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import Checkbox from '@/components/ui/checkbox/Checkbox.vue';



const form = useForm({
    name: '',
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => {
            form.reset('password', 'password_confirmation');
        },
    });
};
</script>

<template>
  <Head title="Register" />

<div class="flex flex-col items-center justify-center gap-6 p-6 min-h-svh bg-muted md:p-10">
    <div class="flex flex-col w-full max-w-sm gap-6">
      <a href="#" class="flex items-center self-center gap-2 font-medium">
        <div class="flex items-center justify-center w-6 h-6 rounded-md bg-primary text-primary-foreground">
          <GalleryVerticalEnd class="size-4" />
        </div>
        Acme Inc.
      </a>
  
 


  <div class="flex flex-col gap-6">
    <Card>
      <CardHeader class="text-center">
        <CardTitle class="text-xl">
          Welcome back
        </CardTitle>
        <CardDescription>
          Login with your Apple or Google account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="flex flex-col gap-4">
              <a :href="route('google.register')">

<Button variant="outline" class="w-full">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
      fill="currentColor"
    />
  </svg>
  Login with Google
</Button>

</a>
            </div>
        <form @submit.prevent="submit"  >
          <div class="grid gap-6">
 
            <div class="relative text-sm text-center after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
              <span class="relative z-10 px-2 bg-background text-muted-foreground">
                Or continue with
              </span>
            </div>
            <div class="grid gap-6">
              <div class="grid gap-2">
                <Label html-for="name">Name</Label>
                <TextInput
                    id="name"
                    type="text"
                    class="block w-full mt-1"
                    v-model="form.name"
                    required
                    autofocus
                    autocomplete="name"
                />

                <InputError class="mt-2" :message="form.errors.name" />
              </div>
              <div class="grid gap-2">
                <Label html-for="username">Username</Label>
                <TextInput
                    id="username"
                    type="text"
                    class="block w-full mt-1"
                    v-model="form.username"
                    required
                    autofocus
                    autocomplete="username"
                />

                <InputError class="mt-2" :message="form.errors.username" />
              </div>
              <div class="grid gap-2">
                <Label html-for="email">Email</Label>
                <TextInput
                    id="email"
                    type="email"
                    class="block w-full mt-1"
                    v-model="form.email"
                    required
                    autofocus
                    autocomplete="username"
                />

                <InputError class="mt-2" :message="form.errors.email" />
              </div>
              <div class="grid gap-2">
                <div class="flex items-center justify-between">
                  <Label html-for="password">Password</Label>
                
               
               
                </div>
                <TextInput
                    id="password"
                    type="password"
                    class="block w-full mt-1"
                    v-model="form.password"
                    required
                    autocomplete="current-password"
                />

                <InputError class="mt-2" :message="form.errors.password" />
              </div>
              <div class="grid gap-2">
                <div class="flex items-center justify-between">
                  <Label html-for="password_confirmation">Password Confirmation</Label>
                
               
               
                </div>
                <TextInput
                    id="password_confirmation"
                    type="password"
                    class="block w-full mt-1"
                    v-model="form.password_confirmation"
                    required
                    autocomplete="new-password"
                />

                <InputError
                    class="mt-2"
                    :message="form.errors.password_confirmation"
                />
              </div>
       

              <div class="mt-4 text-center">
          

             
                <Button type="submit" class="w-full" 
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"   >
                    Register
              </Button>

              <Link
                    :href="route('login')"
                    class="text-sm text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Already registered?
                </Link>
            </div>

            
            </div>
          
          </div>
        </form>
      </CardContent>
    </Card>
    <div class="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary">
      By clicking continue, you agree to our <a href="#">Terms of Service</a>
      and <a href="#">Privacy Policy</a>.
    </div>
  </div>



</div>
</div>







    
</template>
