<template>
  <div>
    <nav-bar></nav-bar>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  components: {
    NavBar: () => import("./layout/landing/navbar.vue"),
    Footer: () => import("./layout/landing/footer.vue"),
  },
};
</script>

<style>
</style>