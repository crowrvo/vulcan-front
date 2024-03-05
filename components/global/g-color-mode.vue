<script setup lang="ts">
const colorMode = useDark({
    attribute: "theme",
})
const toggleColorMode = useToggle(colorMode)
</script>
<template>
    <div
        class="bg-secundary-50 dark:bg-neutral-g900 inline-flex items-center gap-3 px-3 py-2 text-secundary-950 dark:text-secundary-50 rounded-sd">
        <g-icon icon="mdi:weather-sunny" class="text-current text-sm lg:text-lg" />
        <button tabindex="0" type="button" @click="toggleColorMode()"
            class="!bg-secundary-200 dark:bg-secundary-950 w-14 rounded-full focus:outline-2 !p-[2px]">
            <div class="transition duration-300 ease-in bg-secundary-600 size-6 rounded-full" :class="[colorMode ? 'translate-x-7': '' ]"></div>
        </button>
        <g-icon icon="mdi:weather-night" class="text-current text-sm lg:text-lg" />
    </div>
</template>