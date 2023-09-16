<template>
  <div>
    <v-row class="pa-5 tab-item-style" style="background-color: #f4f4f4">
      <v-col       
        v-for="(itemVal, indx) in tabSection"
        :key="indx"
        v-show="indx < 10 || showMore"
        class="pa-0 col-xs-6 col-sm-3 col-md-2 col-lg-2 col-xl-2"
      >
        <div v-if="tabItem !== 'Categories'" class="pt-3 pl-1">
          <v-btn small plain block class="text-capitalize d-flex justify-start pl-0 pb-0">
            <div class="text-subtitle-2">{{ itemVal.title }}</div>
          </v-btn>
          <div class="text-caption">{{ itemVal.subtitle }}</div>
        </div>
        <v-btn
          v-else
          plain
          block
          class="text-capitalize d-flex justify-start ma-0 ma-0 pl-1"
        >
          <div class="text-subtitle-2">
            {{ itemVal }}
          </div>
        </v-btn>
      </v-col>
    </v-row>
    <div style="background-color: #f4f4f4">
      <v-btn
        v-if="!showMore"
        small
        plain
        @click="showMore = !showMore"
        class="text-decoration-underline text-caption text-capitalize"
      >
        Show more</v-btn
      >
      <v-btn
        v-else
        small
        plain
        @click="showMore = !showMore"
        class="text-decoration-underline text-caption text-capitalize"
      >
        Show less</v-btn
      >
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";

const props = defineProps(["tabSection", "tabItem"]);
const tabSection = ref(props.tabSection);
const tabItem = ref(props.tabItem);
const showMore = ref(false);
</script>

<style scoped>
.tab-item-style {
  margin-top: 1px;
}</style>
