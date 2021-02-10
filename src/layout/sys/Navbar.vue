<template>
  <nav>
    <v-navigation-drawer v-model="drawer" dark app class="grey darken-3 py-0">
      <v-container>
        <v-row>
          <v-col md="9">
            <v-progress-circular
              :rotate="300"
              :size="50"
              :width="7"
              :value="value"
              color="lime"
              class="mt-n1"
            >
              {{ value }}
            </v-progress-circular>
          </v-col>
          <v-col md="3">
            <v-icon right class="mt-1"> fas fa-bars</v-icon>
          </v-col>
        </v-row>
        <v-btn @click="logout">
          <v-icon> mdi-logout </v-icon>
        </v-btn>
      </v-container>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import User from "@/services/User";
export default {
  data() {
    return {
      drawer: true,
      interval: {},
      value: 0,
    };
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 0);
      }
      this.value += 10;
    }, 1000);
  },
  methods: {
    logout() {
      User.logout();
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>