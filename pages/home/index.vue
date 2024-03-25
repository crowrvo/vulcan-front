<script lang="ts" setup>
definePageMeta({
  path: "/"
})
const query = useQuery();
const route = useRoute();
</script>

<template>
  <div class="mt-20 flex flex-col gap-28 w-full overflow-hidden">
    <Carousel class="w-screen" />
    <div class="grid grid-cols-2 gap-x-6 gap-y-20 px-6 lg:px-16 *:col-span-2">
      <TopNovels />
      <Novels />
      <Banner />
      <NovelList filter="national" title="Novels Brasileiras" />
      <NovelList filter="foreign" title="Novels Extrangeiras" />
    </div>
  </div>
</template>