<template>
      <div
      class="bg-cover pd-header about-cover"
      v-bind:style="{backgroundImage: 'url(' + require('../assets/home/carouse/1.jpg') + ')', height: (height / 1.8) + 'px'}"
    >
      <div>
        <div class="title">心之所向</div>
        <div class="text">
          <span id="type-text"></span>
          <span class="cursor">_</span>
        </div>
      </div>
    </div>
</template>
<script>
import { textInit } from "../script/utils.js";
export default {
  data() {
    return {
      height: 0
    };
  },
  methods: {
  },
  mounted() {
    this.height = parseInt(`${document.documentElement.clientHeight}`);
    window.addEventListener(
      "resize",
      () => {
        this.height = parseInt(`${document.documentElement.clientHeight}`);
      },
      false
    );
    this.$nextTick(() => {
      textInit(document.getElementById("type-text"));
    });
  }
};
</script>
<style lang="scss" scoped>
@import "../style/main.scss";
.bg-cover {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: justify;
  padding: 0;
  border: 0;
  overflow: hidden;
  background-position: center center;
  background-size: cover;
  transform: translate3d(0px, 0px, 0px);
}

.pd-header {
  margin-top: -64px;
  z-index: 9;
}

.bg-cover:before,
.bg-cover:after {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: block;
  background-color: #f44336;
  opacity: 0.4;
  left: 0;
  top: 0;
  content: "";
}

.bg-cover .title {
  font-size: 3rem !important;
  line-height: 1.85em;
  margin-bottom: 20px;
  position: relative;
  color: #fff;
  z-index: 2;
}

.text {
  font-weight: 300;
  font-size: 1.25rem;
  line-height: 1.4em;
  position: relative;
  color: #fff;
  z-index: 2;
}

.cursor {
  animation: blink 1s steps(2, start) infinite;
}

@keyframes blink {
  to {
    visibility: hidden;
  }
}
</style>