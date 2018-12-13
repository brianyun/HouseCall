<template>
  <v-layout column>
    <v-flex mt-4>
      <h3>생년월일</h3>
    </v-flex>

    <v-layout row justify-space-between ml-2 mr-2>
      <v-flex xs4>
        <v-text-field placeholder="년(4자)" solo></v-text-field>
      </v-flex>

      <v-flex xs3>
        <v-text-field placeholder="월" solo></v-text-field>
      </v-flex>

      <v-flex xs3>
        <v-text-field placeholder="일" solo></v-text-field>
      </v-flex>
    </v-layout>
  </v-layout>
</template>


<script>
export default {};
</script>

<style scoped>
</style>