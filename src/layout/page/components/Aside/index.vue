<style lang="scss" scoped>
aside {
  display: flex;
  flex: none;
  position: relative;
  z-index: 2;
  width: 150px;
  padding: 100px 15px 30px;

  h1 {
    position: absolute;
    top: 30px;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: 0;

    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      width: 40px;
      height: 40px;
      background-color: var(--color-bg-opacity-5);
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
    }
    &:before {
      left: 50%;
      margin-left: -10px;
    }
    &:after {
      right: 50%;
      margin-right: -10px;
    }
  }

  #lnb {
    display: flex;
    position: relative;
    width: 100%;

    ul {
      display: flex;
      flex-direction: column;
      flex-basis: 100%;
      position: relative;
      z-index: 2;
      width: 100%;
      li {
        position: relative;
        margin-right: -15px;
        height: 35px;

        a {
          display: block;
          padding: 10px 10px 10px 15px;
          color: var(--color-bg);
          /* color: var(--color-theme); */
          /* text-shadow: 0 -1px 1px var(--color--opacity-5); */
          /* text-shadow: 0 0 1px var(--color-bg-opacity-5), -1px -1px 0 #666; */
          /* text-shadow: 0 0 1px var(--color-bg-opacity-5); */
          em {
            vertical-align: middle;
          }
          .mdi + em {
            margin-left: 7px;
          }
        }
        &.logout {
          margin-top: auto;
        }

        &.isCurrent {
          a {
            color: var(--color-theme);
            font-weight: bold;
            transition: all 0.1s ease-out;
          }
        }
      }
    }
    .slide-bar {
      position: absolute;
      top: 0;
      right: -15px;
      left: 0;
      z-index: 1;
      height: 35px;
      background-color: var(--color-slidebar);
      border-radius: 30px 0 0 30px;
      transition: top 0.1s ease-out;
      &:before,
      &:after {
        content: "";
        position: absolute;
        right: 0;
        width: 30px;
        height: 30px;
        background-color: var(--color-slidebar);
      }
      &:before {
        bottom: 100%;
        background: radial-gradient(circle at 0 0, transparent 30px, var(--color-slidebar) 30px);
      }
      &:after {
        top: 100%;
        background: radial-gradient(circle at 0 100%, transparent 30px, var(--color-slidebar) 30px);
      }
    }
  }
}
</style>

<template lang="pug">
aside
  h1 h1
  #lnb
    ul
      li(:class="{isCurrent: newActive === 0}" @click="handleNewMenuId(0)")
        router-link(to="/MainPage")
          mdicon(name="chart-donut-variant" size="15")
          em Dashboard
      li(:class="{isCurrent: newActive === 1}" @click="handleNewMenuId(1)")
        router-link(to="/Rooms")
          mdicon(name="door-open" size="15")
          em Rooms
      li( :class="{isCurrent: newActive === 2}" @click="handleNewMenuId(2)")
        router-link(to="/Devices")
          mdicon(name="cellphone-link" size="15")
          em Devices
      li(:class="{isCurrent: newActive === 3}" @click="handleNewMenuId(3)")
        router-link(to="/Members")
          mdicon(name="account-group-outline" size="15")
          em Members
      li.logout
        a(href="javascript:;")
          mdicon(name="power" size="15")
          em Logout
    .slide-bar

</template>

<script>
import { ref } from "vue";

export default {
  computed: {},
  mounted() {
    console.log(`Aside : mounted`);
  },
  methods: {},
  setup() {
    const newActive = ref(0);
    const handleNewMenuId = idx => {
      newActive.value = idx;
      document.getElementsByClassName("slide-bar")[0].style.top = idx * 35 + "px";
    };
    return {
      newActive,
      handleNewMenuId,
    };
  },
};
</script>
