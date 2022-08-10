<template>
<nav>
    <div class="v223_56">
      <!-- <div class="v223_60">
        <span class="v223_67"><b>진행중인 계약</b></span>
        <div class="v223_68"></div>
      </div> -->
      <div class="v57_70">
        <span class="v57_77"><b>진행중인 계약</b></span>
        <div class="v57_78"></div>
      </div>


      <div type='button' @click="ToHwakjung()" class="v223_70"></div>
      <div type='button' @click="ToHwakjung()" class="v223_71"></div>
      <div type='button' @click="ToHwakjung()" class="v223_72"></div>
      <div type='button' @click="ToJunyip()" class="v223_73"></div>
      <span class="v223_74"><b>계약서 작성</b></span>
      <span class="v223_75"><b>전입신고</b></span>
      <span class="v223_76"><b>확정일자 신고</b></span>
      <span class="v223_77"><b>보증금 송금</b></span>
      <div class="v223_81"></div>
      <div class="v223_82"></div>
      <div class="v223_83"></div>
      <div class="v223_84"></div>
      <span class="v223_85"><b><u>메인 이동</u></b></span>
    </div>
</nav>
<router-view/>
</template>

<script>
export default {
  name: 'StagingZero',
  props: {
    
  },
  methods: {
    ToHwakjung() {
      this.$router.push('/MyHwakjung');
    },
    ToJunyip() {
      this.$router.push('/MyJunyip');
    }
  }
}
</script>

<style scoped>
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
.v223_56 {
  width: 400px;
  height: 830px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  /* top: 30px; */
  left: 0px;
  overflow: hidden;
}
.v223_60 {
  width: 375px;
  height: 44px;
  /* background: url("../images/v223_60.png"); */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 1px;
  overflow: hidden;
}
.v223_61 {
  width: 375px;
  height: 44px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
}
.v223_62 {
  width: 375px;
  height: 1px;
  background: rgba(238,238,238,1);
  opacity: 1;
  position: absolute;
  top: 43px;
  left: 0px;
  overflow: hidden;
}
.v223_63 {
  width: 15px;
  height: 11px;
  background: url("../images/3_layer.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 16px;
  left: 340px;
  overflow: hidden;
}
.v223_64 {
  width: 1px;
  height: 15px;
  background: rgba(0,0,0,1);
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 15px;
  overflow: hidden;
}
.v223_65 {
  width: 1px;
  height: 15px;
  background: rgba(0,0,0,1);
  opacity: 1;
  position: absolute;
  top: 5px;
  left: 15px;
  overflow: hidden;
}
.v223_66 {
  width: 1px;
  height: 15px;
  background: rgba(0,0,0,1);
  opacity: 1;
  position: absolute;
  top: 10px;
  left: 15px;
  overflow: hidden;
}
.v223_67 {
  width: 170px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 12px;
  left: 45px;
  font-family: Inter;
  font-weight: Regular;
  font-size: 14px;
  opacity: 1;
  text-align: left;
}
.v223_68 {
  width: 12px;
  height: 12px;
  /* background: url("../images/arrow.png"); */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 16px;
  left: 26px;
}
.v223_70 {
  width: 340px;
  height: 52px;
  background: rgba(248,212,89,1);
  opacity: 1;
  position: absolute;
  top: 102px;
  left: 21px;
  border: 4px solid rgba(0,0,0,1);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  box-shadow: 2px 2px 40px rgba(0, 0, 0, 0.07999999821186066);
  overflow: hidden;
}
.v223_71 {
  width: 340px;
  height: 52px;
  background: rgba(248,212,89,1);
  opacity: 1;
  position: absolute;
  top: 242px;
  left: 21px;
  border: 2px solid rgba(0,0,0,1);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  box-shadow: 2px 2px 40px rgba(0, 0, 0, 0.07999999821186066);
}
.v223_72 {
  width: 340px;
  height: 52px;
  background: rgba(248,212,89,1);
  opacity: 1;
  position: absolute;
  top: 382px;
  left: 21px;
  border: 2px solid rgba(0,0,0,1);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  box-shadow: 2px 2px 40px rgba(0, 0, 0, 0.07999999821186066);
  overflow: hidden;
}
.v223_73 {
  width: 340px;
  height: 52px;
  background: rgba(248,212,89,1);
  opacity: 1;
  position: absolute;
  top: 522px;
  left: 21px;
  border: 2px solid rgba(0,0,0,1);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  box-shadow: 2px 2px 40px rgba(0, 0, 0, 0.07999999821186066);
  overflow: hidden;
}
.v223_74 {
  width: 180px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 113px;
  left: 101px;
  font-family: Inter;
  font-weight: Medium;
  font-size: 18px;
  opacity: 1;
  text-align: center;
}
.v223_75 {
  width: 180px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 533px;
  left: 100px;
  font-family: Inter;
  font-weight: Medium;
  font-size: 18px;
  opacity: 1;
  text-align: center;
}
.v223_76 {
  width: 180px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 255px;
  left: 97px;
  font-family: Inter;
  font-weight: Medium;
  font-size: 18px;
  opacity: 1;
  text-align: center;
}
.v223_77 {
  width: 180px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 393px;
  left: 98px;
  font-family: Inter;
  font-weight: Medium;
  font-size: 18px;
  opacity: 1;
  text-align: center;
}
.v223_81 {
  width: 375px;
  height: 90px;
  background: url("../images/navi.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 671px;
  left: 0px;
  overflow: hidden;
}
.v223_82 {
  width: 50px;
  height: 30px;
  background: url("../images/down.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 180px;
  left: 167px;
  overflow: hidden;
}
.v223_83 {
  width: 50px;
  height: 30px;
  background: url("../images/down.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 325px;
  left: 167px;
  overflow: hidden;
}
.v223_84 {
  width: 50px;
  height: 30px;
  background: url("../images/down.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 470px;
  left: 167px;
  overflow: hidden;
}
.v223_85 {
  width: 70px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 623px;
  left: 158px;
  font-family: Inter;
  font-weight: Regular;
  font-size: 14px;
  opacity: 1;
  text-align: left;
}
</style>