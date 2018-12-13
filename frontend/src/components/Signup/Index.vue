<template>
  <div>
    <v-layout column mt-4 ml-4 mr-4>
      <v-flex xs10>
        <h3>원활한 진료를 위한</h3>
        <h3>추가 정보가 필요합니다.</h3>
      </v-flex>

      <v-flex xs10>
        <v-text-field label="이름"></v-text-field>
      </v-flex>

      <birth-date/>

      <v-flex mt-4>
        <h3>성별</h3>
      </v-flex>
      <v-flex xs6>
        <v-select :items="items_gender" label="선택 안함" outline></v-select>
      </v-flex>

      <v-flex>
        <h3>연락처</h3>
      </v-flex>
      <v-flex xs10>
        <v-text-field></v-text-field>
      </v-flex>

      <address/>

      <!-- <health-info/>

      <payment/>-->
    </v-layout>
  </div>
</template>



<script>
import BirthDate from "./BirthDate";
import Address from "./Address";
import HealthInfo from "./HealthInfo";
import Payment from "./Payment";

export default {
  data: () => ({
    items_gender: ["남성", "여성"]
  }),
  components: {
    BirthDate,
    Address,
    HealthInfo,
    Payment
  }
};
</script>

<style scoped>
</style>