<template>
  <div class="bottom-bar">
    <router-link
      v-for="link in links"
      :key="link.key"
      class="icon-text"
      @click.native="$store.state.activeBtn = link.btn"
      :to="link.route"
      ><md-icon
        :style="$store.state.activeBtn === link.btn ? 'color: #FAB463' : 'color: white'"
        class="icon"
        >{{ link.icon }}</md-icon
      ><span
        :style="$store.state.activeBtn === link.btn ? 'color: #FAB463' : 'color: white'"
        class="text"
        >{{ link.text }}</span
      ></router-link
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { key: 1, btn: "btn1", icon: "alarm", route: "/clock", text: "Alarm" },
        {
          key: 2,
          btn: "btn2",
          icon: "analytics",
          route: "/results",
          text: "Results",
        },
        { key: 3, btn: "btn3", icon: "alarm", route: "/tips", text: "Tips" },
        {
          key: 4,
          btn: "btn4",
          icon: "alarm",
          route: "/questions",
          text: "Questions",
        },
      ],
    };
  },
};
</script>

<style lang="css" scoped>
.bottom-bar {
  background-color: #2c2c2c;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.icon-text {
  text-align: center;
}
.icon-text:hover {
  text-decoration: none;
}
a {
  padding-top: 10px;
  padding-bottom: 10px;
}
.text {
  display: block;
  color: #ffffff;
  font-size: 2.5vw;
}
.md-icon {
  font-size: 2.5vw;
}
</style>