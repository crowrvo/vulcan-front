<script setup lang="ts">
import { topNovels } from '~/test/mock/novels';

const row1 = ref<HTMLDivElement>();
const row2 = ref<HTMLDivElement>();
</script>
<template>
    <section class="flex self-stretch flex-col gap-3">
        <div class="flex gap-3 px-3">
            <div class="block">
                <g-icon class="text-2xl md:landscape:text-lg lg:text-5xl !text-warn-500" icon="uil:fire" />
            </div>
            <div class="flex flex-col gap-1">
                <h2 class="text-2xl lg:text-3xl font-secundary uppercase">Novels em <span
                        class="text-secundary-600 dark:text-secundary-300">destaque</span></h2>
                <p class="text-base lg:text-md text-n100 dark:text-n30 max-w-prose mx-auto">
                    Confira as novels mais lidas dos últimos 3 meses.
                </p>
            </div>
        </div>
        <div class="w-full flex flex-col gap-6 max-md:gap-3">
            <div ref="row1"
                class="flex min-w-full w-max max-w-full overflow-x-scroll snap-x snap-mandatory scrollable-container p-3 gap-8">
                <g-novel-card class="max-md:!scale-90" show-as-variant="landscape" v-for="novel in topNovels"
                    :key="novel.novelUrl" :title="novel.title" :image="novel.image" :novel-url="novel.novelUrl"
                    :description="novel.description" :rating="novel.rating" :show-chapters="false"
                    :categories="novel.categories" :show-categories="true" :chapters-counter="novel.chaptersCounter" />
            </div>
            <div ref="row2"
                class="flex min-w-full w-max max-w-full overflow-x-scroll snap-x snap-mandatory scrollable-container p-3 gap-8">
                <g-novel-card class="max-md:!scale-90" show-as-variant="landscape" v-for="novel in topNovels"
                    :key="novel.novelUrl" :title="novel.title" :image="novel.image" :novel-url="novel.novelUrl"
                    :description="novel.description" :rating="novel.rating" :show-chapters="false"
                    :categories="novel.categories" :show-categories="true" :chapters-counter="novel.chaptersCounter" />
            </div>
        </div>
    </section>
</template>