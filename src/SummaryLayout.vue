<template>
<div class="Wrapper" style="padding-bottom:110px; border-bottom: 1px solid;">
  <!--Header-->
  <!-- <div class="header" style="position:fixed;">
    <h2 style="float: left;">
        &nbsp; &lt; &nbsp; 전세계약서 요약정리
    </h2>
    <div class="" style="float: right; padding-top: 15px; padding-right: 10px">
      <img src="@/assets/hamResized.png" alt="menuIcon">
    </div>
  </div> -->
  <Header style="position: fixed; border-bottom: 1px solid;" title="전세계약서 요약정리" />
  <!-- 구분선 -->
  <p class="chat-date"></p>
  <!-- 내용 -->
  <div class="summaryPage" style="padding-top:60px; text-align: center;">
    <h3>고객님께서 진행하신 결과를 요약한 내용입니다.</h3>
    <br>
    <h4>&#8226; 매물정보</h4>
    <h4>금액) 일금{{this.Home.price}}원정</h4>
    <h4>주소) {{this.Home.modelAddr}}</h4>
    <h4>임대인) {{this.Home.ownerNm}} &#9742; {{this.Home.ownerTelNo}}</h4>
    <br>
    <h4>&#8226; 신고내용</h4>
    <h4>전입일자) {{this.Home.entDt}} </h4>
    <h4>확정일자) {{this.Home.fixDt}} </h4>
    <br>
    <h4>&#8226; 계약내용</h4>
    <h4>계약시작일자) {{this.Home.rentStDt}}</h4>
    <h4>계약종료일자) {{this.Home.rentEndDt}}</h4>
  </div>
  <br><br><br>
  <div class="doBest" style="text-align: center;">
    <h4>KB국민은행을 이용해주셔서 감사합니다.</h4>
    <h4>KB국민은행은 고객의 만족을 위해 언제나 최선을 다하겠습니다.</h4>
    <div class="tyImage" style="float: center; padding:10px;">
      <img src="./assets/liivFriends-300.jpeg" alt="tyIcon">
    </div>
  <!-- Footer Area-->
  <!-- <div type='button' @click="goNext()" class="footer clear">
    <h5 style="float: center; padding-top: 20px;">확인</h5>
  </div> -->
  <div class="fixed_button button">
      <button type="button" @click="goNext()" >확인</button>
    </div>
  </div>

</div>
<router-view/>
</template>

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

.footer {
    /* position: absolute; */
    text-align: center;
    position: fixed;
    background-color: #F9BE20;
    width: 100%;
    bottom: 0;
    padding-bottom: 16px;
    height: 70px;
}


/* float: left , right */
/* text-align: left , right , center */

hr.bold { height: 12px; }
  .chat-date { position: relative; text-align: center;}
  .chat-date::before { content: ""; position: absolute; left: 0%; top: 50%; transform: translateY(-50%); width: 100%; height: 1px; background-color: #d0d0d0 }
  .chat-date > span { position: relative; z-index: 1; background-color: #ffffff; display: inline-block; padding : 4px 8px; }
  .chat > div.text { display: inline-block; max-width: 500px; width: auto; padding: 8px 16px; border-radius: 50px;  word-break: break-all; }
  .chat > div.date { font-size: 12px; vertical-align: bottom;}
  .my.chat { padding-bottom: 5px; padding-top: 5px; }
  .my.chat > div.text { background-color: #FFCC3C; }
  .your.chat > div.text { background-color: #D3D3D3; }
  .chat > div.date { display: inline-block; }

h2, h3{
  /* font-family: 'Inter'; */
  font-style: normal;
  font-weight: 100;
  font-size: 16px;
  line-height: 30px;
  color: #000000;
  padding-top: 15px;
}

h4{
    /* font-family: 'Inter'; */
    font-style: normal;
    font-weight: 100;
    font-size: 16px;
    line-height: 30px;
    color: #000000;
    padding-top: 15px;
}

h5{
  /* font-family: 'Inter'; */
  font-style: normal;
  font-weight: 100;
  font-size: 20px;
  line-height: 30px;
  color: #FFFFFF;
  padding-top: 15px;
}

h6{
  /* font-family: 'Inter'; */
  font-style: normal;
  font-size: 12px;
  color:#000000;
}

</style>

<script type="text/javascript">

import Header from "./HeaderLayout.vue";

export default {
  name: 'summaryLayout',
  mounted () {
    console.log('summaryLayout mounted.')
  },
  data(){
    return {
        modelNo : 0,
        status : 0,
        rentNo : 0,
        Home : 0,
        checked : true
    }
  },
  components: {
    Header
  },
  props: {},
  methods: {
    goNext() {
    localStorage.setItem('no', this.modelNo);
    localStorage.setItem('p', 4);
    localStorage.setItem('rent', this.rentNo);
    //this.postProgress();
    console.log("click")
    this.$router.go(-4);
    },
    async getInfo(){
        await this.$axios.get('http://nexthouse.169.56.100.104.nip.io/nexthouse/RentCntrRslt/'+this.rentNo)
        .then(res => {
          console.log("");
          console.log("응답 데이터 : " + JSON.stringify(res.data));
          console.log("");
          var str = JSON.stringify(res.data);
            //console.log("parse: "+ temp);
          var jData = JSON.parse(str);
          this.Home = jData[0];
        })
        .catch(error => {
            console.log("");
            console.log("에러 데이터 : " + error.data);
            console.log(""); 
        });
    }
  },
  async beforeMount(){
    this.status = localStorage.getItem('p')
    this.modelNo = localStorage.getItem('no')
    this.rentNo = localStorage.getItem('rent')
    console.log("Bojeong end !!!");
    console.log(this.status+":status");
    console.log(this.modelNo+":modelNo");
    console.log(this.rentNo+":rentNo");
    await this.getInfo();
  }
}

</script>
