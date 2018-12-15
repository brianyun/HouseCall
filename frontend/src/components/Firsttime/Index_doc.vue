<template>
  <div>
    <v-layout column mt-4 ml-4 mr-4>
      <v-flex xs10 mt-4>
        <img src="@/assets/doc_profile_pic.png">
      </v-flex>

      <v-flex mt-4>
        <p class="tags">이름</p>
      </v-flex>
      <v-flex xs10>
        <v-text-field solo flat></v-text-field>
      </v-flex>

      <v-flex mt-4>
        <p class="tags">면허번호</p>
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

      <v-flex mt-4>
        <p class="tags">전공</p>
      </v-flex>
      <v-layout row justify-space-between mt-2>
        <v-flex xs7>
          <v-text-field solo flat></v-text-field>
        </v-flex>
        <v-flex xs4>
          <v-text-field solo flat placeholder="경력(년)"></v-text-field>
        </v-flex>
      </v-layout>

      <v-flex mt-4>
        <p class="tags">소속 병원</p>
      </v-flex>
      <v-flex xs10>
        <v-text-field placeholder solo flat></v-text-field>
      </v-flex>

      <v-flex mt-4>
        <p class="tags">선호 지역</p>
      </v-flex>
      <v-layout row justify-space-between mt-2>
        <v-flex xs7>
          <v-text-field solo flat placeholder="ex. 서울시 마포구"></v-text-field>
        </v-flex>
        <v-flex xs4>
          <v-btn class="map" solo flat style="transform: translateY(-10%);" @click="pressMap">지도</v-btn>
        </v-flex>
      </v-layout>

      <div class="blank-8"></div>
      <v-flex mt-2>
        <v-btn color="blue" outline @click="pressNext">다음</v-btn>
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
    pressNext() {
      console.log("DEBUG: pressNext()");
      // this.navigateTo({ name: "signup" });
    },
    pressMap() {
      console.log("DEBUG: pressMap()");
      this.navigateTo({ name: "signup_doc_timetable" });
    }
  }
};
</script>

<style scoped>
.v-select,
.v-text-field,
.map {
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

img {
  max-width: 40%;
  object-fit: cover;
}
</style>