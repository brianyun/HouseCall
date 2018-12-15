<template>
  <v-layout column>
    <v-flex>
      <p class="tags">결제정보</p>
    </v-flex>

    <v-flex xs10>
      <v-select :items="items_payment" label="카드사 선택" solo flat></v-select>
    </v-flex>

    <v-layout row justify-start mt-2>
      <v-flex xs3 class="indexes">
        <p>카드번호</p>
      </v-flex>
      <v-flex class="card_no">
        <v-text-field solo flat></v-text-field>
      </v-flex>
      <v-flex class="card_no">
        <v-text-field solo flat></v-text-field>
      </v-flex>
      <v-flex class="card_no">
        <v-text-field solo flat></v-text-field>
      </v-flex>
      <v-flex class="card_no">
        <v-text-field solo flat></v-text-field>
      </v-flex>
    </v-layout>

    <v-layout row justify-start mt-2>
      <v-flex xs3>
        <p>유효기간</p>
      </v-flex>

      <v-flex xs2>
        <v-text-field solo flat></v-text-field>
      </v-flex>
      <v-flex xs1>
        <p>월</p>
      </v-flex>

      <v-flex xs2>
        <v-text-field solo flat></v-text-field>
      </v-flex>
      <v-flex xs1>
        <p>년</p>
      </v-flex>
    </v-layout>

    <v-layout row justify-start mt-2>
      <v-flex xs3>
        <p>비밀번호</p>
      </v-flex>

      <v-flex xs2>
        <v-text-field solo flat></v-text-field>
      </v-flex>
      <v-flex xs1>
        <p>**</p>
      </v-flex>
    </v-layout>

    <v-layout row justify-start>
      <v-flex xs3>
        <p>카드종류</p>
      </v-flex>

      <v-radio-group v-model="row" row ma-0 pa-0>
        <v-radio label="일반" value="radio-1"></v-radio>
        <v-radio label="법인" value="radio-2"></v-radio>
      </v-radio-group>
    </v-layout>

    <v-layout row justify-start>
      <v-flex xs3>
        <p>할부기간</p>
      </v-flex>
      <v-flex xs8>
        <v-select :items="items_halbu" solo flat></v-select>
      </v-flex>
    </v-layout>
  </v-layout>
</template>



<script>
export default {
  data: () => ({
    items_payment: ["우리카드", "하나카드", "국민카드", "삼성카드"],
    items_halbu: ["일시불", "3개월", "6개월"]
  })
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
.card_no {
  width: 60px;
}

p {
  font-size: 18px;
}
</style>