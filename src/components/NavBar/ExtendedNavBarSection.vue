<template>
  <v-row justify="center" v-if="selectedNavTabs !== 2">
    <v-col cols="10" class="rounded-pill extended-height-row-style">
      <v-row>
        <v-menu
          offset-y
          rounded="xl"
          bottom
          :close-on-content-click="false"
          :nudge-bottom="10"
        >
          <template v-slot:activator="{ attrs, on }">
            <v-col cols="4" class="col-style">
              <v-row
                class="d-flex flex-column rounded-pill pl-8"
                v-bind="attrs"
                v-on="on"
              >
                <v-col class="pa-0 text-subtitle-2">Where</v-col>
                <v-col class="pa-0 text-caption">Search destinations</v-col>
              </v-row>
            </v-col>
          </template>
          <SearchDestinationsMenu />
        </v-menu>

        <v-divider vertical class="mt-3 mb-3"></v-divider>
        <v-menu
          offset-y
          rounded="xl"
          bottom
          :close-on-content-click="false"
          :nudge-bottom="10"
        >
          <template v-slot:activator="{ attrs, on }">
            <v-col
              v-bind="attrs"
              v-on="on"
              cols="2"
              class="col-style"
              v-show="props.selectedNavTabs === 0"
            >
              <v-row class="d-flex flex-column rounded-pill pl-8">
                <v-col class="pa-0 text-subtitle-2">Check in</v-col>
                <v-col class="pa-0 text-caption">Add dates</v-col>
              </v-row>
            </v-col>
          </template>
       <AddDateSection/>
        </v-menu>
        <v-divider
          vertical
          class="mt-3 mb-3"
          v-show="props.selectedNavTabs === 0"
        ></v-divider>

        <v-menu
          offset-y
          rounded="xl"
          bottom
          :close-on-content-click="false"
          :nudge-bottom="10"
        >
          <template v-slot:activator="{ attrs, on }">
            <v-col
              v-bind="attrs"
              v-on="on"
              cols="2"
              class="col-style"
              v-show="props.selectedNavTabs === 0"
            >
              <v-row class="d-flex flex-column rounded-pill pl-8">
                <v-col class="pa-0 text-subtitle-2">Check out</v-col>
                <v-col class="pa-0 text-caption">Add dates</v-col>
              </v-row>
            </v-col>
          </template>
        
          <AddDateSection/>
        </v-menu>

        <v-menu
          offset-y
          rounded="xl"
          bottom
          :close-on-content-click="false"
          :nudge-bottom="10"
        >
          <template v-slot:activator="{ attrs, on }">
            <v-col
              v-bind="attrs"
              v-on="on"
              cols="4"
              class="col-style"
              v-show="props.selectedNavTabs === 1"
            >
              <v-row class="d-flex flex-column rounded-pill pl-8">
                <v-col class="pa-0 text-subtitle-2">Date</v-col>
                <v-col class="pa-0 text-caption">Add dates</v-col>
              </v-row>
            </v-col>
          </template>
          <functional-calendar
            v-model="dateModel"
            :sundayStart="true"
            :is-multiple="true"
            :calendars-count="2"
            :is-date-range="true"
            :isLayoutExpandable="true"
          >
          </functional-calendar>
        </v-menu>
        <v-divider vertical class="mt-3 mb-3"></v-divider>

        <v-menu
          offset-y
          rounded="xl"
          bottom
          :close-on-content-click="false"
          :nudge-bottom="10"
        >
          <template v-slot:activator="{ attrs, on }">
            <v-col v-bind="attrs" v-on="on" cols="4" class="col-style">
              <v-row
                class="rounded-pill pl-8 d-flex justify-center align-center"
              >
                <v-col class="pa-0 text-subtitle-2">
                  <v-row class="d-flex flex-column rounded-pill pl-8">
                    <v-col class="pa-0 text-subtitle-2">Who</v-col>
                    <v-col class="pa-0 text-caption">add guests</v-col>
                  </v-row>
                </v-col>
                <v-col
                  class="pa-0 text-caption d-flex justify-end align-center"
                >
                  <v-btn
                    large
                    class="rounded-pill pink text-capitalize white--text"
                  >
                    <v-icon left color="white">mdi-magnify</v-icon>
                    Search
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </template>
          <AddGuestsSection/>
        </v-menu>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref, defineProps, watch } from "vue";
import SearchDestinationsMenu from "@/components/NavBar/SearchDestinationsMenu.vue";
import AddGuestsSection from "@/components/NavBar/AddGuestsSection.vue"
import AddDateSection from "@/components/NavBar/AddDateSection.vue"
import { FunctionalCalendar } from "vue-functional-calendar";

const hideExtendedHight = ref(false);

const openSearchDestinationsDialog = ref(false);
const props = defineProps(["selectedNavTabs"]);
const selectedNavTabs = ref();
const dateModel = ref();

watch(
  () => props.selectedNavTabs,
  () => {
    console.log(props.selectedNavTabs);
    selectedNavTabs.value = props.selectedNavTabs;
  },
  { deep: true }
);
</script>

<style scoped>
.search-bar {
  border: 1px solid rgb(233, 233, 233);
  padding: 7px;
  border-radius: 40px;
  box-shadow: 0px 0px 8px rgb(186, 186, 186);
  cursor: pointer !important;
}

.col-style {
  padding: 24px !important;
  border-radius: 30px !important;
}
.col-style:hover {
  border-radius: 30px !important;
  background-color: rgb(230, 230, 230) !important;
  cursor: pointer;
}
.extended-height-row-style {
  box-shadow: 0px 0px 1px black;
}
</style>
