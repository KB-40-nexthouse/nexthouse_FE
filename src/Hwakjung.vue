<template>
<!-- <div>
    <nav>
    
    <div class="v74_18">
      <div class="v74_20">
        <div class="v74_21" ></div>
        <span class="v74_22" @click="goBack"><b>확정일자 신고</b></span>
        <div class="v74_23">
          <div class="v74_24"></div>
          <div class="v74_25"></div>
          <div class="v74_26"></div>
        </div>
        <div class="v74_27" @click="goBack"></div>
        <div class="v74_28"></div>
      </div>
      <span class="v74_29"><b>개인정보와 전세계약서 수집 이용을<br> 동의하고 확정일자를 신고해주세요.</b></span>
      <div class="v74_30"></div>
      <div class="v74_31">
        <div class="v74_32"></div>
        <span class="v74_33">정보 수집·이용 동의</span>
        <div class="v74_34"></div>
      </div>
      <button @click="Research()">
        <div class="v74_35">
          <div :class="{v74_36 : checked, v74_19 : !checked}" ></div>
          <span class="v74_37"><b>동의하고 신고</b></span>
        </div>
      </button>
      <div class="v74_38">
        <span class="v74_39"><b>전체 동의</b></span>
        <div id="checkID" type='button' @click="ChangeCheck()" :class="{v74_40 : checked, v74_401 : !checked}">
          <div class="v74_41"></div>
        </div>
      </div>
      <div class="v74_50">
        <span class="v74_51"><b>개인정보 수집·이용 동의(필수)</b></span>
        <div class="v74_52"></div>
      </div>
      <div class="v74_58">
        <span class="v74_59"><b>계약서 정보 수집·이용 동의(필수)</b></span>
        <div class="v74_60"></div>
      </div>
      <div class="v74_47"></div>
      <div class="v74_62"></div>
    </div>


    </nav>
  <router-view/>
</div> -->
<div>
  <Header style="border-bottom: 0.8px solid #DFDEDE; position: fixed;" title="확정일자 신고" />
  <!-- <div class="sub-title">확정일자 신고</div> -->
  <div class="contents" style="padding-top: 70px;">
    <div class="desc">
      개인정보와 전세계약서 수집·이용을 <br/>동의하고 확정일자를 신고해주세요.
    </div>
    <div class="checkbox-wrap">
      <div class="checkbox-item type2 border-b pb16 mb16">
        <input type="checkbox" id="AllAgree" v-model="checked" @click="clickAllAgree()"/>
        <label for="AllAgree">전체 동의</label>
      </div>
      <div class="checkbox-item">
        <input type="checkbox" id="Agree01" value="" v-model="check1" @click="clickAgree1()"/>
        <label for="Agree01">개인정보 수집·이용 동의(필수)</label>
        <button class="arrow-right" type="button" ></button>
      </div>
      <div class="checkbox-item">
        <input type="checkbox" id="Agree02" value="" v-model="check2" @click="clickAgree2()"/>
        <label for="Agree02">계약서 정보 수집·이용 동의(필수)</label>
        <button class="arrow-right" type="button"></button>
      </div>
    </div>
    <div class="fixed_button">
      <button type="button" @click="Research()" :disabled="!checked">동의하고 신고</button>
    </div>
  </div>
</div>
</template>


<script>
/*
import AxiosPlugin from 'vue-axios-cors';
var Vue = require('vue');
Vue.use(AxiosPlugin);

axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';*/
import Header from "./HeaderLayout.vue";

