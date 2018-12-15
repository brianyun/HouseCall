<template>
  <v-layout column>
    <v-flex>
      <p class="tags">건강정보</p>
    </v-flex>

    <v-flex xs10>
      <v-text-field solo flat placeholder="가족력을 기재해주세요."></v-text-field>
    </v-flex>
    <v-flex xs10 mt-2>
      <v-text-field solo flat placeholder="지병을 기재해주세요."></v-text-field>
    </v-flex>
    <v-flex xs10 mt-2>
      <v-text-field solo flat placeholder="복용 중인 약에 대해 기재해주세요."></v-text-field>
    </v-flex>

    <v-layout row justify-space-between mt-2>
      <v-flex xs5>
        <v-text-field solo flat placeholder="키(cm)"></v-text-field>
      </v-flex>
      <v-flex xs5>
        <v-text-field solo flat placeholder="몸무게(kg)"></v-text-field>
      </v-flex>
    </v-layout>
  </v-layout>
</template>



<script>
export default {};
</script>

<style scoped>
.v-text-field {
  border: 1px solid currentColor;
  border-color: #999999;
  height: 50px;
}
.tags {
  text-align: left;
}

p {
  font-size: 18px;
}
</style>