<template>
  <transition name="slide-fade">
    <div class="page-btn btn" v-if="pageBtn">
      <div class="icon left disabled">
        <font-awesome-icon class="fa-3x" icon="angle-left" />
      </div>
      <span class="page-info">2 / 5</span>
      <div class="icon right active">
        <font-awesome-icon class="fa-3x" icon="angle-right" />
      </div>
    </div>
  </transition>
</template>

<script>
import { throttle } from "../script/utils.js";
export default {
  props: {
    maxWidth: {
      type: Number,
      default: 768
    },
    page: {
      type: Number,
      default: 1
    },
    count: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      width: 0,
      pageBtn: false
    };
  },
  mounted() {
    this.width = parseInt(`${document.documentElement.clientWidth}`);
    this.pageBtn = this.width <= this.maxWidth;
    window.addEventListener(
      "resize",
      () => {
        this.width = parseInt(`${document.documentElement.clientWidth}`);
        this.pageBtn = this.width <= this.maxWidth;
      },
      false
    );
  }
};
</script>

<style lang="scss" scoped>
@import "../style/main.scss";
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(16px);
  opacity: 0;
}
.page-btn {
  position: relative;
  top: 2%;
  margin: 0 auto;
  max-width: 1280px;
  width: 90%;
}

@media only screen and (max-width: 601px) {
  .page-btn {
    width: 95%;
  }
}

@media only screen and (min-width: 993px) {
  .page-btn {
    width: 90%;
    max-width: 1920px;
  }
}

.btn .page-info {
  font-size: 1.4rem;
  color: #fff;
}

.btn {
  top: -1%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: justify;
}
.icon {
  width: 56px;
  height: 56px;
  color: #ffffff;
  border-radius: 50%;
  text-decoration: none;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  line-height: 54px;
  font-size: 15px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  vertical-align: middle;
  -webkit-transition: 0.3s ease-out;
  transition: 0.3s ease-out;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: justify;
}

.right {
  left: 21%;
}

.left {
  right: 21%;
}

.active {
  background-color: #26a69a;
  background-image: linear-gradient(to right, #4cbf30 0%, #0f9d58 100%);
}

.disabled {
  background-color: #ccc !important;
}
</style>