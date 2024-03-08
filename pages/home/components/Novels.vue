<script setup lang="ts">
import { novels } from '~/test/mock/novels';
const novelsList = novels.slice(0, 5);
</script>
<template>
    <section class="flex flex-col gap-3 px-6 py-4 basis-1/2 md:landscape:max-w-[50%]">
        <hgroup class="self-stretch flex gap-3">
            <h2 class="text-2xl lg:text-3xl font-secundary text-neutral-g900 dark:text-neutral-g0 uppercase">
                Novels em <span class="text-secundary-600 dark:text-secundary-500">lançamento hoje</span></h2>
        </hgroup>
        <div class="flex flex-col pt-6 gap-8">
            <g-novel-card class="max-w-full max-h-none" v-for="novel in novelsList" :key="novel.novelUrl"
                :title="novel.title" :image="novel.image" :description="novel.description" :novel-url="novel.novelUrl"
                :visible-as-top-rating="false" :last-enumerate-chapters-uploaded="novel.lastEnumerateChaptersUploaded" />
        </div>
        <NuxtLink class="text-neutral-g0 text-center px-6 py-2 rounded-md primary-gradient-x" to="/novels">Mostrar mais</NuxtLink>
    </section>
</template>