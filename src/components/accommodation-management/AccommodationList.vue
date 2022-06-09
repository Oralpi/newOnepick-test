<template>
  <v-app>
    <v-main>
      <!-- 호텔스토리 -->
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
                <th class="text-center">숙소번호</th>
                <th class="text-center">숙소명</th>
                <th class="text-center">구분</th>
                <th class="text-center text-red">사용</th>
                <th class="text-center">등록일</th>
                <th class="text-center">지역</th>
                <th class="text-center text-red">
                  서류
                  <br>사업자 허가증 계좌
                </th>
                <th class="text-center text-red">추천</th>
                <th class="text-center">평점</th>
                <th class="text-center text-red">리뷰</th>
                <th class="text-center text-red">주차</th>
                <th class="text-center">숙소정보</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(detail, index) in hotelStoryDetails"
                :key="index"
              >
                <td class="text-center">{{ detail.no }}</td>
                <td class="text-center">{{ detail.id }}</td>
                <td class="text-center">{{ detail.name }}</td>
                <td class="text-center">{{ detail.type }}</td>
                <td class="text-center text-red">없음</td>
                <td class="text-center">{{ detail.date }}</td>
                <td class="text-center">{{ detail.address }}</td>
                <td class="text-center text-red">없음 없음 없음</td>
                <td class="text-center text-red">없음</td>
                <td class="text-center">{{ detail.rating }}</td>
                <td class="text-center">없음</td>
                <td class="text-center">없음</td>
                <td class="text-center">
                  <v-btn color="primary" @click="dialog1 = true">
                    숙소정보1
                  </v-btn>
                  <v-dialog v-model="dialog1" height="30%" width="33%">
                    <v-card width="500%">
                      <v-card-text>
                        <AccommodationInformation1 />
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer />
                        <v-btn @click="dialog1 = false" text>닫기</v-btn>
                        <v-btn @click="dialog1 = false" text>저장</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  <v-btn color="primary" @click="dialog1 = true">
                    숙소정보1
                  </v-btn>
                  <v-dialog v-model="dialog1" height="30%" width="33%">
                    <v-card width="525%">
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
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text @click="dialog1 = false">닫기</v-btn>
                        <v-btn text @click="dialog1 = false">저장</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  <v-btn color="primary" @click="dialog1 = true">숙소정보1</v-btn>
                  <v-dialog v-model="dialog1" hide-overlay persistent>
                    <v-card>
                      <v-card-text :disabled="dialog1" :loading="dialog1">
                        <v-progress-circular indeterminate color="primary"></v-progress-circular>
                      </v-card-text>
                      <v-card-text>
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
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text @click="dialog1 = false">닫기</v-btn>
                        <v-btn text @click="dialog1 = false">저장</v-btn>
                      </v-card-actions>
                      </v-card-text>
                    </v-card>
                  </v-dialog>
                  <v-btn color="primary" @click="dialog2 = true">
                    숙소정보2
                  </v-btn>
                  <v-dialog v-model="dialog2">
                    <v-card>
                      <v-card-text>
                        <AccommodationInformation2 />
                      </v-card-text>
                      <v-card-actions>
                        <v-btn color="primary" block @click="dialog2 = false">닫기</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  <v-btn color="primary" @click="dialog3 = true">
                    안내문구
                  </v-btn>
                  <v-dialog v-model="dialog3">
                    <v-card>
                      <v-card-text>
                        <GuidePhrase />
                      </v-card-text>
                      <v-card-actions>
                        <v-btn color="primary" block @click="dialog3 = false">닫기</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  <v-btn color="primary" @click="dialog4 = true">
                    갤러리
                  </v-btn>
                  <v-dialog v-model="dialog4">
                    <v-card>
                      <v-card-text>
                        <GalleryVue />
                      </v-card-text>
                      <v-card-actions>
                        <v-btn color="primary" block @click="dialog4 = false">닫기</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  <v-btn color="primary" @click="dialog5 = true">
                    편의시설
                  </v-btn>
                  <v-dialog v-model="dialog5">
                    <v-card>
                      <v-card-text>
                        <AmenitiesVue1 />
                      </v-card-text>
                      <v-card-actions>
                        <v-btn color="primary" block @click="dialog5 = false">닫기</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </td>
              </tr>
            </tbody>
          </template>
        </v-table>
      </v-card>
      <div class="text-center">
        <v-pagination v-model="page" :length="totalPage" @click="hotelStory_accommodation_list()"></v-pagination>
      </div>
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
                <th class="text-center">숙소번호</th>
                <th class="text-center">숙소명</th>
                <th class="text-center">구분</th>
                <th class="text-center">사용</th>
                <th class="text-center">등록일</th>
                <th class="text-center">지역</th>
                <th class="text-center text-red">
                  서류
                  <br>사업자 허가증 계좌
                </th>
                <th class="text-center text-red">추천</th>
                <th class="text-center">평점</th>
                <th class="text-center text-red">리뷰</th>
                <th class="text-center text-red">주차</th>
                <th class="text-center">숙소정보</th>
              </tr>
            </thead>
            <tbody>
              <div class="text-right">
                <v-progress-circular indeterminate color="primary" v-if="loading"></v-progress-circular>
              </div>
              <tr
                v-for="(detail, index) in ondaDetails"
                :key="index"
              >
                <td class="text-center">{{ detail.no }}</td>
                <td class="text-center">{{ detail.id }}</td>
                <td class="text-center">{{ detail.name }}</td>
                <td class="text-center">{{ detail.classifications }}</td>
                <td class="text-center">{{ detail.yn }}</td>
                <td class="text-center">{{ detail.date }}</td>
                <td class="text-center">{{ detail.address }}</td>
                <td class="text-center">없음 없음 없음</td>
                <td class="text-center">없음</td>
                <td class="text-center">{{ detail.rating }}</td>
                <td class="text-center">없음</td>
                <td class="text-center">없음</td>
                <td class="text-center">
                  <v-btn color="primary" @click="dialog1 = true">
                    숙소정보1
                  </v-btn>
                  <v-dialog v-model="dialog1" height="30%" width="33%">
                    <v-card width="500%">
                      <v-card-text>
                        <AccommodationInformation1 />
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer />
                        <v-btn @click="dialog1 = false" text>닫기</v-btn>
                        <v-btn @click="dialog1 = false" text>저장</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  <v-btn color="primary" @click="dialog1 = true">
                    숙소정보1
                  </v-btn>
                  <v-dialog v-model="dialog1" height="30%" width="33%">
                    <v-card width="525%">
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
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text @click="dialog1 = false">닫기</v-btn>
                        <v-btn text @click="dialog1 = false">저장</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  <v-btn color="primary" @click="dialog1 = true">숙소정보1</v-btn>
                  <v-dialog v-model="dialog1" hide-overlay persistent>
                    <v-card>
                      <v-card-text :disabled="dialog1" :loading="dialog1">
                        <v-progress-circular indeterminate color="primary"></v-progress-circular>
                      </v-card-text>
                      <v-card-text>
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
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text @click="dialog1 = false">닫기</v-btn>
                        <v-btn text @click="dialog1 = false">저장</v-btn>
                      </v-card-actions>
                      </v-card-text>
                    </v-card>
                  </v-dialog>
                  <v-btn color="primary" @click="dialog2 = true">
                    숙소정보2
                  </v-btn>
                  <v-dialog v-model="dialog2">
                    <v-card>
                      <v-card-text>
                        <AccommodationInformation2 />
                      </v-card-text>
                      <v-card-actions>
                        <v-btn color="primary" block @click="dialog2 = false">닫기</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  <v-btn color="primary" @click="dialog3 = true">
                    안내문구
                  </v-btn>
                  <v-dialog v-model="dialog3">
                    <v-card>
                      <v-card-text>
                        <GuidePhrase />
                      </v-card-text>
                      <v-card-actions>
                        <v-btn color="primary" block @click="dialog3 = false">닫기</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  <v-btn color="primary" @click="dialog4 = true">
                    갤러리
                  </v-btn>
                  <v-dialog v-model="dialog4">
                    <v-card>
                      <v-card-text>
                        <GalleryVue />
                      </v-card-text>
                      <v-card-actions>
                        <v-btn color="primary" block @click="dialog4 = false">닫기</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  <v-btn color="primary" @click="dialog5 = true">
                    편의시설
                  </v-btn>
                  <v-dialog v-model="dialog5">
                    <v-card>
                      <v-card-text>
                        <AmenitiesVue1 />
                      </v-card-text>
                      <v-card-actions>
                        <v-btn color="primary" block @click="dialog5 = false">닫기</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </td>
              </tr>
            </tbody>
          </template>
        </v-table>
      </v-card> -->
      <!-- <div class="text-center">
        <v-pagination v-model="page" :length="totalPage" @click="onda_accommodation_list()"></v-pagination>
      </div> -->
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios';
import AccommodationInformation1 from '../modal/accommodationlist/AccommodationInformation1.vue';
import AccommodationInformation2 from '../modal/accommodationlist/AccommodationInformation2.vue';
import GuidePhrase from '../modal/accommodationlist/GuidePhrase.vue';
import GalleryVue from '../modal/accommodationlist/GalleryVue.vue';
import AmenitiesVue1 from '../modal/accommodationlist/AmenitiesVue1.vue';
export default {
  name: 'AccommodationList',
  components: {
    AccommodationInformation1,
    AccommodationInformation2,
    GuidePhrase,
    GalleryVue,
    AmenitiesVue1
  },
  data () {
    return {
      no: 0,
      id: '',
      number: '',
      name: '',
      type: '',
      date: '',
      address: '',
      rating: '',
      dialog1: false,
      dialog2: false,
      dialog3: false,
      dialog4: false,
      dialog5: false,
      hotelStoryDetails: [],
      ondaDetails: [],
      loading: true,
      page: 1,
      totalPage: 0,
      length: 0,
      // perPage: 1
    }
  },
  // watch: {
  //   dialog1(val) {
  //     if(!val) return

  //     setTimeout(() => (this.dialog1 = false), 4000);
  //   }
  // },
  created() {
    this.hotelStory_accommodation_list();
    // this.onda_accommodation_list();
  },
  methods: {
    hotelStory_accommodation_list() {
      let path = "http://" + window.location.hostname + ":5000/hotelStory-accommodation-list";

      axios.post(path).then((response) => {
        this.hotelStoryDetails = response.data.hotelStory;
        this.loading = false;
        this.length = this.hotelStoryDetails.length;
        this.totalPage = Math.ceil(this.length / 10);

        console.log(response);
      }).catch((error) => {
        console.log(error);
      });
    },
    // onda_accommodation_list() {
    //   let path = "http://" + window.location.hostname + ":5000/onda-accommodation-list";
    //   let start = this.length * this.perPage;
    //   console.log(start);
    //   let formData = new FormData();

    //   formData.append("start", start)
    //   axios.post(path).then((response) => {
    //     this.ondaDetails = response.data.onda;
    //     this.loading = false;
    //     this.length = this.ondaDetails.length
    //     this.totalPage = Math.ceil(this.length / 10);
    //   }).catch((error) => {
    //     console.log(error);
    //   });
    // }
  }
};
</script>
<style scoped>
  .v-progress-circular {
    margin: 1rem;
  }
</style>