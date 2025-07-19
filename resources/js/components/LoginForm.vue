



<script setup lang="ts">
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
import InputError from '@/components/InputError.vue';
import TextInput from '@/components/TextInput.vue';
import {useForm,Link } from '@inertiajs/vue3'
import Checkbox from '@/components/ui/checkbox/Checkbox.vue';
import { create } from '@/actions/App/Http/Controllers/Auth/RegisteredUserController';

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

defineProps(['canResetPassword'])
const submit = () => {
    form.post(route('login'), {
        onFinish: () => {
            form.reset('password');
        },
    });
};
</script>

<template>
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
                
                  <Link
                    v-if="canResetPassword"
                    :href="route('password.request')"
                    class="text-sm text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Forgot your password?
                </Link>
               
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
              <div class="block mt-4">
                <label class="flex items-center">
                    <Checkbox name="remember" v-model:checked="form.remember" />
                    <span class="text-sm text-gray-600 ms-2"
                        >Remember me</span
                    >
                </label>
            </div>

              <Button type="submit" class="w-full" 
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"   >
                Login
              </Button>
            </div>
            <div class="text-sm text-center">
              Don't have an account?
              <Link :href="create().url" class="underline underline-offset-4">
                Sign up
              </Link>
             
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
</template>
