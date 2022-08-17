<template>
    <Header title="송금 완료" />
  <div>
    <div class="layout_center">
      <div class="center" style="text-align: center">
        <div class="desc">
          보증금 송금이<br/>
          완료되었습니다.
        </div>
        <div class="img-wrap">
          <img src="../images/check_y.png" alt="">
        </div>
      </div>
    </div>
    <div class="fixed_button">
      <button type="button" @click="goNext()">다음</button>
    </div>
  </div>
</template>

<script>
import Header from "./HeaderLayout.vue";
export default {
  name: "MyBojeongEnd",
  data(){
    return {
        modelNo : 0,
        status : 0,
        rentNo : 0
    }
  },
  components:{
    Header
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


<style scoped>
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
        .desc { font-size: 19px; font-weight: bold; margin-bottom: 34px; }
    .layout_center { position: relative; width: 100%; height: 100vh;  }
    .layout_center > .center { position: absolute; left: 0; top: 50%; transform: translateY(-50%); width: 100%; }
    .img-wrap img { max-width: 109px; }
</style>
