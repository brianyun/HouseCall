<template>
  <div style="background-color: white;">
    <v-layout column>
      <div class="blank-4"></div>
      <v-flex>
        <img src="@/assets/makeReservation/make_start_guide.png">
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

      <div style="height:60px;"></div>
      <v-flex>
        <img src="@/assets/makeReservation/make_start_option.png">
      </v-flex>
      <v-radio-group v-model="row" row ma-0 class="radio" ml-3 mr-3>
        <v-radio label="요양보호사만 만날래요." value="radio-1"></v-radio>
        <v-radio label="의사도 만나고 싶습니다. (추가비용 발생)" value="radio-2"></v-radio>
      </v-radio-group>

      <v-layout mt-4 justify-center>
        <v-btn class="mainBtn" color="#1675fa" outline @click="pressNext">
          <div class="btnDiv">
            <p>다음</p>
          </div>
        </v-btn>
      </v-layout>
      <div class="blank-4"></div>
      <div class="blank-4"></div>
    </v-layout>
  </div>
</template>



<script>
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    pressNext() {
      this.navigateTo({ name: "make_schedule" });
    }
  }
};
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
.radio {
  font-weight: 800;
  padding: 10px;
  transform: translate(5%, -20%);
}

.mainBtn {
  font-size: 17px;
  font-weight: bolder;

  padding-top: 10px;
  padding-left: 26px;
  padding-right: 26px;
  padding-bottom: 10px;

  height: 47px;
  width: 150px;
  border-radius: 13px;
  border-width: 2px;
}
.btnDiv {
  transform: translateX(5%);
}
</style>