<script setup lang="ts">
import { novels } from '~/test/mock/novels';
</script>
<template>
    <section class="flex flex-col gap-3 px-6 py-4 ring-1 ring-n30 dark:ring-0 bg-n20 dark:bg-n800 rounded-2xl">
        <hgroup class="self-stretch flex gap-3">
            <h2 class="text-2xl lg:text-3xl font-secundary text-n900 dark:text-n0 uppercase">
                Novels em <span class="text-secundary-400 dark:text-secundary-300">recém-adicionadas</span></h2>
        </hgroup>
        <div class="flex gap-8">
            <div
                class="hidden md:landscape:flex flex-col gap-2 bg-n10 dark:bg-n800 basis-[200px] flex-initial h-max rounded-[16px] ring-1 ring-n30 dark:ring-n700 min-w-[250px] max-w-[250px] lg:min-w-[465px] lg:max-w-[465px] overflow-hidden">
                <div class="flex flex-col gap-3 w-full items-center">
                    <div class="flex flex-col gap-2 w-full justify-center">
                        <NuxtLink class="w-full h-[200px]" :to="novels[0].novelUrl">
                            <NuxtImg v-if="novels[0].bannerUrl" class="object-contain size-full"
                                :src="novels[0].bannerUrl" />
                            <NuxtImg v-else class="object-contain size-full" :src="novels[0].image" />
                        </NuxtLink>
                        <hgroup class="flex flex-col gap-1 items-center">
                            <h3 class="text-md lg:text-lg uppercase font-bold px-6">
                                <NuxtLink class="focus:outline-none focus:underline focus:decoration-2 focus:decoration-primary-400 underline-offset-4" :to="novels[0].novelUrl">
                                    {{ novels[0].title }}
                                </NuxtLink>
                            </h3>
                            <NuxtLink class="block text-center text-base lg:text-md capitalize"
                                :to="novels[0].publisher.to">{{ novels[0].publisher.name }}
                            </NuxtLink>
                        </hgroup>
                    </div>
                    <div class="flex items-center justify-center self-stretch">
                        <NuxtLink
                            class="px-2 py-1 text-n0 rounded-sd bg-secundary-400 hover:active:bg-secundary-500 transition-[background, outline] duration-300 ease-in text-base lg:text-md hover:active:outline outline-secundary-400 focus:outline-secundary-400 focus:outline-offset-1"
                            v-for="category in novels[0].categories.slice(0, 1)" :to="category.to">{{ category.name }}
                        </NuxtLink>
                    </div>
                    <p class="text-n100 dark:text-n50 text-base lg:text-md line-clamp-4 px-6 max-w-prose leading-snug">
                        {{ novels[0].description }}
                    </p>
                </div>
                <div class="flex flex-col gap-2 px-6 pb-6">
                    <NuxtLink class="text-n0 text-center px-6 py-2 rounded-[16px] bg-secundary-400 w-full transition-[background, outline] duration-300 ease-in text-base hover:active:outline hover:active:bg-secundary-500 outline-secundary-400 focus:outline-secundary-400 focus:outline-offset-1" :to="novels[0].novelUrl">
                        Conferir</NuxtLink>
                    <button tabindex="0" class="text-n0 bg-n500 px-6 py-2 rounded-[16px] text-left inline-flex gap-1 w-full select-none ease-in hover:active:outline transition-[background, outline] duration-300 hover:active:bg-n600 outline-n400 focus:outline-n400 focus:outline-offset-1">
                        <g-icon class="hidden lg:block text-base" icon="uil:books" />
                        Adicionar a leitura
                    </button>
                </div>
            </div>
            <div class="flex flex-wrap px-6 gap-6 self-stretch">
                <g-novel-card class="h-min" show-as-variant="portrait" :banner-url="novel.bannerUrl ?? ''" :publisher="novel.publisher"
                    v-for="novel in novels.slice(1, 11)" :title="novel.title" :image="novel.image"
                    :novel-url="novel.novelUrl" :visible-as-top-rating="true" :description="novel.description"
                    :rating="novel.rating" :show-chapters="true" :chapters-counter="novel.chaptersCounter"
                    :show-rating="false" :categories="novel.categories" />
            </div>
        </div>
    </section>
</template>