<script lang="ts" setup>
definePageMeta({
  layout: 'auth'
})
const { SignIn } = useAuth();


type TQuery = { redirects?: string };
const query = useQuery<TQuery>();

const redirectTo = query.redirects ?? "home";

</script>

<template>
  <div class="container-center">
    <div class="left">
      <img src="/assets/logo.png" alt="Logo da Vulcan" class="logo">
    </div>
    <div class="right">
      <form action="">
        <h2>Faca login na sua conta</h2>
        <label for="">Email</label>
        <input type="email" name="" id="">
        <label for="">Senha</label>
        <input type="password" name="" id="">
        <a href=""></a>
        <a href=""></a>
        <g-icon @click="SignIn()" icon="uil:google" />
      </form>
    </div>
  </div>
</template>

<style lang="scss">
.container-center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  align-content: center;
  vertical-align: middle;
  place-content: center;
  height: 50%;
  width: 50%;
  background: #00081E;
  color: #fff;
  border-radius: 12px;
}
</style>