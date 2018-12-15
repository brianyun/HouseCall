<template>
  <div>
    <v-layout column>
      <v-flex>
        <img src="@/assets/takeReservation/res_specific_guide.png">
      </v-flex>

      <table class="list">
        <tr>
          <td>환자 정보</td>
          <td>{{ item.info }}</td>
        </tr>
        <tr>
          <td>주소</td>
          <td>{{ item.address }}</td>
        </tr>
        <tr>
          <td>연락처</td>
          <td>{{ item.contact }}</td>
        </tr>
        <tr>
          <td>증상</td>
          <td>{{ item.symptom }}</td>
        </tr>
        <tr>
          <td>날짜/시간</td>
          <td>{{ item.schedule }}</td>
        </tr>
        <tr>
          <td>가족력</td>
          <td>{{ item.family_history }}</td>
        </tr>
        <tr>
          <td>복용중인 약</td>
          <td>{{ item.medication }}</td>
        </tr>
        <tr>
          <td>키/몸무게</td>
          <td>{{ item.height_weight }}</td>
        </tr>
      </table>
      <div class="blank-4"></div>

      <v-flex>
        <v-btn color="blue" outline @click="pressHome">홈으로</v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>



<script>
export default {
  data() {
    return {
      item: {
        id: "1",
        info: "김환자 (6세)",
        address: "강동구 롯데캐슬퍼스트 203동 506호 ",
        contact: "01012341234",
        symptom: "배가 아파요",
        family_history: "당뇨",
        medication: "없음",
        height_weight: "113cm/20kg",
        schedule: "12/16(일) 8:00PM~8:30PM"
      }
    };
  },
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

img {
  max-width: 100%;
  object-fit: cover;
}

td {
  height: 30px;
  font-size: 15px;
  padding: 8px;
}
</style>