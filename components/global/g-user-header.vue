<script setup lang="ts">
import { pages } from "~/test/mock/navigation";
import { user } from "~/test/mock/user";

const showMenu = ref(false);
</script>
<template>
    <header
        class="flex items-center justify-between gap-4 fixed top-0 w-full overflow-visible px-6 py-2 lg:px-16 lg:py-4 bg-neutral-g0 dark:bg-neutral-g900 shadow-md dark:shadow-neutral-g0/10 z-[900]">
        <div class="flex items-center gap-3 overflow-hidden">
            <button type="button" class="ml-1 p-2 focus:outline focus:outline-secundary-400 rounded">
                <g-icon class="!text-primary-600 dark:!text-primary-400 text-sm lg:text-lg"
                    icon="material-symbols:dashboard" />
            </button>
            <NuxtLink class="block" tabindex="0" to="/">
                <NuxtImg src="/assets/logo.png" alt="Logo da Vulcan"
                    class="mix-blend-difference dark:mix-blend-normal size-logo" />
            </NuxtLink>
            <h1
                class="sr-only md:not-sr-only text-neutral-g900 dark:text-neutral-g0 text-md lg:text-lg font-bold font-ternary">
                Vulcan Scanlator</h1>
        </div>

        <nav class="hidden lg:block max-w-full h-full overflow-hidden">
            <ul class="flex items-center gap-2 h-full">
                <li v-for="link in pages" class="block h-full" :key="link.to">
                    <NuxtLink tabindex="0"
                        class="relative block overflow-hidden p-2 transition-transform duration-200 ease-in active"
                        :to="link.to">
                        {{ link.name }}
                        <span
                            class="absolute inline-block top-full inset-x-0 h-1 w-full translate-y-full bg-primary-600 dark:bg-primary-400"></span>
                    </NuxtLink>
                </li>
            </ul>
        </nav>

        <div class="flex items-center gap-6" @focusout="showMenu = false" @pointerout="showMenu = false">
            <g-color-mode class="!bg-transparent dark:!bg-transparent max-md:hidden" />
            <div v-if="user" class="flex h-full items-center gap-1 self-stretch">
                <NuxtLink tabindex="0" class="inline-flex px-4 py-2 rounded-sd bg-transparent text-neutral-g900 dark:text-neutral-g0 focus:outline focus:outline-primary-700 dark:focus:outline-primary-400" to="/login">
                    Fazer Login
                </NuxtLink>
                <NuxtLink tabindex="0" class="inline-flex px-6 py-2 rounded-sd primary-gradient-x text-white font-semibold focus:outline focus:outline-primary-700 dark:focus:outline-primary-400" to="/register">
                    Registrar
                </NuxtLink>
            </div>
            <g-profile-menu v-else :user="user" :show-menu="showMenu"
                @show-menu="(value: boolean) => value ? showMenu = value : showMenu = !showMenu" />
        </div>
    </header>
</template>
<style lang="scss" scoped>
.router-linnk-exact-active.active div {
    transform: translateY(0%);
}
</style>