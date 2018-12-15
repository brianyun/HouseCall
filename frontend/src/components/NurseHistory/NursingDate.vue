<template>
  <v-layout column>
    <v-flex>
      <p class="tags">방문 날짜</p>
    </v-flex>

    <v-layout row justify-space-between>
      <v-flex xs4>
        <v-text-field placeholder="년(4자)" solo flat></v-text-field>
      </v-flex>

      <v-flex xs2>
        <v-text-field placeholder="월" solo flat></v-text-field>
      </v-flex>

      <v-flex xs2>
        <v-text-field placeholder="일" solo flat></v-text-field>
      </v-flex>

      <v-flex xs2>
        <v-text-field placeholder="시" solo flat></v-text-field>
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