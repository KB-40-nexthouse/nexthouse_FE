<template>
<Header title="계약 진행" />
<head>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
</head>
<body>
  <div class="row">
    <div class="">
      <ul class="tabs">
        <li class="tab col s3"><a href="#test1">Test 1</a></li>
        <li class="tab col s3"><a class="active" href="#test2">Test 2</a></li>
        <!-- <li class="tab col s3 disabled"><a href="#test3">Disabled Tab</a></li> -->
        <li class="tab col s3"><a href="#test4">Test 4</a></li>
      </ul>
    </div>
    <div id="test1" class="col s12">Test 1</div>
    <div id="test2" class="">
        <div class="selectbar clear" style="">
            <div style="">전체 2개</div>
            <div style="float: left; font-size: 14px">
                <select name="" id="">
                    <option value="">등록순</option>
                    <option value="">최신순</option>
                </select>
            </div>
            <a href="#">편집</a>
        </div>
        <div v-for="(H, index) in Home" :key="index">
        <!-- <div> -->
          <!-- 계약프로세스 이동 버튼으로 감싸기-->
          <div class="찜한매물정보&클릭시계약" type="button" @click="onBoard(H)" style="padding-top:15px;padding-bottom:15px;">
            <div class="ChekedLayout clear" style="padding-bottom:10px; padding-top:10px;">
              <div class="checked-image" style="float:left; padding-left:20px;">
                  <img src="@/assets/sampleImg2.png" alt="sampleRoom" style="width:120px; height: 120px; border-radius:15px;">
              </div>
              <div class="checked-info" style="width:calc(100% - 150px); float:left; height:120px; padding-top:10px; padding-bottom:30px;">
                <p style="line-height:1; font-family: 'Inter';font-style: normal;font-size: 20px;color: #000000; text-align:left; line-height:2; padding-left:20px;">
                <b>전세 {{H.price}}</b>
                </p>
                <p style="line-height:1; font-family: 'Inter';font-style: normal;font-size: 15px;color: #000000; text-align:left; line-height:1; padding-left:20px;">
                {{H.modelAddr}}
                </p>
                <p style="line-height:1; font-family: 'Inter';font-style: normal;font-size: 15px;color: #000000; text-align:left; line-height:2; padding-left:20px;">
                {{H.modelSpec}}
                </p>
                <p style="line-height:1; font-family: 'Inter';font-style: normal;font-size: 10px;color: #000000; text-align:left; line-height:1; padding-left:20px;">
                {{H.ownerNm}}
                </p>
              </div>
            </div>
            <hr style="width:90%; margin: auto;">

          </div>
        </div>
    </div>
    <!-- <div id="test3" class="col s12">Test 3</div> -->
    <div id="test4" class="col s12">Test 4</div>
  </div>
</body>
</template>


<script>
import Header from "./HeaderLayout.vue";
import "materialize-css/dist/css/materialize.css";
import M from 'materialize-css'
export default {
  name: 'NewStaging',
  components: {
    Header,
  },
  mounted () {
    M.AutoInit()
},
}


</script>

<style>
  #body {
    font-size: 14px;
    background-color: rgb(251,251,251);
  }
  .header h2{
    margin: 0 !important;
  }
    .selectbar { padding: 8px 16px; background-color: gray }
    .selectbar > div { position: relative; float: left; font-size: 14px }
    .selectbar > div + div { margin-left: 8px; padding-left: 8px; }
    .selectbar > div + div::before { content: ""; position: absolute; left: 0; top: 0; width: 1px; height: 100%; background-color: lightgray; }
    .selectbar > div .select-wrapper { max-width: 70px; }
    .selectbar > div .select-wrapper input.select-dropdown { height: auto; border: 0 none; line-height: initial; margin-bottom: 0; }
    .selectbar > a{ float: right; font-size: 14px; text-decoration: underline; }
</style>