<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import type { novelDetails } from '~/test/mock/novels';

type props = novelDetails & {
    showAsVariant: "landscape" | "portrait"
}
withDefaults(defineProps<props>(), { showAsVariant: "landscape" })
const addToLibrary = () => { };
</script>
<template>
    <article v-if="showAsVariant === 'portrait'"
        class="inline-flex flex-col snap-always snap-center min-w-[200px] gap-3 max-w-[200px] justify-between rounded-xl border bg-secundary-50 border-secundary-300 dark:bg-neutral-g800 dark:border-neutral-g500 overflow-hidden">
        <NuxtImg class="aspect-portrait size-full object-cover max-h-[250px] lg:max-h-[250px]" :src="image" placeholder />
        <div class="flex flex-col justify-between gap-3 w-full p-3">
            <div class="flex self-stretch flex-col gap-3 w-full">
                <hgroup class="self-stretch">
                    <h4 @click="navigateTo(novelUrl)" class="line-clamp-2 text-md lg:text-lg font-bold capitalize">
                        {{ title }}
                    </h4>
                    <p
                        class="line-clamp-3 mt-1 w-full max-w-prose text-sm lg:text-md text-neutral-g100 dark:text-neutral-g50 leading-relaxed">
                        {{ description }}</p>
                </hgroup>
                <div v-if="!visibleAsTopRating" class="self-stretch relative p-2 pl-9">
                    <span class="absolute left-0 top-3 text-sm text-neutral-g900 dark:text-neutral-g0">Cáp.</span>
                    <div
                        class="flex gap-2 items-center self-stretch max-w-full overflow-x-scroll overflow-y-hidden scrollable-container overscroll-none">
                        <NuxtLink v-if="!visibleAsTopRating"
                            class="block transition-colors duration-300 ease-in px-3 text-md py-1 rounded-sd secundary-gradient text-neutral-g0"
                            v-for="chapter in lastEnumerateChaptersUploaded" :to="chapter.to" :key="chapter.to">
                            {{ chapter.chapterNumber }}
                            <span class="sr-only pointer-events-none">Ler ao cápitulo {{ chapter.chapterNumber }} da Novel
                                {{
                                    title }}</span>
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <div class="flex flex-col self-stretch gap-2">
                <NuxtLink
                    class="text-neutral-g0 secundary-gradient px-6 py-3 basis-1/2 flex bg-gradient-to-r from-secundary-500 to-secundary-700 text-base lg:text-md items-center justify-center gap-2 text-center rounded-md"
                    :to="novelUrl">Mostrar mais</NuxtLink>
                <button tabindex="0" type="button" @click=""
                    class="px-6 py-2 basis-1/2 inline-flex items-center text-base lg:text-md gap-2 text-center justify-center text-neutral-g0 rounded-md !bg-neutral-g600 hover:active:!bg-neutral-g800 dark:hover:active:!bg-neutral-g500">
                    <g-icon class="text-sm lg:text-md !text-neutral-g0" icon="uil:books" />
                    Leitura
                </button>
            </div>
        </div>
    </article>

    <article v-else
        class="inline-flex snap-always snap-center w-max min-w-[50%] flex-auto gap-3 max-w-[900px] justify-between rounded-xl border bg-secundary-50 border-secundary-300 dark:bg-neutral-g800 dark:border-neutral-g500 overflow-hidden hover:active:border-secundary-400 dark:hover:active:border-neutral-g200 transition-colors duration-200 ease-in">
        <NuxtImg
            class="aspect-portrait size-full basis-1/2 object-cover max-h-[200px] lg:max-h-[250px] max-w-1/2 rounded-br-sd"
            :src="image" placeholder format="avif" />
        <div class="flex flex-col justify-between gap-3 w-full p-3 h-max">
            <div class="flex self-stretch flex-col gap-3">
                <hgroup class="self-stretch">
                    <h4 @click="navigateTo(novelUrl)"
                        class="line-clamp-2 text-md lg:text-lg font-bold capitalize select-all">
                        {{ title }}</h4>
                    <p
                        class="line-clamp-3 mt-1 w-full max-w-prose text-sm lg:text-md text-neutral-g100 dark:text-neutral-g50 leading-relaxed">
                        {{ description }}</p>
                </hgroup>
                <div v-if="!visibleAsTopRating"
                    class="flex gap-2 items-center relative max-w-full overflow-x-scroll overflow-y-hidden p-2 pl-9 scrollable-container">
                    <span class="absolute left-0 top-3 text-sm text-neutral-g900 dark:text-neutral-g0">Cáp.</span>
                    <NuxtLink
                        class="block transition-colors duration-300 ease-in px-3 text-md py-1 rounded-sd bg-secundary-700 hover:active:bg-secundary-400 text-neutral-g0"
                        v-for="chapter in lastEnumerateChaptersUploaded" :to="chapter.to" :key="chapter.to">
                        {{ chapter.chapterNumber }}
                        <span class="sr-only pointer-events-none">Ler ao cápitulo {{ chapter.chapterNumber }} da Novel {{
                            title }}</span>
                    </NuxtLink>
                </div>
            </div>
            <div class="flex flex-wrap md:landscape:flex-nowrap w-full gap-2">
                <NuxtLink
                    class="text-neutral-g0 px-6 py-2 basis-1/2 flex-auto inline-flex justify-center text-base lg:text-md items-center gap-2 text-center rounded-md secundary-gradient"
                    :to="novelUrl">Mostrar mais</NuxtLink>
                <button tabindex="0" type="button" @click=""
                    class="px-6 py-2 basis-1/2 flex-auto inline-flex items-center justify-center text-base lg:text-md gap-2 text-center text-neutral-g0 rounded-md !bg-neutral-g600 hover:active:!bg-neutral-g800 dark:hover:active:!bg-neutral-g500">
                    <g-icon class="text-sm !text-neutral-g0" icon="uil:books" />
                    Leitura
                </button>
            </div>
        </div>
    </article>
</template>