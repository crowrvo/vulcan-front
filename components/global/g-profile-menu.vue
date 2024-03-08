<script setup lang="ts">
import { actionsList } from "~/test/mock/allowedActions";
import type { UserBasicInfo } from "~/test/mock/user";

const props = defineProps<{
    showMenu: boolean;
    user: UserBasicInfo
}>();
defineEmits(['show-menu']);

const notifications = ref(12);
const notificationsCounter = computed(() => {
    return notifications.value > 10 ? '9+' : notifications.value;
});
const actions = actionsList.filter(act => act.permissions === props.user.permissions || act.permissions === "all")
</script>
<template>
    <div class="relative">
        <button @click="$emit('show-menu')"
            class="text-neutral-g900 dark:text-neutral-g0 flex bg-neutral-g0 dark:bg-neutral-g900 items-center gap-3 text-base lg:text-lg focus:bg-secundary-50 focus:outline focus:outline-secundary-300 dark:focus:bg-neutral-g700 rounded-sd p-1 border-t-0">
            <div class="relative">
                <NuxtImg class="size-profile-image-sm lg:size-profile-image rounded-full" :src="user.image" />
                <span
                    class="absolute bottom-0 right-0 size-6 flex justify-center items-center ring-1 ring-neutral-g0 dark:ring-neutral-g900 rounded-full bg-alert-600 text-neutral-g0 text-sm lg:text-base">
                {{ notificationsCounter }}
                </span>
            </div>
            {{ user.name }}
            <g-icon class="!text-current text-base lg:text-lg" icon="uil:angle-down" />
        </button>
        <Transition enter-active-class="transition-opacity duration-150 ease-in" enter-from-class="opacity-0"
            enter-to-class="opacity-100" leave-active-class="transition-opacity duration-100 ease"
            leave-from-class="opacity-100" leave-to-class="opacity-0">
            <menu v-show="showMenu" @focus="$emit('show-menu', true)"
                class="flex flex-col p-1 absolute gap-1 top-full w-full origin-top-right bg-neutral-g0 dark:bg-neutral-g900 border border-neutral-g30 dark:border-neutral-g700 divide-y divide-neutral-g20 dark:divide-neutral-g700 shadow-md rounded-t-none rounded-b-sd border-t-0 focus:outline-0">
                <nav class="w-full">
                    <ul class="w-full">
                        <li class="w-full" v-for="action in actions" :key="action.to">
                            <NuxtLink tabindex="0" @focus="$emit('show-menu', true)"
                                class="w-full capitalize text-base lg:text-md text-neutral-g900 dark:text-neutral-g0 inline-flex items-center focus:bg-secundary-50 dark:focus:!bg-neutral-g700 gap-2 p-3 hover:active:bg-neutral-g20 dark:hover:active:bg-neutral-g700 focus:outline focus:outline-secundary-300 active:outline-0 rounded"
                                :to="action.to">
                                <g-icon class="!text-neutral-g900 dark:!text-neutral-g0 text-sm lg:text-md"
                                    :icon="action.icon" />
                                {{ action.name }}
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>
                <button tabindex="0" type="button" @click="" @focus="$emit('show-menu', true)"
                    class="relative text-base lg:text-md w-full capitalize text-neutral-g900 dark:text-neutral-g0 inline-flex items-center focus:bg-secundary-50 dark:focus:!bg-neutral-g700 gap-2 p-3 focus:outline hover:active:bg-neutral-g20 dark:hover:active:bg-neutral-g700 focus:outline-secundary-300 active:outline-0 rounded">
                    <g-icon class="!text-current text-sm lg:text-md" icon="uil:bell" />
                    Notificações
                    <span class="absolute top-2 left-3 size-3 rounded-full bg-alert-600 text-neutral-g0"></span>
                </button>
                <button tabindex="0" type="button" @click="" @focus="$emit('show-menu', true)"
                    class="capitalize text-base lg:text-md inline-flex items-center text-alert-600 gap-2 p-3 focus:bg-alert-50 hover:active:bg-neutral-g20 dark:hover:active:bg-neutral-g700 dark:focus:!bg-neutral-g700 focus:outline focus:outline-alert-100 dark:focus:outline-alert-900 active:outline-0 rounded">
                    <g-icon class="!text-alert-600 text-sm lg:text-md" icon="mdi:logout" />
                    Logout
                </button>
                <div @focus="$emit('show-menu', true)" class="py-1 self-stretch flex justify-center items-center lg:hidden">
                    <g-color-mode @show-menu="(value: boolean) => value ? $emit('show-menu', value) : $emit('show-menu')" />
                </div>
            </menu>
        </Transition>
    </div>
</template>