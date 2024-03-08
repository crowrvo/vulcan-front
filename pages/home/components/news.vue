<script setup lang="ts">
import type { URL } from '~/test/mock/navigation';

defineProps<{
    title: string;
    description: string;
    navigate?: URL
}>();
</script>
<template>
    <article
        class="flex flex-col gap-3 px-5 py-4 rounded-sd bg-neutral-g20 dark:bg-neutral-g800 outline outline-neutral-g30 dark:outline-0">
        <hgroup class="flex flex-col gap-2">
            <h2 class="uppercase text-2xl lg:text-3xl font-secundary">{{ title }}</h2>
            <p class="text-base lg:text-lg text-neutral-g100 dark:text-neutral-g30 leading-snug">{{ description }}</p>
        </hgroup>
        <NuxtLink class="px-6 py-2 text-center text-neutral-g0 rounded-sd primary-gradient-x" v-if="navigate"
            :to="navigate.to">{{ navigate.name }}</NuxtLink>
    </article>
</template>