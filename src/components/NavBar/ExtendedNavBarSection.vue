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
                <v-col class="pa-0 text-caption font-weight-bold">Where</v-col>
                <v-col class="pa-0 text-subtitle-2" cols="10">
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
              v-show="
                props.selectedNavTabs === 0 && currentMonthSelected === 'Dates'
              "
            >
              <v-row class="d-flex flex-column rounded-pill pl-8">
                <v-col class="pa-0 text-caption font-weight-bold"
                  >Check in</v-col
                >
                <v-col class="pa-0 text-subtitle-2 font-weight-regular"
                  >Add dates</v-col
                >
              </v-row>
            </v-col>
          </template>
          <AddDateSection
            @on-day-selection="onDaySelection"
            @on-month-selection="onMonthSelection"
            @selected-slide-months="onSelectedSlideMonths"
            @selected-month-slider-value="onSelectedMonthSliderValue"
          />
        </v-menu>
        <v-divider
          vertical
          class="mt-3 mb-3"
          v-show="
            props.selectedNavTabs === 0 && currentMonthSelected === 'Dates'"
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
              v-show="
                props.selectedNavTabs === 0 && currentMonthSelected === 'Dates'
              "
            >
              <v-row class="d-flex flex-column rounded-pill pl-8">
                <v-col class="pa-0 text-caption font-weight-bold"
                  >Check out</v-col
                >
                <v-col class="pa-0 text-subtitle-2 font-weight-regular"
                  >Add dates</v-col
                >
              </v-row>
            </v-col>
          </template>

          <AddDateSection
            @on-day-selection="onDaySelection"
            @on-month-selection="onMonthSelection"
            @selected-slide-months="onSelectedSlideMonths"
            @selected-month-slider-value="onSelectedMonthSliderValue"
          />
        </v-menu>

        <v-menu
          v-show="false"
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
              v-show="
                props.selectedNavTabs === 0 &&
                (currentMonthSelected === 'Months' ||
                  currentMonthSelected === 'Flexible')"
            >
              <v-row class="d-flex flex-column rounded-pill pl-8">
                <v-col class="pa-0 text-caption font-weight-bold">When</v-col>
                <v-col
                  class="pa-0 text-subtitle-2"
                  v-if="currentMonthSelected === 'Flexible'"
                >
                  <span v-if="selectedSlideMonth.length === 0"
                    >Any {{ currentDaySelected }}</span
                  >
                  <span v-else>
                    Any {{ currentDaySelected }} in
                    <span v-for="(m, inx) in selectedSlideMonth" :key="m"
                      ><span v-show="inx != 0">, </span
                      >{{ slideMonthList[m].abbr }}</span
                    >
                  </span>
                </v-col>
                <v-col class="pa-0 text-subtitle-2" v-else>
                  <span
                    >{{ startMonthDateValue }} -
                    {{ currentStartingMonthDate }}</span
                  >
                </v-col>
              </v-row>
            </v-col>
          </template>
          <AddDateSection
            @on-day-selection="onDaySelection"
            @on-month-selection="onMonthSelection"
            @selected-slide-months="onSelectedSlideMonths"
            @selected-month-slider-value="onSelectedMonthSliderValue"
          />
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
                <v-col class="pa-0 text-caption font-weight-bold">Date</v-col>
                <v-col class="pa-0 text-subtitle-2 font-weight-regular">
                  <span v-if="!experienceDates?.dateRange?.start"
                    >Add dates</span
                  >
                  <span v-else>
                    {{ experienceStartDate }} - {{ experienceEndDate }}</span
                  >
                </v-col>
              </v-row>
            </v-col>
          </template>
          <functional-calendar
            v-model="experienceDates"
            :sundayStart="true"
            :is-multiple="true"
            :calendars-count="2"
            :is-date-range="true"
            :isLayoutExpandable="true"
            @dayClicked="dayClicked"
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
                    <v-col class="pa-0 text-caption font-weight-bold"
                      >Who</v-col
                    >
                    <v-col class="pa-0">
                      <span
                        v-if="!showAddedGuests"
                        class="text-subtitle-2 font-weight-regular"
                        >add guests</span
                      >
                      <span v-else class="text-subtitle-2">{{
                        showAddedGuests
                      }}</span>
                    </v-col>
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
          <AddGuestsSection
            :makeGuestReq="makeGuestReq"
            @add-guests="onAddGuests"
          />
        </v-menu>
      </v-row>
    </v-col>
    <!-- <v-btn @click="getCountry">get</v-btn> -->
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
const allCountries = ref([]);
const allStates = ref([]);
const showAddedGuests = ref("");
const makeGuestReq = ref(false);
const currentMonthSelected = ref("Dates");
const currentDaySelected = ref("Weekend");
const selectedSlideMonth = ref([]);
const slideMonthList = ref([]);
const startMonthDateValue = ref(
  [
    new Date().getDate(),
    new Date().getMonth() + 1,
    new Date().getFullYear(),
  ].join("/")
);
const currentStartingMonthDate = ref();
const experienceDates = ref();
const experienceStartDate = ref();
const experienceEndDate = ref();

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
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
  console.log("get county");
  const api_key = "S2w4TnY1MTdqNDA1M1J5VGhCSnRxTm5QbGVkcTBlMk1NY3ZoV1Z0OA==";
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
      store.state.allCountries = JSON.stringify(response.data);
      allCountries.value = JSON.parse(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

const getStates = async () => {
  console.log("get states");
  const api_key = "S2w4TnY1MTdqNDA1M1J5VGhCSnRxTm5QbGVkcTBlMk1NY3ZoV1Z0OA==";
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
      store.state.allStates = JSON.stringify(response.data);
      allStates.value = JSON.parse(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

const onAddGuests = (val) => {
  // switch(val.guests.name){
  //   case 'Adults' || 'Children': {
  //     if(val.guests.value !== 0){
  //       showAddedGuests.value = (`Guests ${val.guests.value}` + showAddedGuests.value)
  //     }
  //   }
  //   break;
  //   case 'Infants': {
  //     if(val.guests.value !== 0){
  //       showAddedGuests.value = `Infants ${val.guests.value}`
  //     }
  //   }
  // }
  showAddedGuests.value = "";
  var a = 0;
  var flag = true;

  val.guests.forEach((e) => {
    if (e.value !== 0) {
      if (e.name === "Adults" || e.name === "Children") {
        // if (e.name === "Children") {
        //   if (val.guests.at(0).value === 0) {
        //     a+=1
        //     makeGuestReq.value = true;
        //     flag = true
        //   }
        // }
        a += e.value;
        console.log("name", e, a);
        showAddedGuests.value = a === 1 ? `Guest ${a}` : `Guests ${a}`;
        if (makeGuestReq.value) {
          makeGuestReq.value = false;
        }
      } else if (e.name === "Infants") {
        if (val.guests.at(0).value === 0) {
          showAddedGuests.value = `Guest 1`;
          makeGuestReq.value = true;
        }
        showAddedGuests.value +=
          e.value === 1 ? `, Infant ${e.value}` : `, Infants ${e.value}`;
      } else {
        if (val.guests.at(0).value === 0) {
          showAddedGuests.value = `Guest 1`;
          makeGuestReq.value = true;
        }
        showAddedGuests.value +=
          e.value === 1 ? `, Pet ${e.value}` : `, Pets ${e.value}`;
      }
    }
  });
  console.log("add guest", val);
};

const onDaySelection = ({ day }) => {
  console.log("selected day", day);
  currentDaySelected.value = day;
};

const onMonthSelection = ({ month }) => {
  console.log("selected month", month);
  currentMonthSelected.value = month;
};

const onSelectedSlideMonths = (val) => {
  selectedSlideMonth.value = val.selectedSlideMonths;
  slideMonthList.value = val.slideMonthList;

  selectedSlideMonth.value.sort(function (a, b) {
    return a - b;
  });
  console.log("slideMonthList", val, selectedSlideMonth);
};

const onSelectedMonthSliderValue = ({ val }) => {
  currentStartingMonthDate.value = new Date(val.startMonthDateValue);
  let [d, f, g] = val.startMonthDateValue.split("/");
  let a = parseInt(d);
  let b = parseInt(f);
  let c = parseInt(g);

  b = b + val.sliderValue;
  if (b > 12) {
    b = b - 12;
    c += 1;
  }
  console.log("in", a, b, c);
  currentStartingMonthDate.value = months.at(b - 1) + " " + a + ", " + c;
  startMonthDateValue.value = months.at(f - 1) + " " + d + ", " + g;
  // console.log("in extended section", val, val.startMonthDateValue, currentStartingMonthDate);
  // currentStartingMonthDate.value.setMonth(currentStartingMonthDate + val.sliderValue)
};

const dayClicked = (val) => {
  // console.log("day select", val, experienceDates)
};

watch(
  () => props.selectedNavTabs,
  () => {
    console.log(props.selectedNavTabs);
    selectedNavTabs.value = props.selectedNavTabs;
  },
  { deep: true }
);

watch(
  experienceDates,
  () => {
    const [d1, m1, y1] = (experienceDates.value?.dateRange?.start).split("/");
    experienceStartDate.value = d1 + " " + months[parseInt(m1)] + " " + y1;

    if (experienceDates.value?.dateRange?.end) {
      const [d2, m2, y2] = (experienceDates.value?.dateRange?.end).split("/");
      experienceEndDate.value = d2 + " " + months[parseInt(m2)] + " " + y2;
    }

    console.log(experienceEndDate, experienceStartDate, experienceDates);
  },
  { deep: true }
);
onMounted(() => {
  if (!store.state.allCountries) {
    store.state.allCountries = [];
    // getCountry()
  } else {
    allCountries.value = JSON.parse(JSON.stringify(store.state.allCountries));
    console.log("all countries", allCountries.value, store.state.allCountries);
  }
  if (!store.state.allStates) {
    store.state.allStates = [];
    // getStates()
    store.state.allStates = allStates.value;
  } else {
    allStates.value = store.state.allStates;
    console.log("all states", allStates.value, store.state.allStates);
  }
});
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

::v-deep .vfc-marked {
  background-color: black !important;
}


</style>
