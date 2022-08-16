<template>
  <div class="Wrapper">
  <!-- <nav> -->
    <!--헤더 -> 왜 position:fixed하니까 문제가 생기지? summary는 괜찮은데??-->
    <Header title="임대차 계약 관리" style="position:fixed; left: 0; top: 0; border-bottom: 1px solid lightgray;"/>
    <!--구분선-->

    <!-- 3종 계약 리스트 -->
    <div v-for="(Home, index) in HomeList" :key="index">
      
      <!-- 진행중인 계약-->
      <div v-if="index === 0">
        
        <!-- 진행중 text-->
        <div class="진행중">
          <div class="ongoing-Text" style="text-align: left; padding-left: 20px;">
            <h2>진행중인 계약</h2>
          </div>
        </div>

        <!-- 각 매물정보-->
        <div v-for="(H, index) in Home" :key="index">

          <!-- 계약프로세스 이동 버튼으로 감싸기-->
          <div class="진행중매물정보&클릭시계약" type="button" @click="Staging(H)" style="padding-top:15px;padding-bottom:15px;">
            <div class="OngoingLayout clear" style="padding-bottom:10px; padding-top:10px;">
              <div class="ongoing-image" style="float:left; padding-left:20px;">
                  <img src="@/assets/sampleImg2.png" alt="sampleRoom" style="width:120px; height: 120px; border-radius:15px;">
              </div>
              <div class="ongoing-info" style="width:calc(100% - 150px); float:left; height:120px; padding-top:10px; padding-bottom:30px;">
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

      <!--찜 목록-->
      <div v-else-if="index === 1">
      <!-- 찜목록 text-->
        <div class="찜목록">
          <div class="Checked-Text" style="text-align: left; padding-left: 20px;">
            <h2>찜목록!!</h2>
          </div>
        </div>

        <!-- 찜한 각 매물정보-->
        <div v-for="(H, index) in Home" :key="index">

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

      <!--종료된 계약목록-->
      <div v-else>
        <!-- 종료계약 Text-->
        <div class="종료목록">
          <div class="Finished-Text" style="text-align: left; padding-left: 20px;">
            <h2>종료된 계약</h2>
          </div>
        </div>
        <!-- 종료한 각 계약정보-->
        <div v-for="(H,index)  in Home" :key="index">
          <!-- 계약프로세스 이동 버튼으로 감싸기-->
          <div class="종료한매물정보&클릭시계약서확인" type="button" @click="checkContract(H)" style="padding-top:0px;padding-bottom:15px;">
            <div class="FinishedLayout clear" style="padding-bottom:10px; padding-top:5px;">
              <div class="finished-image" style="float:left; padding-left:20px;">
                  <img src="@/assets/sampleImg2.png" alt="sampleRoom" style="width:120px; height: 120px; border-radius:15px;">
              </div>
              <div class="finished-info" style="width:calc(100% - 150px); float:left; height:120px; padding-top:5px; padding-bottom:30px;">
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
    <!-- End of three lists-->
    </div>
  <!-- </nav> -->
  </div>
  <div class="ChatButton">
    <img src="@/assets/chatImg.png" style="position: fixed; right: 10px; bottom: 10px; width: 60px; height:60px;"/>
  </div>
</template>

<script>
import Header from "./HeaderLayout.vue";

export default {
  name: "MyMain",
  data() {
    return {
      HomeList: [[], [], []],
    };
  },
  components: {
    Header,
  },
  methods: {
    fetchData: function () {
      //this.$axios.get('https://jsonplaceholder.typicode.com/users/')
      this.$axios
        .get("http://nexthouse.169.56.100.104.nip.io/nexthouse/RentCntrList/100000001")
        //http://169.56.100.104:30650/nexthouse/RentCntrList/100000001
        .then((res) => {
          console.log("");
          console.log("응답 데이터 : " + JSON.stringify(res.data));
          console.log("");
          var str = JSON.stringify(res.data);
          //console.log("parse: "+ temp);
          var jData = JSON.parse(str);
          for (var i = 0; i < jData.length; i++) {
            var weather = jData[i];
            console.log("******************************");
            this.HomeList[Number(weather.cntrDiv[0]) - 1].push(weather);
            //console.log(weather.cntrDiv);
            //console.log(weather.modelNo);
            //console.log(weather.modelNm);
            console.log(weather.modelAddr);
          }
        })
        .catch((error) => {
          console.log("");
          console.log("에러 데이터 : " + error.data);
          console.log("");
        });
    },

    Staging(data) {
      localStorage.setItem("no", data.modelNo);
      localStorage.setItem("p", data.progress);
      localStorage.setItem("rent", data.rentCntrNo);
      this.$router.push("/staging");
    },

    IntroChat() {
      this.$router.push("/ChatPage");
    },

    onBoard(data) {
      console.log(this.HomeList[0].length);
      if(this.HomeList[0].length == 0){
      //const article = { custNo: "100000001", modelNo: "APT000002"};
      this.$axios
        .post("http://nexthouse.169.56.100.104.nip.io/nexthouse/RentCntrIn/custNo=100000001&modelNo=" + data.modelNo)
        .then((res) => {
          console.log("");
          console.log("응답 데이터 : " + JSON.stringify(res.data));
          console.log("");
        })
        .catch((error) => {
          console.log("");
          console.log("에러 데이터 : " + error.data);
          console.log("");
        });
      location.reload();
      }
    },
    checkContract(data){
      console.log(data)
      localStorage.setItem('rent', data.rentCntrNo);
      this.$router.push('/checkContract');
    }
  },
  beforeMount() {
    this.fetchData();
    console.log("fetchData");
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;400&display=swap");

/* 구분선 */
hr.bold {
  height: 12px;
}
.chat-date {
  position: relative;
  text-align: center;
}
.chat-date::before {
  content: "";
  position: absolute;
  left: 0%;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 1px;
  background-color: #d0d0d0;
}
.chat-date > span {
  position: relative;
  z-index: 1;
  background-color: #ffffff;
  display: inline-block;
  padding: 4px 8px;
}
.chat > div.text {
  display: inline-block;
  max-width: 500px;
  width: auto;
  padding: 8px 16px;
  border-radius: 50px;
  word-break: break-all;
}
.chat > div.date {
  font-size: 12px;
  vertical-align: bottom;
}
.my.chat {
  padding-bottom: 5px;
  padding-top: 5px;
}
.my.chat > div.text {
  background-color: #ffcc3c;
}
.your.chat > div.text {
  background-color: #d3d3d3;
}
.chat > div.date {
  display: inline-block;
}

h2 {
  font-family: "Inter";
  font-weight: bold;
  padding-top: 15px;
  font-size: 20px;
  color: #000000;
}

h3,
h4,
h5 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 100;
  font-size: 16px;
  line-height: 30px;
  color: #000000;
  padding-top: 15px;
}

h6 {
  font-family: "Inter";
  font-style: normal;
  font-size: 12px;
  color: #000000;
}
</style>

