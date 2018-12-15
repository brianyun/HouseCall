<template>
  <v-layout column>
    <v-flex mt-4>
      <h3>생년월일</h3>
    </v-flex>

    <v-layout row justify-space-between>
      <v-flex xs4>
        <v-text-field placeholder="년(4자)" solo flat></v-text-field>
      </v-flex>

      <v-flex xs3>
        <v-text-field placeholder="월" solo flat></v-text-field>
      </v-flex>

      <v-flex xs3>
        <v-text-field placeholder="일" solo flat></v-text-field>
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
</style>