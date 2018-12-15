<template>
  <div>
    <v-layout class="imagee">
      <img src="@/assets/signup.png">
      <!-- <div class="centered">
        <h1>환자에게 더 가까이</h1>
        <h3>하우스콜에서 보다 나은 의료서비스를 경험하세요.</h3>
      </div>-->
    </v-layout>

    <v-layout column mt-5>
      <v-flex>
        <v-btn
          id="kakao"
          color="#fae100"
          depressed="false"
          round
          elevation-0
          @click="kakaoLogin"
        >카카오톡으로 로그인</v-btn>
      </v-flex>

      <v-flex>
        <v-btn id="signup" outline="true" depressed="false" round @click="pressSignup">회원 가입하기</v-btn>
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
    pressSignup() {
      this.navigateTo({ name: "pat_or_doc_select" });
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

.imagee {
  position: relative;
  text-align: center;
  color: white;
}

img {
  max-width: 100%;
  object-fit: cover;
}

h1 {
  color: white;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}

#kakao {
  width: 210px;
  height: 49px;
  color: black;
  text-align: center;
}
#signup {
  width: 210px;
  height: 49px;
  color: blue;
  text-align: center;
}
</style>