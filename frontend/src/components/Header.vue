<template>
  <v-toolbar fixed class="grey darken-1" dark ma-0 pa-0 id="toolbar">
    <v-toolbar-side-icon></v-toolbar-side-icon>

    <v-btn ma-0 pa-0 flat @click="root" id="logo">
      <img src="@/assets/youtube.png">
    </v-btn>

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
    root() {
      console.log("method.root() is toggled");
    },
    login() {
      console.log("method.login() is toggled");
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
#logo {
  min-width: 0;
  min-height: 0;
  width: 60px;
}

#toolbar {
  opacity: 0.7;
}
</style>
