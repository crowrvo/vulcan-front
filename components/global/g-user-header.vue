<script setup lang="ts">
export type URL = {
    to: string;
    name: string;
}
export interface UserInfoDTO {
    id: string;
    image: string;
    name: string;
    email: string;
}
export type UserBasicInfo = Omit<UserInfoDTO, "id"> & {
    email?: string;
}

const pages: Array<URL> = [{
    to: "/",
    name: "Novels"
}]
const user: UserBasicInfo = {
    name: "Devzinho",
    image: "/assets/images/placeholder/user.jpg",
    email: ""
}
</script>
<template>
    <header
        class="flex items-center justify-between gap-4 fixed top-0 w-full overflow-x-hidden px-6 py-2 lg:px-16 lg:py-4 bg-neutral-g0 dark:bg-neutral-g900 shadow-md dark:shadow-neutral-g0/10 z-[900]">
        <div class="flex items-center gap-3 overflow-hidden">
            <button type="button" class="ml-1 p-2 focus:outline focus:outline-secundary-400 rounded-sd">
                <g-icon class="!text-primary-600 dark:!text-primary-400 text-sm lg:text-lg" icon="material-symbols:dashboard" />
            </button>
            <NuxtLink class="block" tabindex="0" to="/">
                <NuxtImg src="/assets/logo.png" alt="Logo da Vulcan"
                    class="mix-blend-difference dark:mix-blend-normal size-logo" />
            </NuxtLink>
            <h1
                class="sr-only md:not-sr-only text-neutral-g900 dark:text-neutral-g0 text-md lg:text-lg font-bold font-ternary">
                Vulcan Scanlator</h1>
        </div>

        <nav class="hidden lg:block max-w-full h-full">
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

        <div class="flex items-center gap-6">
            <g-color-mode class="!bg-transparent dark:!bg-transparent max-md:hidden" />
            <button @click="" type="button"
                class="flex items-center gap-3 text-base lg:text-lg text-neutral-g900 dark:text-neutral-g0 focus:bg-neutral-g30 dark:focus:bg-neutral-g700 rounded-sd p-1">
                <NuxtImg class="size-profile-image-sm lg:size-profile-image rounded-full" :src="user.image" />
                {{ user.name }}
                <g-icon class="text-current text-base lg:text-lg" icon="uil:angle-down" />
            </button>
        </div>
    </header>
</template>
<style lang="scss" scoped>
.router-linnk-exact-active.active div {
    transform: translateY(0%);
}
</style>