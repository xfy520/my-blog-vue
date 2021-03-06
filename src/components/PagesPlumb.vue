<template>
  <transition name="slide-fade">
    <div class="cd-timeline" v-if="pagePlumb">
      <div id="cd-timeline-plumb">
        <div class="cd-timeline-block">
          <div class="cd-timeline-img month">
            <font-awesome-icon class="fa-2x" icon="angle-up" />
          </div>
          <div class="cd-timeline-img month">
            <span>2</span>
          </div>
          <div class="cd-timeline-img month">
            <span>30</span>
          </div>
          <div class="cd-timeline-img year">
            <span>1</span>
          </div>
          <div class="cd-timeline-img month">
            <span>123</span>
          </div>
          <div class="cd-timeline-img month">
            <span>50</span>
          </div>
          <div class="cd-timeline-img month">
            <font-awesome-icon class="fa-2x" icon="angle-down" />
          </div>
        </div>
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
      height: 0,
      pagePlumb: false
    };
  },
  mounted() {
    this.height = parseInt(`${document.documentElement.clientHeight}`);
    this.width = parseInt(`${document.documentElement.clientWidth}`);
    window.addEventListener(
      "resize",
      () => {
        this.height = parseInt(`${document.documentElement.clientHeight}`);
        this.width = parseInt(`${document.documentElement.clientWidth}`);
      },
      false
    );
    window.addEventListener(
      "scroll",
      throttle(() => {
        let scrollTop = 0;
        if (document.documentElement && document.documentElement.scrollTop) {
          scrollTop = document.documentElement.scrollTop;
        } else if (document.body) {
          scrollTop = document.body.scrollTop;
        }
        if (scrollTop >= this.height / 1.5 && this.width > this.maxWidth) {
          this.pagePlumb = true;
        } else {
          this.pagePlumb = false;
        }
      }, 50)
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

#cd-timeline-plumb .cd-timeline-img a {
  color: #fff;
}

#cd-timeline-plumb {
  position: relative;
  max-width: 81px;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

#cd-timeline-plumb::before {
  content: "";
  position: absolute;
  top: 0;
  margin-left: -2px;
  left: 50%;
  height: 90%;
  background: #0f9d58;
}

@media only screen and (min-width: 1440px) {
  .cd-timeline {
    right: 1.6%;
  }

  #cd-timeline-plumb::before {
    width: 4px;
  }

  #cd-timeline-plumb .year {
    margin: 0px 0px 25px -25px;
    font-size: 1.6rem;
    width: 50px;
    height: 50px;
  }

  #cd-timeline-plumb .month {
    margin: 0px 0px 15px -15px;
    width: 30px;
    height: 30px;
    font-size: 1rem;
  }

  .cd-timeline-img {
    box-shadow: 0 0 0 4px #ffffff, inset 0 2px 0 rgba(0, 0, 0, 0.08),
      0 3px 0 4px rgba(0, 0, 0, 0.05);
    -webkit-transform: translateZ(0);
    -webkit-backface-visibility: hidden;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1439px) {
  .cd-timeline {
    right: 1.5%;
  }

  #cd-timeline-plumb::before {
    width: 3px;
  }

  #cd-timeline-plumb .year {
    margin: 0px 0px 19px -19px;
    font-size: 1.6rem;
    width: 38px;
    height: 38px;
  }

  #cd-timeline-plumb .month {
    margin: 0px 0px 15px -15px;
    width: 30px;
    height: 30px;
    font-size: 1rem;
  }

  .cd-timeline-img {
    box-shadow: 0 0 0 4px #ffffff, inset 0 2px 0 rgba(0, 0, 0, 0.08),
      0 3px 0 4px rgba(0, 0, 0, 0.05);
    -webkit-transform: translateZ(0);
    -webkit-backface-visibility: hidden;
  }
}

.cd-timeline-block {
  position: relative;
  margin: 1em 0;
}

.cd-timeline-block::after {
  clear: both;
  content: "";
  display: table;
}

.cd-timeline-block:first-child {
  margin-top: 0;
}

.cd-timeline-block:last-child {
  margin-bottom: 0;
}

.cd-timeline-img {
  top: 0;
  left: 50%;
  border-radius: 50%;
  position: relative;
  background-color: #ff5722;
  color: #fff;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: justify;
}

.cd-timeline {
  position: fixed;
  top: 35%;
}
</style>