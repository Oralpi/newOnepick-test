<template>
  <v-app>
    <v-app-bar color="grey-lighten-2" app>
      <v-img src="./assets/onepick.png"></v-img>
      <v-row>
        <v-col cols="12" class="py-2">
          <v-btn-toggle v-model="text" tile group>
            <v-btn value="justify">HOME</v-btn>
            <v-btn value="justify">판매관리</v-btn>
            <v-btn value="justify">고객센터</v-btn>
            <v-btn value="justify">VOC</v-btn>
            <v-btn value="justify">코드관리</v-btn>
            <v-btn value="justify">피드관리</v-btn>
            <v-btn value="justify">포인트</v-btn>
            <v-btn value="justify">환경설정</v-btn>
            <v-btn value="justify">운영센터</v-btn>
            <v-btn value="justify">새 창</v-btn>
            <v-btn value="justify">원픽 님</v-btn>
            <v-btn value="justify">로그아웃</v-btn>
          </v-btn-toggle>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-navigation-drawer color="purple-darken-2" permanent app>
      <v-list density="compact" color="purple-darken-2" nav>
        <v-list-item title="숙소리스트" value="list" to="/"></v-list-item>
        <v-list-item title="객실타입" value="type" to="/room-type"></v-list-item>
        <v-list-item title="판매상품" value="product" to="/merchandise-sale"></v-list-item>
        <v-list-item title="배치서비스" value="service" to="/batch-service"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <!-- <SpinnerVue v-if="isLoading"></SpinnerVue> -->
        <router-view></router-view>
      </v-container>     
    </v-main>
  </v-app>
</template>

<script>
// import SpinnerVue from '@/components/spinner/SpinnerVue';
export default {
  name: 'App',
  components: {
    // SpinnerVue
  },
  data() {
    return {
      isLoading: false
    }
  },
  methods: {
    spinner() {
      this.isLoading = true;
    }
  },
  created() {
    this.spinner();
  }
};
</script>
