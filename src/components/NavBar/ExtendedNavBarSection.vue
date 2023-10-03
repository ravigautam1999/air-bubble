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
                <v-col class="pa-0 text-caption" cols="10">
                  <v-form v-if="true">
                    <v-text-field
                      placeholder="Search destinations"
                      :value="currentDestination"
                      clearable
                      dense
                      hide-details
                      background-color="inherit"
                    ></v-text-field>
                  </v-form>
                  <span v-else class="text-caption font-weight-medium">{{
                    currentDestination
                  }}</span>
                </v-col>
              </v-row>
            </v-col>
          </template>
          <SearchDestinationsMenu
            @destination-selection="onDestinationSelection"
          />
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
          <AddDateSection />
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

          <AddDateSection />
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
          <AddGuestsSection />
        </v-menu>
      </v-row>
    </v-col>
    <v-btn @click="getCountry">get</v-btn>
  </v-row>
</template>

<script setup>
import { ref, defineProps, watch, onMounted } from "vue";
import SearchDestinationsMenu from "@/components/NavBar/SearchDestinationsMenu.vue";
import AddGuestsSection from "@/components/NavBar/AddGuestsSection.vue";
import AddDateSection from "@/components/NavBar/AddDateSection.vue";
import { FunctionalCalendar } from "vue-functional-calendar";
import axios from "axios";
import store from "@/store";

const hideExtendedHight = ref(false);

const openSearchDestinationsDialog = ref(false);
const props = defineProps(["selectedNavTabs"]);
const selectedNavTabs = ref();
const dateModel = ref();
const currentDestination = ref();
const allCountries = ref([])
const allStates = ref([])

const onDestinationSelection = ({ destiny }) => {
  console.log(destiny);
  switch (destiny.value) {
    case 1:
      currentDestination.value = "Europe";
      break;
    case 2:
      currentDestination.value = "United Kingdom";
      break;
    case 3:
      currentDestination.value = "Southeast Asia";
      break;
    case 4:
      currentDestination.value = "Canada";
      break;
    case 5:
      currentDestination.value = "United States";
      break;
    default:
      currentDestination.value = "";
  }
};

const getCountry = async () => {
 console.log("get county")
 const api_key = "S2w4TnY1MTdqNDA1M1J5VGhCSnRxTm5QbGVkcTBlMk1NY3ZoV1Z0OA=="
  var config = {
    method: "get",
    url: "https://api.countrystatecity.in/v1/countries",
    headers: {
      "X-CSCAPI-KEY": api_key,
    },
  };
 
 await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      store.state.allCountries = JSON.stringify(response.data)
      allCountries.value = JSON.parse(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

const getStates = async () => {
 console.log("get states")
 const api_key = "S2w4TnY1MTdqNDA1M1J5VGhCSnRxTm5QbGVkcTBlMk1NY3ZoV1Z0OA=="
  var config = {
    method: "get",
    url: "https://api.countrystatecity.in/v1/states",
    headers: {
      "X-CSCAPI-KEY": api_key,
    },
  };
 
  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      store.state.allStates = JSON.stringify(response.data)
      allStates.value = JSON.parse(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

watch(
  () => props.selectedNavTabs,
  () => {
    console.log(props.selectedNavTabs);
    selectedNavTabs.value = props.selectedNavTabs;
  },
  { deep: true }
);

onMounted(()=> {
  if(!store.state.allCountries){
    store.state.allCountries = []
   // getCountry()
  }else{
    allCountries.value = JSON.parse(JSON.stringify(store.state.allCountries));
    console.log("all countries", allCountries.value, store.state.allCountries)
  }
  if(!store.state.allStates){
    store.state.allStates = []
   // getStates()
    store.state.allStates =  allStates.value
  }else{
    allStates.value = store.state.allStates;
    console.log("all states", allStates.value, store.state.allStates)
  }
})
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

::v-deep .v-input__slot:hover {
  background-color: inherit !important;
}
</style>
