<script setup lang="ts">
import GInput from '~/components/global/g-input.vue';
const props = defineProps<{
    label: string;
    type: HTMLInputElement['type'];
    passwordToggle?: boolean;
}>();

const inputType = ref<HTMLInputElement['type']>('password');
const togglePassword = () => {
    inputType.value = inputType.value === 'text' ? 'password' : 'text';
}
const lostFocus = () => props.passwordToggle ? inputType.value = 'password' : '';
</script>
<template>
    <label @focusout="lostFocus" class="flex flex-col gap-2 text-md lg:text-lg capitalize font-semibold">{{ label }}
        <g-input class="caret-primary-700 text-primary-900 dark:caret-primary-400 !rounded-sd" v-if="!passwordToggle" :type="type" />
        <div v-else class="self-stretch relative">
            <g-input @keyup.enter="$emit('enter')" class="w-full pr-6 caret-primary-700 text-primary-900 dark:caret-primary-400 !rounded-sd" :type="inputType" />
            <button @focusout="inputType = 'password'" type="button" @click.prevent="togglePassword"
                class="absolute text-center inline-flex items-center py-2 px-3 top-0 h-full right-0 text-current rounded-sd">
                <g-icon v-if="inputType === 'password'" class="pointer-events-none text-sm lg:text-md" icon="uil:eye-slash" />
                <g-icon v-else class="pointer-events-none text-sm lg:text-md" icon="uil:eye" />
            </button>
        </div>
    </label>
</template>