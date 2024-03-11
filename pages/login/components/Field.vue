<script setup lang="ts">
import GInput from '~/components/global/g-input.vue';
const props = defineProps<{
    label: string;
    type: HTMLInputElement['type'];
    passwordToggle?: boolean;
    labelBellow?: string;
    inputName?: string;
}>();
defineEmits(['enter', 'input', 'change']);

const inputType = ref<HTMLInputElement['type']>('password');
const togglePassword = () => {
    inputType.value = inputType.value === 'text' ? 'password' : 'text';
}
const lostFocus = () => props.passwordToggle ? inputType.value = 'password' : '';
</script>
<template>
    <label @focusout="lostFocus" class="flex flex-col gap-2 text-md lg:text-lg capitalize font-semibold">{{ label }}
        <g-input v-if="!passwordToggle" :name="inputName" data-input @input="$emit('input', $event.target.value)"
            class="caret-primary-700 text-primary-900 dark:caret-primary-400 !rounded-sd" :type="type" />
        <div data-label-bellow v-if="!passwordToggle && labelBellow"
            class="text-base lg:text-md font-normal text-n900 dark:text-n0">{{ labelBellow }}</div>

        <div v-if="passwordToggle" class="flex flex-col gap-2 self-stretch relative">
            <div class="w-full relative">
                <g-input :name="inputName" data-input @input="$emit('input', $event.target.value)"
                    @keyup.enter="$emit('enter')"
                    class="w-full pr-6 caret-primary-700 text-primary-900 dark:caret-primary-400 !rounded-sd focus:!outline-secundary-400 focus:border-0"
                    :type="inputType" />
                <button @focusout="inputType = 'password'" type="button" @click.prevent="togglePassword"
                    class="absolute text-center inline-flex items-center p-3 inset-y-0 h-full right-0 text-current rounded-sd">
                    <g-icon v-if="inputType === 'password'" class="pointer-events-none text-sm lg:text-md"
                        icon="uil:eye-slash" />
                    <g-icon v-else class="pointer-events-none text-sm lg:text-md" icon="uil:eye" />
                </button>
            </div>
            <div data-label-bellow v-if="labelBellow" class="text-base lg:text-md font-normal text-n900 dark:text-n0">{{
                labelBellow }}</div>
        </div>
    </label>
</template>