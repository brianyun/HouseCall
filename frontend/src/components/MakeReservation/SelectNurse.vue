<template>
  <div>
    <v-layout column>
      <div style="height:40px;"></div>
      <h2>간병인을 선택하세요.</h2>
      <h4>최고의 간병인들을 엄선하였습니다.</h4>
    </v-layout>

    <div style="height:80px"></div>
    <div v-for="item in items" :key="item.id" @click="select(item.id)">
      <v-layout column>
        <v-layout row justify-space-between>
          <v-btn xs3>왼쪽</v-btn>
          <v-avatar size="100px">
            <img src="@/assets/sample_avatar.jpg">
          </v-avatar>
          <v-btn xs3>오른쪽</v-btn>
        </v-layout>

        <p>{{item.name}} 요양보호사</p>
        <p>{{item.rating}}</p>
        <p>{{item.description}}</p>
      </v-layout>
    </div>

    <v-layout mt-4 justify-center>
      <v-btn class="mainBtn" color="#1675fa" outline @click="pressNext">
        <div class="btnDiv">
          <p>완료</p>
        </div>
      </v-btn>
    </v-layout>
    <div class="blank-4"></div>
    <div class="blank-4"></div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      items: [
        {
          id: "1",
          name: "김명희",
          description:
            "20년 경력의 전문 요양보호사입니다. 가족같이 정성을 다해 돌보겠습니다.",
          image_url: "https://i.ibb.co/L1qL89Z/IMG-0054.jpg",
          rating: "[4.7/5]"
        },
        {
          id: "2",
          name: "남태철",
          description:
            "간호조무사 자격이 있는 전문가입니다. 정성가득한 돌봄 서비스를 제공하겠습니다.",
          image_url: "https://i.ibb.co/L1qL89Z/IMG-0054.jpg",
          rating: "[4.5/5]"
        },
        {
          id: "3",
          name: "최윤복",
          description:
            "성실 또 성실, 안전 그리고 안전 당신을 위한 돌봄을 제공합니다.",
          image_url: "https://i.ibb.co/L1qL89Z/IMG-0054.jpg",
          rating: "[4.3/5]"
        }
      ]
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    pressNext() {
      this.navigateTo({ name: "make_complete" });
    },
    pressLeft() {},
    pressRight() {}
  }
};
</script>

<style scoped>
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
  transform: translateX(5%);
}

td {
  height: 30px;
  font-size: 14px;
}
table {
  border: 1px solid currentColor;
  border-color: #999999;
}
</style>