<template>
  <div>
    <input v-model="page" placeholder="edit me" />
    <button v-on:click="prev">上一页</button>
    <button v-on:click="next">下一页</button>
    <turn
      width="922"
      height="600"
      duration="1000"
      pages="112"
      elevation="50"
      :page="page"
      gradients
      autoCenter
      theme="jobs"
      ref="turn"
      @turning="turning"
      @turned="turned"
      @missing="missing"
      @end="end"
    >
      <div depth="5" class="hard">
        <div class="side"></div>
      </div>
      <div depth="5" class="hard front-side">
        <div class="depth"></div>
      </div>
      <div class="own-size"></div>
      <div class="own-size even"></div>
      <div class="hard fixed back-side p111">
        <div class="depth"></div>
      </div>
      <div class="hard p112"></div>
    </turn>
  </div>
</template>
<script>
import { addPage, disableControls, updateDepth } from "../script/jobs.js";
export default {
  name: "docs",
  components: {},
  data() {
    return {
      page: "1"
    };
  },
  methods: {
    isChrome: function() {
      return navigator.userAgent.indexOf("Chrome") != -1;
    },
    turning: function(e, book, turn, data) {
      var currentPage = turn(book, "page"),
        pages = turn(book, "pages");
      if (currentPage > 3 && currentPage < pages - 3) {
        if (data.page == 1) {
          turn(book, "page", 2);
          turn(book, "stop");
          turn(book, "page", data.page);
          e.preventDefault();
            return;
        } else if (data.page == pages) {
          turn(book, "page", pages - 1);
          turn(book, "stop");
          turn(book, "page", data.page);
          e.preventDefault();
          return;
        }
      } else if (data.page > 3 && data.page < pages - 3) {
        if (currentPage == 1) {
          turn(book, "page", 2);
          turn(book, "stop");
          turn(book, "page", data.page);
          e.preventDefault();
          return;
        } else if (currentPage == pages) {
          turn(book, "page", pages - 1);
          turn(book, "stop");
          turn(book, "page", data.page);
          e.preventDefault();
          return;
        }
      }
      updateDepth(book, turn, data.page);
      if (data.page >= 2){
        book.querySelector(".sj-book .p2").classList.add("fixed");
      }else {
        book.querySelector(".sj-book .p2").classList.remove("fixed");
      }

      if (data.page < turn(book, "pages")){
        book.querySelector(".sj-book .p111").classList.add("fixed");
      }else {
        book.querySelector(".sj-book .p111").classList.remove("fixed");
      }
    },
    turned: function(e, book, turn, data) {
      if (data.page == 2 || data.page == 3) {
        turn(book, "peel", "br");
      }
      updateDepth(book, turn);
      turn(book, "center");
    },

    end: function(e, book, turn, data) {
      updateDepth(book, turn);
    },
    missing: function(e, book, turn, data) {
      for (var i = 0; i < data.pages.length; i++)
        addPage(book, turn, data.pages[i]);
    },
    prev: function() {
      this.$refs.turn.prev();
    },
    next: function() {
      this.$refs.turn.next();
    }
  },
  mounted() {}
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
