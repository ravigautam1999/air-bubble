<template>
    <v-sheet>
      <v-card
        flat
        width="220"
        height="max-content"
        class="ma-1 rounded-xl card-style"
        @mouseover="carouselCountinuousControll = true"
        @mouseleave="carouselCountinuousControll = false"
      >
        <v-card-title class="pa-0 pb-4 rounded-xl">
          <v-carousel
            hide-delimiter-background
            hide-delimiters
            height="300"
            :show-arrows="false"
            :cycle="carouselCountinuousControll"
            interval="2000"
            class="rounded-xl"
          >
            <v-carousel-item
              v-for="carouselItem in cardImgList"
              :key="carouselItem.id"
              reverse-transition="scale-transition"
              transition="scale-transition"
              style="transition-duration: 2s;"
            >
              <v-img
                :src="carouselItem.src"
                width="300"
                height="400"
                img-fluid
                class="rounded-xl"
              >
            <template v-slot:default>
              <div class="d-flex align-end justify-end">
                <v-btn  small icon fab @click.prevent>
                  <v-icon class="like-icon-style" color="black">mdi-heart</v-icon>
                </v-btn>
              </div>
            </template>
            </v-img>
            </v-carousel-item>
          </v-carousel>
        </v-card-title>
        <v-card-subtitle class="ma-0 pa-0">
          <div>
            <span class="pt-2 pb-2 pr-1"
              ><v-icon small class="pa-0" color="black">mdi-star</v-icon></span
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
            <span class="text-subtitle-1 font-weight-medium mr-1">From</span>
            <v-icon small class="mr-0 pr-0">mdi-currency-rupee</v-icon>
            <span class="text-subtitle-1 font-weight-medium">{{
              cardPrice
            }}</span>
            <span> / person</span>
          </div>
        </v-card-subtitle>
      </v-card>
  
      
    </v-sheet>
  </template>
  
  <script setup>
  import { ref, defineProps, onMounted, watch } from "vue";
  
  const carouselCountinuousControll = ref(false);
  
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
  
  const onCardMouseOver = () => {
    console.log("mouse over");
  };
  
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
  onMounted(() => {
    console.log(
      "mounted sliderCardComponent",
      props.cardTitleProp,
      props.cardPriceProp,
      props.cardCountryProp,
      props.cardTotalReviewProp,
      props.cardAvgRatingProp,
      props.cardImgListProp
    );
  });
  </script>
  
  <style scoped>
  .card-style:hover {
    cursor: pointer;
  }
  .like-icon-style{
    text-shadow: 0px 0px 4px white;
  }
  </style>
  