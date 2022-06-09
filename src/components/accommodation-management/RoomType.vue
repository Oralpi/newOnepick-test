<template>
  <v-app>
    <v-main>
      <v-container v-if="loading">
        <div class="text-xs-center">
          <v-progress-circular indeterminate color="primary"></v-progress-circular>
        </div>
      </v-container>
      <!-- -호텔스토리- -->
      <v-card height="100px" class="my-4">
        <div class="pa-2 text-h6">숙소리스트</div>
        <v-table>
          <template v-slot:default>
            <tr>
              <td>숙소명</td>
            </tr>
          </template>
        </v-table>
      </v-card>
      <v-card height="1400px">
        <v-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center">No</th>
                <th class="text-center">숙소</th>
                <th class="text-center">객실타입</th>
                <th class="text-center">설명</th>
                <th class="text-center">객실수</th>
                <th class="text-center">표준판매가</th>
                <th class="text-center">세그먼트</th>
                <th class="text-center">정렬</th>
                <th class="text-center">사용</th>
                <th class="text-center">이미지</th>
                <th class="text-center">비고</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(detail, index) in hotelStoryDetails"
                :key="index"
              >
                <td class="text-center">{{ detail.no }}</td>
                <td class="text-center">{{ detail.name }}</td>
                <td class="text-center">없음</td>
                <td class="text-center">
                  <v-btn color="primary" @click="dialog1 = true">
                    없음
                  </v-btn>
                  <v-dialog v-model="dialog1">
                    <v-card>
                      <v-card-text>
                        <ExplanationVue />
                      </v-card-text>
                      <v-card-actions>
                        <v-btn color="primary" block @click="dialog1 = false">닫기</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </td>
                <td class="text-center">없음</td>
                <td class="text-center">{{ detail.rate }}</td>
                <td class="text-center">없음</td>
                <td class="text-center">없음</td>
                <td class="text-center">{{ detail.close }}</td>
                <td class="text-center">
                  <v-btn color="primary" @click="dialog2 = true">
                    이미지관리
                  </v-btn>
                  <v-dialog v-model="dialog2">
                    <v-card>
                      <v-card-text>
                        <ImageManagement />
                      </v-card-text>
                      <v-card-actions>
                        <v-btn color="primary" block @click="dialog2 = false">닫기</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </td>
                <td class="text-center">{{ detail.description }}</td>
              </tr>
            </tbody>
          </template>
        </v-table>
      </v-card>
      <!-- -온다- -->
      <!-- <v-card height="100px" class="my-4">
        <div class="pa-2 text-h6">숙소리스트</div>
        <v-table>
          <template v-slot:default>
            <tr>
              <td>숙소명</td>
            </tr>
          </template>
        </v-table>
      </v-card>
      <v-card height="1400px">
        <v-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center">No</th>
                <th class="text-center">숙소</th>
                <th class="text-center">객실타입</th>
                <th class="text-center">설명</th>
                <th class="text-center">객실수</th>
                <th class="text-center">표준판매가</th>
                <th class="text-center">세그먼트</th>
                <th class="text-center">정렬</th>
                <th class="text-center">사용</th>
                <th class="text-center">이미지</th>
                <th class="text-center">비고</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(detail, index) in ondaDetails"
                :key="index"
              >
                <td class="text-center">{{ detail.no1 }}</td>
                <td class="text-center">{{ detail.name1 }}</td>
                <td class="text-center">{{ detail.classifications }}</td>
                <td class="text-center">
                  <v-btn color="primary" @click="dialog1 = true">{{ detail.name2 }}</v-btn>
                  <v-dialog v-model="dialog1">
                    <v-card>
                      <v-card-text>
                        <ExplanationVue />
                      </v-card-text>
                      <v-card-actions>
                        <v-btn color="primary" block @click="dialog1 = false">닫기</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </td>
                <td class="text-center">{{ detail.room }}</td>
                <td class="text-center">{{ detail.price }}</td>
                <td class="text-center">없음</td>
                <td class="text-center">없음</td>
                <td class="text-center">{{ detail.yn }}</td>
                <td class="text-center">
                  <v-btn color="primary" @click="dialog2 = true">
                    이미지관리
                  </v-btn>
                  <v-dialog v-model="dialog2">
                    <v-card>
                      <v-card-text>
                        <ImageManagement />
                      </v-card-text>
                      <v-card-actions>
                        <v-btn color="primary" block @click="dialog2 = false">닫기</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </td>
                <td class="text-center">{{ detail.description }}</td>
              </tr>
            </tbody>
          </template>
        </v-table>
      </v-card> -->
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios';
import ExplanationVue from '../modal/roomtype/ExplanationVue';
import ImageManagement from '../modal/roomtype/ImageManagement';
export default {
  name: 'RoomType',
  components: {
    ExplanationVue,
    ImageManagement
  },
  data() {
    return {
      // list: [
      //   {
      //     no: 0,
      //     name: 'lorem',
      //     type: 'Hotel',
      //     explanation: '스탠다드',
      //     number: 1,
      //     price: '50,000',
      //     segment: '',
      //     array: 0,
      //     use: 'Y',
      //     note: 'lorem'
      //   }
      // ],
      dialog1: false,
      dialog2: false,
      hotelStoryDetails: [],
      ondaDetails: [],
      loading: true
    }
  },
  created() {
    this.hotelStory_room_type();
    // this.onda_room_type();
  },
  methods: {
    hotelStory_room_type() {
      let path = "http://" + window.location.hostname + ":5000/hotelStory-room-type";

      axios.post(path).then((response) => {
        this.hotelStoryDetails = response.data.hotelStory;
        this.loading = false;

        console.log(response);
      }).catch((error) => {
        console.log(error);
      });
    },
    // onda_room_type() {
    //   let path = "http://" + window.location.hostname + ":5000/onda-room-type";

    //   axios.post(path).then((response) => {
    //     this.ondaDetails = response.data.onda;
    //     this.loading = false;

    //     console.log(response);
    //   }).catch((error) => {
    //     console.log(error);
    //   });
    // }
  }
};
</script>