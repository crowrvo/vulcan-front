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
    <div class="grid grid-cols-2 gap-x-6 gap-y-20 mx-6 lg:mx-16">
      <TopNovels class="col-span-2" />
      <Novels class="col-span-2" />
      <Banner class="col-span-2" />
      <NovelList class="col-span-2" filter="national" title="Novels Brasileiras" />
      <NovelList class="col-span-2" filter="foreign" title="Novels Extrangeiras" />
    </div>
  </div>
</template>