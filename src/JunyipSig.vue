<template>
<nav>
<div class="v76_1202">
    <div class="v76_1203">
        <div class="v76_1204"></div>
        <div class="v76_1205">
            <div class="v76_1206"></div>
            <div class="v76_1207">
                <div class="v76_1208"></div>
                <div class="v76_1209"></div>
                <div class="v76_1210"></div>
            </div>
            <div class="v76_1211"></div>
            <div class="v76_1212"></div>
        </div>
    </div>
    <div class="v76_1213"></div>
    <div class="v76_1214"></div>
    <div class="v76_1215">
        <div class="v76_1216"></div>
        <div class="v76_1217">
            <div class="v76_1218">
                <div class="v76_1219">
                    <div class="v76_1220"></div>
                    <div class="v76_1221"></div>
                </div>
            </div>
        </div>
        <span class="v76_1222">전입신고 서명하기</span>
        <div class="v76_1223"></div>
    </div>
    <span class="v76_1224"><b>아래 서명을 기입해주세요.</b></span>
    <span class="v76_1229"><b>전입신고 서명</b></span>
    <div type='button' @click="[handleSaveClick(), goNext()]" class="v76_1230"></div>
    <span class="v76_1231"><b>서명 완료</b></span>
    <!-- 캔버스테스트 -->
    <canvas id="canvasT" class="v76_1232"
        v-on:mousedown="onMouseDown"
        v-on:mousemove="onMouseMove"
        v-on:mouseup="onMouseUp"
        ref = "myCanvas"
        >
        <!-- <div class="v76_1232"></div>  -->
    </canvas>

</div>

</nav>
<!-- <router-view/> -->
</template>



<script>

export default {
  name: 'JunyipSig',
  data(){

    return {
        startX: 0,
        startY: 0,
        isDrawing : false,
        ctx : null,
        canvas : null,
        modelNo : 0,
        status : 0,
        rentNo : 0
    }
  },
  components: {
  },
  methods: {
    // Staging(data) {
    //     localStorage.setItem('no', data.modelNo);
    //     localStorage.setItem('p', data.progress);
    //     localStorage.setItem('rent', data.rentCntrNo);
    //     this.$router.push('/staging');
    // },
    draw(e) {

    if (!this.isDrawing) {
        return;
    }
    
    this.ctx.beginPath(); 
    
    // 3. Starting point
    this.ctx.moveTo(this.startX, this.startY);
    
    // 4. Go point
    this.ctx.lineTo(e.offsetX, e.offsetY);
    this.ctx.stroke();
    
    this.startX = e.offsetX;
    this.startY = e.offsetY;
    },
    onMouseMove(e){
        this.draw(e);
    },
    onMouseDown(e){
    this.isDrawing = true;
    
    this.startX = e.offsetX-20;
    this.startY = e.offsetY;
    },
    onMouseUp(){
        this.isDrawing = false;
    },
    handleSaveClick(){
    const image = this.canvas.toDataURL();
    const link = document.createElement("a");
    link.href = image;
    //link.download = "PaintJS";
    //link.click();
    },
    goNext(){
        localStorage.setItem('no', this.modelNo);
        localStorage.setItem('p', this.status);
        localStorage.setItem('rent', this.rentNo);
        this.$router.push('/MyJunyipEnd');
    }
  },
  beforeMount(){
    this.status = localStorage.getItem('p')
    this.modelNo = localStorage.getItem('no')
    this.rentNo = localStorage.getItem('rent')
  },
  mounted(){
    this.canvas = document.getElementById('canvasT');
    this.ctx = this.canvas.getContext('2d');
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';
    this.ctx.strokeStyle = '#000000';
    this.ctx.lineWidth = 3;
    console.log("mounted")
    console.log(this.canvas);
    console.log(this.ctx)
  }
}


</script>

