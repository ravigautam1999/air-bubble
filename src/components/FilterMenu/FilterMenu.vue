<template>
  <v-sheet>
    <filter-component :isDialogOpen="isDialogOpen"></filter-component>

    <v-row class="ma-0 pa-0 mt-4">
      <v-col
        class="col-xs-12 col-sm-12 col-md-7 col-lg-8 col-xl-8 ma-0 pa-0 d-flex align-center"
      >
        <v-card flat class="">
          <v-tabs background-color="white" color="dark" show-arrows>
            <v-tabs-slider color="black"></v-tabs-slider>
            <v-tab
              class="d-flex flex-column"
              v-for="(tabV, indx) in filterMenuTabList"
              :key="indx"
            >
              <v-icon left>
                {{ tabV.icon }}
              </v-icon>
              <span class="text-subtite-2 text-capitalize mt-2 mb-1">
                {{ tabV.name }}</span
              >
            </v-tab>
          </v-tabs>
        </v-card>
      </v-col>
      <v-col class="col-xs-12 col-sm-12 col-md-5 col-lg-4 col-xl-4 d-flex align-center justify-end">
        <v-row justify="end">
          <v-col
            class="col-xs-4 col-sm-7 col-md-4 col-lg-4 col-xl-4 ma-0 pa-0 d-flex align-center justify-center"
          >
          <v-spacer class="d-md-none"></v-spacer>
            <v-btn x-small plain class="filter-button" @click="openDialog">
              <v-icon left> mdi-pencil </v-icon>
              Filter</v-btn
            >
          </v-col>
          <v-col
            class="col-xs-8 col-sm-5 col-md-8 col-lg-8 col-xl-8 d-flex align-center justify-center"
          >
          <v-spacer></v-spacer>
            <v-btn
              x-small
              plain
              class="filter-button"
              @click="displayTotalBeforeTaxes = !displayTotalBeforeTaxes"
            >
              Display Total before taxes
              <v-switch
                v-model="displayTotalBeforeTaxes"
                color="black"
                class="pl-4"
                @click="displayTotalBeforeTaxes = !displayTotalBeforeTaxes"
              ></v-switch>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script setup>
import FilterComponent from "./FilterComponent.vue";
import { onMounted, ref, watch } from "vue";

const isDialogOpen = ref(false);
const displayTotalBeforeTaxes = ref(false);

const filterMenuTabList = [
  { name: "Farms", icon: "mdi-greenhouse" },
  { name: "Amazing pools", icon: "mdi-pool" },
  { name: "Amazing views", icon: "mdi-window-closed-variant" },
  { name: "Rooms", icon: "mdi-bed-outline" },
  { name: "Lakefront", icon: "mdi-waves" },
  { name: "Top of the world", icon: "mdi-image-filter-hdr-outline" },
  { name: "OMG!", icon: "mdi-ufo-outline" },
  { name: "Cabins", icon: "mdi-hoop-house" },
  { name: "Bed & breakfasts", icon: "mdi-food-outline" },
  { name: "Historical homes", icon: "mdi-eiffel-tower" },
  { name: "Beach", icon: "mdi-umbrella-beach-outline" },
  { name: "Countryside", icon: "mdi-ski-cross-country" },
  { name: "Beachfront", icon: "mdi-sail-boat" },
  { name: "Trending", icon: "mdi-fire" },
  { name: "Tiny homes", icon: "mdi-home-variant-outline" },
  { name: "Castles", icon: "mdi-castle" },
  { name: "Iconic cities", icon: "mdi-temple-buddhist-outline" },
  { name: "Mansions", icon: "mdi-home-modern" },
  { name: "Play", icon: "mdi-gamepad-variant-outline" },
  { name: "Surfing", icon: "mdi-surfing" },
  { name: "Skiing", icon: "mdi-ski" },
  { name: "Containers", icon: "mdi-train-car-container" },
  { name: "Domes", icon: "mdi-dome-light" },
  { name: "Boats", icon: "mdi-sail-boat" },
  { name: "Golfing", icon: "mdi-tunnel-outline" },
  { name: "Grand pianos", icon: "mdi-piano" },
  { name: "Ski-in", icon: "mdi-weather-partly-cloudy" },
  { name: "Towers", icon: "mdi-tower-fire" },
  { name: "Camper vans", icon: "mdi-van-passenger" },
  { name: "Chefs kitchens", icon: "mdi-countertop-outline" },
  { name: "Casas particulares", icon: "mdi-office-building" },
  { name: "Dammusi", icon: "mdi-town-hall" },
  { name: "Lake", icon: "mdi-sail-boat-sink" },
];

const openDialog = () => {
  console.log("open click");
  isDialogOpen.value = !isDialogOpen.value;
};
onMounted(() => {
  console.log("mounted");
});
</script>

<style scoped>
.filter-icon-title {
  font-size: x-small;
}

.filter-button {
  border: 1px solid rgb(65, 64, 64);
  padding: 25px !important;
  border-radius: 10px;
  text-transform: capitalize;
  font-size: 14px;
}

.toggle-button {
  border: 1px solid rgb(65, 64, 64);
  border-radius: 10px;
}
</style>
