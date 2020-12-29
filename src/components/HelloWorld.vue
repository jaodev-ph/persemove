<template>
  <div class="hello">
    <h1>I am new to heroku!</h1>
    <h1>email: {{email}}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      email: '',
    }
  },
  computed: {
  },
  mounted() {
    this.email = this.$store.state.user.user.email
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
