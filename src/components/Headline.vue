<template>
  <div class="container">
    <h1>
      <span>I know what u want</span><br />
      The MOVIE<br />
      THAT YOU WERE LOOKING FOR
    </h1>
    <p>
      This service provides YOU <br />
      To know various information <br />
      Such as movie information, ratings, and release date.
    </p>
  </div>
</template>

<style lang="scss" scoped>
@import "~/scss/main";
.container {
  padding-top: 40px;
}
h1 {
  line-height: 1;
  font-family: "Oswald", sans-serif;
  font-size: 80px;
  span {
    color: $primary;
  }
}
p {
  margin: 30px 0;
  color: $gray-600;
  font-size: 30px;
}
</style>