export default {
  name: 'MyHwakjung',
  components: {
    Header
  },
  data(){
    return {
        checked : false,
        modelNo : 0,
        status : 0,
        rentNo : 0,
        check1 : false,
        check2 : false
    }
  },
  methods: {
    Research() {
      if(this.checked) {
        localStorage.setItem('no', this.modelNo);
        localStorage.setItem('p', this.status);
        localStorage.setItem('rent', this.rentNo);
        this.$router.push('/MyHwakjungEnd');
      }
    },
    goBack() {
      this.$router.go(-1);
    },
    ChangeCheck(){
        this.checked = !this.checked;
    },
     clickAllAgree(){
      this.check1 = !this.checked;
      this.check2 = !this.checked;
     },
     clickAgree1(){
      if(!this.check1 && this.check2 )
      {
         this.checked = true;
      }
      else
      {
        this.checked = false;
      }
     },
     clickAgree2(){
      if(this.check1 && !this.check2 )
      {
         this.checked = true;
      }
      else
      {
        this.checked = false;
      }
     }
    },
  beforeMount(){
    this.status = localStorage.getItem('p')
    this.modelNo = localStorage.getItem('no')
    this.rentNo = localStorage.getItem('rent')
  }
}

</script>

<style scoped> 
  #app 
  { 
    margin:0 auto; 
    width:350px;
    height:650px;
    background-color: #ffffff;
  }

  body {
    font-size: 14px;
  }


  .v74_18 {
    width: 400px;
    height: 830px;
    background: rgba(255,255,255,1);
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 0px;
    overflow: hidden;
  }
  .v74_20 {
    width: 375px;
    height: 44px;
    /*background: url("../images/v74_20.png");*/
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 30px;
    left: 0px;
    overflow: hidden;
  }
  .v74_21 {
    width: 375px;
    height: 44px;
    background: rgba(255,255,255,1);
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 0px;
    overflow: hidden;
  }
  .v74_22 {
    width: 210px;
    color: rgba(0,0,0,1);
    position: absolute;
    top: 16px;
    left: 40px;
    /* font-family: Inter; */
    font-weight: Regular;
    font-size: 14px;
    opacity: 1;
    text-align: left;
  }
  .v74_23 {
    width: 15px;
    height: 11px;
    background: url("../images/3_layer.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 16px;
    left: 340px;
    overflow: hidden;
  }
  .v74_24 {
    width: 1px;
    height: 15px;
    background: rgba(0,0,0,1);
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 15px;
    overflow: hidden;
  }
  .v74_25 {
    width: 1px;
    height: 15px;
    background: rgba(0,0,0,1);
    opacity: 1;
    position: absolute;
    top: 5px;
    left: 15px;
    overflow: hidden;
  }
  .v74_26 {
    width: 1px;
    height: 15px;
    background: rgba(0,0,0,1);
    opacity: 1;
    position: absolute;
    top: 10px;
    left: 15px;
    overflow: hidden;
  }
  .v74_27 {
    width: 12px;
    height: 12px;
    background: url("../images/arrow.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 18px;
    left: 22px;
  }
  .v74_28 {
    width: 375px;
    height: 1px;
    background: rgba(238,238,238,1);
    opacity: 1;
    position: absolute;
    top: 43px;
    left: 0px;
    overflow: hidden;
  }
  .v74_29 {
    width: 265px;
    color: rgba(0,0,0,1);
    position: absolute;
    top: 153px;
    left: 23px;
    /* font-family: Inter; */
    font-weight: Semi Bold;
    font-size: 16px;
    opacity: 1;
    text-align: left;
  }
  .v74_30 {
    width: 328px;
    height: 1px;
    background: rgba(187,187,187,1);
    opacity: 1;
    position: absolute;
    top: 285px;
    left: 23px;
    overflow: hidden;
  }
  .v74_31 {
    width: 375px;
    height: 46px;
    /*background: url("../images/v74_31.png");*/
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 75px;
    left: 0px;
    overflow: hidden;
  }
  .v74_32 {
    width: 375px;
    height: 44px;
    background: rgba(255,255,255,1);
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 0px;
    overflow: hidden;
  }
  .v74_33 {
    width: 225px;
    color: rgba(0,0,0,1);
    position: absolute;
    top: 16px;
    left: 23px;
    /* font-family: Inter; */
    font-weight: Bold;
    font-size: 14px;
    opacity: 1;
    text-align: left;
  }
  .v74_34 {
    width: 375px;
    height: 1px;
    background: rgba(238,238,238,1);
    opacity: 1;
    position: absolute;
    top: 45px;
    left: 0px;
    overflow: hidden;
  }
  .v74_35 {
    width: 375px;
    height: 60px;
    /*background: url("../images/v74_35.png");*/
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 706px;
    left: 0px;
    overflow: hidden;
  }
  .v74_19 {
    width: 375px;
    height: 60px;
    background: lightgray;
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 0px;
    overflow: hidden;
  }
  .v74_36 {
    width: 375px;
    height: 60px;
    background: rgba(249,190,32,1);
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 0px;
    overflow: hidden;
  }
  .v74_37 {
    width: 166px;
    color: rgba(255,255,255,1);
    position: absolute;
    top: 16px;
    left: 102px;
    /* font-family: Inter; */
    font-weight: Semi Bold;
    font-size: 18px;
    opacity: 1;
    text-align: center;
  }
  .v74_38 {
    width: 288px;
    height: 40px;
    /*background: url("../images/v74_38.png");*/
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 245px;
    left: 20px;
    overflow: hidden;
  }
  .v74_39 {
    width: 247px;
    color: rgba(34,34,34,1);
    position: absolute;
    top: 0px;
    left: 41px;
    /* font-family: Inter; */
    font-weight: Semi Bold;
    font-size: 16px;
    opacity: 1;
    text-align: left;
  }
  .v74_40 {
    width: 29px;
    height: 29px;
    background-image: url("../images/check_y.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 0px;
    overflow: hidden;
  }
   .v74_401 {
    width: 29px;
    height: 29px;
    background-image: url("../images/check_g.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 0px;
    overflow: hidden;
  }
  .v74_41 {
    width: 29px;
    height: 29px;
    background: rgba(249,190,32,1);
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 29px;
    border-radius: 50%;
  }
  .v74_50 {
    width: 279px;
    height: 40px;
    /*background: url("../images/v74_50.png");*/
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 310px;
    left: 29px;
    overflow: hidden;
  }
  .v74_51 {
    width: 247px;
    color: rgba(34,34,34,1);
    position: absolute;
    top: 0px;
    left: 32px;
    /* font-family: Inter */
    font-weight: Regular;
    font-size: 16px;
    opacity: 1;
    text-align: left;
  }
  .v74_52 {
    width: 15px;
    height: 13px;
    background: url("../images/check_b.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 3px;
    left: 0px;
    overflow: hidden;
  }
  .v74_58 {
    width: 279px;
    height: 40px;
    /*background: url("../images/v74_58.png");*/
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 362px;
    left: 29px;
    overflow: hidden;
  }
  .v74_59 {
    width: 247px;
    color: rgba(34,34,34,1);
    position: absolute;
    top: 0px;
    left: 32px;
    /* font-family: Inter; */
    font-weight: Regular;
    font-size: 16px;
    opacity: 1;
    text-align: left;
  }
  .v74_60 {
    width: 15px;
    height: 13px;
    background: url("../images/check_b.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 3px;
    left: 0px;
    overflow: hidden;
  }
  .v74_47 {
    width: 12px;
    height: 12px;
    background: url("../images/arrow2.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 320px;
    left: 339px;
  }
  .v74_62 {
    width: 12px;
    height: 12px;
    background: url("../images/arrow2.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 370px;
    left: 339px;
  }
  
.sub-title { padding: 12px 20px; font-size: 14px; font-weight: bold; border-bottom: 1px solid #eeeeee; }
.desc { font-size: 19px; font-weight: bold; }
.contents { padding: 32px 20px; }
.checkbox-wrap { margin-top: 32px; }
.border-b { border-bottom: 1px solid #eeeeee; }

.checkbox-item { display: flex; justify-content: space-between; align-items: center; }

.arrow-right { position: relative; width: 24px; height: 24px; float: right; }
.arrow-right::after { content: ""; vertical-align: middle; display: inline-block; width: 8px; height: 8px; border-style: solid; border-color: #222222; border-width: 1px 0 0 1px; transform: rotate(135deg); }
  </style>