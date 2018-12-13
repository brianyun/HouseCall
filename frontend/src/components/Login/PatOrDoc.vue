<template>
  <div>
    <v-layout mt-5 column>
      <v-flex>
        <div>
          <h2>어떤 일로 찾아오셨나요?</h2>
          <h2 class="narrow">카카오톡으로 간편하게 로그인하세요.</h2>
        </div>
      </v-flex>

      <v-flex mt-5>
        <h3 class="tag">환자/보호자</h3>
      </v-flex>
      <v-flex>
        <v-avatar size="100px">
          <img src="@/assets/sample_avatar.jpg">
        </v-avatar>
      </v-flex>

      <v-flex mt-4>
        <h3 class="tag">전문의</h3>
      </v-flex>
      <v-flex>
        <v-avatar size="100px">
          <img src="@/assets/sample_avatar.jpg">
        </v-avatar>
      </v-flex>
    </v-layout>
  </div>
</template>



<script>
export default {};
</script>

<style scoped>
* {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

img {
  max-width: 100%;
  object-fit: cover;
}

.narrow {
  font-weight: lighter;
}

.tag {
  color: blue;
}
</style>