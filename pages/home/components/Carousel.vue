<script setup lang="ts">
import { carousel } from '~/test/mock/carousel';
import Autoplay from "embla-carousel-autoplay";

const plugin = Autoplay({
    delay: 5000,
    stopOnMouseEnter: true,
    stopOnInteraction: false,
})
</script>
<template>
    <CnCarousel class="w-full" :opts="{ align: 'center', loop: true }" :plugins="[plugin]" @mouseenter="plugin.stop"
        @mouseleave="[plugin.reset(), plugin.play()]">
        <CnCarouselContent>
            <CnCarouselItem v-for="slide in carousel" :key="slide.url"
                class=" size-full basis-full relative before:bg-neutral-dark/30 before:absolute before:inset-0"
                :style="{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }">
                <div
                    class="w-full flex justify-center flex-col gap-3 isolate max-w-[70%] min-h-[350px] px-6 md:landscape:px-16 ">
                    <ul v-for="tag in slide.tags" class="flex items-center gap-2">
                        <li
                            class="px-3 py-1 text-n0 bg-secundary-900 text-center capitalize border border-secundary-500 text-sm lg:text-md rounded">
                            {{ tag }}
                        </li>
                        <li class="flex gap-2 items-center text-n0">
                            <g-icon icon="uil:clock" class="text-current text-sm lg:text-md" />
                            <span class="text-sm lg:text-md capitalize">
                                {{ useTimeAgo(slide.timeago).value }}
                            </span>
                        </li>
                    </ul>
                    <h3 class="text-2xl lg:text-4xl line-clamp-3 font-secundary text-n0 uppercase">
                        {{ slide.title }}
                    </h3>
                    <NuxtLink tabindex="0" :to="slide.url"
                        class="flex items-center gap-2 bg-gradient-to-r from-primary-600 to-primary-700 transition-colors duration-300 ease-in hover:active:from-primary-400 hover:active:to-primary-500 text-n0 w-max px-6 py-1 rounded">
                        Visitar a página da Novel
                    </NuxtLink>
                </div>
            </CnCarouselItem>
        </CnCarouselContent>
    </CnCarousel>
</template>