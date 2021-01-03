<template>
  <div>
    <nav-bar></nav-bar>
    <br />
    <Main></Main>
    <br />
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  components: {
    NavBar: () => import("./layout/landing/navbar.vue"),
    Footer: () => import("./layout/landing/footer.vue"),
    Main: () => import("./layout/landing/main.vue"),
  },
};
</script>

<style>
</style>