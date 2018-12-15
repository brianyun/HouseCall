<template>
  <div>
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
    <div style="height:40px;"></div>

    <div>
      <v-layout column ml-4 mr-4>
        <v-layout row justify-space-between>
          <v-btn fab class="round_btn" flat solo>
            <v-icon>arrow_back_ios</v-icon>
          </v-btn>

          <v-avatar size="100px">
            <img src="@/assets/sample_avatar.jpg">
          </v-avatar>

          <v-btn fab class="round_btn" flat solo>
            <v-icon>arrow_forward_ios</v-icon>
          </v-btn>
        </v-layout>

        <p>김명희 요양보호사</p>
        <p>[4.7/5]</p>
        <p>20년 경력의 전문 요양보호사입니다. 가족같이 정성을 다해 돌보겠습니다.</p>
        <!-- <p>{{item.name}} 요양보호사</p>
        <p>{{item.rating}}</p>
        <p>{{item.description}}</p>-->
      </v-layout>
    </div>

    <table class="memo">
      <tr>
        <td class="ddd">방문 날짜</td>
        <td>2018년 12월 16일</td>
      </tr>
      <tr>
        <td class="ddd">환자 행동 변화</td>
        <td>스스로 자리에서 일어나고 밥도 먹을 수 있음.</td>
      </tr>
      <tr>
        <td class="ddd">증상, 징후</td>
        <td>스스로 자리에서 일어나고 밥도 먹을 수 있음. 화장실을 혼자 가는 것은 아직 힘듦.</td>
      </tr>
      <tr>
        <td class="ddd">제공된 처치</td>
        <td>레보도파 30mg + 카비도파 15mg 일 3회 맞춰서 복용하였음.</td>
      </tr>
      <tr>
        <td class="ddd">혈압/혈당</td>
        <td>혈압 146/89, 공복혈당 183.</td>
      </tr>
    </table>

    <v-layout mt-4 justify-center>
      <v-btn class="mainBtn" color="#1675fa" outline @click="pressNext">
        <div class="btnDiv">
          <p>보호자 확인</p>
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
        //샘플 데이터임. 나중에 서버에서 리퀘스트 해와야할 것.
        {
          id: "1",
          info: "남(6세)/강동구",
          disease: "배가 아파요",
          schedule: "12/16(일) 8:00PM~8:30PM"
        }
      ]
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    pressNext() {
      this.navigateTo({ name: "landing" });
    },
    select(obj) {
      console.log(obj);
      this.navigateTo({ path: "/history/" + obj });
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
  font-size: 14px;
  padding: 5px;
}
.ddd {
  width: 80px;
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
  transform: translateX(5%);
}
</style>