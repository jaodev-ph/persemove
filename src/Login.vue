<template>
  <div class="container">
    <div class="row">
      <form>
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            placeholder="Enter email"
            v-model="form.email"
          />
        </div>
        <p v-if="err.email">
          <span class="text text-danger"> {{ err.email[0] }}</span>
        </p>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            v-model="form.password"
            placeholder="Enter password"
          />
          <p v-if="err.password">
            <span class="text text-danger"> {{ err.password[0] }}</span>
          </p>
        </div>
        <button type="submit" @click.prevent="login" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import User from "./services/User";
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      err: [],
    };
  },
  methods: {
    async login() {
      try {
        await User.login(this.form);
        localStorage.setItem("auth", "true")
        this.$router.push({ name: "Sys" });
      } catch (err) {
        this.err = err.response.data.errors;
        console.log(err.response.data.errors);
      }
    },
  },
};
</script>

<style>
</style>