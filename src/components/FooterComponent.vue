<template>
  <v-footer class="pb-5">
    <v-container class="pa-0 mt-8">
      <div class="text-h6 font-weight-bold">
        Inspiration for future getaways
      </div>
    </v-container>
    <v-container>
      <v-tabs color="black" background-color="#f4f4f4" v-model="footerTabs">
        <v-tabs-slider color="black"></v-tabs-slider>
        <v-tab v-for="tab in footerTabsList" :key="tab" class="text-capitalize">
          {{ tab }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="footerTabs">
        <v-tab-item v-for="tabItem in footerTabsList" :key="tabItem">
          <v-divider class="black"></v-divider>
          <footer-tab-component :tabSection="tabSection[tabItem]" :tabItem="tabItem"></footer-tab-component>
        </v-tab-item>
      </v-tabs-items>
    </v-container>

    <v-container>
      <v-divider class="black mb-7"></v-divider>
      <v-row class="pl-2">
        <v-col>
          <div class="text-subtitle-2">Support</div>
          <div
            class="text-caption mt-2"
            v-for="itemV in supportSection.Support"
            :key="itemV"
          >
            {{ itemV }}
          </div>
        </v-col>
        <v-col>
          <div class="text-subtitle-2">Hosting</div>
          <div
            class="text-caption mt-2"
            v-for="itemV in supportSection.Hosting"
            :key="itemV"
          >
            {{ itemV }}
          </div>
        </v-col>
        
        <v-col>
          <div class="text-subtitle-2">Air Bubble</div>
          <div
            class="text-caption mt-2"
            v-for="itemV in supportSection['Air Bubble']"
            :key="itemV"
          >
            {{ itemV }}
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
import { ref } from "vue";
import tabSection from "../assets/dummyData/footerTabSection.json";
import supportSection from "@/assets/dummyData/footerSupportSection.json";
import FooterTabComponent from '@/components/FooterTabComponent.vue'

const footerTabs = ref();
const showMore = ref(false);

const footerTabsList = [
  "Popular",
  "Arts & culture",
  "Outdoors",
  "Mountains",
  "Beach",
  "Categories",
  "Things to do",
];
</script>

<style scoped>

</style>
