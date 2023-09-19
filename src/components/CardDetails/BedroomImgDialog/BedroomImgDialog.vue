<template>
  <v-sheet>
    <v-dialog fullscreen v-model="openBedroomImgDialog" >
      <v-card width="500" id="mainDialog">
        <v-card-title>
          <v-row>
            <v-spacer></v-spacer>
            <v-btn icon fab small @click="openBedroomImgDialog = false">
              <v-icon >mdi-close</v-icon>
            </v-btn>
          </v-row>
        </v-card-title>
        <v-card-title>
          <v-row>
            <v-col
              v-for="(imgSrc, indx) in bedroomImgList"
              :key="indx"
             
              :md="layoutGrid[indx%5]"
              :lg="layoutGrid[indx%5]"
              :xl="layoutGrid[indx%5]"
              sm="6"
              xs="12"
            >
          
              <v-img
                class="rounded-lg w-75 "
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
import { onMounted, ref as vueRef, watch, defineProps } from "vue";
import { storage } from "@/firebase";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import store from "@/store";


const openBedroomImgDialog = vueRef(false);
const bedroomImgList = vueRef([]);
const layoutGrid = ['6', '3', '3', '3', '3','6']
const props = defineProps(["openBedroomImgDialog"]);
const getImages = async () => {
  const storageRef = ref(storage, "Bedroom");
  await listAll(storageRef).then((res) => {
    res.items.forEach((itemRef) => {
      getDownloadURL(ref(storage, itemRef)).then((download_url) => {
        console.log(download_url);
        bedroomImgList.value.push(download_url);
      });
    });
  });
};

watch(
  () => props.openBedroomImgDialog,
  () => {
    openBedroomImgDialog.value = true;
  }
);

onMounted(() => {
  console.log("mounted detail");
  if (!store.state.bedroomImgList) {
    store.state.bedroomImgList = [];
    getImages();
    store.state.bedroomImgList = bedroomImgList.value;
  } else {
    bedroomImgList.value = store.state.bedroomImgList;
  }
});
</script>
