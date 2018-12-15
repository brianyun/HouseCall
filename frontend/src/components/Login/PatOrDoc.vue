<template>
  <div>
    <v-layout mt-5 column>
      <v-flex>
        <div>
          <h2>어떤 일로 찾아오셨나요?</h2>
          <h2 class="narrow">카카오톡으로 간편하게 로그인하세요.</h2>
        </div>
      </v-flex>

      <v-flex mt-5>
        <h3 class="tag">환자/보호자</h3>
      </v-flex>
      <v-flex>
        <v-btn fab class="round_btn" @click="pressPat">
          <v-avatar size="120px">
            <img src="@/assets/avatar_pat.png">
          </v-avatar>
        </v-btn>
      </v-flex>

      <v-flex mt-4>
        <h3 class="tag">전문의</h3>
      </v-flex>
      <v-flex>
        <v-btn fab class="round_btn" @click="pressDoc">
          <v-avatar size="120px">
            <img src="@/assets/avatar_doc.png">
          </v-avatar>
        </v-btn>
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
    pressPat() {
      console.log("DEBUG: pressPat");
      this.navigateTo({ name: "signup_patient" });
    },
    pressDoc() {
      console.log("DEBUG: pressDoc");
      this.navigateTo({ name: "signup_doctor" });
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
}

.narrow {
  font-weight: lighter;
}

.tag {
  color: blue;
}

.round_btn {
  height: 120px;
  width: 120px;
}
</style>