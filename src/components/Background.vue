<template>
    <div class="background"><img src="/Logo.jpg" alt="" class="logo"></div>
</template>

<style lang="scss" scoped>
.background {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    position: fixed;
    background: #f3f3f3;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -2000;

    .logo {
        width: 25%;
        margin: 3rem 0;

        @media screen and (min-width: 700px) {
          margin: 0;
        }
    }
}
</style>