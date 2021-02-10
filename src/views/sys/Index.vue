<template>
  <v-app>
    <Navbar />
    <div v-if="user">
      <h1>{{ user.name }}</h1>
      <h1>{{ user.email }}</h1>
    </div>
  </v-app>
</template>

<script>
import User from "@/services/User";
export default {
  components: {
    Navbar: () => import("@/layout/sys/Navbar.vue"),
  },
  data() {
    return {
      user: null,
    };
  },
  mounted() {
    User.auth().then((response) => {
		localStorage.removeItem("auth");
      this.user = response.data;
    });
  },
};
</script>

<style>
</style>