<template>
  <div id="app">
    <navBar />
    <router-view />
    <footerBar />
  </div>
</template>

<script>
import navBar from "@/components/navbar/navBar.vue";
import footerBar from "@/components/footer/footerBar.vue";


export default {
  name: "app",
  components: {
    navBar,
    footerBar,
  },
};
</script>

<style>
</style>
