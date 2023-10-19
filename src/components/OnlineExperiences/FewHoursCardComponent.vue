<template>
  <v-card class="card-style" flat>
    <v-card-title class="ma-0 pa-0">
      <v-row class="ma-0 pa-0">
        <v-col class="ma-0 pa-0 d-flex">
          <v-carousel
            hide-delimiter-background
            hide-delimiters
            :show-arrows="false"
            :cycle="carouselCountinuousControll"
            interval="2000"
            class="rounded-xl"
            height="210"
          >
            <v-carousel-item
              v-for="carouselItem in cardImgList"
              :key="carouselItem.id"
              reverse-transition="scale-transition"
              transition="scale-transition"
              style="transition-duration: 2s"
            >
              <v-img
                :src="carouselItem.src"
                img-fluid
                width="160"
                height="200"
                class="rounded-xl ma-2"
              >
              </v-img>
            </v-carousel-item>
          </v-carousel>
        </v-col>
        <v-col>
          <v-row>
            <v-col>
              <div class="d-flex justify-end">
                <v-icon>mdi-heart-outline</v-icon>
              </div>
              <div>
                <span class="pt-2 pb-2 pr-1"
                  ><v-icon small class="pa-0" color="black"
                    >mdi-star</v-icon
                  ></span
                >
                <span class="pt-2 pb-2 pr-1">{{ cardAvgRating }}</span>
                <span class="pt-2 pb-2">({{ cardTotalReview }})</span>
                <span class="pt-2 pb-2"
                  ><v-icon x-small>mdi-circle-small</v-icon></span
                >
                <span class="pt-2 pb-2 text-caption">{{ cardCountry }}</span>
              </div>
              <div class="mt-2 text-body-1">
                {{ cardTitle }}
              </div>
              <div class="mt-2 d-flex align-center">
                <span class="text-subtitle-1 font-weight-medium mr-1"
                  >From</span
                >
                <v-icon small class="mr-0 pr-0">mdi-currency-rupee</v-icon>
                <span class="text-subtitle-1 font-weight-medium">{{
                  cardPrice
                }}</span>
                <span> / person</span>
              </div>
              <div class="d-flex ">
                <v-sheet class="time-sheet-style text-subtitle-2" v-for="time in timeSlotList" :key="time">
                {{ time }}
                </v-sheet>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card-title>
  </v-card>
</template>

<script setup>
import { ref, defineProps, watch } from "vue";

const carouselCountinuousControll = ref(true);

const props = defineProps([
  "cardTitleProp",
  "cardPriceProp",
  "cardCountryProp",
  "cardTotalReviewProp",
  "cardAvgRatingProp",
  "cardImgListProp",
]);
const cardTitle = ref(props.cardTitleProp);
const cardPrice = ref(props.cardPriceProp);
const cardCountry = ref(props.cardCountryProp);
const cardTotalReview = ref(props.cardTotalReviewProp);
const cardAvgRating = ref(props.cardAvgRatingProp);
const cardImgList = ref(props.cardImgListProp);
const timeSlotList = ref([
    "11:00 pm",
    "03:20 pm",
    "11:30 am"
])
watch(
  [
    () => props.cardTitleProp,
    () => props.cardPriceProp,
    () => props.cardCountryProp,
    () => props.cardTotalReviewProp,
    () => props.cardAvgRatingProp,
    () => props.cardImgListProp,
  ],
  () => {
    cardTitle.value = props.cardTitleProp;
    cardPrice.value = props.cardPriceProp;
    cardCountry.value = props.cardCountryProp;
    cardTotalReview.value = props.cardTotalReviewProp;
    cardAvgRating.value = props.cardAvgRatingProp;
    cardImgList.value = props.cardImgListProp;
  }
);
</script>

<style scoped>
.card-style {
    border: 1px solid rgb(185, 185, 185);
    border-radius: 30px;
    padding: 0px;
    margin: 5px;
    height: 215px;
}

.time-sheet-style {
    border: 1px solid black;
    border-radius: 10px;
    width: max-content;
    height: max-content;
    padding: 2px;
    margin: 3px;

}
</style>
