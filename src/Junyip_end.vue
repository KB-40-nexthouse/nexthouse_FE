<template>
  <Header style="border-bottom: 0.8px solid #DFDEDE; position: fixed;"  title="전입일자 신고" />
  <div>
    <div class="layout_center">
      <div class="center">
        <div class="desc">
          전입일자 신고가<br/>
          완료되었습니다.
        </div>
        <div class="img-wrap">
          <img src="../images/check_ytob.png" alt="">
        </div>
      </div>
    </div>
    <div class="fixed_button">
      <button type="button" @click="goNext()">완료</button>
    </div>
  </div>

</template>
        

<script>
import Header from "./HeaderLayout.vue";

export default {
  name: 'MyJunyipEnd',
  data(){
    return {
        modelNo : 0,
        status : 0,
        rentNo : 0,
        checked : true
    }
  },
  components: {
    Header
  },
  methods:{
    async goNext() {
      localStorage.setItem('no', this.modelNo);
      localStorage.setItem('p', 5);
      localStorage.setItem('rent', this.rentNo);
      await this.postProgress();
      this.$router.push('/');
    },
    async postProgress() {
        await this.$axios.post('http://nexthouse.169.56.100.104.nip.io/nexthouse/RentCntrNextStep/rentCntrNo='+this.rentNo+'&progress=4')
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
    console.log("Junyip end !!!");
    console.log(this.status+":status");
    console.log(this.modelNo+":modelNo");
    console.log(this.rentNo+":rentNo");
  }
}

</script>

<style scoped>
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
        .desc { font-size: 19px; font-weight: bold; margin-bottom: 34px; }
    .layout_center { position: relative;  width:100%;  margin:0 auto; text-align:center;  transform: translateY(80%); }
    .layout_center > .center { position: center;  }
    .img-wrap img { max-width: 109px; }
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
      /* font-family: Inter; */
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
      /* font-family: Inter; */
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
      /* font-family: Inter; */
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
      background: url("../images/check_ytob.png");
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