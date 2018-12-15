<template>
  <div style="background-color: white;">
    <v-layout>
      <img src="@/assets/landing/landing.png">
    </v-layout>

    <v-layout>
      <img src="@/assets/landing/landing_guide.png">
    </v-layout>

    <v-layout mt-4 justify-center>
      <v-btn class="mainBtn" color="#1675fa" outline @click="pressReserve">
        <div class="btnDiv">
          <p>지금 예약하기</p>
        </div>
      </v-btn>
    </v-layout>

    <v-layout mt-4>
      <div style="height: 10px;"></div>
      <img src="@/assets/landing/landing_nurse.png">
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
        this.navigateTo({ name: "make" });
      } else {
        console.log("DEBUG: navigateTo({ name: login }");
        // navigateTo({ name: "login" });
      }
    }
  }
};
</script>

<style scoped>
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
  transform: translateX(-25%);
}
</style>