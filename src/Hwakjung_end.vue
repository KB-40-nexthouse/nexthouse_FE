<template>
<nav>
    <div class="v76_87">
      <div class="v76_88"></div>
      <div class="v76_89">
        <div class="v76_90"></div>
        <span class="v76_91"><b>확정일자 신고</b></span>
        <div class="v76_92"></div>
        <div class="v76_96"></div>
        <div class="v76_97"></div>
      </div>
      <span class="v76_98"><b>확정일자 신고가<br> 완료되었습니다.</b></span>
      <div class="v76_104">
        <div class="v76_105" type='button' @click="goNext()">
        <span  class="v76_106"><b>다음</b></span>
        </div>
      </div>
      <div class="v76_107">
        <div class="v76_109">
          <div class="v76_110"></div>
        </div>
      </div>
    </div>
</nav>
<router-view/>
</template>
        

<script>

export default {
  name: 'MyHwakjungEnd',
  components: {
  },
  data(){
      return {
        modelNo : 0,
        status : 0,
        rentNo : 0
    }
  },
  methods:{
    goNext() {
      localStorage.setItem('no', this.modelNo);
      localStorage.setItem('p', 3);
      localStorage.setItem('rent', this.rentNo);
      this.postProgress();
      this.$router.go(-2);
    },
    postProgress() {
        this.$axios.post('http://nexthouse.169.56.100.104.nip.io/nexthouse/RentCntrNextStep/rentCntrNo='+this.rentNo+'&progress=2')
          .then(res => {
          console.log("응답 데이터 : " + JSON.stringify(res.data));
          })
          .catch(error => {
          console.log("에러 데이터 : " + error.data);
          });
        //this.$router.push('/staging');
    },
  },
  beforeMount(){
    this.status = localStorage.getItem('p')
    this.modelNo = localStorage.getItem('no')
    this.rentNo = localStorage.getItem('rent')
    console.log("Hwakjung end !!!");
    console.log(this.status+":status");
    console.log(this.modelNo+":modelNo");
    console.log(this.rentNo+":rentNo");
  }
}

</script>

<style>
 #app 
  { 
    margin:0 auto; 
    width:350px;
    height:650px;
    text-align:center; 
    background-color: #ffffff;
  }
    body {
      font-size: 14px;
    }
    .v76_87 {
      width: 400px;
      height: 830px;
      background: rgba(255,255,255,1);
      opacity: 1;
      position: absolute;
      top: 0px;
      left: 0px;
      overflow: hidden;
    }
    .v76_88 {
      width: 375px;
      height: 30px;
      background: rgba(255,255,255,1);
      opacity: 1;
      position: absolute;
      top: 0px;
      left: 0px;
      overflow: hidden;
    }
    .v76_89 {
      width: 375px;
      height: 44px;
      /*background: url("../images/v76_89.png");*/
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      opacity: 1;
      position: absolute;
      top: 30px;
      left: 0px;
      overflow: hidden;
    }
    .v76_90 {
      width: 375px;
      height: 44px;
      background: rgba(255,255,255,1);
      opacity: 1;
      position: absolute;
      top: 0px;
      left: 0px;
      overflow: hidden;
    }
    .v76_91 {
      width: 210px;
      color: rgba(0,0,0,1);
      position: absolute;
      top: 12px;
      left: 45px;
      font-family: Inter;
      font-weight: Regular;
      font-size: 14px;
      opacity: 1;
      text-align: left;
    }
    .v76_92 {
      width: 17px;
      height: 15px;
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
    .v76_96 {
      width: 13px;
      height: 13px;
      background: url("../images/arrow.png");
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      opacity: 1;
      position: absolute;
      top: 16px;
      left: 26px;
    }
    .v76_97 {
      width: 375px;
      height: 1px;
      background: rgba(238,238,238,1);
      opacity: 1;
      position: absolute;
      top: 43px;
      left: 0px;
      overflow: hidden;
    }
    .v76_98 {
      width: 170px;
      color: rgba(0,0,0,1);
      position: absolute;
      top: 207px;
      left: 126px;
      font-family: Inter;
      font-weight: Semi Bold;
      font-size: 19px;
      opacity: 1;
      text-align: left;
    }
    .v76_104 {
      width: 375px;
      height: 60px;
      /*background: url("../images/v76_104.png");*/
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      opacity: 1;
      position: absolute;
      top: 706px;
      left: 0px;
      overflow: hidden;
    }
    .v76_105 {
      width: 375px;
      height: 60px;
      background: rgba(249,190,32,1);
      opacity: 1;
      position: absolute;
      top: 0px;
      left: 0px;
      overflow: hidden;
    }
    .v76_106 {
      width: 166px;
      color: rgba(255,255,255,1);
      position: absolute;
      top: 17px;
      left: 102px;
      font-family: Inter;
      font-weight: Semi Bold;
      font-size: 18px;
      opacity: 1;
      text-align: center;
    }
    .v76_107 {
      width: 109px;
      height: 109px;
      /*background: url("../images/v76_107.png");*/
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      opacity: 1;
      position: absolute;
      top: 301px;
      left: 133px;
      overflow: hidden;
    }
    .v76_109 {
      width: 112px;
      height: 112px;
      background: url("../images/check_y.png");
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      opacity: 1;
      position: absolute;
      top: 0px;
      left: 0px;
      overflow: hidden;
    }
    .v76_110 {
      width: 109px;
      height: 109px;
      background: rgba(249,190,32,1);
      opacity: 1;
      position: absolute;
      top: 0px;
      left: 109px;
      border-radius: 50%;
    }
    </style>