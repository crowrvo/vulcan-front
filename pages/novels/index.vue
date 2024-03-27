<script setup lang="ts">
import { useFuse } from '@vueuse/integrations/useFuse.mjs';
import { novels, type novelDetails } from '~/test/mock/novels';
import { compareValue } from '~/utils/sort';

type sortAlplabet = "asc" | "desc";
type presentationFormat = "grid" | "col";

const sortMethods = reactive<{ alphabet: sortAlplabet, moreViews: boolean }>({ alphabet: 'asc', moreViews: false });
const presentAs = ref<presentationFormat>("grid");

const filteredNovels = ref(novels.sort());
const filteringBy = ref<"alphabetic" | "views">('alphabetic');
const advancedFilterVisible = ref(false);

const novelsSortedByViews = ref<Array<novelDetails>>();

const search = ref('');
const showResults = ref(false);
const { results } = useFuse(search, novels.map(novel => novel.title), {
    resultLimit: 4,
})

const combobox = ref<HTMLUListElement>();
onClickOutside(combobox, () => showResults.value = false)



watchEffect(() => {
    filteredNovels.value.sort(({ title }, nvl2) => compareValue(title, nvl2.title, sortMethods.alphabet === 'asc'))
})
watchEffect(() => {
    novelsSortedByViews.value = novels.sort(({ views }, nvl2) => compareValue(views, nvl2.views, sortMethods.moreViews));
})

