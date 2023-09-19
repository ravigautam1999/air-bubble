<template>
  <v-sheet>
    <v-dialog fullscreen v-model="openImgDialog">
      <v-card width="auto" class="col-sm-6 col-xs-6">
        <v-card-actions>
          <v-row>
            <v-spacer></v-spacer>
            <v-btn
              class="mt-4 mr-2"
              color="black"
              x-small
              fab
              icon
              @click="openImgDialog = false"
            >
              <v-icon> mdi-close </v-icon>
            </v-btn>
          </v-row>
        </v-card-actions>
        <v-card-title>
          <v-row>
            <v-col
              v-for="(imgSrc, indx) in propertyImg"
              :key="indx"
              :sm="6"
              :xs="6"
              :md="layoutGrid[indx % 5]"
              :lg="layoutGrid[indx % 5]"
              :xl="layoutGrid[indx % 5]"
            >
              <v-img
                class="rounded-lg col-12"
                :src="imgSrc"         
                width="auto"
                height="500"
              >
              </v-img>
            </v-col>
          </v-row>
        </v-card-title>
      </v-card>
    </v-dialog>
  </v-sheet>
</template>

<script setup>
import { ref as vueRef, defineProps, watch, onMounted } from "vue";
import { storage } from "@/firebase";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import store from "@/store";

const openImgDialog = vueRef(false);
const propertyImg = vueRef([]);
const layoutGrid = ["6", "3", "3", "3", "3", "6"];
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

const getImages = async () => {
  const storageRef = ref(storage, "propertyImage");
  await listAll(storageRef).then((res) => {
    res.items.forEach((itemRef) => {
      getDownloadURL(ref(storage, itemRef)).then((download_url) => {
        console.log(download_url);
        propertyImg.value.push(download_url);
      });
    });
  });
};

watch(
  () => props.openImgDialog,
  () => {
    openImgDialog.value = true;
  }
);

onMounted(() => {
  if (!store.state.propertyImg) {
    store.state.propertyImg = [];
    getImages();
    store.state.propertyImg = propertyImg.value;
  } else {
    propertyImg.value = store.state.propertyImg;
  }
});
</script>

<style scoped></style>
