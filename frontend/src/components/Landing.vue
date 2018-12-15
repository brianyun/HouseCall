<template>
  <div>
    <v-layout>
      <!-- <img src="@/assets/doctor_img.jpg"> -->
      <img src="@/assets/landing.png">
    </v-layout>

    <v-layout mt-3>
      <v-flex>
        <div>
          <h2>병원이 문닫은 시간</h2>
          <h2>00시~00시 사이,</h2>
          <h2>전문의가 직접 찾아갑니다.</h2>
        </div>
      </v-flex>
    </v-layout>

    <v-layout mt-3>
      <h4>대표 의료진</h4>
    </v-layout>

    <v-layout>
      <v-avatar size="100px">
        <img src="@/assets/sample_avatar.jpg">
      </v-avatar>
    </v-layout>

    <v-layout mt-4>
      <v-btn dark large @click="pressReserve">예약하기</v-btn>
    </v-layout>
  </div>
</template>



<script>
export default {
  data() {
    return {
      isUserLoggedIn: true
    };
  },
  async mounted() {
    console.log("Landing.vue mounted()");
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    pressReserve() {
      if (this.isUserLoggedIn) {
        console.log("DEBUG: navigateTo({ name: reservation }");
        // navigateTo({ name: "reservation" });
      } else {
        console.log("DEBUG: navigateTo({ name: login }");
        // navigateTo({ name: "login" });
      }
    }
  }
};
</script>

<style scoped>
#div {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

* {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

img {
  max-width: 100%;
  object-fit: cover;
  border: 3pt black;
}
</style>