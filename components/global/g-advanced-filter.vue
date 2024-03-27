<script lang="ts" setup>
import { useFuse } from "@vueuse/integrations/useFuse";
import { mockAuthors, mockCategories } from "~/test/mock/novels";
import { mockScanlators, mockPublishers, type novelDetails } from "~/test/mock/novels";

const emit = defineEmits(['close']);

const authorId = useId();
const scanlatorId = useId();
const publisherId = useId();
const categoriesId = useId();



type FilterOptions = {
    scanlator?: MaybeRef<string>;
    categories?: novelDetails['categories'];
    publisher?: MaybeRef<novelDetails['publisher']>;
}
const search = ref('')
const userSearch = reactive<FilterOptions>({
    scanlator: undefined,
    categories: [],
    publisher: undefined
})

function reset() {
    search.value = '';
    userSearch.scanlator = undefined;
    userSearch.publisher = undefined;
    userSearch.categories = []
}
const setAuthor = (value: any) => {
    alert(value);
}

const showResults = ref(false);
const modal = ref<HTMLDivElement>();
onClickOutside(modal, () => emit('close'));

const { results } = useFuse(search, mockAuthors, {
    resultLimit: 5,
})
</script>
<template>
    <div class="fixed flex items-center justify-center inset-0 z-[800] isolate bg-n50/80 dark:bg-n900/80">
        <form ref="modal" action="#" @submit.prevent=""
            class="relative top-6 mx-auto md:landscape:max-h-[70svh] max-w-[400px] lg:max-w-[600px] overflow-y-scroll overflow-x-hidden scrollable-container flex flex-col gap-2 p-8 ring-1 ring-n30 dark:ring-n600 rounded-xl bg-n0 dark:bg-n900">
            <div class="flex items-center justify-between">
                <h2 class="text-2xl dark:text-n0 leading-snug capitalize font-bold">Filtragem Avançada</h2>
                <button @click="$emit('close')" class="p-2 rounded-sd focus:outline focus:outline-primary-400">
                    <g-icon class="text-sm lg:text-lg text-n100 dark:text-n50" icon="mdi:close" />
                </button>
            </div>
            <fieldset class="flex flex-col gap-2 self-stretch *:self-stretch">
                <label :for="authorId" class="relative text-lg flex flex-col gap-2 font-bold">Author
                    <div class="relative w-full">
                        <div class="w-full relative">
                            <div class="absolute inset-y-0 h-full left-0 flex items-center p-2">
                                <g-icon class="text-sm lg:text-2xl !text-n100 dark:text-n50" icon="uil:search" />
                            </div>
                            <input @click="showResults = true" @input="showResults = true" role="searchbox" :id="authorId"
                                type="text" v-model="search"
                                class="w-full !ps-12 max-w-full text-n500 dark:text-n50 capitalize p-6 font-normal border-none ring-1 ring-n30 dark:ring-n600 !rounded-xl pl-8 text-base lg:text-md !bg-n10 dark:!bg-n700 placeholder:text-n100 dark:placeholder:text-n50">
                        </div>
                        <ul v-if="showResults && !mockAuthors.includes(search) && search !== ''" role="combobox"
                            @focusout="showResults = false"
                            class="flex absolute top-full *:!text-opacity-70 w-full rounded-sd flex-col divide-y divide-n30 dark:divide-n600 bg-n10 dark:bg-n800 ring-1 ring-n30 dark:ring-n700 overflow-hidden">
                            <li tabindex="0" v-for="result in results" v-if="results.length > 0"
                                @click="search = result.item"
                                class="w-full first-of-type:!text-opacity-100 text-n900 dark:text-n0 font-normal text-base hover:active:bg-n20 dark:hover:active:bg-n500 p-3 capitalize">
                                {{ result.item }}
                            </li>
                            <li tabindex="0" v-else
                                class="w-full !text-opacity-100 text-n900 dark:text-n0 font-normal text-base hover:active:bg-n20 dark:hover:active:bg-n500 p-3 capitalize">
                                Nenhum autor encontrado
                            </li>
                        </ul>
                    </div>
                </label>
                <label :for="scanlatorId" class="text-lg flex flex-col gap-2 font-bold">Scanlator
                    <select v-model="userSearch.scanlator" :id="scanlatorId"
                        class="w-full !rounded-xl border-none ring-1 ring-n30 dark:ring-n600 font-medium text-base lg:text-md !bg-n10 dark:!bg-n700 text-n900 dark:text-n50">
                        <option v-for="scan in mockScanlators" :key="scan" :value="scan">{{ scan }}</option>
                    </select>
                </label>
                <label :for="publisherId" class="text-lg flex flex-col gap-2 font-bold">Editora
                    <select v-model="userSearch.publisher" :id="publisherId"
                        class="w-full !rounded-xl font-medium border-none ring-1 ring-n30 dark:ring-n600 text-base lg:text-md !bg-n10 dark:!bg-n700 text-n900 dark:text-n50">
                        <option v-for="publisher in mockPublishers.sort()" :key="publisher" :value="publisher">
                            {{ publisher }}
                        </option>
                    </select>
                </label>
                <label :for="categoriesId" class="text-lg flex flex-col gap-2 font-bold">
                    <div>Categorias <small class="text-n700 dark:text-n100 text-sm">(múltiplas escolhas)</small></div>
                    <select v-model="userSearch.categories" :id="categoriesId" multiple
                        class="w-full !rounded-xl font-medium border-none ring-1 ring-n30 dark:ring-n600 text-base lg:text-md !bg-n10 dark:!bg-n700 text-n900 dark:text-n50">
                        <option v-for="category in mockCategories.sort()" :key="category" :value="category">{{ category }}
                        </option>
                    </select>
                </label>
            </fieldset>
            <div class="flex items-center gap-2 justify-end self-stretch">
                <button @click="$emit('close');"
                    class="px-6 py-2 rounded-sd text-base lg:text-md bg-primary-400 dark:bg-primary-500 hover:active:bg-primary-500 dark:hover:active:bg-primary-600 text-n0">
                    Aplicar
                </button>
                <button @click="reset"
                    class="px-6 py-2 rounded-sd text-base lg:text-md bg-n50 text-n500 dark:bg-n700 dark:text-n0 hover:active:bg-n100 dark:hover:active:bg-n600">
                    Resetar
                </button>
            </div>
        </form>
    </div>
</template>