<template>
    <main class="md:background lg:flex lg:flex-col lg:justify-evenly lg:items-center gap-6 lg:gap-16 lg:px-6 lg:py-16 size-full">
        <slot></slot>
    </main>
</template>
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