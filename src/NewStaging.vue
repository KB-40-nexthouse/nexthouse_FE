<template>
  <Header title="계약 진행" />
  <div style=" background-color: #f9f8f8">
    <div style="padding: 30px">
    
      <!-- 1. 전자계약서카드  -->
      <div class="card">
        <h3 style="text-align: left; font-size: 16px; margin: 0px 0px 8px 5px">
          1. 전자계약서
        </h3>
        <div style="padding: 33px 20px 20px;background-color: #ffffff;border-radius: 10px;">
          <p><span style="color: #246990"><b>카드없이 </b></span><b>현금 출금하기</b></p>
          <p style="font-size: 12.5px; color: #A1A1A2; padding-bottom: 20px; padding-top:9px">
            출금 계좌만 등록하세요.<br />
            가까운 ATM에서 현금을 출금할 수 있습니다.
          </p>
          <button id='btn_01' class="btn_on" :class="{btn_end:status>1}"  type="button" @click="ToEleccontract()" style="display: block;  width: 100%;padding: 16px;border-radius: 10px;">
            사용하기
          </button>
        </div>
      </div>

    <!-- 2. 확정일자 카드 -->
    <div class="card">
        <h3 style="text-align: left; font-size: 16px; margin: 0px 0px 8px 5px">
          2. 확정일자
        </h3>
        <div style="padding: 33px 20px 20px;background-color: #ffffff;border-radius: 10px;">
          <p><span style="color: #246990"><b>카드없이 </b></span><b>현금 출금하기</b></p>
          <p style="font-size: 12.5px; color: #A1A1A2; padding-bottom: 20px; padding-top:9px">
            출금 계좌만 등록하세요.<br />
            가까운 ATM에서 현금을 출금할 수 있습니다.
          </p>
          <button id='btn_02' class="btn_on" :class="{btn_end:status>2}"  type="button" @click="ToHwakjung()" style="display: block; width: 100%;padding: 16px;border-radius: 10px;">
            사용하기
          </button>
        </div>
    </div>

    <!-- 3. 보증금 송금 -->
    <div class="card">
        <h3 style="text-align: left; font-size: 16px; margin: 0px 0px 8px 5px">
          3. 보증금 송금
        </h3>
        <div style="padding: 33px 20px 20px;background-color: #ffffff;border-radius: 10px;">
          <p><span style="color: #246990"><b>카드없이 </b></span><b>현금 출금하기</b></p>
          <p style="font-size: 12.5px; color: #A1A1A2; padding-bottom: 20px; padding-top:9px">
            출금 계좌만 등록하세요.<br />
            가까운 ATM에서 현금을 출금할 수 있습니다.
          </p>
          <button id='btn_03'  class="btn_on" :class="{btn_end:status>3}"  type="button" @click="ToBojeong()" style="display: block; width: 100%;padding: 16px;border-radius: 10px;">
            사용하기
          </button>
        </div>
    </div>

    <!-- 4. 전입신고 -->
    <div class="card">
        <h3 style="text-align: left; font-size: 16px; margin: 0px 0px 8px 5px">
          4. 전입신고
        </h3>
        <div style="padding: 33px 20px 20px;background-color: #ffffff;border-radius: 10px;">
          <p><span style="color: #246990"><b>카드없이 </b></span><b>현금 출금하기</b></p>
          <p style="font-size: 12.5px; color: #A1A1A2; padding-bottom: 20px; padding-top:9px">
            출금 계좌만 등록하세요.<br />
            가까운 ATM에서 현금을 출금할 수 있습니다.
          </p>
          <button id='btn_04' class="btn_on" :class="{btn_end:status>4}"  type="button" @click="ToJunyip()" style="display: block; width: 100%;padding: 16px;border-radius: 10px;">
            사용하기
          </button>
        </div>
    </div>

    </div>
  </div>
</template>

<script>
import Header from "./HeaderLayout.vue";
export default {
  name: "NewStaging",
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
    this.status = 2
    // this.status = localStorage.getItem('p')
    this.modelNo = localStorage.getItem('no')
    this.rentNo = localStorage.getItem('rent')
    console.log(this.status+" is status");
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
    background-color: #FAE34C;
}

.btn_end {
    background-color: #A6A6A6;
}

.btn_yet {
    background-color: #FFF08E;

}
</style>