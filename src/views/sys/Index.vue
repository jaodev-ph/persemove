<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <!-- <Navbar /> -->
    <v-container>
      <v-row>
        <v-col cols="12" md="3">
          <v-card class="mb-2 pa-2 borderLeft" color="#4fc694">
            <v-toolbar color="#4FC694" dark flat>
              <v-tabs align-with-title>
                <v-tabs-slider color="white"> </v-tabs-slider>
                <v-tab>
                  <v-btn dark icon>
                    <v-icon> fas fa-home </v-icon>
                  </v-btn>
                </v-tab>
                <v-tab>
                  <v-btn dark icon>
                    <v-badge content="2" color="orange">
                      <v-icon> fas fa-shopping-cart </v-icon>
                    </v-badge>
                  </v-btn>
                </v-tab>
              </v-tabs>
            </v-toolbar>
          </v-card>
        </v-col>
        <v-col cols="12" md="6"> 2</v-col>
        <v-col cols="12" md="3">3 </v-col>
      </v-row>

      <div v-if="user">
        <h1>{{ user.name }}</h1>
        <h1>{{ user.email }}</h1>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import User from "@/services/User";
export default {
  components: {
    // Navbar: () => import("@/layout/sys/Navbar.vue"),
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