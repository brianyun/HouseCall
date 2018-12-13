<template>
  <v-layout column mt-4>
    <v-flex mt-4>
      <h3>건강정보</h3>
    </v-flex>

    <v-flex xs10 mt-0>
      <v-text-field placeholder="가족력을 기재해주세요."></v-text-field>
    </v-flex>
    <v-flex xs10 mt-0>
      <v-text-field placeholder="지병을 기재해주세요."></v-text-field>
    </v-flex>
    <v-flex xs10 mt-0>
      <v-text-field placeholder="복용 중인 약에 대해 기재해주세요."></v-text-field>
    </v-flex>

    <v-layout row justify-space-between mt-0>
      <v-flex xs5>
        <v-text-field placeholder="키(cm)"></v-text-field>
      </v-flex>
      <v-flex xs5>
        <v-text-field placeholder="몸무게(kg)"></v-text-field>
      </v-flex>
    </v-layout>
  </v-layout>
</template>



<script>
export default {};
</script>

<style scoped>
</style>