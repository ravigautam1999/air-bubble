<template>
  <v-sheet class="ma-6">
    <v-row class="text-h4 font-weight-bold">
      <v-col>New this week</v-col>
      <!-- <v-col class="d-flex justify-end">
        <span>
          <v-btn
            icon
            fab
            color="black"
            :disabled="false"
            class="carousel-button-style"
            x-small
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </span>
        <span>
          <v-btn
            icon
            fab
            color="black"
            :disabled="false"
            x-small
            class="carousel-button-style"
          >
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </span>
      </v-col> -->
    </v-row>

    <v-slide-group v-model="thisWeekModel" :show-arrows="true">
      <v-slide-item v-model="model" v-for="(sItem, indx) in newThisWeekList" :key="indx">
        <v-img
          :src="sItem.img"
          width="auto"
          max-width="500"
          height="300"
          class="ma-2 rounded-xl"
        >
          <div class="this-week-div">
            <div class="text-caption">{{ sItem.title }}</div>
            <div class="text-h6">{{ sItem.subTitle }}</div>
            <div class="this-week-div-button">
              <v-btn class="text-none rounded-lg">
                Show all
              </v-btn>
            </div>
          </div>
        </v-img>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script setup>
import { ref, watch } from "vue";

const thisWeekModel = ref()
const model= ref()
const newThisWeekList = ref([
  {
    title: "Collection",
    subTitle: "Most popular around the world",
    img: require("@/assets/NewThisWeekImg/4.jpg"),
  },
  {
    title: "Collection",
    subTitle: "Easy for itinerary planning",
    img: require("@/assets/NewThisWeekImg/1.jpg"),
  },
  {
    title: "Collection",
    subTitle: "Great for team building",
    img: require("@/assets/NewThisWeekImg/2.jpg"),
  },
  {
    title: "Collection",
    subTitle: "Fun for the family",
    img: require("@/assets/NewThisWeekImg/3.png"),
  },
]);

watch(thisWeekModel, ()=> {
console.log(thisWeekModel)
})
</script>

<style scoped>
.carousel-button-style {
  box-shadow: 0px 0px 1px grey;
  margin-right: 10px !important;
}

.this-week-div {
  height: 85%;
  margin: 20px;
  display: flex;
  flex-direction: column;
  color: white;
}

.this-week-div-button{
  height: inherit;
  display: flex;
  align-items: end;
}

</style>
