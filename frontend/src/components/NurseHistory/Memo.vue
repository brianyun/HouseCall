<template>
  <div style="background-color: white;">
    <v-layout column>
      <div class="blank-4"></div>
      <v-flex xs10>
        <img src="@/assets/checkout_memo_guide.png">
      </v-flex>
      <div class="blank-2"></div>
      <v-divider style="color: blue;"></v-divider>
    </v-layout>

    <v-layout column ml-4 mr-4>
      <div class="blank-4"></div>
      <nursing-date/>

      <v-flex mt-4>
        <p class="tags">환자행동변화</p>
      </v-flex>
      <v-flex xs10>
        <v-text-field solo flat></v-text-field>
      </v-flex>

      <v-flex mt-4>
        <p class="tags">신체기록 변화</p>
      </v-flex>
      <v-flex xs10>
        <v-text-field solo flat></v-text-field>
      </v-flex>

      <v-flex mt-4>
        <p class="tags">증상 및 징후</p>
      </v-flex>
      <v-flex xs10>
        <v-text-field solo flat></v-text-field>
      </v-flex>

      <v-flex mt-4>
        <p class="tags">제공된 처치</p>
      </v-flex>
      <v-flex xs10>
        <v-text-field solo flat></v-text-field>
      </v-flex>

      <v-flex mt-4>
        <p class="tags">혈압/혈당</p>
      </v-flex>
      <v-layout row justify-space-between mt-2>
        <v-flex xs5>
          <v-text-field solo flat placeholder="혈압"></v-text-field>
        </v-flex>
        <v-flex xs5>
          <v-text-field solo flat placeholder="혈당"></v-text-field>
        </v-flex>
      </v-layout>

      <v-flex mt-4>
        <p class="tags">특이사항</p>
      </v-flex>
      <v-flex xs10>
        <v-textarea solo flat placeholder="특이사항"></v-textarea>
      </v-flex>

      <div class="blank-8"></div>
      <v-flex mt-2>
        <v-btn color="blue" outline @click="pressComplete">입력 완료</v-btn>
      </v-flex>
      <div class="blank-8"></div>
    </v-layout>
  </div>
</template>



<script>
import NursingDate from "./NursingDate";

export default {
  components: {
    NursingDate
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    pressComplete() {
      this.navigateTo({ name: "nurse_checkout_payment" });
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

.v-textarea {
  border-color: #999999;
  border-width: 1px;
  height: 100px;
}

.tags {
  text-align: left;
}

p {
  font-size: 18px;
}

.blank-2 {
  height: 20px;
}
.blank-4 {
  height: 40px;
}
.blank-8 {
  height: 80px;
}

img {
  max-width: 100%;
  object-fit: cover;
}
</style>