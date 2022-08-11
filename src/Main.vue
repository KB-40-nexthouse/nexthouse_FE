<template>
<div>
<nav>
  <div class="v57_66">
    <!-- 제목 -->
    
    <div class="v57_70">
        <span class="v57_77"><b>임대차 계약 관리</b></span>
        <div class="v57_78"></div>
    </div>
    

    <!-- 리스트 -->
    <div v-for="(Home,index) in HomeList" :key="index">
        <div v-if="index === 0">
            <span class="v57_170"><b>진행중인 계약</b></span>
                <div v-for="(H,index)  in Home" :key="index">
                    <!-- 홈뷰 -->
                    <div class="v57_132">
                        <div class="v57_131">
                            <span type='button' @click="Staging(H)" class="v57_188">진행 상태 확인</span>

                            <div class="v57_129">
                                <span class="v57_122">{{H.modelNm}}</span>
                                <span class="v57_123">{{H.modelAddr}}</span>
                                <span class="v57_124">{{H.price}} 원</span>
                            </div>
                        </div>
                        <div class="v103_74"></div>
                    </div>
                </div>
        </div>
        <div v-else-if="index === 1">
            <span class="v57_114"><b>찜 목록</b></span>
                <div v-for="(H,index)  in Home" :key="index">
                    <div class="hop"></div>
                    <div class="v57_132">
                        <div class="v57_131">
                            <span type='button' @click="onBoard(H)" class="v57_188">계약 진행</span>
                            <div class="v57_129">
                                <span class="v57_122">{{H.modelNm}}</span>
                                <span class="v57_123">{{H.modelAddr}}</span>
                                <span class="v57_124">{{H.price}} 원</span>
                            </div>
                        </div>
                        <div class="v103_74"></div>
                    </div>
                </div>
        </div>
        <div v-else>
            <span class="v57_171"><b>종료된 계약</b></span>
                <div v-for="(H,index)  in Home" :key="index">
                    <div class="hop"></div>
                    <div class="v57_132">
                        <div class="v57_131">
                            <span class="v57_188">전자계약서 확인</span>
                            <div class="v57_129">
                                <span class="v57_122">{{H.modelNm}}</span>
                                <span class="v57_123">{{H.modelAddr}}</span>
                                <span class="v57_124">{{H.price}} 원</span>
                            </div>
                        </div>
                        <div class="v103_74"></div>
                    </div>
                </div>
        </div>
    </div>

    <div class="v57_91"></div>
</div>

<!-- 톡톡 -->
<div class="v107_2"> 
    <router-link to='/ChatPage'>
    <div  class="v86_67"></div>
    </router-link>
</div>

</nav>
<router-view/>
</div>
</template>


<script>


export default {
  name: 'MyMain',
  data(){
    return {
        HomeList : [[],[],[]]
    }
  },
  components: {
  },
  methods: {
    fetchData: function() {
        //this.$axios.get('https://jsonplaceholder.typicode.com/users/')
        this.$axios.get('/nexthouse/RentCntrList/100000001')
        //http://169.56.100.104:30650/nexthouse/RentCntrList/100000001
        .then(res => {
          console.log("");  
          console.log("응답 데이터 : " + JSON.stringify(res.data));
          console.log("");
          var str = JSON.stringify(res.data);
            //console.log("parse: "+ temp);
          var jData = JSON.parse(str);
            for(var i=0;i<jData.length;i++){
              var weather = jData[i];
              console.log('******************************');
                  this.HomeList[Number(weather.cntrDiv[0])-1].push(weather)
              //console.log(weather.cntrDiv);
              //console.log(weather.modelNo);
              //console.log(weather.modelNm);
              console.log(weather.modelAddr);
            }
        })
        .catch(error => {
            console.log("");
            console.log("에러 데이터 : " + error.data);
            console.log(""); 
        });
    },

    Staging(data) {
        localStorage.setItem('no', data.modelNo);
        localStorage.setItem('p', data.progress);
        localStorage.setItem('rent', data.rentCntrNo);
        this.$router.push('/staging');
    },

    IntroChat() {
      this.$router.push('/ChatPage');
    },

    onBoard(data) {
        console.log(data);
        //const article = { custNo: "100000001", modelNo: "APT000002"};
        this.$axios.post('/RentCntrIn/custNo=100000001&modelNo='+data.modelNo)
          .then(res => {
          console.log("");
          console.log("응답 데이터 : " + JSON.stringify(res.data));
          console.log("");
          })
          .catch(error => {
          console.log("");
          console.log("에러 데이터 : " + error.data);
          console.log(""); 
          });
        location.reload();
        //localStorage.setItem('no', data.modelNo);
        //localStorage.setItem('p', data.progress);
        //localStorage.setItem('rent', data.rentCntrNo);
        //this.$router.push('/staging');
    },
  },
  beforeMount(){
    this.fetchData();
    console.log("fetchData");
  }
}

