<script lang="ts" setup>
definePageMeta({
  path: "/"
})
const query = useQuery();
const route = useRoute();
</script>

<template>
  <div class="mt-20 flex flex-col gap-11">
    <Carousel class="w-screen" />
    <div class="grid grid-cols-2 gap-x-6 gap-y-28 mx-6 lg:mx-16">
      <TopNovels class="col-span-2" />
    </div>
  </div>
</template>