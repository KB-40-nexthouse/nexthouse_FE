<template>
<Header title="계약 진행" />
<head>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
</head>
<body>
    <div class="blue lighten-4 center-align">
        과제가 넘모 많다...
    </div>

    <div class="white-text teal darken-2">
        종강 마렵다...
    </div>
</body>
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
  #body {
    font-size: 14px;
    background-color: rgb(251,251,251);
  }
</style>