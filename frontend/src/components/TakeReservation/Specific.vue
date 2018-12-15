<template>
  <div>
    <v-layout column>
      <v-flex>
        <img src="@/assets/takeReservation/res_specific_guide.png">
      </v-flex>

      <div class="blank-4"></div>
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
      <div class="blank-4"></div>

      <v-layout row justify-center>
        <v-flex xs2></v-flex>
        <v-btn color="blue" outline @click="pressYes">예</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="gray" outline @click="pressNo">아니오</v-btn>
        <v-flex xs2></v-flex>
      </v-layout>
    </v-layout>
  </div>
</template>



<script>
export default {
  data() {
    return {
      item: {
        id: "1",
        info: "남(77세)/강동구",
        disease: "당뇨",
        schedule: "12/16(일) 8:00PM~8:30PM"
      }
    };
  },
  methods: {
    pressYes() {
      console.log("DEBUG: pressYes()");
    },
    pressNo() {
      console.log("DEBUG: pressNo()");
    }
  },
  async mounted() {
    const patientId = this.$router.state.params.id;
    console.log("DEBUG-mounted: id is:(" + patientId + ")");
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