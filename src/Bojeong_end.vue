<template>
  <!-- <div class="v76_87">
    <div class="v76_88"></div>
    <div class="v76_89">
      <div class="v76_90"></div>
      <span class="v76_91"><b>보증금 송금</b></span>
      <div class="v76_92"></div>
      <div class="v76_96"></div>
      <div class="v76_97"></div>
    </div>
    <span class="v76_98"><b>보증금 송금이 <br>완료되었습니다.</b></span>
    <div class="v76_104">
      <div class="v76_105" type='button' @click="goNext()">
      <span class="v76_106"><b>다음</b></span>
      </div>
    </div>
    <div class="v76_107">
      <div class="v76_109"><div class="v76_110"></div></div>
    </div>
  </div> -->
  <div>
    <div class="layout_center">
      <div class="center">
        <div class="desc">
          {{  }}
          <!-- 확정일자 신고가<br/> -->
          완료되었습니다.
        </div>
        <div class="img-wrap">
          <img src="../images/check_y.png" alt="">
        </div>
      </div>
    </div>
    <div class="fixed_button">
      <button type="button">다음</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyBojeongEnd",
  data(){
    return {
        modelNo : 0,
        status : 0,
        rentNo : 0
    }
  },
  props: {},
  methods: {
    goNext() {
    localStorage.setItem('no', this.modelNo);
    localStorage.setItem('p', 4);
    localStorage.setItem('rent', this.rentNo);
    this.postProgress();
    this.$router.go(-2);
    },
    postProgress() {
        this.$axios.post('http://nexthouse.169.56.100.104.nip.io/nexthouse/RentCntrNextStep/rentCntrNo='+this.rentNo+'&progress=3')
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
    console.log("Bojeong end !!!");
    console.log(this.status+":status");
    console.log(this.modelNo+":modelNo");
    console.log(this.rentNo+":rentNo");
  }
};
</script>


<style>
#app {
  margin: 0 auto;
  width: 350px;
  height: 650px;
  text-align: center;
  background-color: #ffffff;
}
body {
      font-size: 14px;
    }    
    .layout_center { position: relative; width: 100%; height: 100vh;  }
    .layout_center > .center { position: absolute; left: 0; top: 50%; transform: translateY(-50%); width: 100%; }
    .desc { font-size: 19px; font-weight: bold; margin-bottom: 34px; }
    .img-wrap img { max-width: 109px; }
   
</style>
