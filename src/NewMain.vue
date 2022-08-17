<template>
<Header title="내가 본 부동산" />
<body>
  <div class="row">
    <div class="col s12">
      <ul id="tabs-swipe-demo" class="tabs">
        <li class="tab col s3"><a href="#tab1">최근 본</a></li>
        <li class="tab col s3"><a class="active" href="#tab2">계약진행</a></li>
        <li class="tab col s3"><a href="#tab3">종료</a></li>
      </ul>
    </div>
    <div id="tab1" class="">
        <div class="selectbar clear" style="">
            <div style="">전체 {{HomeList[0].length}}개</div>
            <!-- <div v-if="HomeList[2].length != 0" > -->
            <div style="float:left;">
                <select name="" id="" style="font-size:10px">
                    <option value="">등록순</option>
                    <option value="">최신순</option>
                </select>
            </div>
            <a href="#">편집</a>
            <!-- </div> -->
        </div>
        <div v-if="HomeList[0].length != 0" > 
            <div v-for="(H, index) in HomeList[0]" :key="index">
                <!-- 계약프로세스 이동 버튼으로 감싸기-->
                <div class="찜한매물정보&클릭시계약" type="button" @click="onBoard(H)" style="padding : 15px; ">
                    <div class="ChekedLayout clear" style="">
                        <div class="checked-image" style="float:left; ">
                            <img src="@/assets/sampleImg2.png" alt="sampleRoom" style="width:128px; height: 128px; border-radius:5px; ">
                        </div>
                        <div class="checked-info" style="width:calc(100% - 150px); float:left; padding-left:18px; margin-top:1%; font-family: 'NanumBarunGothicBold'">
                            <p style=" font-size: 18px; color: #000000; line-height:2; ">
                                <b style="color:#41BE4E; font-size: 15px; padding-right:4px">전세</b>
                                <b>{{H.price}}</b>
                            </p>
                            <p style=" font-size: 13.6px; color: #000000; line-height:1.1; ">
                                {{H.modelAddr}}
                            </p>
                            <p style="font-size: 13.6px; color: #777777; line-height:2.1; ">
                                {{H.modelSpec}}
                            </p>
                            <p style="font-size: 13px; color: black; line-height:1.1; white-space : nowrap; overflow:hidden; text-overflow:ellipsis;" >
                                {{H.modelNm}}
                            </p>
                            <div style="font-size: 11px; color: #000000; line-height:2.45; ">
                                <img src="@/assets/Human_Icon.png" alt="sampleRoom" style="width:25px; height: 22px; padding-right:5px; padding-top:5px">
                                <span>{{H.ownerNm}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <hr style="width:90%; margin: auto; height:0.5px">
            </div>
        </div>
        <div v-else>
            <div style="color:#696868; font-size:15px; text-align:center; padding-top:25%">
                최근 본 매물이 없어요.
            </div>
        </div>
    </div>
    <div id="tab2" class="">
        <div class="selectbar clear" style="">
            <div style="">전체 {{HomeList[1].length}}개</div>
            <!-- <div v-if="HomeList[1].length != 0" > -->
                <div style="float:left;">
                    <select name="" id="" style="font-size:10px">
                        <option value="">등록순</option>
                        <option value="">최신순</option>
                    </select>
                </div>
                <a href="#">편집</a>
            <!-- </div> -->
        </div>
        <div v-if="HomeList[1].length != 0" > 
            <div v-for="(H, index) in HomeList[1]" :key="index">
                <!-- 계약프로세스 이동 버튼으로 감싸기-->
                <div class="찜한매물정보&클릭시계약" type="button" @click="onBoard(H)" style="padding : 15px; ">
                    <div class="ChekedLayout clear" style="">
                        <div class="checked-image" style="float:left; ">
                            <img src="@/assets/sampleImg2.png" alt="sampleRoom" style="width:128px; height: 128px; border-radius:5px; ">
                        </div>
                        <div class="checked-info" style="width:calc(100% - 150px); float:left; padding-left:18px; margin-top:1%; font-family: 'NanumBarunGothicBold'">
                            <p style=" font-size: 18px; color: #000000; line-height:2; ">
                                <b style="color:#41BE4E; font-size: 15px; padding-right:4px">전세</b>
                                <b>{{H.price}}</b>
                            </p>
                            <p style=" font-size: 13.6px; color: #000000; line-height:1.1; ">
                                {{H.modelAddr}}
                            </p>
                            <p style="font-size: 13.6px; color: #777777; line-height:2.1; ">
                                {{H.modelSpec}}
                            </p>
                            <p style="font-size: 13px; color: black; line-height:1.1; white-space : nowrap; overflow:hidden; text-overflow:ellipsis;" >
                                {{H.modelNm}}
                            </p>
                            <div style="font-size: 11px; color: #000000; line-height:2.45; ">
                                <img src="@/assets/Human_Icon.png" alt="sampleRoom" style="width:25px; height: 22px; padding-right:5px; padding-top:5px">
                                <span>{{H.ownerNm}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <hr style="width:90%; margin: auto; height:0.5px">
            </div>
        </div>
        <div v-else>
            <div style="color:#696868; font-size:15px; text-align:center; padding-top:25%">
                계약을 진행하는 매물이 없어요.
            </div>
        </div>
    </div>
    <!-- <div id="test3" class="col s12">Test 3</div> -->
    <div id="tab3" class="">
        <div class="selectbar clear" style="">
            <div style="">전체 {{HomeList[2].length}}개</div>
            <!-- <div v-if="HomeList[2].length != 0" > -->
            <div style="float:left;">
                <select name="" id="" style="font-size:10px">
                    <option value="">등록순</option>
                    <option value="">최신순</option>
                </select>
            </div>
            <a href="#">편집</a>
            <!-- </div> -->
        </div>
        <div v-if="HomeList[2].length != 0" > 
            <div v-for="(H, index) in HomeList[2]" :key="index">
                <!-- 계약프로세스 이동 버튼으로 감싸기-->
                <div class="찜한매물정보&클릭시계약" type="button" @click="onBoard(H)" style="padding : 15px; ">
                    <div class="ChekedLayout clear" style="">
                        <div class="checked-image" style="float:left; ">
                            <img src="@/assets/sampleImg2.png" alt="sampleRoom" style="width:128px; height: 128px; border-radius:5px; ">
                        </div>
                        <div class="checked-info" style="width:calc(100% - 150px); float:left; padding-left:18px; margin-top:1%; font-family: 'NanumBarunGothicBold'">
                            <p style=" font-size: 18px; color: #000000; line-height:2; ">
                                <b style="color:#41BE4E; font-size: 15px; padding-right:4px">전세</b>
                                <b>{{H.price}}</b>
                            </p>
                            <p style=" font-size: 13.6px; color: #000000; line-height:1.1; ">
                                {{H.modelAddr}}
                            </p>
                            <p style="font-size: 13.6px; color: #777777; line-height:2.1; ">
                                {{H.modelSpec}}
                            </p>
                            <p style="font-size: 13px; color: black; line-height:1.1; white-space : nowrap; overflow:hidden; text-overflow:ellipsis;" >
                                {{H.modelNm}}
                            </p>
                            <div style="font-size: 11px; color: #000000; line-height:2.45; ">
                                <img src="@/assets/Human_Icon.png" alt="sampleRoom" style="width:25px; height: 22px; padding-right:5px; padding-top:5px">
                                <span>{{H.ownerNm}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <hr style="width:90%; margin: auto; height:0.5px">
            </div>
        </div>
        <div v-else>
            <div style="color:#696868; font-size:15px; text-align:center; padding-top:25%">
                계약을 종료한 매물이 없어요.
            </div>
        </div>
    </div>
  </div>
</body>
</template>


<script>
import Header from "./HeaderLayout.vue";
import "materialize-css/dist/css/materialize.css";
import M from 'materialize-css'
export default {
  name: 'NewStaging',
  data() {
    return {
      HomeList: [[], [], []],
    };
  },
  components: {
    Header,
  },
  mounted () {
    M.AutoInit()
  },
  methods: {
    fetchData: function () {
      this.$axios
        .get("http://nexthouse.169.56.100.104.nip.io/nexthouse/RentCntrList/100000001")
        .then((res) => {
          console.log("응답 데이터 : " + JSON.stringify(res.data));
          var str = JSON.stringify(res.data);
          var jData = JSON.parse(str);
          for (var i = 0; i < jData.length; i++) {
            var weather = jData[i];
            console.log("******************************");
            this.HomeList[Number(weather.cntrDiv[0]) - 1].push(weather);
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
      this.$router.push("/NewStaging");
    },

    IntroChat() {
      this.$router.push("/ChatPage");
    },

    onBoard(data) {
      console.log(this.HomeList[0].length);
      //if(this.HomeList[0].length == 0)
      {
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
}


</script>

<style>
    .body {
        font-family: 'NanumBarunGothic';
        font-size: 14px; 
        background-color: rgb(251,251,251);
    }
    .header h2{
        margin: 0 !important;
    }

    .row {
        font-family: 'NanumBarunGothic';
    }

    .tabs {
        font-family: 'NanumBarunGothic';
        border-bottom : 1px solid #F5F5F5;
    }

    .tabs .tab a{
        color:black;
        font-size:17px;
        transition: none;
    }
    .tabs .tab a:focus, .tabs .tab a:focus.active {
        background-color: white;
        outline: none;
        color:#4372F4;
    }
    .tabs .tab a:hover,tabs .tab a:active,.tabs .tab a.active {
        background-color:transparent;
        color:#4372F4;
        font-weight : bolder;
    }
    .tabs .tab.disabled a,.tabs .tab.disabled a:hover {
        color:#4372F4(102,147,153,0.7);
    }
    .tabs .indicator {
        background-color:#4372F4;
        padding : 1.4px;
    }

    .select-wrapper input.select-dropdown{
        font-size:14px;
        padding-top:1.5px;
    }

    .selectbar { padding: 9px 20px; background-color: #F5F5F5; font-size: 13px; }
    .selectbar > div { position: relative; float: left; font-weight: bold;  }
    .selectbar > div + div { margin-left: 10px; padding-left: 10px;  }
    .selectbar > div + div::before { content: ""; position: absolute; left: 0; top: 0; width: 1px; height: 100%; background-color: lightgray; }
    .selectbar > div .select-wrapper { max-width: 60px; font-size:8px; }
    .selectbar > div .select-wrapper input.select-dropdown { height: auto; border: 0 none; line-height: initial; margin-bottom: 0; }
    .selectbar > a{ float: right;  text-decoration: underline; color:#4372F4;}
</style>