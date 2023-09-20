<template>
  <v-sheet>
    <v-row class="text-h6 font-weight-bold">
      <span class="ma-1">
        <v-icon color="black"> mdi-star </v-icon>
      </span>
      <span class="ma-1">
        {{ avgReview }}
      </span>
      <span class="mt-1 mb-1">
        <v-icon> mdi-circle-small </v-icon>
      </span>
      <span class="ma-1">
        {{ totolReview }}
      </span>
      <span class="ma-1"> review </span>
    </v-row>
    <v-row>
      <v-col class="col-6" v-for="(aspect, indx) in reviewAspect" :key="indx">
        <v-row>
          <v-col>{{ aspect.name }}</v-col>
          <v-col>
            <v-row>
              <v-col class="d-flex justify-center align-center">
                <v-progress-linear color="black" :value="aspect.value * 20"></v-progress-linear>
              </v-col>
              <v-col>
                {{ aspect.value }}
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
   <div>
    <v-row class="pt-3 mt-5 mb-0">
      <v-col cols="col-xs-2 col-sm-2 col-md-1 col-lg-1 col-xl-1">
        <v-img
          :src="reviewImg.src"
          width="60"
          height="60"
          class="rounded-pill"
        ></v-img>
      </v-col>
      <v-col class="mb-0 pa-0 d-flex flex-column justify-center align-start">
        <div class="text-h6 font-weight-medium">{{ reviewerName }}</div>
        <div class="text-subtitle-2">{{ reviewDate }}</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="mt-0 pt-0 text-subtitle-1 font-weight-light">
        {{ reviewContent }}
      </v-col>
    </v-row>
</div>
  </v-sheet>
</template>

<script setup>
import { ref } from "vue";

const reviewImg = {
  src: require("../../assets/CardImg/comment.png"),
};
const reviewDate = ref("August 2023");
const reviewerName = ref("Shubhangini");
const reviewContent = ref(
  "Its hugeeeeee i loved the villa. One of the cleanest place i have been to..the place is very spacious with a very cozy living room beautiful bedrooms and everything was just perfect. I felt right at home"
);
const totolReview = ref("1");
const avgReview = ref("5.0");

const reviewAspect = ref([
  { name: "Cleanliness", value: "5.0" },
  { name: "Accuracy", value: "3.0" },
  { name: "Communication", value: "1.0" },
  { name: "Location", value: "5.0" },
  { name: "Check-in", value: "5.0" },
  { name: "Value", value: "4.0" },
]);
</script>

<style scoped></style>
