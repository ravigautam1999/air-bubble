<template>
  <v-sheet>
    <v-row class="ml-4 mr-4">
      <v-col
        class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 mr-0 pr-0"
        v-for="(listData, indx) in dataCollecttion"
        :key="indx"
      >
        <v-container class="ma-0 pa-2">
          <v-card flat class="ma-0 pa-0 rounded-xl" width="auto" to="about">
            <v-card-title class="pa-0">
              <v-carousel
                class="rounded-xl"
                height="400"
                show-arrows-on-hover
                hide-delimiters
                :continuous="false"
              >
                <v-carousel-item
                  v-for="(item, i) in listData.colls"
                  :key="i"
                  :src="item.src"
                  reverse-transition="fade-transition"
                  transition="fade-transition"
                >
                  <template v-slot:default>
                    <div class="d-flex justify-end pa-1">
                      <v-btn
                        icon
                        fab
                        @click='
                          () => {
                            listData.likeProperty = !listData.likeProperty;
                            if (listData.likeProperty === true) {
                              listData.closeSnackBar = true;
                            }
                          }
                        '
                      >
                        <v-icon
                          large
                          :color="
                            listData.likeProperty === true ? 'red' : 'black'
                          "
                          style="text-shadow: 0px 0px 10px rgb(255, 255, 255)"
                          >mdi-heart
                        </v-icon>
                      </v-btn>
                    </div>
                  </template>
                </v-carousel-item>
              </v-carousel>
            </v-card-title>
            <v-card-subtitle>
              <div>
                <v-row justify="center" class="pt-3">
                  <v-col cols="9" class="text-subtitle-2">
                    {{ listData.locs }}
                  </v-col>
                  <v-col cols="3">
                    <v-icon small color="black" class="pr-1 pb-1"
                      >mdi-star</v-icon
                    >
                    <span>{{ listData.ratings }}</span>
                  </v-col>
                </v-row>
              </div>
              <div>{{ listData.beds }}</div>
              <div class="pt-3">
                <span class="font-weight-bold">
                  <v-icon small color="black">mdi-currency-rupee</v-icon>
                  {{ listData.amount }}
                </span>
                <span>month</span>
              </div>
            </v-card-subtitle>
          </v-card>
          <v-snackbar v-model="listData.closeSnackBar" timeout="2000">
            <v-row class="pa-2"
              ><span>You liked property </span>
              <v-spacer></v-spacer>
              <v-icon @click="listData.closeSnackBar = false" color="white"
                >mdi-close</v-icon
              >
            </v-row>
          </v-snackbar>
        </v-container>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script setup>
import { ref } from "vue";

const ratingVal = ref(4.8);
const likePropertyColor = ref("black");
const likeProperty = ref(false);
const closeSnackBar = ref(false);
const progressTimeout = ref(6);

const dataCollecttion = ref([
  {
    id: 1,
    colls: [
      { src: require("@/assets/CardImg/air_bubble_app_pic_13.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_14.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_3.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_4.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_5.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_11.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_7.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_8.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_9.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_10.png") },
    ],
    locs: "Athuruga Island, Maldives",
    beds: "1 queen bed",
    ratings: "4.1",
    amount: "20,55,635",
    likeProperty: false,
    closeSnackBar: false,
  },
  {
    id: 2,
    colls: [
      { src: require("@/assets/CardImg/air_bubble_app_pic_15.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_16.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_3.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_4.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_5.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_11.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_7.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_8.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_9.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_10.png") },
    ],
    locs: "Fihalholi, Maldives",
    beds: "2 beds",
    ratings: "4.9",
    amount: "14,00,701",
    likeProperty: false,
    closeSnackBar: false,
  },
  {
    id: 3,
    colls: [
      { src: require("@/assets/CardImg/air_bubble_app_pic_17.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_18.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_19.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_4.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_5.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_11.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_7.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_8.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_9.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_10.png") },
    ],
    locs: "Seetla, India",
    beds: "1 king bed",
    ratings: "5.0",
    amount: "1,51,886",
    likeProperty: false,
    closeSnackBar: false,
  },
  {
    id: 4,
    colls: [
      { src: require("@/assets/CardImg/air_bubble_app_pic_20.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_21.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_22.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_4.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_5.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_11.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_7.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_8.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_9.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_10.png") },
    ],
    locs: "Matakhani, India",
    beds: "4 double beds",
    ratings: "4.4",
    amount: "2,50,138",
    likeProperty: false,
    closeSnackBar: false,
  },
  {
    id: 5,
    colls: [
      { src: require("@/assets/CardImg/air_bubble_app_pic_2.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_14.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_3.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_4.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_5.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_11.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_7.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_8.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_9.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_10.png") },
    ],
    locs: "Athuruga Island, Maldives",
    beds: "1 queen bed",
    ratings: "4.1",
    amount: "20,55,635",
    likeProperty: false,
    closeSnackBar: false,
  },
  {
    id: 6,
    colls: [
      { src: require("@/assets/CardImg/air_bubble_app_pic_7.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_16.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_3.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_4.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_5.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_11.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_15.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_8.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_9.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_10.png") },
    ],
    locs: "Fihalholi, Maldives",
    beds: "2 beds",
    ratings: "4.9",
    amount: "14,00,701",
    likeProperty: false,
    closeSnackBar: false,
  },
  {
    id: 7,
    colls: [
      { src: require("@/assets/CardImg/air_bubble_app_pic_9.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_18.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_19.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_4.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_5.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_11.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_7.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_8.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_17.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_10.png") },
    ],
    locs: "Seetla, India",
    beds: "1 king bed",
    ratings: "5.0",
    amount: "1,51,886",
    likeProperty: false,
    closeSnackBar: false,
  },
  {
    id: 8,
    colls: [
      { src: require("@/assets/CardImg/air_bubble_app_pic_8.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_21.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_22.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_4.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_5.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_11.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_7.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_20.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_9.png") },
      { src: require("@/assets/CardImg/air_bubble_app_pic_10.png") },
    ],
    locs: "Matakhani, India",
    beds: "4 double beds",
    ratings: "4.4",
    amount: "2,50,138",
    likeProperty: false,
    closeSnackBar: false,
  },
]);

const items = [
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
  },
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
  },
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
  },
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
  },
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
  },
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
  },
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
  },
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
  },
];

const onLikeProperty = (id) => {
  console.log(id);
  if (likePropertyColor.value === "black") {
    likePropertyColor.value = "red";
    likeProperty.value = true;
  } else {
    likePropertyColor.value = "black";
    likeProperty.value = false;
  }
};

</script>

<style scoped></style>
