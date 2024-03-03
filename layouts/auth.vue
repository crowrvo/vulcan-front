<template>
  <div class="background">
    <slot />
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
  .background {
    width: 100vw;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 100%;
    background-image: url("/assets/background-login.png");
  }
</style>