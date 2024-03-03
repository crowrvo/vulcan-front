<script lang="ts" setup>
definePageMeta({
    path: "/"
})

const query = useQuery();
const route = useRoute();
</script>

<template>
  <div>
    <h1>HOME</h1>
    {{ route.hash }}
  </div>
</template>



<style>

</style>