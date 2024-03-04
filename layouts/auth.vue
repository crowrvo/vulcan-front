<template>
  <div class="background flex flex-col justify-evenly items-center gap-6 lg:gap-16 px-6 py-16">
    <slot />
    <g-color-mode />
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
.background {
  min-height: 100dvh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 100%;
  background-image: url("/assets/images/background/login.png");
}
</style>