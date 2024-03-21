<script setup lang="ts">
import Autoplay from "embla-carousel-autoplay";
import { sponsorsBannerMock } from "~/test/mock/novels";

const plugin = Autoplay({
    delay: 5000,
    stopOnMouseEnter: true,
    stopOnInteraction: false,
})
</script>
<template>
    <CnCarousel class="w-full" :opts="{ align: 'center', loop: true }" :plugins="[plugin]" @mouseenter="plugin.stop"
        @mouseleave="[plugin.reset(), plugin.play()]">
        <CnCarouselContent class="-pl-6 py-6 max-md:py-3">
            <CnCarouselItem v-for="banner in sponsorsBannerMock" :key="banner.sponsor"
                class="flex max-md:flex-col basis-full gap-8 pl-6">
                <NuxtLink
                    class="md:landscape:basis-[70%] flex-auto max-md:min-h-[200px] max-md:max-h-[200px] min-w-[60%] block rounded-2xl relative isolate before:absolute before:inset-0 before:-z-10 before:size-full before:bg-n30 dark:before:bg-n800 overflow-hidden"
                    :to="banner.to">
                    <NuxtImg class="size-full object-contain rounded-2xl aspect-[16/8]" :src="banner.image"
                        :alt="banner.alt ?? ''" />
                    <span class="sr-only">Leia a novel {{ banner.name }} na {{ banner.sponsor }}</span>
                </NuxtLink>
                <div class="flex flex-col h-full gap-6 justify-between">
                    <div>
                        <NuxtLink
                            class="text-3xl lg:text-4xl text-n900 dark:text-n0 capitalize font-bold line-clamp-2 focus:outline-none focus:underline focus:decoration-2 focus:decoration-primary-400 underline-offset-4" :to="banner.to">
                            {{ banner.name }}</NuxtLink>
                        <p class="text-base first-letter:capitalize text-n100 dark:text-n50 line-clamp-4">{{
                            banner.description }}</p>
                    </div>
                    <NuxtLink
                        class="block px-6 py-2 rounded-sd ring-1 ring-secundary-300 text-secundary-900 dark:text-secundary-50 size-max hover:active:bg-secundary-300 transition-colors hover:active:text-secundary-50 duration-200 ease-in"
                        :to="banner.to">Conferir</NuxtLink>
                </div>
        </CnCarouselItem>
    </CnCarouselContent>
</CnCarousel></template>