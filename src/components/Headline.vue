<template>
  <div class="container">
    <h1>
      <span>I know what u want</span><br />
      The MOVIE<br />
      THAT YOU WERE LOOKING FOR
    </h1>
    <p>
      영화를 검색해보세요 <br />
      제목, 시리즈, 에피소드
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
