<style lang="scss" scoped>
.c-quick {
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  width: 200px;
  height: 100%;
  padding: 17px 20px;
  &__inner {
    position: relative;
    height: 100%;
    .sec {
      padding: 10px;
      -webkit-border-radius: 15px;
      -moz-border-radius: 15px;
      border-radius: 15px;
    }
  }
  &__top {
    display: flex;
    justify-content: space-between;
    a {
      display: flex;
      width: 33px;
      height: 33px;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      color: var(--color--opacity-5);
    }
  }
  &__temperature {
    overflow: hidden;
    position: relative;
    height: 130px;
    margin-top: 10px;
    padding: 17px 20px;
    background-color: var(--color-theme-sub);
    color: var(--color-bg);
    font-size: 11px;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
    letter-spacing: 1px;

    &:before {
      content: "";
      position: absolute;
      top: 100%;
      left: 100%;
      width: 120px;
      height: 120px;
      margin: -75px 0 0 -75px;
      border: 20px solid var(--color-bg-opacity-1);
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      box-sizing: border-box;
    }

    a {
      position: absolute;
      right: 15px;
      bottom: 15px;
      z-index: 2;
      color: #fff;
    }
    dl {
      &:before,
      &:after {
        content: "";
        position: absolute;
        width: 90px;
        height: 90px;
        background-color: var(--color-bg-opacity-1);
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
        border-radius: 20px;
      }
      &:before {
        bottom: 80%;
        left: 70%;
      }
      &:after {
        top: 80%;
        right: 70%;
      }
      dd {
        margin-top: 5px;
        &.type--weather {
          font-size: 9px;
          letter-spacing: 1px;
        }
      }
    }
  }
  .c-quick__device {
    position: relative;
    margin-top: 15px;
    h2 {
      height: 15px;
      margin-bottom: 9px;
      font-size: 13px;
    }
    .btn-more {
      position: absolute;
      top: 0;
      right: 0;
    }
    .el-scrollbar {
      -webkit-border-radius: 15px;
      -moz-border-radius: 15px;
      border-radius: 15px;
    }
    .c-card {
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      gap: 14px;
      &__item {
        display: flex;
        align-items: flex-end;
        position: relative;
        width: calc(50% - 7px);
        min-height: 70px;
        padding: 7px 10px;
        background: #fff;
        -webkit-border-radius: 15px;
        -moz-border-radius: 15px;
        border-radius: 15px;
        button {
          position: absolute;
          top: 7px;
          right: 7px;
          width: 20px;
          height: 20px;
        }
        dl {
          width: 100%;
          dt {
            font-weight: 800;
          }
          dd {
            margin-top: 3px;
            color: #999;
            font-size: 10px;
          }
        }
        .icon {
          position: absolute;
          top: 7px;
          left: 10px;
        }
      }
    }
  }
}
</style>
<style lang="scss">
.el-scrollbar.pst--scroll {
  overflow: visible;
  > .el-scrollbar__bar.is-vertical {
    right: -10px;
  }
}
.el-badge__content {
  font-size: 11px;
}
</style>

<template lang="pug">
.c-quick
  .c-quick__inner
    .c-quick__top
      //- el-badge(:value="12" class="item")
      a(v-for="item of list" href="javascript:;" :class="item.class" :title="item.name") #[mdicon(:name="item.icon"  size="15")]
    .c-quick__temperature
      dl
        dt Outdoor Temperature
        dd.type--number #[strong 27] #[span ℃]
        dd.type--weather Cloudy
      a(href="javascript:;") #[mdicon(name="dots-horizontal" size="15")]
    .c-quick__device
      h2 {{ msg }}
      a(href="javascript:;" class="btn-more") #[mdicon(name="dots-horizontal" size="15")]
      el-scrollbar(class="pst--scroll" height="155px")
        .c-card
          .c-card__item(v-for="item of device")
            .icon #[mdicon(:name="item.icon" size="20")]
            dl
              dt {{ item.name }}
              dd {{ item. value }}
            el-button(:class="{'is-active': item.state === 1}" circle) #[mdicon(name="power-standby" size="13")]
</template>

<script>
export default {
  name: "MyDevice",
  props: {
    msg: String,
  },
  data() {
    return {
      list: [
        {
          name: "Search",
          class: "btn-search",
          icon: "magnify",
        },
        {
          name: "Notice",
          class: "btn-notice",
          icon: "bell-outline",
        },
        {
          name: "Account",
          class: "btn-account",
          icon: "account-settings",
        },
      ],
      device: [
        {
          name: "Lamp",
          icon: "ceiling-light",
          value: "70%",
          state: 0,
        },
        {
          name: "Smart TV",
          icon: "television-classic",
          value: "On",
          state: 1,
        },
        {
          name: "Door",
          icon: "door-open",
          value: "Look",
          state: 0,
        },
        {
          name: "AC",
          icon: "air-filter",
          value: "Off",
          state: 0,
        },
        {
          name: "AP",
          icon: "air-purifier",
          value: "On",
          state: 0,
        },
      ],
    };
  },
};
</script>
