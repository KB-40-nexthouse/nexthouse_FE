<template>
<!-- <nav>
    
<div class="v231_117">
    <div class="v231_118"></div>
    <div class="v231_119"></div>  
    <div class="v231_122">
        <div class="v231_123"></div>
        <div class="v231_124">
            <div class="v231_125"></div>
            <div class="v231_126"></div>
            <div class="v231_127"></div>
        </div>
        <span class="v231_128"><b>보증금 송금</b></span>
        <div class="v231_129"></div>
        <div class="v231_130"></div>
    </div>
    
    <span class="v231_131"><b>계약 일자  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ this.depositInfo.cntrDt }}</b></span>
    <span class="v231_132"><b>송금 금액 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{ this.depositInfo.price }}</b></span>
    <span class="v231_133"><b>총 금액&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  {{ this.depositInfo.price }}</b></span>
    <span class="v231_134"></span>
    <span class="v231_140"><b>은행 가상 계좌 &nbsp;&nbsp;&nbsp;&nbsp; {{ this.depositInfo.BankNm }} {{ this.depositInfo.acctNo }}</b></span>
    <div class="v231_139"></div>
    <span class="v231_142"><b>실행 예정 대출&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 100,000,000</b></span>

    <div class="v231_143">
        <div type='button' @click="MoneySending" class="v231_144"></div>
        <span class="v231_145"><b>보증금 송금</b></span>
    </div>
</div>


</nav>
<router-view/> -->
<div>
    <div>
        <p style="padding: 80px 0; font-size: 24px; font-weight: 600;">총금액 : {{ this.depositInfo.price }}<span>원</span></p> 
    </div>
    <div style="padding: 0 24px;">
        <div style="background-color: lightgray; border-radius: 4px; margin-bottom: 8px; padding: 4px 8px; text-align: left;">
            <select name="" id="" style="background-color: transparent; border: 0 none; width: 100%;">
                <option value="">은행가상계좌 {{ this.depositInfo.BankNm }} {{ this.depositInfo.acctNo }}</option>
            </select>
        </div>
        <div style="border-radius: 4px; border: 1px solid lightgray; overflow: hidden; padding : 4px 8px; margin-bottom: 8px;">
            <div style="float: left; width: 150px; text-align: left;">송금 금액</div>
            <div style="float: right; width: calc(100% - 150px); text-align: right;">{{this.depositInfo.price}}</div>
        </div>
        <div style="border-radius: 4px; border: 1px solid lightgray; overflow: hidden; padding : 4px 8px; margin-bottom: 8px;">
            <div style="float: left; width: 150px; text-align: left;">실행 예정 대출</div>
            <div style="float: right; width: calc(100% - 150px); text-align: right;"><input type="text" name="" id="" placeholder="100,000,000" style="display: inline-block; border: 0 none; text-align: right; width: 100%;"/></div>
        </div>
        <div style="border-radius: 4px; border: 1px solid lightgray; overflow: hidden; padding : 4px 8px; margin-bottom: 8px;">
            <div style="float: left; width: 150px; text-align: left;">계약 일자</div>
            <div style="float: right; width: calc(100% - 150px); text-align: right;">
            <!-- <input type="text" name="" id="" placeholder="날짜" style="display: inline-block; border: 0 none; text-align: right; width: 100%;"/> -->
            {{ this.depositInfo.cntrDt }}
            </div>
        </div>
        <!-- <div>
            <button></button>
            <a href="#"></a>
        </div> -->
    </div>
    <div style="position: fixed; left:0; bottom:0; padding: 0 24px 16px; width: 100%">
        <button type="button"  @click="MoneySending" style="display: block; width:100%; padding: 16px 0; background-color: yellow; border-radius: 8px;">보증금 송금</button>
    </div>
</div>
</template>

<script>
export default {
  name: 'MyBojeong',
    data(){
    return {
        checked : false,
        modelNo : 0,
        status : 0,
        rentNo : 0,
        depositInfo : 0
    }
  },
  props: {
    
  },
  methods: {
    MoneySending() {
        localStorage.setItem('no', this.modelNo);
        localStorage.setItem('p', this.status);
        localStorage.setItem('rent', this.rentNo);
        this.$router.push('/MyBojeongEnd');
    },
    SendingData: async function() {
      await this.$axios.get('http://nexthouse.169.56.100.104.nip.io/nexthouse/RentDepoSndInf/100000001')
      .then(res => {
        console.log("보증금 데이터 : " + JSON.stringify(res.data));
        var depo = JSON.stringify(res.data);
        var deposit = JSON.parse(depo);
        console.log(deposit);
        this.depositInfo = deposit[0];
        console.log(this.depositInfo.price)
      })
      .catch(error => {
        console.log("에러 데이터 : " + error.data);
      });
    },
  },
    beforeMount(){
      this.status = localStorage.getItem('p')
      this.modelNo = localStorage.getItem('no')
      this.rentNo = localStorage.getItem('rent')
      this.SendingData()
  }
}
</script>

