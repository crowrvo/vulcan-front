<script setup lang="ts">
definePageMeta({
    layout: "blank",
    name: "register"
})
const { SignIn } = useAuth();

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
        isValid: (): boolean => {
            return filledAllFields && emailValidator &&
                userInformations.password.length >= 8 &&
                passValidator.value;
        },
    },
    'confirm-email': {
        title: "Verificação",
        isValid: () => emailConfirmed
    }
});

const filledAllFields = computed(() => {
    return userInformations.nick !== '' &&
        userInformations.email !== '' &&
        userInformations.password !== '' &&
        confirmPass.value !== ''
});
const emailValidator = computed(() => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userInformations.email)
})
const passValidator = computed(() => {
    return userInformations.password.trim() === confirmPass.value.trim();
});

const confirmEmail = async () => { }
const showValidationSpinner = refAutoReset(false, 300);
const validateCode = async () => {
    showValidationSpinner.value = true;
    const codeValidationStatus = ref<'loading' | 'success' | 'error'>('loading');
}
</script>
<template>
    <div
        class="lg:max-w-screen-md overflow-hidden lg:rounded-xl mx-auto lg:basis-1/2 max-lg:md:landscape:min-h-screen lg:grid-flow-col-dense min-h-[60vh]">
        <div
            class="relative p-6 md:landscape:px-8 md:landscape:py-16 self-stretch bg-secundary-400 flex flex-col items-center justify-between gap-8 max-lg:md:landscape:fixed max-lg:md:landscape:inset-y-0 max-lg:md:landscape:h-dvh max-lg:md:landscape:w-[30vw] z-50 isolate">
            <NuxtLink class="block" to="/">
                <NuxtImg class="object-scale-down size-20 lg:size-28" src="/assets/logo.png" alt="" />
                <span class="sr-only">Ir para a página inicial</span>
            </NuxtLink>
            <div
                class="w-full relative flex gap-8 md:landscape:flex-col max-md:items-center justify-between overflow-hidden">
                <button @click="!isCurrent('registration')?goToPrevious():null" class="flex max-md:items-center gap-3 text-n0 max-md:bg-secundary-600 max-md:-mr-4">
                    <span class="size-4 bg-n0 rounded-full max-md:order-last transition-colors duration-500 ease"
                        :class="{ 'bg-secundary-900': isCurrent('registration') }"></span>
                    Registrar
                </button>
                <button
                @click="isCurrent('registration') && toValue(current.isValid())? goToNext() : !isCurrent('registration')??null"
                    class="flex max-md:items-center items-end gap-3 text-n0 max-md:bg-secundary-600 max-md:-ml-4 break-all">
                    <span class="size-4 bg-n0 rounded-full transition-colors duration-500 ease"
                        :class="{ 'bg-secundary-900': isCurrent('confirm-email') }">
                    </span>
                    Verificação
                    <div
                        class="absolute inset-x-0 inset-y-1/2 max-md:h-[3px] md:landscape:inset-y-0 -z-10 max-md:w-full w-[3px] bg-secundary-200 translate-x-[6px]">
                    </div>
                </button>
            </div>
            <g-color-mode
                class="hidden max-lg:md:landscape:inline-flex max-lg:md:landscape:absolute max-lg:md:landscape:top-3 max-lg:md:landscape:right-3 max-lg:md:scale-75 !bg-transparent dark:!bg-transparent *:!text-n0" />
            <NuxtLink
                class="flex max-md:absolute max-md:top-3 p-2 max-md:right-3 items-center gap-2 text-n0 transition-colors duration-200 ease-in ring-1 ring-secundary-800 hover:active:bg-secundary-800 md:landscape:px-3 md:landscape:py-2 rounded-sd"
                to="/">
                <g-icon class="text-base lg:text-lg" icon="mdi:home" />
                <span class="max-md:hidden">Ir a página inicial</span>
            </NuxtLink>
        </div>
        <form action="" @submit.prevent=""
            class="flex flex-col gap-6 p-16 max-lg:md:landscape:relative max-lg:md:landscape:left-[30vw] max-lg:md:landscape:w-[70vw]">
            <h1 class="text-2xl md:landscape:text-3xl font-bold uppercase">{{ current.title }}</h1>
            <div class="w-full flex flex-col items-center gap-8">
                <KeepAlive>
                    <div v-show="isCurrent('registration')"
                        class="self-stretch w-full flex flex-col gap-3 md:landscape:gap-6">
                        <div class="flex max-md:flex-col gap-6">
                            <Field @input="(v: string) => userInformations.nick = v" input-name="nick"
                                class="flex-auto basis-1/2" type="text" label="Nick" />
                            <Field @input="(v: string) => userInformations.email = v" input-name="email"
                                class="flex-auto basis-1/2" type="text" label="Email" />
                        </div>
                        <Field input-name="password" @input="(v: string) => userInformations.password = v"
                            :password-toggle="true" type="password" label="Senha"
                            label-bellow="mínimo de 8 caractéres alfanuméricos." />
                        <Field input-name="confirm-password" @input="(v: string) => confirmPass = v"
                            @enter="current.isValid() ? goToNext() : null" type="password" label="Confirmar a senha" />
                            <NuxtLink class="capitalize text-primary-600 dark:text-primary-400 w-max" to="/login">Já tenho conta</NuxtLink>
                        <Transition enter-active-class="transition-opacity duration-300 ease-in"
                            enter-from-class="opacity-0" enter-to-class="opacity-100"
                            leave-active-class="transition-opacity duration-300 ease-in" leave-from-class="opacity-100"
                            leave-to-class="opacity-0">
                            <div v-if="!passValidator || !current.isValid() && filledAllFields || !emailValidator && userInformations.email != ''"
                                class="px-2 py-3 rounded-sd bg-n20 dark:bg-n700 ring-1 ring-n30 dark:ring-n600">
                                <p v-if="!current.isValid() && filledAllFields" class="text-base lg:text-md">
                                    Confira os dados
                                </p>
                                <p v-if="!emailValidator" class="text-base lg:text-md">
                                    Email inválido.
                                </p>
                                <p v-if="!passValidator" class="text-base lg:text-md">
                                    As senhas não coincidem.
                                </p>
                            </div>
                        </Transition>
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
                    </div>
                </KeepAlive>
                <KeepAlive>
                    <div v-show="isCurrent('confirm-email')"
                        class="self-stretch w-full flex flex-col gap-3 md:landscape:gap-6">
                        <p class="text-base lg:text-md text-n900 dark:text-n0">
                            Enviamos um email para o email <span class="text-primary-600 dark:text-primary-400">{{
                                userInformations.email }}</span> com um link para confirmar o email.
                        </p>
                        <div class="flex flex-col gap-3">
                            <Field class="text-md lg:text-lg font-semibold" label="Digite o código aqui" type="text"
                                input-name="verication-code" />
                            <div class="flex items-center gap-2">
                                <button @click="validateCode()"
                                    class="flex items-center justify-center gap-2 w-max text-n0 transition-colors duration-200 ease-in text-base lg:text-md px-3 py-2 bg-gradient-to-r from-primary-400 to-primary-600 hover:active:from-primary-600 hover:active:to-primary-700 rounded-sd">Fazer
                                    a verificação
                                    <span class="">
                                        <g-icon v-if="showValidationSpinner" class="animate-spin text-n0 !size-4 lg:!size-6"
                                            icon="mdi:loading" />
                                    </span>
                                </button>
                                <button @click="goToPrevious()"
                                    class="w-max text-n0 transition-colors duration-200 ease-in text-base lg:text-md px-3 py-2 bg-n700 hover:active:bg-n600 rounded-sd">Alterar
                                    o
                                    email</button>
                            </div>
                        </div>
                    </div>
                </KeepAlive>
                <g-color-mode class="md:hidden" />
            </div>
        </form>
    </div>
</template>