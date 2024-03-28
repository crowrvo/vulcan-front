<script lang="ts" setup>
import { novels as mockNovel, type novelDetails } from '~/test/mock/novels';

const props = defineProps<{
    title: string;
    filter: novelDetails['nationality']
}>()

const filteredNovels = mockNovel.filter(novel => novel.nationality === props.filter);
</script>
<template>
    <section class="w-full">
        <h3 class="text-2xl lg:text-3xl uppercase font-secundary">{{ title }}</h3>
        <CnCarousel class="w-full max-w-full min-h-[200px]" :opts="{ align: 'center'}">
            <CnCarouselContent class="-pl-6 py-6">
                <CnCarouselItem v-if="filteredNovels.length > 0" v-for="novel in filteredNovels" :key="novel.novelUrl"
                    class="!basis-auto pl-6">
                    <g-novel-card show-as-variant="portrait" :title="novel.title" :image="novel.image"
                        :novel-url="novel.novelUrl" :show-categories="true" :categories="novel.categories" />
                </CnCarouselItem>
                <CnCarouselItem v-else class="basis-full flex flex-col justify-center items-center">
                    <p class="text-center text-base text-n900 dark:text-n0">Sem novels para exibir dessa categoria até então
                    </p>
                </CnCarouselItem>
            </CnCarouselContent>
        </CnCarousel>
        <NuxtLink
            class="px-6 py-3 rounded-xl bg-gradient-to-r from-secundary-300 to-secundary-400 hover:active:from-secundary-400 hover:active:to-secundary-500 transition duration-200 ease-in text-n0"
            :to="filter === 'foreign' ? '/novels/categories/foreign' : '/novels/categories/national'">
            {{ filter === 'foreign' ? 'Confira todas as novels extrangeiras' : 'Confira todas as novels brasileiras' }}
        </NuxtLink>
    </section>
</template>