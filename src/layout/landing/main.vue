<template>
  <div>
    <nav-bar></nav-bar>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  components: {
    NavBar: () => import("./navbar"),
    Footer: () => import("./footer.vue"),
  },
};
</script>
<style>
</style>