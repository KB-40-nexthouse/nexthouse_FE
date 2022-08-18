<template>
<div>
    <Header title="전자계약서 확인" style="background-color:#B3B3B4;" />
    <div class="contents"></div>
    <div class="sign">
          <div class="signText1">
            <b>전자계약서 서명하기</b>
            <button class="close" @click="closedButton()"></button>
          </div>
          <div class="signText2">아래 서명을 기입해주세요.</div>
          
    </div>
    <canvas id="canvasT"  class="canvasClass"
            v-bind:ontouchstart="touchStart"
            v-bind:ontouchmove="touchMove"
            v-bind:ontouchend="touchEnd"
            ref = "myCanvas">
    </canvas>
    <div class="fixed_button" >
      <button type="button" @click="handleSaveClick()" >다음</button>
    </div>
</div>
</template>
<script>
 
import Header from "./HeaderLayout.vue";
export default {
  name: 'ContractSig',
  data(){

    return {
        startX: 0,
        startY: 0,
        isDrawing : false,
        ctx : null,
        canvas : null,
        modelNo : 0,
        status : 2,
        rentNo : 0,
        buttoncolor: false,
    }
  },
  components: {
    Header
  },
  methods: {
    closedButton(){
      this.$router.go(-1);
    },
    draw(e) {
      if (!this.isDrawing) {
        this.ctx.beginPath();
      }

      
      console.log(" e :: ", e.offsetX, " , ", e.offsetY);
      // 3. Starting point
      this.ctx.moveTo(this.startX, this.startY);

      // 4. Go point
      this.ctx.lineTo(e.offsetX, e.offsetY);
      this.ctx.stroke();

      this.startX = e.offsetX;
      this.startY = e.offsetY;
    },
    getTouchPos(e) {
      // console.log("터치 :: ", e);
        return {
            // x: e.touches[0].clientX,
            // y: e.touches[0].clientY,
            x: e.touches[0].clientX - e.target.offsetLeft - 25,
            y: e.touches[0].clientY - e.target.offsetTop + document.documentElement.scrollTop -40
        }
    },
    touchStart(e) {
        console.log("시작");

        e.preventDefault();
        this.isDrawing = true;
        const { x, y } = this.getTouchPos(e);
        this.startX = x;
        this.startY = y;
    },
    touchMove(e) {
        console.log("움직");

        // if(!this.isDrawing) return;
        const { x, y } = this.getTouchPos(e);
        
        e.offsetY = y;
        e.offsetX = x;

        this.draw(e);
        // this.startX = x;
        // this.startY = y;
    },
    touchEnd() {
        console.log("끝");

        if(!this.isDrawing) return;
        // 점을 찍을 경우 위해 마지막에 점을 찍는다.
        // touchEnd 이벤트의 경우 위치정보가 없어서 startX, startY를 가져와서 점을 찍는다.
        this.ctx.beginPath();
        this.ctx.arc(this.startX, this.startY, this.ctx.lineWidth/2, 0, 2*Math.PI);
        this.ctx.fillStyle = this.ctx.strokeStyle;
        this.ctx.fill();
        this.isDrawing = false;
    },
    onMouseMove(e){
        this.draw(e);
        //console.log(this.startX +" "+ this.startY);
    },
    onMouseDown(e){
    this.isDrawing = true;
    
    this.startX = e.offsetX;
    this.startY = e.offsetY;

    //console.log(this.startX +" "+ this.startY);
    },
    onMouseUp(){
        this.isDrawing = false;
        
    },
    handleSaveClick(){
    const image = this.canvas.toDataURL();
    console.log(this.canvas.toDataURL());
    const link = document.createElement("a");
    link.href = image;
    //link.download = "PaintJS";
    //link.click();

    this.testS();
    this.postProgress();
    localStorage.setItem('no', this.modelNo);
    localStorage.setItem('p', 2);
    localStorage.setItem('rent', this.rentNo);
    this.$router.go(-2);
    },
    testS() {
      this.$axios.post('http://nexthouse.169.56.100.104.nip.io/nexthouse/save.do',
        {          
          id: this.rentNo,
          img: this.canvas.toDataURL()
        }
      )
      .then(res => {
        console.log("message " + JSON.stringify(res.data));
        
      })
      .catch(error => {
        console.log("에러 데이터 : " + error.data);
      });
    },
    postProgress() {
    this.$axios.post('http://nexthouse.169.56.100.104.nip.io/nexthouse/RentCntrNextStep/rentCntrNo='+this.rentNo+'&progress=1')
      .then(res => {
      console.log("응답 데이터 : " + JSON.stringify(res.data));
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
    console.log("Hwakjung end !!!");
    console.log(this.status+":status");
    console.log(this.modelNo+":modelNo");
    console.log(this.rentNo+":rentNo");
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

<style scoped>
  .contents{
    background-color:#B3B3B4;
    width:100%;
    height:300px;
    position:relative;
  }

  .close {width:40px; height:40px; float:right; padding-right:32px; margin-top:-19px;}
  .close:before, .close:after {position: relative;content:' ';height: 20px;width: 2px;background-color: #000;}
  .close:before {transform: rotate(45deg);}
  .close:after {transform: rotate(-45deg);}

  .sign {
    width:100%;
    height:100px;
    position: relative;
    top: 40%;
    background-color: white;
    padding-top:15px;
  }

  .signText1{
    padding-left:26px;
    padding-bottom:10px;
  }

  .signText2 {
    border-top:0.5px solid #E6E6E6;
    padding-top:12px;
    padding-bottom:12px;
    padding-left: 26px;
    font-weight: Bolder;
    font-size: 19px;
    text-align: left;
  }

  .canvasClass {
    width: 100%;
    height:300px;
    background: rgba(229,229,229,1);
    opacity: 1;
    position: relative;
    /* top: 469px; */
    /* left: 0px; */
    overflow: hidden;
    z-index: 30;
  }
  </style>