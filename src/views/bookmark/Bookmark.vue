<template>
  <div>
    <headers></headers>
    <particles></particles>
    <tags-panel :tagsList="[]" title="文章分类"></tags-panel>
    <div class="container-bookmark" data-aos="zoom-in-up">
      <div class="card-bookmark">
        <chart :options="radar" :auto-resize="true" :initOptions="initOptions" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radar: {},
      initOptions: {
        height: 310,
        width: 310
      }
    };
  },
  mounted() {
    this.radar = {
      tooltip: {},
      radar: {
        name: {
          textStyle: {
            color: "#fff",
            fontSize: 15
          }
        },
        indicator: [
          { name: "前端", max: 26 },
          { name: "数据库", max: 26 },
          { name: "编程之道", max: 26 },
          { name: "软件工具", max: 26 },
          { name: "软件设计", max: 26 },
          { name: "后端", max: 26 }
        ],
        nameGap: 5,
        center: ["50%", "55%"],
        radius: "64%"
      },
      series: [
        {
          type: "radar",
          color: ["#3ecf8e"],
          itemStyle: { normal: { areaStyle: { type: "default" } } },
          data: [
            {
              value: [6, 1, 3, 8, 16, 25],
              name: "文章分类数量"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/main.scss";
.container-bookmark {
  max-width: 1185px;
  width: 100%;
  padding: 12px;
  margin-right: auto;
  margin-left: auto;
}

@media only screen and (min-width: 993px) {
  .container-bookmark {
    width: 90%;
    max-width: 1125px;
  }
}

@media only screen and (min-width: 601px) {
  .container-bookmark {
    width: 85%;
  }
}

.card-bookmark {
  z-index: 36;
  position: relative;
  margin: -2.5rem 0 2.5rem 0;
  background-color: rgba($color: #000000, $alpha: 0.3);
  -webkit-transition: -webkit-box-shadow 0.25s;
  transition: -webkit-box-shadow 0.25s;
  transition: box-shadow 0.25s;
  transition: box-shadow 0.25s, -webkit-box-shadow 0.25s;
  border-radius: 10px;
  -webkit-box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1),
    0 5px 15px rgba(0, 0, 0, 0.07) !important;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07) !important;
  display: flex;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: justify;
}
.echarts {
  width: 310px;
  height: 310px;
}
</style>