</script>

<style>

.v57_66 {
  width: 400px;
  height: 830px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
}
.v57_70 {
  width: 371px;
  height: 72px;
  /* background: url("../images/v57_70.png"); */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  /* opacity: 1;
  position: absolute; */
  top: 0px;
  left: 1px;
  overflow: hidden;
}
.v57_77 {
  width: 168px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 31px;
  left: 40px;
  font-family: Inter;
  font-weight: Regular;
  font-size: 17px;
  opacity: 1;
  text-align: left;
}
.hop {
  /* width: 20px; */
  height: 10px;
  /*background: url("../images/arrow.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover; */
  opacity: 1;
  /* position: absolute; */
  /* top: 35px;
  left: 18px; */
}
.v57_78 {
  width: 20px;
  height: 20px;
  background: url("../images/arrow.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 35px;
  left: 18px;
}
.v57_91 {
  width: 375px;
  height: 90px;
  background: url("../images/navi.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  /* opacity: 1; */
  position: absolute;
  top: 721px;
  left: 1px;
  /* overflow: hidden; */
}
.v57_114 {
  width: 329px;
  color: rgba(0,0,0,1);
  position: relative;
  top: 12px;
  left: -130px;
  font-family: Inter;
  font-weight: Semi Bold;
  font-size: 20px;
  opacity: 1;
  text-align: left;
}
.v57_171 {
  width: 329px;
  color: rgba(0,0,0,1);
  position: relative;
  top: 12px;
  left: -110px;
  font-family: Inter;
  font-weight: Semi Bold;
  font-size: 20px;
  opacity: 1;
  text-align: left;
}
.v57_132 {
  width: 420px;
  height: 108px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: relative;
  top: 0px;
  left: 0px;
  /* overflow: hidden; */
}
.v57_131 {
  width: 395px;
  height: 108px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  /* opacity: 1; */
  position: relative;
  top: 5px;
  left: 2px; 
  /* overflow: hidden; */
  border: 1px solid rgba(204,204,204,1);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}
.v57_125 {
  width: 251px;
  /* background: url("../images/v57_125.png"); */
  opacity: 1;
  /* position: absolute; */
  top: 93px;
  left: 2px;
  border: 1px solid rgba(204,204,204,1);
}
.v57_188 {
  width: 124px;
  color: rgba(0,0,0,1);
  background: rgba(238,238,238,1);
  position: relative;
  top: 7px;
  left: 130px;
  font-family: Inter;
  font-weight: Medium;
  font-size: 15px;
  opacity: 1;
  border-top-left-radius: 150px;
  border-top-right-radius: 150px;
  border-bottom-left-radius: 150px;
  border-bottom-right-radius: 150px;
  padding: 5px;
  text-align: center;
}
.v57_129 {
  width: 400px;
  height: 100px;
  /* background: url("../images/v57_129.png"); */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  /* position: absolute; */
  top: 32px;
  left: 0px;
  /* overflow: hidden; */
}
.v57_122 {
  width: 300px;
  color: rgba(0,0,0,1);
  position: relative;
  top: 17px;
  left: 60px;
  display: block;
  font-family: Inter;
  font-weight: Medium;
  font-size: 17px;
  opacity: 1;
  text-align: right;
  overflow: visible;
}
.v57_123 {
  width: 300px;
  color: rgba(0,0,0,1);
  position: relative;
  top: 17px;
  left: 100px;
  display: block;
  font-family: Inter;
  font-weight: Medium;
  font-size: 17px;
  opacity: 1;
  text-align: left;
  overflow: visible;
}
.v57_124 {
  width: 200px;
  color: rgba(0,0,0,1);
  position: relative;
  top: 20px;
  left: 170px;
  font-family: Inter;
  font-weight: Regular;
  font-size: 15px;
  opacity: 1;
  text-align: right;
  display: block;
}
.v103_74 {
  width: 61px;
  height: 49px;
  background: url("../images/home.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: relative;
  top: -70px;
  left: 6px;
  overflow: hidden;
}
.v57_170 {
  width: 329px;
  color: rgba(0,0,0,1);
  position: relative;
  /*top: 76px;*/
  left: -100px; 
  font-family: Inter;
  font-weight: Semi Bold;
  font-size: 20px;
  opacity: 1;
  text-align: left;
}
.v107_2 {
  width: 79px;
  height: 80px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 620px;
  left: 300px;
  overflow: hidden;
}
.v86_67 {
  width: 79px;
  height: 85px;
  background: url("../images/talk.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: relative;
  top: 0px;
  left: 0px;
  overflow: hidden;
}
</style>