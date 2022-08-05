<template>
<div>
  <h1>최상위 app 컴포넌트</h1>
  <HelloWorld msg="Welcome to Your Vue.js App"/>

  <div class="v57_66">
    <div class="v57_70">
      <div class="v57_71"></div>
      <div class="v57_72"></div>
      <span class="v57_77"><b>임대차 계약 관리</b></span>
      <div class="v57_78"></div>
    </div>
    <div class="v57_91"></div>
    <span class="v57_114"><b>찜 목록</b></span>
    <span class="v57_171"><b>종료된 계약</b></span>
    <div class="v57_132">
      <div class="v57_50">
        <div class="v57_51">
        <div class="v57_52"></div>
        </div>
      </div>

      <div class="v57_131">
        <div class="v57_125"></div>
        <div class="v57_126"></div>

        <span class="v57_188">진행 상태 확인</span>
        <div class="v57_129">
          <span class="v57_124">300,000,000원</span>
          <span class="v57_123">서울특별시 도봉구 천국아파트 101동</span>
        </div>
      </div>
      <div class="v103_74"></div>
    </div>

    <div class="v57_144">
      <div class="v57_145">
        <div class="v57_146">
          <div class="v57_147"></div>
        </div>
      </div>

      <div class="v57_148">
        <div class="v57_149"></div>
        <div class="v57_150"></div>
        <span class="v57_151">계약 진행</span>
        
        <div class="v57_152">
          <span class="v57_153">450,000,000원</span>
          <span class="v57_156">서울특별시 강북구 A아파트 103동</span>
        </div>
        
        <div class="v206_3"></div>
      </div>
      
      <div class="v103_77"></div>
    </div>
    
    <div class="v206_6">
      <div class="v206_7">
        <div class="v206_8">
          <div class="v206_9"></div>
        </div>
      </div>
      <div class="v206_10">
        <div class="v206_11"></div>
        <div class="v206_12"></div>
        <span class="v206_13">계약 진행</span>
        <div class="v206_14">
          <span class="v206_15">450,000,000원</span>
          <span class="v206_16">서울특별시 강북구 B아파트 103동</span>
        </div>
        <div class="v206_17"></div>
      </div>
      
      <div class="v206_18"></div>
    </div>
    
    <div class="v206_19">
      <div class="v206_20">
        <div class="v206_21">
          <div class="v206_22"></div>
        </div>
      </div>
      <div class="v206_23">
        <div class="v206_24"></div>
        <div class="v206_25"></div>
        <span class="v206_26">전자계약서 확인</span>
        <div class="v206_27">
          <span class="v206_28">450,000,000원</span>
          <span class="v206_29">서울특별시 강북구 C아파트 103동</span>
        </div>
        <div class="v206_30"></div>
      </div>
      
      <div class="v206_31"></div>
    </div>
    
    <span class="v57_170"><b>진행중인 계약</b></span>
    <div class="v60_22">
      <div class="v60_23"></div>
      <div class="v60_24"></div>
      <div class="v60_25"></div>
    </div>
    <div class="v107_2">
      <div class="v86_67"></div>
    </div>
  </div>
</div>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
  /* 반응형 최대크기 */
  #app 
  { 
    margin:0 auto; 
    width:350px;
    height:650px;
    text-align:center; 
    background-color: #ffffff;
  }
  
  body
  {
    background-color: #000000dc;
  }



