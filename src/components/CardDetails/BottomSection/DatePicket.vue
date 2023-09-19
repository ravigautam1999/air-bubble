<template>
  <div>
    <v-card elevation="7" class="mb-2">
      <v-card-title>
        <span>
          <span v-if="!dateModel?.dateRange?.start"
            >Please select check-in date</span
          >
          <span v-else-if="!dateModel?.dateRange?.end"
            >Please select check-out date</span
          >
          <span v-else>{{ selectedTotalDays }} {{ placeName }}</span>
        </span>
      </v-card-title>
      <v-card-subtitle class="text-subtitle-1">
        <span v-if="!dateModel">Please select dates</span>
        <span v-else>
          {{ dateModel?.dateRange?.start }} -
          {{ dateModel?.dateRange?.end }}</span
        >
      </v-card-subtitle>
    </v-card>
    <functional-calendar
      v-model="dateModel"
      :sundayStart="true"
      :is-multiple="true"
      :calendars-count="2"
      :is-date-range="true"
      :isLayoutExpandable="true"
      :disabledDates="disabledDates"
      @selectedDaysCount="selectedDays"
      @dayClicked="dayClicked"
    >
      <template v-slot:footer>
        <v-btn
          @click="dateModel = null"
          plain
          text
          class="text-decoration-underline text-capitalize font-weight-bold"
        >
          Clear dates
        </v-btn>
      </template>
    </functional-calendar>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";
import { FunctionalCalendar } from "vue-functional-calendar";

const selectedTotalDays = ref(0);
const selectedDateRange = ref();
const dateModel = ref();
const calendarData = ref();
const placeName = ref("nights in Jaipur");
const disabledDates = ref(["27/9/2023", "24/10/2023"]);
const emits = defineEmits(["update-booking-dates"]);
const selectedDays = (val) => {
  selectedTotalDays.value = val;
  emits("update-booking-dates", { dateModel: dateModel });
  console.log("selected", val, dateModel);
};

const dayClicked = (val) => {
  console.log("day", val);
};
</script>

<style scoped></style>
