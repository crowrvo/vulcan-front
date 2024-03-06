<script setup lang="ts">
withDefaults(defineProps<{
    type: string
}>(), { type: 'text' });

const value = defineModel('value', {
    type: String
})
const checked = defineModel('checked', {
    type: Boolean
})
</script>
<template>
    <input v-if="type !== 'checkbox' && type !== 'radio'" :type="type" v-model="value"
        class="max-lg:py-3 px-3 py-4 rounded-sd bg-neutral-g30 dark:bg-neutral-g500 caret-neutral-g900 dark:caret-neutral-g0 text-neutral-dark dark:text-white text-base lg:text-md focus:outline focus:outline-secundary-400" />
    <input v-else v-model="checked" :type="type"
        class="p-3 rounded-sd bg-neutral-g30 dark:bg-neutral-g500 accent-primary-600 dark:accent-primary-400 text-base lg:text-md focus:outline focus:outline-secundary-400" />
</template>