<template>
  <v-sheet>
    <v-row class="ml-4 mr-3">
      <v-col class="text-h6 font-weight-bold">{{ contentHeading }}</v-col>
      <v-col class="d-flex justify-end">
        <v-btn plain class="text-none text-decoration-underline">
          Show({{ totalSlides }})
        </v-btn>
      </v-col>
    </v-row>
    <v-slide-group v-model="slideGroupModel" class="ma-3">
      <v-slide-item v-for="sItem in cardList" :key="sItem.id">
        <FewHoursCardComponent
          :cardTitleProp="sItem.cardTitle"
          :cardPriceProp="sItem.cardPrice"
          :cardCountryProp="sItem.cardCountry"
          :cardTotalReviewProp="sItem.cardTotalReview"
          :cardAvgRatingProp="sItem.cardAvgRating"
          :cardImgListProp="sItem.cardImgList"
        />
        <!-- <v-card flat width="300" height="max-content" class="ma-1 rounded-xl">
              <v-card-title class="pa-0 pb-4 rounded-lg">
                <v-carousel hide-delimiter-background hide-delimiters height="400" :continuous="carouselCountinuousControll">
                  <v-carousel-item
                   v-for="(carouselItem) in sItem.cardImgList"
                   :key="carouselItem.id"
                  >
                 <img :src="carouselItem.src" width="300" height="400" img-fluid  class="rounded-xl">
                </v-carousel-item>
                </v-carousel>
              </v-card-title>
              <v-card-subtitle class="ma-0 pa-0">
                <div>
                  <span class="pt-2 pb-2 pr-1"><v-icon small class="pa-0" color="black">mdi-star</v-icon></span>
                  <span class="pt-2 pb-2 pr-1">{{ sItem.cardAvgRating }}</span>
                  <span class="pt-2 pb-2">({{ sItem.cardTotalReview }})</span>
                  <span class="pt-2 pb-2"><v-icon x-small>mdi-circle-small</v-icon></span>
                  <span class="pt-2 pb-2 text-caption">{{ sItem.cardCountry }}</span>
                </div>
                <div class="mt-2 text-body-1">
                  {{ sItem.cardTitle }}
                </div>
                <div class="mt-2 d-flex align-center">
                  <span class="text-subtitle-1 font-weight-medium mr-1">From</span>
                  <v-icon small class="mr-0 pr-0">mdi-currency-rupee</v-icon>
                  <span class="text-subtitle-1 font-weight-medium">{{sItem.cardPrice}}</span>
                  <span> / person</span>
                </div>
              </v-card-subtitle>
            </v-card> -->
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script setup>
import { onMounted, ref, defineProps, watch } from "vue";
import { nanoid } from "nanoid";
import SliderCardComponent from "./SliderCardComponent.vue";
import FewHoursCardComponent from "./FewHoursCardComponent.vue";
const carouselCardModel = ref();
const slideGroupModel = ref();
const carouselCountinuousControll = ref(false);
const props = defineProps([
  "cardListProp",
  "contentHeadingProp",
  "totalSlidesProp",
]);
const cardList = ref(props.cardListProp);
const contentHeading = ref(props.contentHeadingProp);
const totalSlides = ref(props.totalSlidesProp);
// const cardImgList = ref([{ url: "" }]);
// const cardAvgRating = ref();
// const cardTotalReview = ref();
// const cardCountry = ref();
// const cardTitle = ref();
// const cardPrice = ref();

watch(
  [
    () => props.cardListProp,
    () => props.contentHeadingProp,
    () => props.totalSlidesProp,
  ],
  () => {
    console.log("watch", props.cardListProp);
    cardList.value = props.cardListProp;
    contentHeading.value = props.contentHeadingProp;
    totalSlides.value = props.totalSlidesProp;
  },
  { deep: true }
);
onMounted(() => {
  console.log("Mounted SliderCardHome", cardList, props.cardListProp);
});
</script>

<style scoped></style>
