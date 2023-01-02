<template>
  <footer>
    <Logo />
    <a href="#" target="_blank"> Copyright (c) {{ new Date().getFullYear() }} SKY the brilliant </a>
  </footer>
</template>

<script>
import Logo from "~/components/Logo";
export default {
  components: {
    Logo,
  },
};
</script>
<style lang="scss" scoped>
@import "~/scss/main";
footer {
  padding: 70px 0;
  text-align: center;
  opacity: 0.5;
  .logo {
    display: block;
    margin-bottom: 4px;
  }
}
a {
  text-decoration: none;
  &:hover {
    color: $primary;
  }
}
</style>
