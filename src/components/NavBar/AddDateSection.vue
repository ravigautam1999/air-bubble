<template>
  <v-sheet>
    <v-card width="800">
      <v-card-title>
        <!-- <v-chip-group mandatory active-class="primary--text">
          <v-chip v-for="chip in chipList" :key="chip">
            {{ chip }}
          </v-chip>
        </v-chip-group> -->

        <v-row>
          <v-col class="d-flex justify-center flex-column align-center">
            <!-- <v-tabs
           
              v-model="selectedValue"
              hide-slider
              background-color="#ebebeb"
              centered
              class="rounded-pill"
              style="max-width: fit-content"
              active-class="primary"
            >
              <v-tab
                v-for="header in headerList"
                :key="header"
                active-class=" rounded-pill"
                class="rounded-pill ma-1 text-capitalize text-subtitle-2 hover-style"
                >
              
                    {{ header }}
            
                </v-tab
              >
            </v-tabs> -->
            <v-row>
              <v-col>
                <v-tabs
                  v-model="selectedValue"
                  hide-slider
                  background-color="#e6e6e6"
                  class="tabs-style elevation-1"
                >
                  <v-tab
                    v-for="header in headerList"
                    :key="header"
                    class="transparent text-capitalize black--text rounded-pill"
                    active-class="white--text pink"
                    @click="onSelectMonthTab(header)"
                  >
                    {{ header }}
                  </v-tab>
                </v-tabs>
              </v-col>
            </v-row>
            <v-row class="row-style">
              <v-col cols="12">
                <v-tabs-items v-model="selectedValue">
                  <v-tab-item v-for="header in headerList" :key="header">
                    <div v-if="selectedValue === 0">
                      <functional-calendar
                        v-model="dateModel"
                        :sundayStart="true"
                        :is-multiple="true"
                        :calendars-count="2"
                        :is-date-range="true"
                        :isLayoutExpandable="true"
                      >
                      </functional-calendar>
                    </div>
                    <div v-if="selectedValue === 1">
                      <MonthSlider @selected-month-slider-value="onSelectedMonthSliderValue">
                    </MonthSlider>
                    </div>
                    <div
                     v-if="selectedValue === 2"
                      class="d-flex justify-center flex-column align-center"
                    >
                      <div class="mt-5 mb-5 text-h6">
                        How long would you like to stay?
                      </div>
                      <v-container class="mb-5">
                        <v-item-group mandatory v-model="selectedWeek">
                          <v-row justify="center">
                            <span
                              v-for="day in dayList"
                              :key="day"
                              class="ma-1"
                            >
                              <v-item v-slot="{ active, toggle }">
                                <div
                                  @click="toggle"
                                  @click.passive="onDaySelection(day)"
                                  class="elevation-1"
                                  :class="
                                    active
                                      ? 'rounded-pill map-img-active'
                                      : 'rounded-pill map-img'
                                  "
                                >
                                  <span class="pa-5 ma-3 text-body-2">{{
                                    day 
                                  }}</span>
                                </div>
                              </v-item>
                            </span>
                          </v-row>
                        </v-item-group>
                      </v-container>
                      <div class="mt-5 mb-5 text-h6">
                        When do you want to go?
                      </div>
                      <v-sheet class="mx-auto" max-width="750">
                        <v-slide-group
                          multiple
                          v-model="selectedSlideMonth"
                          show-arrows
                        >
                          <v-slide-item
                            v-for="slideItem in slideMonthList"
                            :key="slideItem.name"
                            v-slot="{ active, toggle }"
                          >
                            <v-card
                              :color="active ? undefined : ''"
                              class="ma-3 rounded-xl d-flex flex-column justify-center align-center"
                              width="130"
                              height="160"
                              :class="
                                active ? 'month-card-active' : 'month-card'"
                              @click="toggle"
                            >
                              <div class="mb-3"> 
                                <v-icon>mdi-calendar-month-outline</v-icon>
                              </div>
                              <div class="text-body-2 font-weight-bold">
                                {{ slideItem.name }}
                              </div>
                              <div class="text-subtitle-2 font-weight-regular">
                                {{ slideItem.year }}
                              </div>
                            </v-card>
                          </v-slide-item>
                        </v-slide-group>
                      </v-sheet>
                    </div>
                  </v-tab-item>
                </v-tabs-items>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-title>
    </v-card>
  </v-sheet>
</template>

<script setup>
import { onMounted, ref, defineEmits, watch } from "vue";
import { FunctionalCalendar } from "vue-functional-calendar";
import MonthSlider from "./MonthSlider.vue";

const headerList = ref(["Dates", "Months", "Flexible"]);
const selectedValue = ref();
const dateModel = ref();
const dayList = ["Weekend", "Week", "Month"];
const selectedWeek = ref();
const selectedSlideMonth = ref();
const currentDate = new Date();
const emits = defineEmits(["on-day-selection", "on-month-selection", "selected-slide-months", "selected-month-slider-value"])
const slideMonthList = ref([]);
const monthSliderValue = ref(1)
const startingMonthDate = ref()
const currentStartingMonthDate = ref([new Date().getDate(), new Date().getMonth()+1, new Date().getFullYear()].join('/'));

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

const getMonthList = () => {
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();
  for (let i = 1; i <= 12; i++) {
    let obj = new Object({ name: "", year: "" , abbr: ""});

    if (currentMonth === 12) {
      currentYear += 1;
      currentMonth = 0;
    }
    obj.name = months.at(currentMonth);
    obj.year = currentYear;
    obj.abbr = months.at(currentMonth).substring(0, 3);
    slideMonthList.value.push(obj);
    currentMonth += 1;
  }
};

const onDaySelection = (day) => {
  console.log('day', day)
  emits('on-day-selection', {
    day: day
  })
};

const onSelectMonthTab = (month) => {
  console.log("month", month)
  emits("on-month-selection", {
    month: month
  })
};

const onSelectedMonthSliderValue = (val) => {
  console.log("MonthSliderValue", val)
  emits("selected-month-slider-value", {
    val:val
  })
  startingMonthDate.value = val.startMonthDateValue
}

watch(selectedSlideMonth, ()=>{
  console.log(selectedSlideMonth.value)
  emits('selected-slide-months', {
    selectedSlideMonths: selectedSlideMonth,
    slideMonthList: slideMonthList
  })
});

onMounted(() => {
  getMonthList();
});
</script>

<style scoped>
.hover-style:hover {
  background-color: white !important;
  color: black !important;
  border-radius: 30px !important;
}

.hover-style {
  background-color: rgba(255, 255, 255, 0) !important;
  color: black !important;
}

.active-tab {
  background-color: white !important;
  color: black !important;
}

.tabs-style {
  max-width: fit-content !important;
  border-radius: 30px !important;
  background-color: grey !important;
  overflow: hidden !important;
}

.row-style {
  width: inherit !important;
}
.active-class-tabs {
  background: white !important;
  color: black !important;
}

.map-img {
  border: 1px solid rgb(216, 216, 216);
  text-align: center;
  padding: 8px !important;
}
.map-img:hover {
  border: 1px solid black;
  cursor: pointer;
}

.map-img-active {
  border: 2px solid black;
  text-align: center;
  padding: 8px !important;
}

.map-img-active:hover {
  cursor: pointer;
}

.month-card-active {
  border: 2px solid black !important;
}

.month-card:hover {
  border: 1px solid #000;
}
</style>
