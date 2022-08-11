<template>
  <!--Header-->
  <div class="header" >
    <h2 style="float: left;">
        &nbsp; &lt; &nbsp; KB 전문가 상담
    </h2>
    <div class="" style="float: right; padding-top: 15px; padding-right: 10px">
      <img src="@/assets/hamResized.png" alt="menuIcon">
    </div>
  </div>
  <div class="contents">
    <!-- <hr class="bold"/> -->
    <p class="chat-date"></p>
    <div class="top clear">
      <!-- 상담사 프로필 이미지-->
      <div class="left" style="float:left; padding-top:5px;">
        <img src="@/assets/profileImg.png" alt="상담사 이미지" />
      </div>
      <!-- 상담사 정보-->
      <div class="right" style="float:left; padding-left: 10px;">
        <h3>상담사 김민정</h3>
        <div style="padding-top:10px;">
          <h6>&#8226; KB국민은행 부동산금융지원부<br></h6>
          <h6>&#8226; 12회 공인중개사, 부동산업계 경력 20년<br></h6>
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
        <li class="my chat clear" style="float:right">
          <div class="date">오후 2:59</div>
          <div class="text">짧을 땐 괜찮아!</div>
        </li>
        <li class="your chat clear" style="float:left">
          <div class="text">텍스트가 엄청나게 길면 문제가 생기네! 왜 그럴까?</div>
          <div class="date">오후 2:59</div>
        </li>
      </ul>
      <ul style="padding : 0 16px;">
        <li class="my chat clear" style="float:right">
          <div class="date">오후 2:59</div>
          <div class="text">너는 괜찮은데, 내 쪽에서 텍스트가 길면 문제가 발생하는 것 같아!</div>
        </li>
        <li class="your chat clear" style="float:left">
          <div class="text">이걸 어떻게 해결할 수 있을까?</div>
          <div class="date">오후 2:59</div>
        </li>
      </ul>
    </div>
    <!-- 채팅입력 -->
    <div class="input-wrap clear" style="position: absolute; bottom: 0; width: 100%; padding-bottom:16px;">
    <p class="chat-date"></p>
      <div class="Text-Input">
        <input name="user-text" type="text" style="width:100%; padding-top:10px;" placeholder="메세지를 입력하세요."/>
      </div>
      <div class="Send-Icon" style="float: right;">
        <img src="@/assets/SendIcon.png" style="vertical-align: middle; padding-right: 10px; padding-top: 10px;" alt="sendIcon">
      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: 'ChatPage',
  components: {
  },
  methods:{

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
