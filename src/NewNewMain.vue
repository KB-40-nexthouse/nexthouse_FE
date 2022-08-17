<template>
<div>
  <Header title="확정일자 신고" />
  <div>
    <div class="tab-button-wrap">
      <button type="button" class="tabbutton" @click="tabNum = 0">최근 본</button>
      <button type="button" class="tabbutton" @click="tabNum = 1">계약진행</button>
      <button type="button" class="tabbutton" @click="tabNum = 2">종료</button>
      <span class="bar"></span>
    </div>
    <div class="tabs" v-if="tabNum === 0">1</div>
    <div class="tabs" v-if="tabNum === 1">2</div>
    <div class="tabs" v-if="tabNum === 2">3</div>
  </div>
</div>
</template>

<script>
import Header from "./HeaderLayout.vue";
export default {
  name: 'NewNewMain',
  data() {
    return {
      tabNum : 0
    }
  },
  components: {
    Header,
  },
  mounted() {
    // let tabbutton = document.querySelectorAll('.tabbutton');
  },
  watch: {
    tabNum: function () {
      let index = this.tabNum;
      let tabBar = document.querySelector('.tab-button-wrap .bar');
      let tabActiveBtn = document.querySelectorAll('.tabbutton')[index];
      tabBar.style.left = tabActiveBtn.offsetLeft + 'px';
    }
  }
}
</script>

<style scoped>
  #body {
    font-size: 14px;
    background-color: rgb(251,251,251);
  }
  .tab-button-wrap { position: relative; }
  .tab-button-wrap .bar { position: absolute; bottom: 0; left: 0; width: 33.3333%; height: 2px; padding: 1.4px; background-color: #4372F4; will-change: left, right; z-index: 1; transition:cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.4s; }
  .tab-button-wrap .tabbutton { padding: 16px; width: 33.333%; }
  .tab-button-wrap .tabbutton:hover { color: #4372F4; }
</style>