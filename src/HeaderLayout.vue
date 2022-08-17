<template>
  <div class="header" >
    <div class="title-wrap">
      <button class="arrow-left" type="button" @click="backButton">이전</button>
      <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ title }}</h2>
    </div>
    <div class="" style="float: right; padding-top: 15px; padding-right: 10px">
      <img src="@/assets/hamResized.png" alt="menuIcon">
    </div>
  </div>
</template>

<script>
export default {
    name: "HeaderLayout",
    props: {
        title: String,
    },
    methods: {
      backButton: function() {
        history.back();
      }
    }
};
</script>

<style scoped>

/* 폰트 import후 사용 */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;400&display=swap');

/* 헤더 디자인 */
.header {
  text-align: center;
  background-color: white;
  width: 100%;
  height: 44px;
}

/* 헤더 텍스트 색상 */

h2, h3, h4, h5, h6 {
  /* font-family: 'Inter'; */
  font-style: normal;
  font-weight: 100;
  font-size: 16px;
  line-height: 30px;
  color: #000000;
  padding-top: 15px;
}

a {
  color: #42b983;
}
.title-wrap { text-align: left; padding-left: 20px; float: left; width: calc(100% - 40px);  }
.title-wrap .arrow-left { position: relative; display: inline-block; width: 10px; height: 10px; vertical-align: middle; text-indent: -9999px; }
.title-wrap .arrow-left::after { content: ""; position: absolute; left: 0; top: 0; display: block; width: 8px; height: 8px; border-style: solid; border-color: #222222; border-width: 1px 1px 0 0; transform: rotate(-135deg); }
.title-wrap .arrow-left + h2 { display: inline-block; }
</style>
