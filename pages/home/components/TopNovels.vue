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
            <CnCarousel ref="row1" class="flex min-w-full w-max max-w-full" :opts="{ align: 'center' }">
                <CnCarouselContent class="p-3 pl-6">
                    <CnCarouselItem class="!basis-auto pl-6" v-for="novel in topNovels" :key="novel.novelUrl">
                        <g-novel-card class="max-md:!scale-90" show-as-variant="landscape" :title="novel.title"
                            :image="novel.image" :novel-url="novel.novelUrl" :description="novel.description"
                            :categories="novel.categories" :show-categories="true"
                            :chapters-counter="novel.chaptersCounter" />
                    </CnCarouselItem>
                </CnCarouselContent>
            </CnCarousel>
            <CnCarousel ref="row1" class="flex min-w-full w-max max-w-full" :opts="{ align: 'center' }">
                <CnCarouselContent class="p-3 pl-6">
                    <CnCarouselItem class="!basis-auto pl-6" v-for="novel in topNovels" :key="novel.novelUrl">
                        <g-novel-card class="max-md:!scale-90" show-as-variant="landscape" :title="novel.title"
                            :image="novel.image" :novel-url="novel.novelUrl" :description="novel.description"
                            :categories="novel.categories" :show-categories="true"
                            :chapters-counter="novel.chaptersCounter" />
                    </CnCarouselItem>
                </CnCarouselContent>
            </CnCarousel>
        </div>
    </section>
</template>