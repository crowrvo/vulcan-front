<script setup lang="ts">
import { topNovels } from '~/test/mock/novels';
</script>
<template>
    <section class="flex self-stretch flex-col gap-3">
        <div class="flex gap-3 px-3">
            <div class="block">
                <g-icon class="text-2xl md:landscape:text-lg lg:text-5xl !text-alert-600" icon="uil:fire" />
            </div>
            <div class="flex flex-col gap-1">
                <h2 class="text-2xl lg:text-3xl font-secundary capitalize">Novels em <span
                        class="text-secundary-600 dark:text-secundary-500">destaque</span></h2>
                <p class="text-base lg:text-md text-neutral-g100 dark:text-neutral-g30 max-w-prose mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo illum quae autem tempora exercitationem
                    amet.
                </p>
            </div>
        </div>
        <div
            class="flex min-w-full w-max max-w-full overflow-x-scroll snap-x snap-mandatory scrollable-container p-3 gap-8">
            <g-novel-card
                :show-as-variant="useScreenOrientation().orientation.value === 'portrait-primary' || useScreenOrientation().orientation.value === 'portrait-secondary' ? 'portrait' : 'landscape'"
                v-for="novel in topNovels" :title="novel.title" :image="novel.image" :novel-url="novel.novelUrl"
                :visible-as-top-rating="true" :description="novel.description"
                :last-enumerate-chapters-uploaded="novel.lastEnumerateChaptersUploaded" />
        </div>
    </section>
</template>