<style>
  body {
    font-size: 14px;
  }
  .v76_1202 {
    width: 375px;
    height: 761px;
    background: rgba(255,255,255,1);
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 0px;
    overflow: hidden;
  }
  .v76_1204 {
    width: 375px;
    height: 30px;
    background: rgba(255,255,255,1);
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 0px;
    overflow: hidden;
  }
  .v76_1205 {
    width: 375px;
    height: 44px;
    /* background: url("../images/v76_1205."); */
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 30px;
    left: 0px;
    overflow: hidden;
  }
  .v76_1206 {
    width: 375px;
    height: 44px;
    background: rgba(255,255,255,1);
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 0px;
    overflow: hidden;
  }
  .v76_1207 {
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
  .v76_1208 {
    width: 1px;
    height: 15px;
    background: rgba(0,0,0,1);
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 15px;
    overflow: hidden;
  }
  .v76_1209 {
    width: 1px;
    height: 15px;
    background: rgba(0,0,0,1);
    opacity: 1;
    position: absolute;
    top: 5px;
    left: 15px;
    overflow: hidden;
  }
  .v76_1210 {
    width: 1px;
    height: 15px;
    background: rgba(0,0,0,1);
    opacity: 1;
    position: absolute;
    top: 10px;
    left: 15px;
    overflow: hidden;
  }
  .v76_1211 {
    width: 13px;
    height: 13px;
    background: url("../images/arrow.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 15px;
    left: 22px;
  }
  .v76_1212 {
    width: 375px;
    height: 1px;
    background: rgba(238,238,238,1);
    opacity: 1;
    position: absolute;
    top: 43px;
    left: 0px;
    overflow: hidden;
  }
  .v76_1213 {
    width: 375px;
    height: 761px;
    background: rgba(0,0,0,1);
    opacity: 0.30000001192092896;
    position: absolute;
    top: 0px;
    left: 0px;
    overflow: hidden;
  }
  .v76_1214 {
    width: 375px;
    height: 355px;
    background: rgba(255,255,255,1);
    opacity: 1;
    position: absolute;
    top: 406px;
    left: 0px;
    overflow: hidden;
  }
  .v76_1215 {
    width: 375px;
    height: 44px;
    /* background: url("../images/v76_1215.png"); */
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 368px;
    left: 0px;
    overflow: hidden;
  }
  .v76_1216 {
    width: 375px;
    height: 44px;
    background: rgba(255,255,255,1);
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 0px;
    overflow: hidden;
  }
  .v76_1217 {
    width: 17px;
    height: 17px;
    background: url("../images/x.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 18px;
    left: 329px;
    overflow: hidden;
  }
  .v76_1218 {
    width: 17px;
    height: 17px;
    /* background: url("../images/v76_1218.png"); */
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 0px;
    transform: rotate(-45deg);
    overflow: hidden;
  }
  .v76_1219 {
    width: 12px;
    height: 12px;
    /* background: url("../images/v76_1219.png"); */
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 7px;
    left: 6px;
    overflow: hidden;
  }
  .v76_1220 {
    width: 1px;
    height: 16px;
    background: rgba(0,0,0,1);
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 11px;
    overflow: hidden;
  }
  .v76_1221 {
    width: 1px;
    height: 16px;
    background: rgba(0,0,0,1);
    opacity: 1;
    position: absolute;
    top: 11px;
    left: 12px;
    overflow: hidden;
  }
  .v76_1222 {
    width: 145px;
    color: rgba(0,0,0,1);
    position: absolute;
    top: 16px;
    left: 26px;
    /* font-family: Inter; */
    font-weight: Bold;
    font-size: 14px;
    opacity: 1;
    text-align: left;
  }
  .v76_1223 {
    width: 375px;
    height: 1px;
    background: rgba(238,238,238,1);
    opacity: 1;
    position: absolute;
    top: 43px;
    left: 0px;
    overflow: hidden;
  }
  .v76_1224 {
    width: 329px;
    color: rgba(0,0,0,1);
    position: absolute;
    top: 426px;
    left: 26px;
    /* font-family: Inter; */
    font-weight: Semi Bold;
    font-size: 20px;
    opacity: 1;
    text-align: left;
  }
  .v76_1229 {
    width: 140px;
    color: rgba(0,0,0,1);
    position: absolute;
    top: 42px;
    left: 40px;
    /* font-family: Inter; */
    font-weight: Regular;
    font-size: 14px;
    opacity: 1;
    text-align: left;
  }
  .v76_1230 {
    width: 340px;
    height: 53px;
    background: rgba(249,190,32,1);
    opacity: 1;
    position: absolute;
    top: 677px;
    left: 21px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    box-shadow: 2px 2px 40px rgba(0, 0, 0, 0.07999999821186066);
    overflow: hidden;
  }
  .v76_1231 {
    width: 181px;
   color: rgba(255,255,255,1);
    position: absolute;
    top: 690px;
    left: 95px;
    /* font-family: Inter; */
    font-weight: Medium;
    font-size: 18px;
    opacity: 1;
    text-align: center;
    cursor: grab;
  }
  .v76_1232 {
    width: 375px;
    height: 192px;
    background: rgba(229,229,229,1);
    opacity: 1;
    position: absolute;
    top: 469px;
    left: 0px;
    overflow: hidden;
    
  }
  </style>