<script setup lang="ts">
withDefaults(defineProps<{
    type: string,
    name?: string;
}>(), { type: 'text' });

const value = defineModel('value', {
    type: String
})
const checked = defineModel('checked', {
    type: Boolean
})
</script>
<template>
    <input :name="name" v-if="type !== 'checkbox' && type !== 'radio'" :type="type" v-model="value"
        class="max-lg:py-3 px-3 py-4 rounded-sd bg-n30 dark:bg-n500 caret-n900 dark:caret-n0 text-neutral-dark dark:text-white text-base lg:text-md focus:outline focus:outline-secundary-400 border-none ring-1 ring-n20 dark:ring-0" />
    <input :name="name" v-else v-model="checked" :type="type"
        class="p-3 rounded-sd bg-n30 dark:bg-n500 accent-primary-600 dark:accent-primary-400 text-base lg:text-md focus:outline focus:outline-secundary-400 border-none" />
</template>