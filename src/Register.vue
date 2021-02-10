<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <h1>Createing a new Account</h1>
        <form>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              v-model="form.name"
              placeholder="Enter name"
            />
            <p v-if="err.name">
              <span class="text text-danger"> {{ err.name[0] }}</span>
            </p>
          </div>
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
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              v-model="form.password_confirmation"
              placeholder="Confirmed Password"
            />
            <p v-if="err.password_confirmation">
              <span class="text text-danger"> {{ err.password_confirmation[0] }}</span>
            </p>
          </div>
          <button
            type="submit"
            @click.prevent="register"
            class="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import User from "./services/User";
export default {
  data() {
    return {
      form: {
        name: null,
        email: null,
        password: null,
        password_confirmation: null,
      },
      err: [],
    };
  },

  methods: {
    async register() {
      try {
        await User.register(this.form);
      } catch (err) {
        this.err = err.response.data.errors;
      }
      if (this.err) {
        setTimeout(() => {
          this.err = [];
        }, 5000);
      }
    },
  },
};
</script>

<style>
</style>