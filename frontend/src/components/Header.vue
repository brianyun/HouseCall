<template>
  <v-toolbar fixed class="grey darken-1" dark ma-0 pa-0 id="toolbar">
    <v-toolbar-side-icon></v-toolbar-side-icon>

    <v-btn ma-0 pa-0 flat @click="root">LOGO</v-btn>

    <!-- <v-img src="@/assets/sev_logo.jpg" height="48px"></v-img> -->
    <!-- <v-toolbar-items>
      <v-img src="@/assets/sev_logo.jpg"></v-img>
    </v-toolbar-items>-->
    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat dark @click="login">로그인</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    root() {
      console.log("method.root() is toggled");
      this.navigateTo({ name: "landing" });
    },
    login() {
      console.log("method.login() is toggled");
      this.navigateTo({ name: "login_or_signup" });
    }
  }
};
</script>

<style scoped>
.home {
  cursor: pointer;
}
.home:hover {
  color: #e9e;
}
img {
  /* height: 48px; */
  width: 100%;
  height: 48px;
  object-fit: contain;
}
#toolbar {
  opacity: 0.7;
  height: 56px;
}
</style>
