<script lang="ts" setup>
defineProps<{icon: string}>();

</script>
<template>
<div :class="`i-${icon} icon`"></div>
</template>

<style scoped lang="scss">
.icon {
  width: 2em;
  height: 2em;
}
</style>