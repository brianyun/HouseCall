<template>
  <div>
    <v-layout column mt-4 ml-4 mr-4>
      <v-flex xs10 mt-4>
        <p style="text-align: left;">원활한 진료를 위한</p>
        <p style="text-align: left; font-weight: 800; transform: translateY(-50%); ;">추가 정보가 필요합니다.</p>
      </v-flex>
      <div class="blank-4"></div>

      <v-flex>
        <p class="tags">이름</p>
      </v-flex>
      <v-flex xs10>
        <v-text-field solo flat></v-text-field>
      </v-flex>

      <div class="blank-4"></div>
      <birth-date/>

      <v-flex mt-4>
        <p class="tags">성별</p>
      </v-flex>
      <v-flex xs6>
        <v-select :items="items_gender" label="선택 안함" solo flat></v-select>
      </v-flex>

      <v-flex mt-4>
        <p class="tags">연락처</p>
      </v-flex>
      <v-flex xs10>
        <v-text-field placeholder solo flat></v-text-field>
      </v-flex>

      <div class="blank-8"></div>
      <addressss/>

      <div class="blank-8"></div>
      <health-info/>

      <div class="blank-8"></div>
      <payment/>

      <v-flex mt-4></v-flex>
      <v-flex mt-5>
        <v-btn outline @click="addFamily">가족 추가하기 (+)</v-btn>
      </v-flex>

      <v-flex mt-2>
        <v-btn color="blue" outline @click="pressComplete">가입완료</v-btn>
      </v-flex>
      <div class="blank-8"></div>
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
.v-select,
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

.blank-4 {
  height: 40px;
}
.blank-8 {
  height: 80px;
}
</style>