<template>
<Header title="계약 진행" />
<body>
<b-button>Button</b-button>
<b-button variant="danger">Button</b-button>
<b-button variant="success">Button</b-button>
<b-button variant="outline-primary">Button</b-button>
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