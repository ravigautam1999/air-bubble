<template>
  <v-sheet>
    <div class="text-center"></div>
    <v-container class="d-flex flex-column justify-center align-center">
      <svg width="0" height="0">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="5" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="2" />
            </feComponentTransfer>
            <feBlend in2="SourceGraphic" />
          </filter>
        </defs>
      </svg>
      <div class="text-h6 mt-4 mb-4">When's your trip?</div>
      <div>
        <round-slider
          v-model="sliderValue"
          min="1"
          max="12"
          step="1"
          start-angle="90"
          line-cap="round"
          radius="150"
          circleShape="full"
          width="70"
          lineCap="round"
          pathColor="#e7e7e7"
          rangeColor="#ff2680"
          handleSize="-15"
          tooltipColor="#000000"
          editableTooltip="false"
          :tooltip-format="tooltipFormatter"
        />
      </div>

      <v-dialog v-model="setStartMonthDateDialog" max-width="800">
        <template v-slot:activator="{ on, attrs }">
          <div class="mt-4 mb-4">
            <span class="text-subtitle-2 grey--text"
              >Starting on {{ startingMonthDate }}
              <v-icon>mdi-circle-small</v-icon></span
            >
            <span>
              <v-btn
                v-bind="attrs"
                v-on="on"
                text
                plain
                depressed
                class="ml-0 pl-0 text-decoration-underline text-subtitle-1 font-weight-bold text-capitalize black--text"
                >Edit</v-btn
              >
            </span>
          </div>
        </template>

        <v-card class="rounded-0">
          <v-card-title>
            <v-spacer></v-spacer>
            <v-btn fab icon small>
              <v-icon color="black" @click="setStartMonthDateDialog = false"
                >mdi-close</v-icon
              >
            </v-btn>
          </v-card-title>
        </v-card>
        <v-divider></v-divider>
        <functional-calendar
          style="background-color: white"
          v-model="monthDateModel"
          :sundayStart="true"
          :is-multiple="true"
          :calendars-count="2"
          :is-date-range="false"
          :isLayoutExpandable="true"
          :is-date-picker="true"
          @dayClicked="changeStartMonthDate"
        >
          <template v-slot:footer>
            <v-row>
              <v-col cols="12" class="mt-3">
                <v-divider class="black"></v-divider>
              </v-col>
              <v-col cols="12" class="mt-2">
                <v-row>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="black"
                    class="white--text mr-3 mb-2 rounded-lg text-capitalize"
                    large
                    @click="
                      () => {
                        setStartMonthDateDialog = false;
                        startingMonthDate = currentStartingMonthDate;
                      }"
                  >
                    Apply
                  </v-btn>
                </v-row>
              </v-col>
            </v-row>
          </template>
        </functional-calendar>
      </v-dialog>
    </v-container>
  </v-sheet>
</template>

<script setup>
import { ref } from "vue";
import RoundSlider from "vue-round-slider";
import { FunctionalCalendar } from "vue-functional-calendar";

const sliderValue = ref(1);
const startingMonthDate = ref("1,October");
const currentStartingMonthDate = ref("1,October");
const setStartMonthDateDialog = ref(false);
const monthDateModel = ref();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const tooltipFormatter = (e) => {
  return `<span style ='font-size: 76px !important; font-weight: bold'>${e.value} </span>  <br> <span style ='font-size: 18px; font-weight: 300'> months </span>`;
};

const changeStartMonthDate = (date) => {
  const [a, b, c] = String(date.date).split("/");
  console.log(date, date.date.split("/"), a, b, c);

  currentStartingMonthDate.value = Array([a, months.at(b - 1)]).join();
};
</script>

<style scoped>
#slider1 .rs-range {
  filter: url(#glow);
}

/* customize the tooltip appearance here */
#slider1 .rs-inner-container,
#slider1 svg {
  overflow: visible;
}
</style>
