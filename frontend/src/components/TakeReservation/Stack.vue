<template>
  <div>
    <v-layout column>
      <div class="blank-4"></div>
      <v-flex>
        <img src="@/assets/takeReservation/res_stack_doc.png">
      </v-flex>

      <div class="blank-4"></div>
      <v-flex>
        <img src="@/assets/takeReservation/res_select_guide.png">
      </v-flex>

      <div v-for="item in items" :key="item.id" @click="select(item.id)">
        <div class="blank-2"></div>
        <table class="list">
          <tr>
            <td>환자 정보</td>
            <td>{{ item.info }}</td>
          </tr>
          <tr>
            <td>증상</td>
            <td>{{ item.disease }}</td>
          </tr>
          <tr>
            <td>날짜/시간</td>
            <td>{{ item.schedule }}</td>
          </tr>
        </table>
        <div class="blank-2"></div>
      </div>
    </v-layout>
  </div>
</template>



<script>
export default {
  data() {
    return {
      drawer: null,
      items: [
        //샘플 데이터임. 나중에 서버에서 리퀘스트 해와야할 것.
        {
          id: "1",
          info: "남(77세)/강동구",
          disease: "당뇨",
          schedule: "12/16(일) 8:00PM~8:30PM"
        },
        {
          id: "2",
          info: "여(84세)/마포구",
          disease: "고혈압",
          schedule: "12/16(일) 7:00AM~7:30AM"
        }
      ]
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    select(obj) {
      console.log(obj);
      this.navigateTo({ path: "/doctor/reservation/" + obj });
    }
  }
};
</script>

<style scoped>
.blank-4 {
  height: 40px;
}
.blank-2 {
  height: 10px;
}

img {
  max-width: 100%;
  object-fit: cover;
}
.list {
  height: 90px;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #444444;
}

td {
  height: 30px;
  font-size: 18px;
  padding: 10px;
}
</style>