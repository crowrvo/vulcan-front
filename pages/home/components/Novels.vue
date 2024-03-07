<script setup lang="ts">
import { novels } from '~/test/mock/novels';
</script>
<template>
    <section class="flex flex-col gap-3 px-6 py-4 basis-1/2 md:landscape:max-w-[50%]">
        <div class="self-stretch flex gap-3">
            <h2 class="text-2xl lg:text-3xl font-secundary text-neutral-g900 dark:text-neutral-g0 capitalize">
                Novels em <span class="text-secundary-600 dark:text-secundary-500">lançamento hoje</span></h2>
        </div>
        <div class="flex flex-col py-6 gap-8">
            <g-novel-card class="max-w-full max-h-none" v-for="novel in novels" :title="novel.title" :image="novel.image"
                :description="novel.description" :novel-url="novel.novelUrl" :visible-as-top-rating="false"
                :last-enumerate-chapters-uploaded="novel.lastEnumerateChaptersUploaded" />
        </div>
    </section>
</template>