.v57_66 {
  width: 376px;
  height: 791px;
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
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 1px;
  overflow: hidden;
}
.v57_71 {
  width: 371px;
  height: 72px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
}
.v57_72 {
  width: 371px;
  height: 1px;
  background: rgba(238,238,238,1);
  opacity: 1;
  position: absolute;
  top: 70px;
  left: 0px;
  overflow: hidden;
}
.v57_77 {
  width: 168px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 41px;
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
  /* background: url("../images/arrow.png"); */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 41px;
  left: 18px;
}
.v57_91 {
  width: 375px;
  height: 90px;
  /* background: url("../images/navi.png"); */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 701px;
  left: 1px;
  overflow: hidden;
}
.v57_114 {
  width: 329px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 220px;
  left: 12px;
  font-family: Inter;
  font-weight: Semi Bold;
  font-size: 20px;
  opacity: 1;
  text-align: left;
}
.v57_171 {
  width: 329px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 472px;
  left: 12px;
  font-family: Inter;
  font-weight: Semi Bold;
  font-size: 20px;
  opacity: 1;
  text-align: left;
}
.v57_132 {
  width: 374px;
  height: 108px;
  /* background: url("../images/v57_132.png"); */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 112px;
  left: 0px;
  overflow: hidden;
}
.v57_50 {
  width: 374px;
  height: 108px;
  /* background: url("../images/v57_50.png"); */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
}
.v57_51 {
  width: 374px;
  height: 108px;
  /* background: url("../images?/home.png"); */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
}
.v57_52 {
  width: 374px;
  height: 108px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  border: 1px solid rgba(204,204,204,1);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  overflow: hidden;
}
.v57_131 {
  width: 290px;
  height: 93px;
  /* background: url("../images/v57_131.png"); */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 7px;
  left: 83px;
  overflow: hidden;
}
.v57_125 {
  width: 251px;
  /* background: url("../images/v57_125.png"); */
  opacity: 1;
  position: absolute;
  top: 93px;
  left: 2px;
  border: 1px solid rgba(204,204,204,1);
}
.v57_126 {
  width: 124px;
  height: 25px;
  background: rgba(238,238,238,1);
  opacity: 1;
  position: absolute;
  top: 1px;
  left: 164px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  overflow: hidden;
}
.v57_188 {
  width: 124px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 0px;
  left: 166px;
  font-family: Inter;
  font-weight: Medium;
  font-size: 14px;
  opacity: 1;
  text-align: center;
}
.v57_129 {
  width: 264px;
  height: 61px;
  /* background: url("../images/v57_129.png"); */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 32px;
  left: 0px;
  overflow: hidden;
}
.v57_124 {
  width: 145px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 40px;
  left: 0px;
  font-family: Inter;
  font-weight: Regular;
  opacity: 1;
  text-align: left;
}
.v57_123 {
  width: 263px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 0px;
  left: 1px;
  font-family: Inter;
  font-weight: Medium;
  font-size: 16px;
  opacity: 1;
  text-align: left;
}
.v103_74 {
  width: 61px;
  height: 49px;
  background: url("../images/home.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 39px;
  left: 6px;
  overflow: hidden;
}
.v57_144 {
  width: 374px;
  height: 120px;
  /* background: url("../images/v57_144.png"); */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 256px;
  left: 2px;
  overflow: hidden;
}
.v57_145 {
  width: 374px;
  height: 108px;
  /* background: url("../images/v57_145.png"); */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
}
.v57_146 {
  width: 374px;
  height: 108px;
  /* background: url("../images/v57_146.png"); */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
}
.v57_147 {
  width: 374px;
  height: 108px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  border: 1px solid rgba(204,204,204,1);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  overflow: hidden;
}
.v57_148 {
  width: 289px;
  height: 113px;
  /* background: url("../images/v57_148.png"); */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 7px;
  left: 82px;
  overflow: hidden;
}
.v57_149 {
  width: 251px;
  /* background: url("../images/v57_149.png"); */
  opacity: 1;
  position: absolute;
  top: 93px;
  left: 3px;
  border: 1px solid rgba(204,204,204,1);
}
.v57_150 {
  width: 124px;
  height: 25px;
  background: rgba(238,238,238,1);
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 163px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  overflow: hidden;
}
.v57_151 {
  width: 124px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 0px;
  left: 165px;
  font-family: Inter;
  font-weight: Medium;
  font-size: 14px;
  opacity: 1;
  text-align: center;
}
.v57_152 {
  width: 263px;
  height: 61px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 32px;
  left: 0px;
  overflow: hidden;
}
.v57_153 {
  width: 145px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 27px;
  left: 1px;
  font-family: Inter;
  font-weight: Regular;
  opacity: 1;
  text-align: left;
}
.v57_156 {
  width: 263px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 0px;
  left: 0px;
  font-family: Inter;
  font-weight: Medium;
  font-size: 16px;
  opacity: 1;
  text-align: left;
}
.v206_3 {
  width: 124px;
  height: 25px;
  opacity: 1;
  position: absolute;
  top: 88px;
  left: 163px;
}
.v103_77 {
  width: 61px;
  height: 49px;
  background: url("../images/home.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 43px;
  left: 4px;
  overflow: hidden;
}
.v206_6 {
  width: 374px;
  height: 120px;
  /* background: url("../images/v206_6.png"); */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 364px;
  left: 2px;
  overflow: hidden;
}
.v206_7 {
  width: 374px;
  height: 108px;
  /* background: url("../images/v206_7.png"); */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
}
.v206_8 {
  width: 374px;
  height: 108px;
  /* background: url("../images/v206_8.png"); */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
}
.v206_9 {
  width: 374px;
  height: 108px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  border: 1px solid rgba(204,204,204,1);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  overflow: hidden;
}
.v206_10 {
  width: 289px;
  height: 113px;
  /* background: url("../images/v206_10.png"); */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 7px;
  left: 82px;
  overflow: hidden;
}
.v206_11 {
  width: 251px;
  /* background: url("../images/v206_11.png"); */
  opacity: 1;
  position: absolute;
  top: 93px;
  left: 3px;
  border: 1px solid rgba(204,204,204,1);
}
.v206_12 {
  width: 124px;
  height: 25px;
  background: rgba(238,238,238,1);
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 163px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  overflow: hidden;
}
.v206_13 {
  width: 124px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 0px;
  left: 165px;
  font-family: Inter;
  font-weight: Medium;
  font-size: 14px;
  opacity: 1;
  text-align: center;
}
.v206_14 {
  width: 263px;
  height: 61px;
  /* background: url("../images/v206_14.png"); */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 32px;
  left: 0px;
  overflow: hidden;
}
.v206_15 {
  width: 145px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 27px;
  left: 1px;
  font-family: Inter;
  font-weight: Regular;
  opacity: 1;
  text-align: left;
}
.v206_16 {
  width: 263px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 0px;
  left: 0px;
  font-family: Inter;
  font-weight: Medium;
  font-size: 16px;
  opacity: 1;
  text-align: left;
}
.v206_17 {
  width: 124px;
  height: 25px;
  /* background: url("../images/v206_17.png"); */
  opacity: 1;
  position: absolute;
  top: 88px;
  left: 163px;
}
.v206_18 {
  width: 61px;
  height: 49px;
  background: url("../images/home.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 43px;
  left: 4px;
  overflow: hidden;
}
.v206_19 {
  width: 374px;
  height: 120px;
  /* background: url("../images/v206_19.png"); */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 509px;
  left: 2px;
  overflow: hidden;
}
.v206_20 {
  width: 374px;
  height: 108px;
  /* background: url("../images/v206_20.png"); */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
}
.v206_21 {
  width: 374px;
  height: 108px;
  /* background: url("../images/v206_21.png"); */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
}
.v206_22 {
  width: 374px;
  height: 108px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  border: 1px solid rgba(204,204,204,1);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  overflow: hidden;
}
.v206_23 {
  width: 289px;
  height: 113px;
  /* background: url("../images/v206_23.png"); */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 7px;
  left: 82px;
  overflow: hidden;
}
.v206_24 {
  width: 251px;
  /* background: url("../images/v206_24.png"); */
  opacity: 1;
  position: absolute;
  top: 93px;
  left: 3px;
  border: 1px solid rgba(204,204,204,1);
}
.v206_25 {
  width: 124px;
  height: 25px;
  background: rgba(238,238,238,1);
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 163px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  overflow: hidden;
}
.v206_26 {
  width: 124px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 0px;
  left: 165px;
  font-family: Inter;
  font-weight: Medium;
  font-size: 14px;
  opacity: 1;
  text-align: center;
}
.v206_27 {
  width: 263px;
  height: 61px;
  /* background: url("../images/v206_27.png"); */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 32px;
  left: 0px;
  overflow: hidden;
}
.v206_28 {
  width: 145px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 27px;
  left: 1px;
  font-family: Inter;
  font-weight: Regular;
  opacity: 1;
  text-align: left;
}
.v206_29 {
  width: 263px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 0px;
  left: 0px;
  font-family: Inter;
  font-weight: Medium;
  font-size: 16px;
  opacity: 1;
  text-align: left;
}
.v206_30 {
  width: 124px;
  height: 25px;
  /* background: url("../images/v206_30.png"); */
  opacity: 1;
  position: absolute;
  top: 88px;
  left: 163px;
}
.v206_31 {
  width: 61px;
  height: 49px;
  background: url("../images/home.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 43px;
  left: 4px;
  overflow: hidden;
}
.v57_170 {
  width: 329px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 76px;
  left: 9px;
  font-family: Inter;
  font-weight: Semi Bold;
  font-size: 20px;
  opacity: 1;
  text-align: left;
}
.v60_22 {
  width: 15px;
  height: 11px;
  /* background: url("../images/v60_22.png"); */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 45px;
  left: 341px;
  overflow: hidden;
}
.v60_23 {
  width: 1px;
  height: 15px;
  background: rgba(0,0,0,1);
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 15px;
  overflow: hidden;
}
.v60_24 {
  width: 1px;
  height: 15px;
  background: rgba(0,0,0,1);
  opacity: 1;
  position: absolute;
  top: 5px;
  left: 15px;
  overflow: hidden;
}
.v60_25 {
  width: 1px;
  height: 15px;
  background: rgba(0,0,0,1);
  opacity: 1;
  position: absolute;
  top: 10px;
  left: 15px;
  overflow: hidden;
}
.v107_2 {
  width: 79px;
  height: 85px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 586px;
  left: 286px;
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
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
}

</style>
