<script setup lang="ts">
import { carousel } from '~/test/mock/carousel';
</script>
<template>
    <div class="relative grid grid-cols-1 w-full min-h-[320px] max-h-[80svh] overflow-hidden">
        <!-- container swap -->
        <div class="flex w-max max-w-screen h-full snap-x snap-mandatory overflow-x-scroll before:bg-neutral-dark/30 before:absolute before:inset-0">
            <!-- slide -->
            <div role="region" v-for="slide in carousel"
                class="flex flex-col justify-center w-screen h-full snap-center snap-always px-6 md:landscape:px-16"
                :style="{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }">
                <div class="flex flex-col gap-3 relative max-w-[70%]">
                    <ul v-for="tag in slide.tags" class="flex items-center gap-2">
                        <li
                            class="px-3 py-1 text-neutral-g0 bg-secundary-950 text-center capitalize border border-secundary-500 text-sm lg:text-md rounded">
                            {{ tag }}
                        </li>
                        <li class="flex gap-2 items-center text-neutral-g0">
                            <g-icon icon="uil:clock" class="text-current text-sm lg:text-md" />
                            <span class="text-sm lg:text-md capitalize">
                                {{ useTimeAgo(slide.timeago).value }}
                            </span>
                        </li>
                    </ul>
                    <h3 class="text-2xl lg:text-4xl line-clamp-3 font-secundary font-bold text-neutral-g0 uppercase">
                        {{ slide.title }}
                    </h3>
                    <NuxtLink tabindex="0" :to="slide.url"
                        class="flex items-center gap-2 bg-gradient-to-r from-primary-600 to-primary-700 transition-colors duration-300 ease-in hover:active:from-primary-500 hover:active:to-primary-600 text-neutral-g0 w-max px-6 py-1 rounded">
                        Visitar a página da Novel
                    </NuxtLink>
                </div>
            </div>
        </div>
        <div
            class="absolute bottom-0 right-0 flex gap-3 bg-neutral-g10 dark:bg-neutral-g900 p-3 rounded-tl-sd min-w-[30%] overflow-visible">
            <span tabindex="0" v-for="slide in carousel"
                class="size-6 rounded-full bg-secundary-600 dark:bg-secundary-200 border-none focus:outline-secundary-800 shadow-current-filter shadow-secundary-800 dark:shadow-secundary-400"></span>
    </div>
</div></template>