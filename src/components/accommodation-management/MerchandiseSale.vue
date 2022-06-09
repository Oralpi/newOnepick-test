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
                <th class="text-center">순번</th>
                <th class="text-center">숙소명</th>
                <th class="text-center">상품명</th>
                <th class="text-center">객실타입</th>
                <th class="text-center">가격</th>
                <th class="text-center">관리</th>
                <th class="text-center">환불규정</th>
                <th class="text-center">편의시설</th>
                <th class="text-center text-red">정렬</th>
                <th class="text-center">판매</th>
                <th class="text-center">사용</th>
                <th class="text-center">등록일</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(detail, index) in hotelStoryDetails"
                :key="index"
              >
                <td class="text-center">{{ detail.no1 }}</td>
                <td class="text-center">{{ detail.name1 }}</td>
                <td class="text-center">
                  <v-btn color="primary" @click="dialog1 = true">{{ detail.name2 }}</v-btn>
                  <v-dialog v-model="dialog1">
                    <v-card>
                      <v-card-text>
                        <ProductName />
                      </v-card-text>
                      <v-card-actions>
                        <v-btn color="primary" block @click="dialog1 = false">닫기</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </td>
                <td class="text-center">{{ detail.name3 }}</td>
                <td class="text-center">
                  <v-btn color="primary" @click="dialog2 = true">
                    보기
                  </v-btn>
                  <v-dialog v-model="dialog2">
                    <v-card>
                      <v-card-text>
                        <ViewVue />
                      </v-card-text>
                      <v-card-actions>
                        <v-btn color="primary" block @click="dialog2 = false">닫기</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </td>
                <td class="text-center">
                  <v-btn color="primary" @click="dialog3 = true">
                    관리기능
                  </v-btn>
                  <v-dialog v-model="dialog3">
                    <v-card>
                      <v-card-text>
                        <AdministrativeFunction />
                      </v-card-text>
                      <v-card-actions>
                        <v-btn color="primary" block @click="dialog3 = false">닫기</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </td>
                <td class="text-center">
                  <v-btn color="primary" @click="dialog4 = true">
                    환불규정
                  </v-btn>
                  <v-dialog v-model="dialog4">
                    <v-card>
                      <v-card-text>
                        <RefundRegulation />
                      </v-card-text>
                      <v-card-actions>
                        <v-btn color="primary" block @click="dialog4 = false">닫기</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </td>
                <td class="text-center">
                  <v-btn color="primary" @click="dialog5 = true">
                    편의시설
                  </v-btn>
                  <v-dialog v-model="dialog5">
                    <v-card>
                      <v-card-text>
                        <AmenitiesVue2 />
                      </v-card-text>
                      <v-card-actions>
                        <v-btn color="primary" block @click="dialog5 = false">닫기</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </td>
                <td class="text-center text-red">없음</td>
                <td class="text-center">{{ detail.close }}</td>
                <td class="text-center">{{ detail.yn }}</td>
                <td class="text-center">{{ detail.date }}</td>
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
                <th class="text-center">순번</th>
                <th class="text-center">숙소명</th>
                <th class="text-center">상품명</th>
                <th class="text-center">객실타입</th>
                <th class="text-center">가격</th>
                <th class="text-center">관리</th>
                <th class="text-center">환불규정</th>
                <th class="text-center">편의시설</th>
                <th class="text-center text-red">정렬</th>
                <th class="text-center text-red">판매</th>
                <th class="text-center">사용</th>
                <th class="text-center">등록일</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(detail, index) in ondaDetails"
                :key="index"
              >
                <td class="text-center">{{ detail.no1 }}</td>
                <td class="text-center">{{ detail.name1 }}</td>
                <td class="text-center">
                  <v-btn color="primary" @click="dialog1 = true">{{ detail.name2 }}</v-btn>
                  <v-dialog v-model="dialog1">
                    <v-card>
                      <v-card-text>
                        <ProductName />
                      </v-card-text>
                      <v-card-actions>
                        <v-btn color="primary" block @click="dialog1 = false">닫기</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </td>
                <td class="text-center">{{ detail.classifications }}</td>
                <td class="text-center">
                  <v-btn color="primary" @click="dialog2 = true">
                    보기
                  </v-btn>
                  <v-dialog v-model="dialog2">
                    <v-card>
                      <v-card-text>
                        <ViewVue />
                      </v-card-text>
                      <v-card-actions>
                        <v-btn color="primary" block @click="dialog2 = false">닫기</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </td>
                <td class="text-center">
                  <v-btn color="primary" @click="dialog3 = true">
                    관리기능
                  </v-btn>
                  <v-dialog v-model="dialog3">
                    <v-card>
                      <v-card-text>
                        <AdministrativeFunction />
                      </v-card-text>
                      <v-card-actions>
                        <v-btn color="primary" block @click="dialog3 = false">닫기</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </td>
                <td class="text-center">
                  <v-btn color="primary" @click="dialog4 = true">
                    환불규정
                  </v-btn>
                  <v-dialog v-model="dialog4">
                    <v-card>
                      <v-card-text>
                        <RefundRegulation />
                      </v-card-text>
                      <v-card-actions>
                        <v-btn color="primary" block @click="dialog4 = false">닫기</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </td>
                <td class="text-center">
                  <v-btn color="primary" @click="dialog5 = true">
                    편의시설
                  </v-btn>
                  <v-dialog v-model="dialog5">
                    <v-card>
                      <v-card-text>
                        <AmenitiesVue2 />
                      </v-card-text>
                      <v-card-actions>
                        <v-btn color="primary" block @click="dialog5 = false">닫기</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </td>
                <td class="text-center text-red">없음</td>
                <td class="text-center text-red">없음</td>
                <td class="text-center">{{ detail.yn }}</td>
                <td class="text-center">{{ detail.date }}</td>
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
import ProductName from '../modal/merchandisesale/ProductName.vue';
import ViewVue from '../modal/merchandisesale/ViewVue.vue';
import AdministrativeFunction from '../modal/merchandisesale/AdministrativeFunction.vue';
import RefundRegulation from '../modal/merchandisesale/RefundRegulation.vue';
import AmenitiesVue2 from '../modal/merchandisesale/AmenitiesVue2.vue';
export default {
  name: 'MerchandiseSale',
  components: {
    ProductName,
    ViewVue,
    AdministrativeFunction,
    RefundRegulation,
    AmenitiesVue2
  },
  data() {
    return {
      // list: [
      //   {
      //     no: 1,
      //     accommodationName: 'lorem',
      //     productName: 'lorem',
      //     type: 'lorem',
      //     array: 1,
      //     sale: 'Y',
      //     use: 'Y',
      //     date: '2022-03-25 10:08'
      //   }
      // ],
      dialog1: false,
      dialog2: false,
      dialog3: false,
      dialog4: false,
      dialog5: false,
      hotelStoryDetails: [],
      ondaDetails: [],
      loading: true
    }
  },
  methods: {
    hotelStory_merchandise_sale() {
      let path = "http://" + window.location.hostname + ":5000/hotelStory-merchandise-sale";

      axios.post(path).then((response) => {
        this.hotelStoryDetails = response.data.hotelStory;
        this.loading = false;

        console.log(response);
      }).catch((error) => {
        console.log(error);
      });
    },
    // onda_merchandise_sale() {
    //   let path = "http://" + window.location.hostname + ":5000/onda-merchandise-sale";

    //   axios.post(path).then((response) => {
    //     this.ondaDetails = response.data.onda;
    //     this.loading = false;

    //     console.log(response);
    //   }).catch((error) => {
    //     console.log(error);
    //   });
    // }
  },
  created() {
    this.hotelStory_merchandise_sale();
    // this.onda_merchandise_sale();
  }
};
</script>