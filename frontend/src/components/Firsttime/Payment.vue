<template>
  <v-layout column mt-4>
    <v-flex mt-4>
      <h3>결제정보</h3>
    </v-flex>

    <v-flex xs10>
      <v-select :items="items_payment" label="카드사 선택" solo flat></v-select>
    </v-flex>

    <v-layout row justify-start mt-2>
      <v-flex xs3>
        <h3>카드번호</h3>
      </v-flex>
      <v-flex xs3>
        <v-text-field solo flat></v-text-field>
      </v-flex>
      <v-flex xs3>
        <v-text-field solo flat></v-text-field>
      </v-flex>
      <v-flex xs3>
        <v-text-field solo flat></v-text-field>
      </v-flex>
      <v-flex xs3>
        <v-text-field solo flat></v-text-field>
      </v-flex>
    </v-layout>

    <v-layout row justify-start mt-2>
      <v-flex xs3>
        <h3>유효기간</h3>
      </v-flex>

      <v-flex xs3>
        <v-text-field solo flat></v-text-field>
      </v-flex>
      <v-flex xs1>
        <h3>월</h3>
      </v-flex>

      <v-flex xs3>
        <v-text-field solo flat></v-text-field>
      </v-flex>
      <v-flex xs1>
        <h3>년</h3>
      </v-flex>
    </v-layout>

    <v-layout row justify-start mt-2>
      <v-flex xs3>
        <h3>비밀번호</h3>
      </v-flex>

      <v-flex xs3>
        <v-text-field solo flat></v-text-field>
      </v-flex>
      <v-flex xs1>
        <h3>**</h3>
      </v-flex>
    </v-layout>

    <v-layout row justify-start mt-2>
      <v-flex xs3>
        <h3>카드종류</h3>
      </v-flex>

      <v-radio-group v-model="row" row>
        <v-radio label="일반" value="radio-1"></v-radio>
        <v-radio label="법인" value="radio-2"></v-radio>
      </v-radio-group>
    </v-layout>

    <v-layout row justify-start mt-2>
      <v-flex xs3>
        <h3>할부기간</h3>
      </v-flex>
      <v-flex xs10>
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
</style>