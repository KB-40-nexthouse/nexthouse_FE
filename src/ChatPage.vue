<template>
<Header title="KB전문가 상담" style="position:fixed; top:0; border-bottom: 1px solid lightgray;"/>
  <!--Header-->
  <!-- <div class="header" >
    <h2 style="float: left;">
        &nbsp; &lt; &nbsp; KB 전문가 상담
    </h2>
    <div class="" style="float: right; padding-top: 15px; padding-right: 10px">
      <img src="@/assets/hamResized.png" alt="menuIcon">
    </div>
  </div> -->
  <div class="contents" style="padding-top:44px; padding-bottom:50px;">
    <!-- <hr class="bold"/> -->
    <div class="top clear">
      <!-- 상담사 프로필 이미지-->
      <div class="left" style="float:left; padding-top:5px;">
        <img src="@/assets/profileImg.png" alt="상담사 이미지" />
      </div>
      <!-- 상담사 정보-->
      <div class="right" style="float:left; padding-left: 10px;">
        <h3>상담가 {{ this.Counseler.adsrNm }}</h3>
        <div style="padding-top:10px;">
          <h6>&#8226; {{ this.Counseler.departmentNm }}<br></h6>
          <h6>&#8226; {{ this.Counseler.dtlInfo }}<br></h6>
        </div>
      </div>
      <!-- <div class="changeButton" style="float:right; padding-right:20px; padding-top:10px;">
          <button class="button">상담사 변경</button>
      </div> -->
    </div>
    <!-- 채팅내역 -->
    <div class="bottom">
      <p class="chat-date"><span>2022.08.19</span></p>
      <ul style="padding : 0 16px;">
        <div v-for="(C,index) in ChatList" :key="index">
          <div class="clear" v-if="C.sendId=='100000001'">
            <li class="my chat" style="float:right">
            <div class="date">{{C.msgTime}}</div>
            <div class="text">{{C.msg}}</div>
            </li>
          <!-- {{C.sendId}} -->
          </div>
          <div v-else>
            <li class="your chat clear" style="float:left">
            <div class="text">{{C.msg}}</div>
            <div class="date">{{C.msgTime}}</div>
            </li>
          </div>
        </div>
      </ul>
    </div>
    <!-- 채팅입력 -->
    <div class="input-wrap clear" style="position: fixed; bottom: 0; width: 100%; background-color:white; ">
    <p class="chat-date"></p>
      <div class="Text-Input">
        <input @keyup.enter ="MessageSending()" name="user-text" type="text" v-model ="msg" style="width:100%; padding-top:10px;" placeholder="메세지를 입력하세요."/>
      </div>
      <div class="Send-Icon" style="float: right;">
        <img @click="MessageSending()" src="@/assets/SendIcon.png" style="vertical-align: middle; padding-right: 10px; padding-top: 10px; cursor: grab;" alt="sendIcon">
      </div>
    </div>
  </div>
</template>


<script>
import Header from "./HeaderLayout.vue";
export default {
  name: 'ChatPage',
  components: {
    Header,
  },
  data(){
    return {
        ChatList : [],
        // sendId, 
        Counseler : 0,
        msg : '',
        lastTime : ''
    }
  },
  methods:{
    ChatData: function() {
      this.$axios.get('http://nexthouse-chat.169.56.100.104.nip.io/nexthouse-chat/adsrMsgAll/100000001')
      .then(res => {
        console.log("채팅 데이터 : " + JSON.stringify(res.data));
        var chat = JSON.stringify(res.data);
        var cData = JSON.parse(chat);
        console.log(cData);

        for(var i=0;i<cData.length;i++){
          var cD = cData[i];
            console.log(cD.sendId)
            this.ChatList.push(cD);
            this.lastTime = cD.msgTime;
        }
      })
      .catch(error => {
        console.log("에러 데이터 : " + error.data);
      });
    },
    CounselData: function() {
      this.$axios.get('http://nexthouse-chat.169.56.100.104.nip.io/nexthouse-chat/curAdsrSel/100000001')
      .then(res => {
        console.log("상담자 데이터: " + JSON.stringify(res.data));
        var counsel = JSON.stringify(res.data);
        var counselD = JSON.parse(counsel);
        console.log(counselD);

        this.Counseler = counselD[0];
        console.log(this.Counseler.adsrNo);
        
      })
      .catch(error => {
        console.log("에러 데이터 : " + error.data);
      });
    },
    MessageSending: function() {
      this.$axios.post('http://nexthouse-chat.169.56.100.104.nip.io/nexthouse-chat/inselAdsr',
        {          
          custNo: '100000001',
          msg: this.msg,
          msgTime: this.lastTime,
          sendId: '100000001'
        }
      )
      .then(res => {
        console.log("message " + JSON.stringify(res.data));
        var msgLast = JSON.stringify(res.data);
        var msgLast2 = JSON.parse(msgLast);
        console.log(msgLast2);

        this.lastTime = msgLast2[0].msgTime;
        this.ChatList.push(msgLast2[0]);
        this.Write();
        this.msg = '';
      })
      .catch(error => {
        console.log("에러 데이터 : " + error.data);
      });
    },
    Write() {

    }
  },

  beforeMount(){
    this.ChatData();
    console.log("ChatData"); 
    this.CounselData();
  }
}

</script>


<style>
/* 폰트 import후 사용 */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;400&display=swap');
/* 헤더 디자인 */

.header {
  text-align: center;
  background-color: white;
  width: 100%;
  height: 44px;
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

.Text-Input{
  float: left;
  width: 100%;
  max-width: calc(100% - 50px);
  padding-left: 10px;
}
.Text-Input input{
  background: transparent;
  border: none;
  outline: none;
  color: #000000;
}

h2, h3, h4, h5{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 100;
  font-size: 16px;
  line-height: 30px;
  color: #000000;
  padding-top: 15px;
}

h6{
  font-family: 'Inter';
  font-style: normal;
  font-size: 12px;
  color:#000000;
}

.button {
  background-color: #FFCC3CCC;
  border: 5px solid #FFCC3C;
  color: black;
  text-align: center;
  border-radius: 5px;
  font-weight: bold;
}
</style>
