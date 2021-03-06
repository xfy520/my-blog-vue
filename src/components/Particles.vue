<template>
  <div :id="particlesId" class="main"></div>
</template>
<script>
import { particlesData } from "../script/particles-data.js";
export default {
  data() {
    return {
      particlesId: "particles-" + Math.floor(Math.random() * 5201314)
    };
  },
  methods: {},
  mounted() {
    this.$nextTick(() => {
      require("particles.js");
      particlesJS(this.particlesId, particlesData);
    });
  }
};
</script>
<style lang="scss" scoped>
.main {
  background: #34393f;
  opacity: 0.6;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 0;
  width: 100%;
  height: 100%;
}
</style>