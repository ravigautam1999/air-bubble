<template>
  <v-sheet>
    <v-container>
      <div v-for="(guest, indx) in guestTypes" :key="indx" class="pl-4 pr-4">
        <v-divider v-show="indx !== 0"></v-divider>
        <v-row class="mt-3 mb-3">
          <v-col>
            <div class="text-subtitle-2 black--text">{{ guest.name }}</div>
            <div class="text-caption">{{ guest.subName }}</div>
          </v-col>

          <v-col class="d-flex justify-end align-center">
            <span>
              <v-btn
                icon
                fab
                x-small
                :disabled="indx === 0 ? (guest.value <= (0 + makeRequireGuest)): (guest.value === 0)"
                class="button-box"
                @click="
                  () => {
                    guest.value -= 1;
                    onGuestClick(guestTypes);
                  }
                "
              >
                <v-icon color="black">mdi-minus</v-icon>
              </v-btn>
            </span>
            <span class="ml-3 mr-3">{{ guest.value }}</span>
            <span>
              <v-btn
                icon
                fab
                x-small
                class="button-box"
                @click="
                  () => {
                    guest.value += (1 + makeRequireGuest);
                    onGuestClick(guestTypes);
                  }
                "
              >
                <v-icon color="black">mdi-plus</v-icon>
              </v-btn>
            </span>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-sheet>
</template>

<script setup>
import { ref, defineEmits, defineProps, watch } from "vue";

const guestTypes = ref([
  { name: "Adults", subName: "Ages 13 or above", value: 0 },
  { name: "Children", subName: "Ages 2-12", value: 0 },
  { name: "Infants", subName: "Under 2", value: 0 },
  { name: "Pets", subName: "Bringing a service animal?", value: 0 },
]);

const props = defineProps(["makeGuestReq"]);
const emits = defineEmits(["add-guests"]);

const makeRequireGuest = ref(false);

const onGuestClick = (guestValue) => {
  emits("add-guests", {
    guests: guestValue,
  });
};

watch(
  () => props.makeGuestReq,
  () => {
    makeRequireGuest.value = props.makeGuestReq;
    guestTypes.value.map(e => {
      if(e.name === 'Adults'){
        e.value = 1
      }
    })
    console.log("guestTypes", guestTypes.value)
  }
);
</script>

<style scoped>
.button-box {
  box-shadow: 0px 0px 2px black !important;
}
</style>
