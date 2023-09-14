<template>
  <v-sheet>
    <v-dialog fullscreen v-model="openImgDialog">
      <v-card>
        <v-card-actions>
          <v-row>
            <v-spacer></v-spacer>
            <v-btn class="mt-4 mr-2" color="black" x-small fab icon @click="openImgDialog = false">
              <v-icon> mdi-close </v-icon>
            </v-btn>
          </v-row>
        </v-card-actions>
        <v-card-title>
          <v-row>
            <v-col class="pa-0 pt-3 pl-3 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-3" v-for="(img, indx) in imgList" :key="indx">
              <v-img class="rounded-lg" :src="img.src" width="auto" height="300"></v-img>
            </v-col>
          </v-row>
        </v-card-title>
      </v-card>
    </v-dialog>
  </v-sheet>
</template>

<script setup>
import { ref, defineProps, watch } from "vue";

const openImgDialog = ref(false);

const props = defineProps(["openImgDialog"]);
const imgList = [
  { src: require("@/assets/CardImg/air_bubble_app_pic_1.png") },
  { src: require("@/assets/CardImg/air_bubble_app_pic_2.png") },
  { src: require("@/assets/CardImg/air_bubble_app_pic_3.png") },
  { src: require("@/assets/CardImg/air_bubble_app_pic_4.png") },
  { src: require("@/assets/CardImg/air_bubble_app_pic_5.png") },
  { src: require("@/assets/CardImg/air_bubble_app_pic_11.png") },
  { src: require("@/assets/CardImg/air_bubble_app_pic_7.png") },
  { src: require("@/assets/CardImg/air_bubble_app_pic_8.png") },
  { src: require("@/assets/CardImg/air_bubble_app_pic_9.png") },
  { src: require("@/assets/CardImg/air_bubble_app_pic_10.png") },
];

watch(
  () => props.openImgDialog,
  () => {
    openImgDialog.value = true;
  }
);
</script>

<style scoped></style>
