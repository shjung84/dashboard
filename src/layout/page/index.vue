<style lang="scss" scoped></style>

<template lang="pug">
#container
  Nav
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
  computed: {},
};
</script>
