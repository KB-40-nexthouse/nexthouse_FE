<template>
<Header title="계약 진행" />
<div style="height:100vh; background-color: #F9F8F8;">
    <div style="padding: 30px;">
        <div class="card">
            <h3 style="text-align : left;">스마트출금</h3>
            <div style="padding: 30px 20px 20px; background-color: #ffffff; border-radius: 10px;">
                <p><span style="color: blue;">카드없이</span> 현금 출금하기</p>
                <p style="font-size : 14px; color: lightgray; padding-bottom: 20px;">출금 계좌</p>
                <button type="button" style="display:block; background-color: yellow; width:100%; padding : 10px; border-radius:10px">사용하기</button>
            </div>
        </div>
        <div class="card">
            <h3 style="text-align : left;">스마트출금</h3>
            <div style="padding: 30px 20px 20px; background-color: #ffffff; border-radius: 10px;">
                <p><span style="color: blue;">카드없이</span> 현금 출금하기</p>
                <p style="font-size : 14px; color: lightgray; padding-bottom: 20px;">출금 계좌</p>
                <button type="button" style="display:block; background-color: yellow; width:100%; padding : 10px; border-radius:10px">사용하기</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Header from "./HeaderLayout.vue";
export default {
  name: 'NewStaging',
  components: {
    Header,
  },
}
</script>

<style scoped>
.card { position: relative; }
.card + .card { padding-top: 60px; }
.card + .card::before { content: ""; position: absolute; left: 50%; top: 20px; display: block; width: 3px; height: 30px; background-color: gray; transform: translateX(-50%); }
.card + .card::after { content: ""; position: absolute; left: 50%; top: 38px; display: block; width: 10px; height: 10px; transform: translateX(-50%) rotate(135deg); border-width: 3px 3px 0 0; border-color: gray; border-style: solid; }
</style>