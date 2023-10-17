<template>
  <v-sheet>
    <v-row >
      <v-col class="text-h6 font-weight-bold">{{ contentHeading }}</v-col>
      <v-col class="d-flex justify-end">
      <v-btn plain class="text-none text-decoration-underline">
        Show({{ totalSlides }})
        </v-btn>  
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script setup>
import { ref } from "vue";

const cardList = ref([
  {
    cardAvgRating: "5.5",
    cardTotalReview: "345",
    cardCountry: "Poland",
    cardTitle: "Origami - Learn the Paper Magic",
    cardPrice: "1114",
    cardImgList:[
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
  },
]);
const contentHeading = ref("Top sellers");
const totalSlides = ref(45)
// const cardImgList = ref([{ url: "" }]);
// const cardAvgRating = ref();
// const cardTotalReview = ref();
// const cardCountry = ref();
// const cardTitle = ref();
// const cardPrice = ref();
</script>

<style scoped></style>
