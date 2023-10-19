<template>
  <v-sheet>
    <FewHoursSection
      :cardListProp="cardList"
      :contentHeadingProp="contentHeading"
      :totalSlidesProp="totalSlides"
    />
    <SliderCardHome
      :cardListProp="cardList"
      :contentHeadingProp="contentHeading"
      :totalSlidesProp="totalSlides"
    />

    <SliderCardHome
      :cardListProp="cardList"
      contentHeadingProp="Plan a trip with help from local Hosts around the world"
      :totalSlidesProp="totalSlides"
    />
  </v-sheet>
</template>

<script setup>
import { ref } from "vue";
import SliderCardHome from "./SliderCardHome.vue";
import FewHoursCardComponent from "./FewHoursCardComponent.vue";
import FewHoursSection from "./FewHoursSection.vue"
import { nanoid } from "nanoid";

const cardList = ref([
  {
    id: nanoid(),
    cardAvgRating: "5.5",
    cardTotalReview: "345",
    cardCountry: "Poland",
    cardTitle: "Origami - Learn the Paper Magic",
    cardPrice: "1114",
    cardImgList: [
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_8.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_21.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_22.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_4.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_5.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_11.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_7.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_20.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_9.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_10.png"),
        id: nanoid(),
      },
    ],
  },
  {
    id: nanoid(),
    cardAvgRating: "5.5",
    cardTotalReview: "345",
    cardCountry: "Poland",
    cardTitle: "Origami - Learn the Paper Magic",
    cardPrice: "1114",
    cardImgList: [
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_8.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_21.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_22.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_4.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_5.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_11.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_7.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_20.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_9.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_10.png"),
        id: nanoid(),
      },
    ],
  },
  {
    id: nanoid(),
    cardAvgRating: "5.5",
    cardTotalReview: "345",
    cardCountry: "Poland",
    cardTitle: "Origami - Learn the Paper Magic",
    cardPrice: "1114",
    cardImgList: [
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_8.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_21.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_22.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_4.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_5.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_11.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_7.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_20.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_9.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_10.png"),
        id: nanoid(),
      },
    ],
  },
  {
    id: nanoid(),
    cardAvgRating: "5.5",
    cardTotalReview: "345",
    cardCountry: "Poland",
    cardTitle: "Origami - Learn the Paper Magic",
    cardPrice: "1114",
    cardImgList: [
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_8.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_21.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_22.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_4.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_5.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_11.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_7.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_20.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_9.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_10.png"),
        id: nanoid(),
      },
    ],
  },
  {
    id: nanoid(),
    cardAvgRating: "5.5",
    cardTotalReview: "345",
    cardCountry: "Poland",
    cardTitle: "Origami - Learn the Paper Magic",
    cardPrice: "1114",
    cardImgList: [
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_8.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_21.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_22.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_4.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_5.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_11.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_7.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_20.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_9.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_10.png"),
        id: nanoid(),
      },
    ],
  },
  {
    id: nanoid(),
    cardAvgRating: "5.5",
    cardTotalReview: "345",
    cardCountry: "Poland",
    cardTitle: "Origami - Learn the Paper Magic",
    cardPrice: "1114",
    cardImgList: [
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_8.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_21.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_22.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_4.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_5.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_11.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_7.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_20.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_9.png"),
        id: nanoid(),
      },
      {
        src: require("@/assets/CardImg/air_bubble_app_pic_10.png"),
        id: nanoid(),
      },
    ],
  },
]);
const contentHeading = ref("Top sellers");
const totalSlides = ref(45);
</script>

<style scoped></style>
