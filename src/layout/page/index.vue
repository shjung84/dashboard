<style lang="scss" scoped></style>

<template lang="pug">
#container
  Nav(:title="key")
  app-main
  Aside
</template>

<script>
import Nav from "./components/Nav";
import AppMain from "./components/AppMain";
import Aside from "./components/Aside";

export default {
  components: {
    Nav,
    AppMain,
    Aside,
  },
  computed: {
    key() {
      console.log("pages :", this.$route.meta.title);
      return this.$route.meta.title;
    },
  },
};
</script>
