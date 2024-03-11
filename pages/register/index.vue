<script setup lang="ts">
definePageMeta({
    layout: "blank",
    name: "register"
})

const { SignIn } = useAuth();
const SignInDone = ref(false);

const userInformations = reactive({
    nick: '',
    email: '',
    password: '',
});
const confirmPass = ref('');

const emailConfirmed = ref(false);
const { current, goToNext, goToPrevious, isCurrent } = useStepper({
    'registration': {
        title: "Registrar",
        isValid: (userInformations.nick && userInformations.email && userInformations.password).trim() !== '',
    },
    'confirm-email': {
        title: "Confirmar o email",
        isValid: emailConfirmed.value
    }
});
</script>
<template>
    <div
        class="lg:max-w-screen-md overflow-hidden lg:rounded-xl mx-auto lg:basis-1/2 max-lg:md:landscape:min-h-screen lg:grid-flow-col-dense">
        <div
            class="relative p-6 md:landscape:px-8 md:landscape:py-16 self-stretch bg-secundary-600 flex flex-col items-center justify-between gap-8 max-lg:md:landscape:fixed max-lg:md:landscape:inset-y-0 max-lg:md:landscape:h-dvh max-lg:md:landscape:w-[30vw] z-50 isolate">
            <NuxtImg class="object-scale-down size-20 lg:size-28" src="/assets/logo.png" alt="" />
            <div
                class="w-full relative flex gap-8 md:landscape:flex-col max-md:items-center justify-between overflow-hidden">
                <div class="flex max-md:items-center gap-3 text-n0 max-md:bg-secundary-600 max-md:-mr-4">
                    <span class="size-4 bg-n0 rounded-full max-md:order-last"
                        :class="{ 'bg-secundary-900': isCurrent('registration') }"></span>
                    Registrar
                </div>
                <div
                    class="flex max-md:items-center items-end gap-3 text-n0 max-md:bg-secundary-600 max-md:-ml-4 break-all">
                    <span class="size-4 bg-n0 rounded-full" :class="{ 'bg-secundary-900': isCurrent('confirm-email') }">
                    </span>
                    Confirmação<br class="md:hidden" /> do email
                    <div
                        class="absolute inset-x-0 inset-y-1/2 max-md:h-[3px] md:landscape:inset-y-0 -z-10 max-md:w-full w-[3px] bg-secundary-100 translate-x-[6px]">
                    </div>
                </div>
            </div>
            <g-color-mode
                class="hidden max-lg:md:landscape:inline-flex max-lg:md:landscape:absolute max-lg:md:landscape:top-3 max-lg:md:landscape:right-3 max-lg:md:scale-75 !bg-transparent dark:!bg-transparent *:!text-n0" />
            <NuxtLink
                class="flex max-md:absolute max-md:top-3 p-2 max-md:right-3 items-center gap-2 text-n0 ring-1 ring-secundary-800 md:landscape:px-3 md:landscape:py-2 rounded-sd"
                to="/">
                <g-icon class="text-base lg:text-lg" icon="mdi:home" />
                <span class="max-md:hidden">Ir a página inicial</span>
            </NuxtLink>
        </div>
        <form
            class="flex flex-col gap-6 p-16 max-lg:md:landscape:relative max-lg:md:landscape:left-[30vw] max-lg:md:landscape:w-[70vw]">
            <h1 class="text-2xl md:landscape:text-3xl font-bold uppercase">{{ current.title }}</h1>
            <div class="w-full flex flex-col items-center gap-8">
                <div v-if="isCurrent('registration')" class="self-stretch w-full flex flex-col gap-3 md:landscape:gap-6">
                    <div class="flex max-md:flex-col gap-6">
                        <Field @input="(v: string) => userInformations.nick = v" input-name="nick"
                            class="flex-auto basis-1/2" type="text" label="Nick" />
                        <Field @input="(v: string) => userInformations.email = v" input-name="email"
                            class="flex-auto basis-1/2" type="text" label="Email" />
                    </div>
                    <Field @input="(v: string) => userInformations.password = v" :password-toggle="true" type="password"
                        label="Senha" label-bellow="mínimo de 8 caractéres alfanuméricos." />
                    <Field @input="(v: string) => confirmPass = v" @enter="current.isValid ? goToNext : null"
                        type="password" label="Confirmar a senha" />
                </div>
                <div class="self-stretch py-2 inline-flex items-center gap-6 border-t border-n30 dark:border-n700">
                    Ou faça login com
                    <ul class="self-stretch flex items-center gap-2">
                        <li class="size-max">
                            <button type="button" @click.prevent="SignIn()"
                                class="text-2xl dark:bg-n700 flex gap-2 px-3 py-3 lg:py-4 rounded-sd items-center shadow-[0px_0px_4px_rgba(0,0,0,0.1)] transition-colors hover:active:text-white hover:active:bg-primary-400 focus:outline-primary-200 ease-in">
                                <g-icon class="text-sm lg:text-md" icon="uil:google" />
                                <span class="sr-only">Google</span>
                            </button>
                        </li>
                    </ul>
                </div>
                <g-color-mode
                    class="md:hidden" />
            </div>
        </form>
    </div>
</template>