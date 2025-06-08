<script setup lang="ts">
import { computed } from 'vue';

import { Head, Link, useForm } from '@inertiajs/vue3';


import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components//ui/card'



const props = defineProps<{
    status?: string;
}>();

const form = useForm({});

const submit = () => {
    form.post(route('verification.send'));
};

const verificationLinkSent = computed(
    () => props.status === 'verification-link-sent',
);
</script>



<template>

<Head title="Email Verification" />

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
                            Email Verification
                        </CardTitle>
                        <CardDescription>
                            <div class="mb-4 text-sm text-gray-600">
            Thanks for signing up! Before getting started, could you verify your
            email address by clicking on the link we just emailed to you? If you
            didn't receive the email, we will gladly send you another.
        </div>

        <div
            class="mb-4 text-sm font-medium text-green-600"
            v-if="verificationLinkSent"
        >
            A new verification link has been sent to the email address you
            provided during registration.
        </div>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>

                       
                        <form @submit.prevent="submit">
                            <div class="grid gap-6">


                                <div class="grid gap-6">

                             


                                    <div class="flex items-center justify-between mt-4">
                                        <Button type="submit" class="w-2/3" :class="{ 'opacity-25': form.processing }"
                                            :disabled="form.processing">
                                            Resend Verification Email
                                        </Button>

                <Link
                    :href="route('logout')"
                    method="post"
                    as="button"
                    class="text-sm text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >Log Out</Link
                >
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
