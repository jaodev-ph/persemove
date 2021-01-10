<template>
  <div>
    <meta name="viewport" content="width=device-width" />
    <home-main></home-main>
  </div>
</template>

<script>
export default {
  name: "HomeIndex",

  components: {
    HomeMain: () => import("@/layout/landing/main"),
  },
};
</script>
