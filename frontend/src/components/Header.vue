<template>
  <div>
    <v-toolbar fixed class="grey darken-1" dark ma-0 pa-0 id="toolbar">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>

      <v-btn ma-0 pa-0 flat @click="root">하우스콜</v-btn>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn flat dark @click="login">로그인</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <!-- <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>-->
      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile v-for="item in items" :key="item.eigen" @click.native="select(item.eigen)">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pa-1" mt-4 dense>
        <v-divider></v-divider>
        <v-list-tile @click="logout">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>로그아웃</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      items: [
        { title: "개인정보 수정", icon: "edit", eigen: "signup_patient" },
        { title: "예약 확인", icon: "list", eigen: "take_reservation" },
        {
          title: "나의 돌봄기록",
          icon: "person",
          eigen: "nurse_checkout"
        },
        {
          title: "치료받은 기록",
          icon: "airline_seat_individual_suite",
          eigen: "history"
        }
      ],
      mini: false,
      right: null
    };
  },
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
    },
    logout() {
      console.log("DEBUG: Log Out");
    },
    select(obj) {
      console.log(obj);
      this.navigateTo({ name: obj });
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
