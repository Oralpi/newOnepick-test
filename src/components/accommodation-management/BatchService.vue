<template>
  <v-app>
    <v-main>
      <div class="d-flex justify-center">
        <v-btn class="ma-3" @click="readAll()">전체 불러오기</v-btn>
        <v-btn class="ma-3" @click="updateAll()">갱신</v-btn>
        <v-btn class="ma-3" @click="deleteAll()">전체 삭제</v-btn>
      </div>
      <div>
        {{ logs }}
      </div>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios';
export default {
  name: 'BatchService',
  data() {
    return {
      logs: ''
    }
  },
  methods: {
    readAll() {
      if(confirm('전체 불러오기를 하시겠습니까?') === true) {
        this.set_HotelStoryRoomInformation();
        this.set_OndaRoomInformation();

        return;
      } else {
        alert('전체 불러오기를 실패하였습니다.');
      }
    },
    updateAll() {
      if(confirm('갱신을 하시겠습니까?') === true) {
        alert('성공');

        return;
      } else {
        alert('갱신을 실패하였습니다.');
      }
    },
    deleteAll() {
      if(confirm('전체 삭제를 하시겠습니까?') === true) {
        this.delete_HotelStoryRoomInformation();
        this.delete_onda();

        return;
      } else {
        alert('전체 삭제를 실패하였습니다.');
      }
    },
    set_HotelStoryRoomInformation() {
      let path = "http://" + window.location.hostname + ":5000/set_HotelStoryRoomInfomation";

      axios.post(path).then((response) => {
        this.logs = response.data;
        console.log(this.logs);
      }).catch((error) => {
        console.log(error);
      });
    },
    delete_HotelStoryRoomInformation() {
      let path = "http://" + window.location.hostname + ":5000/delete_HotelStoryRoomInformation";

      axios.post(path).then((response) => {
        this.logs = response.data;
        console.log(this.logs);
      }).catch((error) => {
        console.log(error);
      });
    },
    set_OndaRoomInformation() {
      let path = "http://" + window.location.hostname + ":5000/set_OndaRoomInformation";

      axios.post(path).then((response) => {
        this.logs = response.data;
      }).catch((error) => {
        console.log(error);
      });
    },
    delete_onda() {
      let path = "http://" + window.location.hostname + ":5000/delete_OndaRoomInformation";

      axios.post(path).then((response) => {
        this.logs = response.data;
      }).catch((error) => {
        console.log(error);
      });
    }
  }
};
</script>