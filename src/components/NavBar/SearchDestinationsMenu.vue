<template>
  <v-sheet>
    <v-card width="500">
      <v-card-title>
        <div class="text-subtitle-2 mb-5 mt-6">Search by region</div>
      </v-card-title>
      <v-card-subtitle>
        <v-item-group mandatory v-model="selectedDestiny">
          <v-row>
            <v-col
              cols="4"
              v-for="mapItem in regionMaps"
              :key="mapItem.country"
            >
              <v-item v-slot="{ active, toggle }" >
                <div @click="toggle">
                  <v-img
                    :src="mapItem.map"
                    :class="
                      active
                        ? 'rounded-xl map-img-active'
                        : 'rounded-xl map-img'
                    "
                    width="130"
                    height="130"
                  ></v-img>
                </div>
              </v-item>
              <div class="pa-2">{{ mapItem.country }}</div>
            </v-col>
          </v-row>
        </v-item-group>
      </v-card-subtitle>
    </v-card>
  </v-sheet>
</template>

<script setup>
import { ref, defineProps, watch, defineEmits } from "vue";

const openSearchDestinationsMenu = ref(false);
const selectedDestiny = ref();
const props = defineProps(["openSearchDestinationsMenu"]);
const emits = defineEmits(["destination-selection"]);
const regionMaps = ref([
  {
    country: "I'm flexible",
    map: require("@/assets/search_destinations_img/all_countries.jpg"),
  },
  {
    country: "Europe",
    map: require("@/assets/search_destinations_img/europe.jpg"),
  },
  {
    country: "United Kingdom",
    map: require("@/assets/search_destinations_img/united_kingdom.jpg"),
  },
  {
    country: "Southeast Asia",
    map: require("@/assets/search_destinations_img/southeast_asia.jpg"),
  },
  {
    country: "Canada",
    map: require("@/assets/search_destinations_img/canada.jpg"),
  },
  {
    country: "United States",
    map: require("@/assets/search_destinations_img/united_states.jpg"),
  },
]);

watch(
  () => props.openSearchDestinationsMenu,
  () => {
    openSearchDestinationsMenu.value = true;
  }
);

watch(selectedDestiny, () => {
  emits("destination-selection", {
    destiny: selectedDestiny,
  });
});
</script>

<style scoped>
.map-img {
  box-shadow: 0px 0px 2px rgb(114, 114, 114);
}
.map-img:hover {
  border: 1px solid black;
}

.map-img-active {
  border: 2px solid black;
}
</style>
