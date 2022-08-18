<template>
<head>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<Header style="position: fixed; background-color: white; border-bottom: 0.8px solid #DFDEDE;" title="KB전문가 상담" />
  <div class="contents" style="padding-top:44px; padding-bottom:50px;">
    <!-- <hr class="bold"/> -->
    <div style="position: fixed; background-color: white;  width:100%;border-top: 0.8px solid #DFDEDE; border-bottom: 1px solid #DFDEDE; padding: 10px 0 10px 20px " class="top clear">
      <!-- 상담사 프로필 이미지-->
      <div style="float:left; ">
        <img class="profile" src="@/assets/counselor.jpg" alt="상담사 이미지" />
      </div>
      <!-- 상담사 정보-->
      <div class="right" style="float:left; padding-left: 16px; padding-top:12px; ">
        <div style="font-size:15px;line-height: 1.3;">{{ this.Counseler.adsrNm }} 상담사님</div>
        <span style="font-size:13px; color:#9A9A9A">KB국민은행 {{ this.Counseler.departmentNm }} </span>
        <span class="material-icons" style="font-size:17px; color:#9A9A9A; padding-left:2px;">help_outline</span>
      </div>
    </div>

    <!-- 채팅내역 -->
    <div class="bottom" style="background-color:#FAF8F8;">
      <ul style="padding : 100px 0 16px;">
        <div v-for="(C,index) in ChatList" :key="index">
          <div class="clear" v-if="C.sendId=='100000001'">
            <li class="my chat" style=" float:right;">
            <span class="date">{{"오후"+C.msgTime.substr(10,6)}}</span>
            <span class="text" >{{C.msg}}</span>
            
            </li>
          </div>
          <div v-else>
            <li class="your chat clear" style="float:left">
            <span class="text">{{C.msg}}</span>
            <span class="date">{{"오후"+C.msgTime.substr(10,6)}}</span>
            </li>
          </div>
        </div>
      </ul>
    </div>
  </div>

      <!-- 채팅입력 -->
    <div class="input-wrap clear" style="position: fixed; bottom: 0; height:50px; width: 100%; background-color:white; border-top: 0.5px solid #9A9A9A;">
      <span style="float:left; color:#4372F4; padding:6px;"><i style="font-size:35px;" class="material-icons">add</i></span>
      <span class="Text-Input" ><input @keyup.enter ="MessageSending()" name="user-text" type="text" v-model ="msg" style=" padding-top:18px; " placeholder="메세지를 입력하세요."/></span>
      <span class="Send-Icon" style="float: right; padding-right:5px;">
        <button class="material-icons" style="color:#4372F4;padding-top:5px; font-size:40px;" @click="MessageSending()">play_arrow</button>
      </span>
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
    ChatData: async function() {
      await this.$axios.get('http://nexthouse-chat.169.56.100.104.nip.io/nexthouse-chat/adsrMsgAll/100000001')
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
    CounselData: async function() {
      await this.$axios.get('http://nexthouse-chat.169.56.100.104.nip.io/nexthouse-chat/curAdsrSel/100000001')
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

        for(var i=0; i< msgLast2.length; i++)
        {
          this.lastTime = msgLast2[i].msgTime;
          this.ChatList.push(msgLast2[i]);
          this.Write();
          this.msg = '';
          location.reload();
        }
        // window.scrollTo(0,document.body.scrollHeight)
      })
      .catch(error => {
        console.log("에러 데이터 : " + error.data);
      });
      window.scrollTo(0,document.body.scrollHeight);
      // window.body.scrollTop = window.body.scrollHeight;
    },
    Write() {

    },
  },

  async beforeMount(){
    await this.ChatData();
    console.log("ChatData"); 
    await this.CounselData();
      window.scrollTo(0,document.body.scrollHeight)

  },

}

</script>


<style scoped>
/* 폰트 import후 사용 */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;400&display=swap');
/* 헤더 디자인 */

hr.bold { height: 12px; }
  .chat-date { position: relative; text-align: right;}
  .chat-date > span { position: relative; z-index: 1; display: inline-block; padding : 4px 8px; }
  .chat > span.text { display: inline-block; max-width: 500px; width: auto; padding: 8px 16px; border-radius: 50px;  word-break: break-all; }
  .chat > span.date { font-size: 12px; vertical-align: bottom; }
  .your.chat{float:right; padding:5px;}
  .my.chat { float:left; padding: 5px; }
  .my.chat > span.text { background-color: #E1EBFD; color:black; max-width: 250px;}
  .your.chat > span.text { background-color: white; max-width: 250px; }
  .chat > span.date { display: inline-block; }

.profile{
  border-radius: 70%; 
  width:64px; 
  height:64px;
  box-shadow: 0 0 5px #4372F4; 
}

.Text-Input{
  float: left;
  max-width: calc(100% - 100px);
  padding-left: 2px;
  padding-bottom:2px;
}
.Text-Input input{
  background: transparent;
  border: none;
  outline: none;
  color: #000000;
}

</style>
