<template>
  <v-sheet>
    <v-dialog v-model="showAllAmenities" class="dialog-style" width="600">
      <v-card class="rounded-lg">
        <v-card-title class="pl-4 pb-4">
          <v-row>
            <v-spacer></v-spacer>
           
              <v-btn icon fab plain @click="showAllAmenities = false">
                <v-icon color="black">mdi-close</v-icon>
              </v-btn>
           
          </v-row>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col v-for="ament in typeOfAmenities" :key="ament" cols="12"
              ><span class="text-body-1 font-weight-medium mb-2 title-color">{{
                ament
              }}</span>
              <v-row
                v-for="(list, indx) in placeOffersAmenities[ament]"
                :key="indx"
              >
                <v-col cols="12" class="d-flex align-center flex-column">
                  <span class="divider-style">
                    <span class="pr-3">
                      <v-icon color="black">{{ list.icon }}</v-icon>
                    </span>
                    <span
                      v-if="ament === 'Not Included'"
                      class="pl-2 text-decoration-line-through"
                    >
                      {{ list.name }}
                    </span>
                    <span v-else class="pl-2">
                      {{ list.name }}
                    </span>
                  </span>
                  <v-divider class="divider-style"></v-divider>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
    <div class="ml-3 text-h6">What this place offers</div>
    <v-row class="ml-1 mt-2">
      <v-col
        cols="6"
        v-for="(amenities, indx) in placeOffersAmenitiesShort"
        :key="indx"
        class="d-flex align-center pa-1"
      >
        <span class="pa-1"
          ><v-icon>{{ amenities.icon }}</v-icon>
        </span>
        <span
          :class="
            amenities.notIncluded
              ? 'pa-1 mt-1 font-weight-light text-decoration-line-through'
              : 'pa-1 mt-1 font-weight-light'
          "
          >{{ amenities.name }}</span
        >
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn
          large
          class="text-none rounded-lg"
          outlined
          @click="showAllAmenities = true"
        >
          Show all amenities
        </v-btn>
      </v-col>
    </v-row>
    <v-divider class="mt-8 mb-4"></v-divider>
  </v-sheet>
</template>

<script setup>
import { ref } from "vue";

const showAllAmenities = ref(false);
const placeOffersAmenities = ref({
  Entertainment: [
    { name: "TV", icon: "mdi-television-classic" },
    { name: "Pool table", icon: "mdi-billiards" },
  ],
  Bathroom: [
    { name: "Hair dryer", icon: "mdi-hair-dryer" },
    { name: "Shower", icon: "mdi-shower-head" },
    { name: "Bathtub", icon: "mdi-bathtub-outline" },
  ],
  "Home Safety": [
    { name: "Security cameras on property", icon: "mdi-cctv" },
    { name: "First aid kit", icon: "mdi-medical-bag" },
  ],
  "Internet And Office": [
    { name: "Wifi", icon: "mdi-wifi" },
    { name: "Dedicated workspace", icon: "mdi-table-chair" },
  ],
  Outdoor: [
    { name: "Fire pit", icon: "mdi-fireplace" },
    { name: "Outdoor dining area", icon: "mdi-food-turkey" },
    { name: "BBQ grill", icon: "mdi-grill-outline" },
  ],
  "Parking And Facilities": [
    { name: "Free parking on premises", icon: "mdi-car-back" },
  ],
  Services: [{ name: "Smoking allowed", icon: "mdi-smoking" }],
  "Not Included": [
    { name: "Washing machine", icon: "mdi-washing-machine-off" },
    { name: "Air conditioning", icon: "mdi-air-purifier-off" },
    { name: "Water heater", icon: "mdi-water-boiler-off" },
    { name: "Piano", icon: "mdi-piano-off" },
    { name: "Smoke alarm", icon: "mdi-smoke-detector-off-outline" },
    { name: "Desk lamp", icon: "mdi-desk-lamp-off" },
  ],
});

const typeOfAmenities = ref([
  "Entertainment",
  "Bathroom",
  "Home Safety",
  "Internet And Office",
  "Outdoor",
  "Parking And Facilities",
  "Services",
  "Not Included",
]);

const placeOffersAmenitiesShort = ref([
  { notIncluded: false, name: "TV", icon: "mdi-television-classic" },
  { notIncluded: false, name: "Pool table", icon: "mdi-billiards" },
  { notIncluded: false, name: "Hair dryer", icon: "mdi-hair-dryer" },
  { notIncluded: false, name: "Shower", icon: "mdi-shower-head" },
  { notIncluded: false, name: "Bathtub", icon: "mdi-bathtub-outline" },
  {
    notIncluded: false,
    name: "Security cameras on property",
    icon: "mdi-cctv",
  },
  { notIncluded: false, name: "First aid kit", icon: "mdi-medical-bag" },
  { notIncluded: true, name: "Water heater", icon: "mdi-water-boiler-off" },
  { notIncluded: true, name: "Piano", icon: "mdi-piano-off" },
  {
    notIncluded: true,
    name: "Smoke alarm",
    icon: "mdi-smoke-detector-off-outline",
  },
]);
</script>

<style scoped>
.divider-style {
  width: inherit !important;
  margin-top: 10px !important;
}

.title-color {
    color: black !important;
}
.dialog-style{
    height: 500px;
}
</style>
