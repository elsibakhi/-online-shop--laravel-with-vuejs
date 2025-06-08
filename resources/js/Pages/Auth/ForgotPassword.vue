<script setup lang="ts">





import { Head, useForm } from '@inertiajs/vue3';

import InputError from '@/components/InputError.vue';


import TextInput from '@/components/TextInput.vue';


import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components//ui/card'

import { Label } from '@/components/ui/label'


defineProps<{
    status?: string;
}>();

const form = useForm({
    email: '',
});

const submit = () => {
    form.post(route('password.email'));
};
</script>


<template>

    <Head title="Forgot Password" />

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
                            Forgot Password
                        </CardTitle>
                        <CardDescription>
                            Forgot your password? No problem. Just let us know your email
                            address and we will email you a password reset link that will allow
                            you to choose a new one.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>

                        <div v-if="status" class="mb-4 text-sm font-medium text-green-600">
                            {{ status }}
                        </div>
                        <form @submit.prevent="submit">
                            <div class="grid gap-6">


                                <div class="grid gap-6">

                                    <div class="grid gap-2">
                                        <Label html-for="email">Email</Label>
                                        <TextInput id="email" type="email" class="block w-full mt-1"
                                            v-model="form.email" required autofocus autocomplete="username" />

                                        <InputError class="mt-2" :message="form.errors.email" />
                                    </div>



                                    <div class="mt-4 text-center">



                                        <Button type="submit" class="w-full" :class="{ 'opacity-25': form.processing }"
                                            :disabled="form.processing">
                                            Email Password Reset Link
                                        </Button>


                                    </div>


                                </div>

                            </div>
                        </form>
                    </CardContent>
                </Card>
                <div
                    class="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary">
                    By clicking continue, you agree to our <a href="#">Terms of Service</a>
                    and <a href="#">Privacy Policy</a>.
                </div>
            </div>



        </div>
    </div>








</template>
