<template>
  <v-app>
    <v-main>
      <v-card>
        <v-card-title>
          <span class="text-h5">숙소정보1</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="6">
                <v-text-field label="숙소명" required></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field label="숙소 축약명" required></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-text-field label="숙소명(E)" required></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field label="카카오채널" required></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-text-field label="사업자번호" required></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field label="상호명" required></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-text-field label="대표자명" required></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field label="총지배인" required></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-select :items="['전체', '원픽', '온다', '군인공제회', '피드컨텐츠']" label="파트너" required></v-select>
              </v-col>
              <v-col cols="3">
                <v-select :items="['서울']" label="지역코드" required></v-select>
              </v-col>
              <v-col cols="3">
                <v-select :items="['강남구']" label="지역코드" required></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-text-field label="홈페이지 URL" required></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field label="전체 룸 수" required></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-text-field label="전화" required></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field label="팩스" required></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3">
                <v-text-field label="주소" required></v-text-field>
              </v-col>
              <!-- <v-col col="3">
                <v-btn>우편번호 검색</v-btn>
              </v-col> -->
              <v-col cols="3">
                <v-btn>우편번호 검색</v-btn>
              </v-col>
              <v-col cols="3">
                <v-text-field label="주소" required></v-text-field>
              </v-col>
              <v-col cols="3">
                <v-text-field label="주소" required></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-select :items="['숙소유형']" label="숙소유형" required></v-select>
              </v-col>
              <v-col cols="6">
                <v-text-field label="원픽담당자" required></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field label="비고" required></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3">
                <v-select :items="['이용']" label="사용" required></v-select>
              </v-col>
              <v-col cols="3">
                <v-select :items="['Y']" label="오버부킹" required></v-select>
              </v-col>
              <v-col cols="3">
                <v-text-field label="예약코드" required></v-text-field>
              </v-col>
              <v-col cols="3">
                <v-select :items="['']" label="패스워드 사용" required></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                등록일
              </v-col>
              <v-col cols="6">
                수정
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
export default {

}
</script>

<style>

</style>