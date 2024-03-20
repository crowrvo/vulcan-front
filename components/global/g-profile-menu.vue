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
            class="text-n900 dark:text-n0 flex bg-n0 dark:bg-n900 items-center gap-3 text-base lg:text-lg focus:bg-secundary-50 focus:outline focus:outline-secundary-300 dark:focus:bg-n700 rounded-sd p-1 border-t-0">
            <div class="relative">
                <NuxtImg class="size-profile-image-sm lg:size-profile-image rounded-full" :src="user.image" />
                <span
                    class="absolute bottom-0 right-0 size-6 flex justify-center items-center shadow rounded-full bg-alert-600 text-n0 text-sm lg:text-base">
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
                class="flex flex-col p-1 absolute gap-1 top-full mt-1 w-full origin-top-right bg-n0 dark:bg-n900 border border-n30 dark:border-n700 shadow-sm rounded-sd border-t-0 focus:outline-0">
                <nav class="w-full">
                    <ul class="w-full">
                        <li class="w-full" v-for="action in actions" :key="action.to">
                            <NuxtLink tabindex="0" @focus="$emit('show-menu', true)"
                                class="w-full capitalize text-sm lg:text-md text-n900 dark:text-n0 inline-flex items-center focus:bg-secundary-50 dark:focus:!bg-n700 gap-2 p-3 hover:active:bg-n20 dark:hover:active:bg-n700 focus:outline focus:outline-secundary-300 active:outline-0 rounded"
                                :to="action.to">
                                <g-icon class="!text-n900 dark:!text-n0 text-xsm lg:text-md"
                                    :icon="action.icon" />
                                {{ action.name }}
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>
                <button tabindex="0" type="button" @click="" @focus="$emit('show-menu', true)"
                    class="relative text-sm lg:text-md w-full capitalize text-n900 dark:text-n0 inline-flex items-center focus:bg-secundary-50 dark:focus:!bg-n700 gap-2 p-3 focus:outline hover:active:bg-n20 dark:hover:active:bg-n700 focus:outline-secundary-300 active:outline-0 rounded">
                    <g-icon class="!text-current text-xsm lg:text-md" icon="uil:bell" />
                    Notificações
                    <span class="absolute top-2 left-3 size-3 rounded-full bg-alert-600 text-n0"></span>
                </button>
                <button tabindex="0" type="button" @click="" @focus="$emit('show-menu', true)"
                    class="capitalize text-sm lg:text-md inline-flex items-center text-alert-600 gap-2 p-3 focus:bg-alert-50 hover:active:bg-n20 dark:hover:active:bg-n700 dark:focus:!bg-n700 focus:outline focus:outline-alert-100 dark:focus:outline-alert-900 active:outline-0 rounded">
                    <g-icon class="!text-alert-600 text-xsm lg:text-md" icon="mdi:logout" />
                    Logout
                </button>
                <div @focus="$emit('show-menu', true)" class="py-1 md:landscape:hidden self-stretch flex justify-center items-center lg:hidden">
                    <g-color-mode class="!bg-transparent" @show-menu="(value: boolean) => value ? $emit('show-menu', value) : $emit('show-menu')" />
                </div>
            </menu>
        </Transition>
    </div>
</template>