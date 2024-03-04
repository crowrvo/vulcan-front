<script setup lang="ts">
const colorMode = useDark({
    attribute: "theme",
})
const toggleColorMode = useToggle(colorMode)
</script>
<template>
    <div
        class="bg-neutral-white-50 dark:bg-neutral-g900 inline-flex gap-3 px-3 py-2 text-secundary-950 dark:text-secundary-300 rounded-sd">
        <Icon name="mdi:weather-sunny" class="text-current size-6" />
        <button tabindex="0" type="button" @click="toggleColorMode()"
            class="relative !bg-secundary-200 dark:bg-secundary-950 w-14 rounded-full focus:outline-2 !p-[2px]">
            <div class="transition duration-300 ease-in bg-secundary-600 size-6 rounded-full" :class="[colorMode ? 'translate-x-[calc(100%_+_4px)]': '' ]"></div>
        </button>
        <Icon name="mdi:weather-night" class="text-current size-6" />
    </div>
</template>