const toggleSortAlphabet = () => sortMethods.alphabet === 'asc' ? sortMethods.alphabet = 'desc' : sortMethods.alphabet = 'asc';
const togglePresentationFormat = () => presentAs.value === 'grid' ? presentAs.value = 'col' : presentAs.value = 'grid';
</script>
<template>
    <Transition enter-active-class="transition-opacity duration-500 ease-in" enter-from-class="opacity-0"
        enter-to-class="opacity-100" leave-active-class="transition-opacity duration-500 ease-in"
        leave-from-class="opacity-100" leave-to-class="opacity-0">
        <g-advanced-filter @close="advancedFilterVisible = false" v-if="advancedFilterVisible" />
    </Transition>
    <div class="mt-20 w-full overflow-hidden grid grid-cols-2 gap-x-6 gap-y-20 p-6 lg:p-16">
        <div class="flex flex-col gap-8 items-center col-span-2">
            <div class="self-stretch flex gap-6 lg:gap-8 items-center">
                <div class="relative self-stretch size-full">
                    <div class="size-full self-stretch">
                        <input v-model="search" @click="showResults = true" placeholder="Pesquise alguma novel"
                            role="searchbox" type="text"
                            class="p-3 !pl-12 lg:p-6 bg-n40 dark:bg-n700 !rounded-sd border-none text-n900 dark:text-n0 size-full placeholder:text-n100 dark:placeholder:text-n50">
                        <button class="h-full px-3 absolute left-0">
                            <g-icon class="text-sm lg:text-2xl !text-n100 dark:!text-n50" icon="uil:search" />
                        </button>
                    </div>
                    <ul ref="combobox" v-if="novels.some((novel) => novel.title) && search !== '' && showResults"
                        role="combobox"
                        class="flex absolute isolate z-50 top-full w-full rounded-sd flex-col *:!text-opacity-70 divide-y divide-n30 dark:divide-n600 bg-n10 dark:bg-n800 ring-1 ring-n30 dark:ring-n700 overflow-hidden">
                        <li tabindex="0" v-for="result in results" :key="result.RefIndex" v-if="results.length > 0"
                            @click="search = result.item"
                            class="w-full first-of-type:!text-opacity-100 text-n900 dark:text-n0 font-normal text-base hover:active:bg-n20 dark:hover:active:bg-n500 p-3 capitalize">
                            <NuxtLink :to="novels[results.indexOf(result)].novelUrl">
                                <span class="sr-only">Novel</span>
                                {{ result.item }}
                            </NuxtLink>
                        </li>
                        <li tabindex="0" v-else
                            class="w-full text-n900 dark:text-n0 font-normal text-base hover:active:bg-n20 dark:hover:active:bg-n500 p-3 capitalize">
                            Nenhuma novel encontrada
                        </li>
                    </ul>
                </div>
                <button @click="advancedFilterVisible = true"
                    class="p-3 lg:p-6 bg-secundary-400 hover:active:bg-secundary-500 transition-colors duration-100 ease-in !text-n0 rounded-sd">
                    <g-icon class="text-sm lg:text-2xl" icon="heroicons-solid:adjustments" />
                </button>
            </div>
            <div class="flex flex-col gap-6 self-stretch">
                <hgroup class="flex flex-col gap-1">
                    <h1 class="text-3xl lg:text-4xl font-secundary uppercase">Lista de novels</h1>
                    <p class="text-n100 dark:text-n50 text-base lg:text-lg">
                        Confira todas as novels publicadas no nosso site.
                    </p>
                </hgroup>
                <div class="flex flex-col md:landscape:flex-row items-center justify-between gap-6 self-stretch">
                    <button @click="advancedFilterVisible = !advancedFilterVisible"
                        class="flex max-md:w-full items-center justify-center bg-n20 dark:bg-n800 ring-1 ring-n30 dark:ring-n700 gap-2 p-2 rounded-sd focus:hover:active:bg-n30 dark:focus:active:bg-n900">
                        Categorias
                        <g-icon class="text-sm lg:text-md" icon="uil:angle-down" />
                    </button>
                    <div class="flex max-md:flex-col-reverse self-stretch items-center flex-wrap gap-3">
                        <div class="flex items-center gap-2">
                            <span class="text-base lg:text-lg text-n900 dark:text-n0 font-medium">Ordenação</span>
                            <button @click="toggleSortAlphabet(); filteringBy = 'alphabetic'"
                                :class="{ 'bg-secundary-300 !text-n0 dark:bg-secundary-900 dark:ring-1 dark:ring-secundary-300': filteringBy === 'alphabetic' }"
                                class="p-2 rounded-sd text-n900 dark:text-n0 flex items-center gap-2 font-medium capitalize dark:focus:active:bg-secundary-900 focus:active:ring-1 ring-secundary-300">
                                <g-icon class="text-sm lg:text-lg !text-current" v-if="sortMethods.alphabet === 'asc'"
                                    icon="ri:sort-alphabet-asc" />
                                <g-icon class="text-sm lg:text-lg !text-current" v-else icon="ri:sort-alphabet-desc" />
                                Alfabética
                            </button>
                            <button @click="sortMethods.moreViews = !sortMethods.moreViews; filteringBy = 'views'"
                                :class="{ 'bg-secundary-300 !text-n0 dark:bg-secundary-900 dark:ring-1 dark:ring-secundary-300': filteringBy === 'views' }"
                                class="p-2 rounded-sd text-n900 dark:text-n0 flex items-center gap-2 font-medium capitalize dark:focus:active:bg-secundary-900 focus:active:ring-1 ring-secundary-300">
                                <g-icon class="text-sm lg:text-lg !text-current" icon="bx:sort" /> Vizualizações
                            </button>
                        </div>
                        <button @click="togglePresentationFormat()"
                            class="flex max-md:w-full items-center justify-center bg-n20 dark:bg-n800 ring-1 ring-n30 dark:ring-n700 gap-2 p-2 rounded-sd focus:hover:active:bg-n30 dark:focus:active:bg-n900">
                            Exibir como
                            <span class="md:sr-only text-primary-500 dark:text-primary-300">{{ presentAs === 'grid' ?
                                'grade' : 'coluna' }}</span>
                            <g-icon class="text-sm lg:text-lg !text-current" v-if="presentAs === 'grid'" icon="mdi:grid" />
                            <g-icon class="text-sm lg:text-lg !text-current" v-else icon="mdi:table-column" />
                        </button>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-3 self-stretch">
                <h2 class="text-2xl lg:text-3xl font-secundary uppercase">Todas as Novels</h2>
                <div class="flex items-center flex-wrap gap-3" :class="{ 'flex-col': presentAs === 'col' }">
                    <g-novel-card v-if="!sortMethods.moreViews" class="basis-1/3 md:landscape:basis-1/3 flex-auto w-full"
                        :class="{ '!basis-auto min-w-full flex-initial': presentAs === 'col', 'max-md:flex-col': presentAs === 'grid' }"
                        v-for="novel in filteredNovels" :key="novel.novelUrl" show-as-variant="novel-block"
                        :novel-url="novel.novelUrl" :categories="novel.categories" :image="novel.image" :title="novel.title"
                        :rating="novel.rating" :views="novel.views" />

                    <g-novel-card v-else class="basis-1/3 md:landscape:basis-1/3 flex-auto w-full"
                        :class="{ '!basis-auto min-w-full flex-initial': presentAs === 'col', 'max-md:flex-col': presentAs === 'grid' }"
                        v-for="novel in novelsSortedByViews" :key="novel.description" show-as-variant="novel-block"
                        :novel-url="novel.novelUrl" :categories="novel.categories" :image="novel.image" :title="novel.title"
                        :rating="novel.rating" :views="novel.views" />
                </div>
                <div class="flex self-stretch gap-2 items-center justify-center">
                    <NuxtLink v-for="page, idx in novels.slice(0, 10)" :key="idx" to="#"
                        class="flex text-base !text-n0 lg:text-lg px-6 py-3 rounded-sd lg:rounded-xl bg-secundary-400 hover:active:bg-secundary-500">
                        <span class="sr-only">Página</span> {{ idx + 1 }}
                    </NuxtLink>
                    <NuxtLink to="#"
                        class="flex items-center justify-center text-base lg:text-lg px-3 lg:px-6 h-full rounded-sd lg:rounded-xl bg-n500 hover:active:bg-n600">
                        <g-icon class="text-sm lg:text-base !text-n0" icon="uil:angle-double-right" />
                        <span class="sr-only">Última página</span>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>