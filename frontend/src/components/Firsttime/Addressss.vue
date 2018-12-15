<template>
  <v-layout column>
    <v-flex>
      <p class="tags">주소</p>
    </v-flex>

    <v-layout row>
      <v-flex>
        <v-text-field placeholder="주소1 - 시, 군, 구" solo flat></v-text-field>
      </v-flex>
    </v-layout>

    <v-flex mt-2>
      <v-text-field placeholder="주소2 - 상세주소" solo flat></v-text-field>
    </v-flex>
  </v-layout>
</template>



<script>
export default {
  methods: {
    addressNumber() {
      console.log("press AddressNumber");
    }
  }
};
</script>

<style scoped>
.v-text-field,
.v-btn {
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