<style scoped>
.v231_117 {
    width: 400px;
    height: 830px;
    background: rgba(255,255,255,1);
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 0px;
    overflow: hidden;
}
.v231_118 {
    width: 400px;
    height: 100px;
    background: rgba(229,229,229,1);
    opacity: 1;
    position: absolute;
    top: 227px;
    left: 1px;
}
.v231_119 {
    width: 400px;
    height: 139px;
    background: rgba(229,229,229,1);
    opacity: 1;
    position: absolute;
    top: 74px;
    left: 1px;
}
.v231_122 {
    width: 387px;
    height: 48px;
    /* background: url("../images/v231_122.png"); */
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 26px;
    left: 0px;
    overflow: hidden;
}
.v231_123 {
    width: 387px;
    height: 44px;
    background: rgba(255,255,255,1);
    opacity: 1;
    position: absolute;
    top: 4px;
    left: 0px;
    overflow: hidden;
}
.v231_124 {
    width: 15px;
    height: 11px;
    /* background: url("../images/3_layer.png"); */
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 7px;
    left: 350px;
    overflow: hidden;
}
.v231_125 {
    width: 1px;
    height: 15px;
    background: rgba(0,0,0,1);
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 15px;
    overflow: hidden;
}
.v231_126 {
    width: 1px;
    height: 15px;
    background: rgba(0,0,0,1);
    opacity: 1;
    position: absolute;
    top: 5px;
    left: 15px;
    overflow: hidden;
}
.v231_127 {
    width: 1px;
    height: 15px;
    background: rgba(0,0,0,1);
    opacity: 1;
    position: absolute;
    top: 10px;
    left: 15px;
    overflow: hidden;
}
.v231_128 {
    width: 206px;
    color: rgba(0,0,0,1);
    position: absolute;
    top: 0px;
    left: 48px;
    font-family: Inter;
    font-weight: Regular;
    font-size: 17px;
    opacity: 1;
    text-align: left;
}
.v231_129 {
    width: 12px;
    height: 12px;
    background: url("../images/arrow.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 5px;
    left: 26px;
}
.v231_130 {
    width: 387px;
    height: 1px;
    background: rgba(238,238,238,1);
    opacity: 1;
    position: absolute;
    top: 47px;
    left: 0px;
    overflow: hidden;
}
.v231_131 {
    width: 329px;
    color: rgba(0,0,0,1);
    position: absolute;
    top: 364px;
    left: 32px;
    font-family: Inter;
    font-weight: Semi Bold;
    font-size: 20px;
    opacity: 1;
    text-align: left;
}
.v231_132 {
    width: 329px;
    color: rgba(0,0,0,1);
    position: absolute;
    top: 164px;
    left: 26px;
    font-family: Inter;
    font-weight: Semi Bold;
    font-size: 20px;
    opacity: 1;
    text-align: left;
}
.v231_133 {
    width: 329px;
    color: rgba(0,0,0,1);
    position: absolute;
    top: 397px;
    left: 33px;
    font-family: Inter;
    font-weight: Semi Bold;
    font-size: 20px;
    opacity: 1;
    text-align: left;
}
.v231_134 {
    width: 310px;
    color: rgba(158,158,158,1);
    position: absolute;
    top: 592px;
    left: 32px;
    font-family: Inter;
    font-weight: Regular;
    font-size: 15px;
    opacity: 1;
    text-align: left;
}
.v231_140 {
    width: 366px;
    color: rgba(0,0,0,1);
    position: absolute;
    top: 94px;
    left: 26px;
    font-family: Inter;
    font-weight: Semi Bold;
    font-size: 20px;
    opacity: 1;
    text-align: left;
}
.v231_139 {
    width: 375px;
    /* background: url("../images/v231_139.png"); */
    opacity: 1;
    position: absolute;
    top: 142px;
    left: 6px;
    border: 1px solid rgba(221,221,221,1);
}
.v231_142 {
    width: 329px;
    color: rgba(0,0,0,1);
    position: absolute;
    top: 263px;
    left: 26px;
    font-family: Inter;
    font-weight: Semi Bold;
    font-size: 20px;
    opacity: 1;
    text-align: left;
}
.v231_143 {
    width: 400px;
    height: 62px;
    /* background: url("../images/v231_143.png"); */
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 706px;
    left: 1px;
    overflow: hidden;
}
.v231_144 {
    width: 400px;
    height: 62px;
    background: rgba(249,190,32,1);
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 0px;
    overflow: hidden;
}
.v231_145 {
    width: 173px;
    color: rgba(255,255,255,1);
    position: absolute;
    top: 18px;
    left: 106px;
    font-family: Inter;
    font-weight: Semi Bold;
    font-size: 18px;
    opacity: 1;
    text-align: center;
}
</style>