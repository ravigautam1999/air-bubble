<template>
  <div>
    {{ selectedDateRange }}
    <functional-calendar
      v-model="selectedDateRange"
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
          @click="selectedDateRange = null"
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
import { ref } from "vue";
import { FunctionalCalendar } from "vue-functional-calendar";

const selectedTotalDays = ref("");
const selectedDateRange = ref();
const calendarData = ref();

const disabledDates = ref(["27/9/2023", "24/10/2023"]);

const selectedDays = (val) => {
  console.log("selected", val);
};

const dayClicked = (val) => {
  console.log("day", val);
};
</script>

<style scoped></style>
