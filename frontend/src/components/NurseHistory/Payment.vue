<template>
  <div>
    <v-layout column>
      <div class="blank-large"></div>
      <v-flex>
        <!-- <img src="@/assets/takeReservation/res_specific_guide.png"> -->
        <h2>곧 계좌이체가 완료됩니다.</h2>
        <h2>수고해주셔서 감사합니다.</h2>
      </v-flex>

      <div class="blank-4"></div>
      <v-flex>
        <v-btn color="blue" outline @click="pressHome">홈으로</v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>



<script>
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    pressHome() {
      this.navigateTo({ name: "landing" });
    }
  }
};
</script>

<style scoped>
.blank-4 {
  height: 40px;
}
.blank-large {
  height: 120px;
}

img {
  max-width: 100%;
  object-fit: cover;
}
</style>