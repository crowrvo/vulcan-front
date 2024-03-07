<script lang="ts" setup>
definePageMeta({
  path: "/"
})
const query = useQuery();
const route = useRoute();
</script>

<template>
  <div class="mt-20 flex flex-col gap-28">
    <Carousel class="w-screen" />
    <div class="grid grid-cols-2 gap-x-6 gap-y-28 mx-6 lg:mx-16">
      <TopNovels class="col-span-2" />
      <div class="col-span-2 flex flex-col md:landscape:flex-row gap-20 lg:gap-28">
        <Novels class="basis-1/2" />
        <section class="flex flex-col gap-6 basis-1/2 flex-initial">
          <News title="Nosso site está de cara nova!"
            description="Para entregarmos  a você nossos leitores uma ótima experiência de leitura em nosso site nós reformamos ele completamente!" />
          <News title="Entre para a nossa comunidade"
            description="Quer ficar atualizado(a) sobre nossas obras, falar do novo design ou outras coisas? Entra no nosso servidor!"
            :navigate="{ name: 'Acessar o servidor da comunidade', to: 'https://' }" />
        </section>
      </div>
    </div>
  </div>
</template>