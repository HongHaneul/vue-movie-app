<template>
  <Header />
  <RouterView />
  <Footer />
  <Ads />
</template>
<script>
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Ads from "~/components/Adsense";
export default {
  components: {
    Header,
    Footer,
    Ads,
  },
};
</script>
<style lang="scss">
@import "~/scss/main";
</style>
