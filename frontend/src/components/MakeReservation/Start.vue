<template>
  <div style="background-color: white;">
    <v-layout column>
      <div class="blank-4"></div>
      <v-flex>
        <img src="@/assets/make_start_guide.png">
      </v-flex>
      <div class="blank-4"></div>

      <v-layout column ml-3 mr-3>
        <v-flex>
          <p class="tags">증상 설명</p>
        </v-flex>

        <v-flex xs10>
          <v-textarea solo flat placeholder="현재 증상을 자세하게 기재해주세요."></v-textarea>
        </v-flex>
        <v-flex xs10 mt-2>
          <v-text-field solo flat placeholder="복용 중인 약을 기재해주세요."></v-text-field>
        </v-flex>
      </v-layout>
    </v-layout>
  </div>
</template>



<script>
export default {};
</script>

<style scoped>
.blank-4 {
  height: 40px;
}
.v-text-field {
  border: 1px solid currentColor;
  border-color: #999999;
  height: 50px;
}
.v-textarea {
  border: 1px solid currentColor;
  border-color: #999999;
  height: 100px;
}
.tags {
  text-align: left;
}

p {
  font-size: 18px;
}
img {
  max-width: 100%;
  object-fit: cover;
}
</style>