<script lang="ts" setup>
import Field from './components/Field.vue';
definePageMeta({
  layout: 'auth'
})
const { SignIn } = useAuth();


type TQuery = { redirects?: string };
const query = useQuery<TQuery>();

const redirectTo = query.redirects ?? "home";
</script>

<template>
  <div
    class="flex basis-1/2 flex-col text-neutral-g900 dark:text-white md:landscape:grid md:landscape:grid-cols-3 gap-4 lg:gap-16 md:landscape:grid-flow-col-dense bg-neutral-white-50 dark:bg-neutral-g900 rounded-sd p-6 lg:max-w-screen-lg overflow-hidden mx-auto">
    <div class="md:landscape:col-span-1 flex md:landscape:flex-col gap-2 items-center">
      <NuxtImg src="/assets/logo.png" alt="Logo da Vulcan"
        class="mix-blend-difference dark:mix-blend-normal min-w-20 size-fit" />
      <h1 class="text-current font-ternary text-2xl capitalize font-bold">Vulcan Scanlator</h1>
    </div>
    <form action="" class="md:landscape:col-start-2 md:landscape:col-span-2 flex flex-col gap-6 self-stretch px-6">
      <div class="self-stretch flex flex-col gap-6">
        <h2 class="text-2xl lg:text-3xl font-bold uppercase">Faça login na sua conta</h2>
        <fieldset class="flex self-stretch flex-col gap-4">
          <Field label="Email" type="email" />
          <div class="flex flex-col gap-2">
            <Field @enter="SignIn()" :password-toggle="true" label="Senha" type="password" />
            <div class="flex gap-3 justify-between self-stretch">
              <NuxtLink tabindex="0" class="capitalize text-primary-600 dark:text-primary-400" to="">Não tenho conta</NuxtLink>
              <NuxtLink tabindex="0" class="capitalize text-primary-600 dark:text-primary-400" to="">Esqueci minha senha</NuxtLink>
            </div>
          </div>
        </fieldset>
      </div>
      <NuxtLink tabindex="0"
        class="text-base lg:text-md dark:bg-neutral-g800 flex gap-2 px-3 py-3 lg:py-4 rounded-sd items-center shadow-[0px_0px_4px_rgba(0,0,0,0.1)] transition-colors hover:active:text-white hover:active:bg-primary-400 focus:outline-primary-200 ease-in"
        to="">
        <g-icon class="text-sm lg:text-md" @click="SignIn()" icon="uil:google" />
        Continuar com o Google
      </NuxtLink>
    </form>
  </div>
</template>