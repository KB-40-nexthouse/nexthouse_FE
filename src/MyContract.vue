<template>
<!-- <div class="v259_4"> -->
    <!-- <div class="v57_78"> -->
      <!-- <span class="v57_77"><b>전자계약서 확인</b></span> -->
    <!-- </div> -->
    <!-- <div class="v259_16">
        <div class="v259_17"></div>
        <span class="v259_18" type='button' @click="goBack()">확인</span>
    </div>
    <div class="v259_19"></div> -->
    <!-- <span class="v123123">전자계약서 서명</span> -->
<!-- </div> -->
<div>
    <Header title="전자계약서 확인" />
    <div class="contract_page"></div>
    <div class="fixed_button button">
      <button type="button" @click="goBack()" :disabled="!checked">확인</button>
    </div>
    <canvas id="canvasT" width="50" height="50" class="v76_1233" ref = "myCanvas" ></canvas>
    <img id="source" :src="image_source_link" width="0" height="0" class="v76_1233">
</div>
</template>


<script>
import Header from "./HeaderLayout.vue";

export default {
  name: 'MyContract',
  data(){

    return {
        rentNo : 0,
        Home : 0,
        ctx : null,
        canvas : null,
        image : null,
        image_source : '',
        checked : true
    }
  },
  components: {
    Header
  },
  computed : {
    image_source_link(){
      return this.image_source
    }
  },
  methods: {
    goBack(){
      this.$router.go(-1);
    },
    fetchData: async function() {
        //this.$axios.get('https://jsonplaceholder.typicode.com/users/')
        await this.$axios.get('http://nexthouse.169.56.100.104.nip.io/nexthouse/RentCntrRslt/'+this.rentNo)
        .then(res => {
          console.log("");  
          console.log("응답 데이터 : " + JSON.stringify(res.data));
          console.log("");
          var str = JSON.stringify(res.data);
          var jData = JSON.parse(str);
          this.Home = jData[0];
        })
        .catch(error => {
            console.log("");
            console.log("에러 데이터 : " + error.data);
            console.log(""); 
        });
    },
    async fetchImg(){
        await this.$axios.get('http://nexthouse.169.56.100.104.nip.io/nexthouse/ImgSel/'+this.rentNo)
        .then(res => {
          console.log("");  
          console.log("응답 데이터 : " + JSON.stringify(res.data));
          console.log("");
          var str = JSON.stringify(res.data);
          var jData = JSON.parse(str);
          this.Home = jData[0];
          console.log(this.Home.img);
        })
        .catch(error => {
            console.log("");
            console.log("에러 데이터 : " + error.data);
            console.log(""); 
        });
    },
    loadImg(){

      this.image.addEventListener('load', () => {
        this.ctx.drawImage(this.image, 0,0);  
      });
       var source = this.Home.img;
      this.image_source = source
    }
  },
  beforeMount(){
    this.rentNo = localStorage.getItem('rent');
  },
  async mounted(){
    await this.fetchData();
    await this.fetchImg();
    this.canvas = document.getElementById('canvasT');
    this.ctx = this.canvas.getContext('2d');
    this.image = document.getElementById('source');
    console.log("mounted");
    this.loadImg();
  }
}


</script>

<style scoped>


body {
  font-size: 14px;
}
.v259_4 {
  width: 430px;
  height: 800px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
}
.contract_page {
  width: 340x;
  height: 640px;
  background-image: url("../images/contract.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  opacity: 1;
  top: 70px;
}
.v76_1233 {
    width: 70px;
    height: 70px;
    /* background: red; */
    opacity: 1;
    position: absolute;
    top: 420px;
    left: 330px;
    overflow: hidden;
    z-index: 1;
  }
.v123123 {
  width: 166px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 100px;
  left: 70px;
  /* font-family: Inter; */
  font-weight: Semi Bold;
  font-size: 18px;
  opacity: 1;
  text-align: center;
  overflow: visible;
}
.v57_77 {
  width: 166px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 11px;
  left: 27px;
  /* font-family: Inter; */
  font-weight: Semi Bold;
  font-size: 18px;
  opacity: 1;
  text-align: left;
  overflow: visible;
}
.v57_78 {
  width: 430PX;
  height: 45px;
  background-color: lightgray;
  color:lightgray;
  position: relative;
  top: 0px;
  left: 0px;
  opacity: 1;
  overflow: visible;
}
.v259_16 {
  width: 430px;
  height: 60px;
  /* background: url("../images/contract.png"); */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 706px;
  left: 0px;
  overflow: hidden;
}
.v259_17 {
  width: 430px;
  height: 60px;
  background: rgba(249,190,32,1);
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
}
.v259_18 {
  width: 166px;
  color: rgba(255,255,255,1);
  position: absolute;
  top: 11px;
  left: 110px;
  /* font-family: Inter; */
  font-weight: Semi Bold;
  font-size: 18px;
  opacity: 1;
  text-align: center;
}
.v259_19 {
  width: 340x;
  height: 640px;
  background-image: url("../images/contract.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  /* object-fit: contain; */
  opacity: 1;
  /* position: absolute; */
  top: 70px;
  /* left: 10px; */
  /* overflow: hidden; */
}
</style>