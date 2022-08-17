<template>
  <div>
    <Header title="계약 진행" />
    <div style=" background-color: #f9f8f8">
      <div style="padding: 30px">
      
        <!-- 1. 전자계약서카드  -->
        <div class="card">
          <h3 style="text-align: left; font-size: 16px; margin: 0px 0px 8px 5px">
            1. 전자계약서
          </h3>
          <div style="padding: 33px 20px 20px;background-color: #ffffff;border-radius: 10px;">
            <p><span style="color: #246990"><b>종이없이 </b></span><b>계약서 작성하기</b></p>
            <p style="font-size: 12.5px; color: #A1A1A2; padding-bottom: 20px; padding-top:9px">
              잃어버리기 쉬운 실물 계약서 대신<br />
              보관과 조회가 편리한 전자계약서를 작성할 수 있어요.
            </p>
            <button id='btn_01' class="btn_on" :class="{btn_end:status>1, btn_yet:status<1}"  type="button" @click="ToEleccontract()" style="display: block;  width: 100%;padding: 16px;border-radius: 10px;">
              작성하기
            </button>
          </div>
        </div>

      <!-- 2. 확정일자 카드 -->
      <div class="card">
          <h3 style="text-align: left; font-size: 16px; margin: 0px 0px 8px 5px">
            2. 확정일자
          </h3>
          <div style="padding: 33px 20px 20px;background-color: #ffffff;border-radius: 10px;">
            <p><span style="color: #246990"><b>방문없이 </b></span><b>확정일자 신고하기</b></p>
            <p style="font-size: 12.5px; color: #A1A1A2; padding-bottom: 20px; padding-top:9px">
              주민센터까지 방문하실 필요 없어요.<br />
              앱을 통해 간편하게 확정일자를 신고해보세요.
            </p>
            <button id='btn_02' class="btn_on" :class="{btn_end:status>2, btn_yet:status<2}"  type="button" @click="ToHwakjung()" style="display: block; width: 100%;padding: 16px;border-radius: 10px;">
              신고하기
            </button>
          </div>
      </div>

      <!-- 3. 보증금 송금 -->
      <div class="card">
          <h3 style="text-align: left; font-size: 16px; margin: 0px 0px 8px 5px">
            3. 보증금 송금
          </h3>
          <div style="padding: 33px 20px 20px;background-color: #ffffff;border-radius: 10px;">
            <p><span style="color: #246990"><b>안전하게 </b></span><b>보증금 송금하기</b></p>
            <p style="font-size: 12.5px; color: #A1A1A2; padding-bottom: 20px; padding-top:9px">
              출금 계좌만 등록하세요.<br />
              잘못된 계좌로 가지 않게 KB국민은행이 도와드릴게요.
            </p>
            <button id='btn_03'  class="btn_on" :class="{btn_end:status>3, btn_yet:status<3}"  type="button" @click="ToBojeong()" style="display: block; width: 100%;padding: 16px;border-radius: 10px;">
              송금하기
            </button>
          </div>
      </div>

      <!-- 4. 전입신고 -->
      <div class="card">
          <h3 style="text-align: left; font-size: 16px; margin: 0px 0px 8px 5px">
            4. 전입신고
          </h3>
          <div style="padding: 33px 20px 20px;background-color: #ffffff;border-radius: 10px;">
            <p><span style="color: #246990"><b>방문없이 </b></span><b>전입일자 신고하기</b></p>
            <p style="font-size: 12.5px; color: #A1A1A2; padding-bottom: 20px; padding-top:9px">
              주민센터까지 방문하실 필요 없어요.<br />
              앱을 통해 간편하게 전입일자를 신고해보세요.
            </p>
            <button id='btn_04' class="btn_on" :class="{btn_end:status>4, btn_yet:status<4}"  type="button" @click="ToJunyip()" style="display: block; width: 100%;padding: 16px;border-radius: 10px;">
              신고하기
            </button>
          </div>
      </div>

      </div>
    </div>
  </div>
</template>

<script>
// import { ResolveLoader } from "webpack-chain";
import Header from "./HeaderLayout.vue";
export default {
  name: "NewStaging",
  data(){
    return {
      modelNo : 0,
      status : 0,
      rentNo : 0,
      btn1 : 0,
      btn2 : 0,
      btn3 : 0,
      btn4 : 0
    }
  },
  components: {
    Header,
  },
  methods: {
    ToHwakjung() {
      if(this.status==2)
      {
        localStorage.setItem('no', this.modelNo);
        localStorage.setItem('p', this.status);
        localStorage.setItem('rent', this.rentNo);
        this.$router.push('/MyHwakjung');
      }
    },
    ToBojeong() {
      if(this.status==3)
      {
        localStorage.setItem('no', this.modelNo);
        localStorage.setItem('p', this.status);
        localStorage.setItem('rent', this.rentNo);
        this.$router.push('/MyBojeong')
      }
    },
    ToJunyip() {
      if(this.status==4)
      {
        localStorage.setItem('no', this.modelNo);
        localStorage.setItem('p', this.status);
        localStorage.setItem('rent', this.rentNo);
        this.$router.push('/MyJunyip');
      }

    },
    ToEleccontract() {
      if(this.status==1)
      {
        localStorage.setItem('no', this.modelNo);
        localStorage.setItem('p', this.status);
        localStorage.setItem('rent', this.rentNo);
        this.$router.push('/Eleccontract');
      }
    },
    goBack() {
      this.$router.go(-1);
    }
  },
  beforeMount(){
    //this.status = 2
    this.status = localStorage.getItem('p')
    this.modelNo = localStorage.getItem('no')
    this.rentNo = localStorage.getItem('rent')
    console.log(this.status+" is status");

  },
  mounted(){
    this.btn1 = document.getElementById('btn_01');
    this.btn2 = document.getElementById('btn_02');
    this.btn3 = document.getElementById('btn_03');
    this.btn4 = document.getElementById('btn_04');
    
    if(this.status==2)
    {
        this.btn1.innerText = "완료";
    }
    else if(this.status==3)
    {
        this.btn1.innerText = "완료";
        this.btn2.innerText = "완료";
    }
    else if(this.status==4)
    {
        this.btn1.innerText = "완료";
        this.btn2.innerText = "완료";
        this.btn3.innerText = "완료";
    }
    else if(this.status==5)
    {   
        this.btn1.innerText = "완료";
        this.btn2.innerText = "완료";
        this.btn3.innerText = "완료";
        this.btn4.innerText = "완료";
    }
  }
};
</script>

<style scoped>
.card {
  position: relative;
}
.card + .card {
  padding-top: 60px;
}
.card + .card::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 20px;
  display: block;
  width: 3px;
  height: 30px;
  background-color: #DDDCDC;
  transform: translateX(-50%);
}
.card + .card::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 38px;
  display: block;
  width: 10px;
  height: 10px;
  transform: translateX(-50%) rotate(135deg);
  border-width: 3px 3px 0 0;
  border-color: #DDDCDC;
  border-style: solid;
}

.btn_on {
    background-color: #4372F4;
}

.btn_end {
    background-color: #A6A6A6;
}

.btn_yet {
    background-color: #E0EBFF;

}
</style>