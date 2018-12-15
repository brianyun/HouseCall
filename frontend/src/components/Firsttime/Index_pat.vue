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
        <v-select :items="items_gender" label="선택 안함" solo flat></v-select>
      </v-flex>

      <v-flex mt-4>
        <h3>연락처</h3>
      </v-flex>
      <v-flex xs10>
        <v-text-field></v-text-field>
      </v-flex>

      <addressss/>
      <health-info/>
      <payment/>

      <v-flex mt-5>
        <v-btn outline @click="addFamily">가족 추가하기 (+)</v-btn>
      </v-flex>

      <v-flex mt-2>
        <v-btn color="blue" outline @click="pressComplete">가입완료</v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>



<script>
import BirthDate from "./BirthDate";
import Addressss from "./Addressss";
import HealthInfo from "./HealthInfo";
import Payment from "./Payment";

export default {
  data: () => ({
    items_gender: ["남성", "여성"]
  }),
  components: {
    BirthDate,
    Addressss,
    HealthInfo,
    Payment
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    addFamily() {
      console.log("DEBUG: addFamily()");
    },
    pressComplete() {
      console.log("DEBUG: pressComplete()");
      // this.navigateTo({ name: "signup" });
    }
  }
};
</script>

<style scoped>
.v-select {
  border: 1px solid currentColor;
  border-color: #999999;
  height: 50px;
}
</style>