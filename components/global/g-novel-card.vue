<script setup lang="ts">
import type { novelDetails } from '~/test/mock/novels';

type props = Partial<novelDetails> & {
    showAsVariant: "landscape" | "portrait" | "novel-block",
    showRating: boolean,
    showDescription: boolean,
    showCategories: boolean,
    showChapters: boolean,
}
withDefaults(defineProps<props>(), {
    showAsVariant: "landscape",
    showDescription: false,
    showRating: false,
    showCategories: false,
    showChapters: false
})
const addToLibrary = () => { };
</script>
<template>
    <article @click="navigateTo(novelUrl)" v-if="showAsVariant === 'portrait'"
        class="flex flex-col gap-6 rounded-2xl min-w-[150px] max-w-[150px] lg:min-w-[200px] lg:max-w-[200px] overflow-hidden bg-n10 dark:bg-n700 ring-1 ring-n30 dark:ring-n800">
        <NuxtImg class="max-lg:w-[150px] max-lg:h-[200px] w-[200px] h-[250px]" :src="image" alt="" />
        <div class="flex flex-col gap-3 px-6 pb-6 self-stretch">
            <NuxtLink :to="novelUrl"
                class="text-md lg:text-lg font-semibold line-clamp-2 capitalize focus:outline-none focus:underline focus:decoration-2 focus:decoration-primary-400 underline-offset-4">
                {{ title }}</NuxtLink>
            <div v-if="showChapters" class="text-sm font-semibold text-secundary-400 dark:text-secundary-200">
                <span v-if="showChapters" class="text-md">{{ chaptersCounter }}</span>
                Capítulos
            </div>
            <div v-if="showCategories && categories" class="flex w-full max-w-full items-center gap-2">
                <NuxtLink :to="categories[0].to"
                    class="px-3 py-1 rounded-sd text-base line-clamp-1 text-secundary-300 bg-n20 dark:bg-n800 ring-1 ring-n30 dark:ring-0 transition-[outline] duration-150 ease-in hover:active:outline outline-primary-400 focus:outline-primary-400 focus:outline-offset-1">
                    {{ categories[0].name }}
                </NuxtLink>
            </div>
        </div>
    </article>
    <article @click="navigateTo(novelUrl)" v-else-if="showAsVariant === 'landscape'"
        class="flex gap-3 rounded-2xl min-w-[450px] max-w-[450px] bg-n10 dark:bg-n800 ring-1 ring-n30 dark:ring-n700 overflow-x-hidden">
        <NuxtImg class="w-[180px] h-[250px]" :src="image" alt="" />
        <div class="flex flex-col justify-between gap-6 p-3 pb-6 w-full">
            <div class="flex flex-col gap-2 w-full">
                <NuxtLink :to="novelUrl"
                    class="text-lg font-semibold line-clamp-2 capitalize focus:outline-none focus:underline focus:decoration-2 focus:decoration-primary-400 underline-offset-4">
                    {{ title }}</NuxtLink>
                <div v-if="showRating" class="flex gap-1">
                    <g-icon v-for="star in rating" :key="star" class="text-base text-secundary-300 dark:text-secundary-300"
                        icon="mdi:star" />
                    <g-icon v-for="star in 5 - rating" :key="star" v-if="rating"
                        class="text-base text-secundary-300 dark:text-secundary-300" icon="mdi:star-outline" />
                </div>
                <p class="text-base first-letter:capitalize text-n100 dark:text-n50 line-clamp-4 leading-snug">{{
                    description }}</p>
                <div v-if="showCategories && categories" class="flex items-center gap-2">
                    <NuxtLink v-for="category in categories.slice(0, 2)" :key="category.to" :to="category.to"
                        class="block px-3 py-1 rounded-sd bg-n20 dark:bg-n700 ring-1 ring-n30 dark:ring-0 text-base dark:hover:active:bg-n600 transition-[background, outline] duration-150 ease-in hover:active:outline outline-primary-400 focus:outline-primary-400 focus:outline-offset-1">
                        {{ category.name }}
                    </NuxtLink>
                </div>
            </div>
            <div v-if="showChapters" class="text-base font-semibold w-full">
                <span class="text-md">{{ chaptersCounter }}</span>
                Capítulos
            </div>
        </div>
    </article>
    <article @click="navigateTo(novelUrl)" v-else
        class="flex items-center gap-3 rounded-2xl max-w-[50%] max-h-min bg-n10 dark:bg-n800 ring-1 ring-n30 dark:ring-n700 overflow-x-hidden">
        <NuxtImg class="w-[180px] h-[250px]" :src="image" alt="" />
        <div class="flex flex-col justify-between gap-6 p-3 pb-6 w-full self-stretch">
            <div class="flex flex-col gap-2 w-full self-stretch">
                <NuxtLink :to="novelUrl"
                    class="text-lg font-semibold line-clamp-2 capitalize focus:outline-none focus:underline focus:decoration-2 focus:decoration-primary-400 underline-offset-4">
                    {{ title }}</NuxtLink>
                <div class="flex items-center gap-2">
                    <NuxtLink v-if="categories" v-for="category in categories.slice(0, 2)" :key="category.to"
                        :to="category.to"
                        class="block px-3 py-1 text-n100 dark:text-n40 text-base hover:active:underline decoration-primary-400 focus:decoration-primary-400 focus:underline-offset-4 decoration-2">
                        {{ category.name }}
                    </NuxtLink>
                </div>
                <div class="flex gap-3">
                    <g-icon v-for="star in rating" :key="star"
                        class="text-base lg:!text-lg !text-alert-600 dark:!text-alert-500" icon="mdi:star" />
                    <g-icon v-for="star in 5 - rating" :key="star" v-if="rating"
                        class="text-base lg:!text-lg !text-alert-600 dark:!text-alert-500" icon="mdi:star-outline" />
                </div>
                <p class="text-base first-letter:capitalize text-n100 dark:text-n50 line-clamp-4 leading-snug">
                    {{ views }} views</p>
            </div>
            <NuxtLink :to="novelUrl"
                class="text-base inline-flex w-min font-medium px-3 py-2 rounded-sd text-n0 bg-secundary-400 hover:active:bg-secundary-500 transition-colors duration-100 ease-in">
                Conferir
            </NuxtLink>
        </div>
    </article>
</template>