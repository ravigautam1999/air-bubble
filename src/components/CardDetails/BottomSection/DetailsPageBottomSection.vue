<template>
  <v-sheet>
    <v-container>
      <v-row>
        <v-col class="col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-11">
          <div>{{ propertyTitle }}</div>
          <div class="d-flex align-center">
            {{ noOfGuestsProperty }} guests <v-icon>mdi-circle-small</v-icon>
            {{ noOfBedroomsProperty }} <v-icon>mdi-circle-small</v-icon>
            {{ noOfBedsProperty }} beds <v-icon>mdi-circle-small</v-icon>
            {{ noOfBathroomsProperty }} Bathrooms
          </div>
        </v-col>
        <v-spacer></v-spacer>
        <v-col class="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-1">
          <v-img
            :src="require('@/assets/bedrooms/bedroomsImg/propertyProfile.jpg')"
            width="60"
            height="60"
            class="rounded-pill"
          ></v-img>
        </v-col>
      </v-row>
      <v-divider class="mt-5 mb-5"></v-divider>

      <v-row>
        <v-col cols="1">
          <v-icon>mdi-star-outline</v-icon>
        </v-col>
        <v-col>
          <div class="font-weight-medium">Dedicated workspace</div>
          <div class="text-body-2">
            A common area with wifi that’s well suited for working
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="1">
          <v-icon>mdi-star-outline</v-icon>
        </v-col>
        <v-col>
          <div class="font-weight-medium">Dive right in</div>
          <div class="text-body-2">
            This is one of the few places in the area with a pool.
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="1">
          <v-icon>mdi-star-outline</v-icon>
        </v-col>
        <v-col>
          <div class="font-weight-medium">Experienced host</div>
          <div class="text-body-2">Rahul has 63 reviews for other places.</div>
        </v-col>
      </v-row>

      <v-divider class="mt-4 mb-4"></v-divider>
      <v-row>
        <v-col class="text-start">
          {{ aboutProperty }}
        </v-col>
      </v-row>
      <div>
        <v-icon small>mdi-dots-horizontal</v-icon>
      </div>
      <v-btn plain class="text-capitalize pl-0"
        >Show more
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
      <v-divider class="mt-4 mb-4"></v-divider>
      <v-row>
        <v-col class="text-h6">Where you'll sleep</v-col>
        <v-col class="d-flex justify-end align-center">
          <span class="text-caption">
            {{ currentVal }}<v-icon small>mdi-slash-forward</v-icon>
            {{ totalVal }}
          </span>
          <span class="ml-3">
            <v-btn
              color="primary"
              class="button-style"
              x-small
              icon
              fab
              @click="
                () => {
                  currentVal = currentVal - 1;
                  selectedBedroomImg = (currentVal-1);
                }
              "
              :disabled="currentVal === 1"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
          </span>
          <span class="ml-3">
            <v-btn
              class="button-style"
              x-small
              icon
              fab
              @click="
                () => {
                  currentVal = currentVal + 1;
                  selectedBedroomImg = (currentVal-1);
                }
              "
              :disabled="currentVal === totalVal"
            >
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </span>
        </v-col>
      </v-row>
      <v-card flat class="mt-4">
        <v-card-title>
          <v-carousel
            v-model="selectedBedroomImg"
            height="280"
            hide-delimiter-background
            hide-delimiters
            :show-arrows="false"
          >
            <v-carousel-item v-for="(bedImg, indx) in bedroomsList" :key="indx">
              <v-row>
                <v-col cols="6"
                  ><div>
                    <v-img
                      class="rounded-lg carousel-img"
                      :src="bedImg.img1"
                      width="auto"
                      height="200"
                      @click="openBedroomImgDialog = !(openBedroomImgDialog)"
                    ></v-img>
                  </div>
                  <span>
                    <div class="text-body-1 font-weight-medium ml-1 mt-3">
                      Bedrooms {{ bedImg.id}}
                    </div>
                    <div class="text-subtitle-2 font-weight-light ml-1">
                      1 King bed, 1 floor mattress
                    </div>
                  </span>
                </v-col>
                <v-col cols="6"
                  ><v-img
                    class="rounded-lg carousel-img"
                    :src="bedImg.img2"
                    width="auto"
                    height="200"
                    @click="openBedroomImgDialog = !(openBedroomImgDialog)"
                  ></v-img>
                  <div class="text-body-1 font-weight-medium mt-3 ml-1">
                    Bedrooms {{ bedImg.id + 1 }}
                  </div>
                  <div class="text-subtitle-2 font-weight-light ml-1">
                    1 King bed, 1 floor mattress
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col></v-col>
                <v-col></v-col>
              </v-row>
            </v-carousel-item>
          </v-carousel>
        </v-card-title>
      </v-card>
      <v-divider class="mt-4 mb-4"></v-divider>
      <BedroomImgDialog :openBedroomImgDialog="openBedroomImgDialog"/>
      <PlaceOffersAmenities/>
      <DatePicker @update-booking-dates="updateDates"/>
    </v-container>
  </v-sheet>
</template>

<script setup>
import { ref, defineEmits } from "vue";
import PlaceOffersAmenities from "./PlaceOffersAmenities.vue";
import DatePicker from "./DatePicket.vue"
import BedroomImgDialog from "../BedroomImgDialog/BedroomImgDialog.vue"

const propertyTitle = ref("Entire villa hosted by Rahul");
const noOfGuestsProperty = ref("16+");
const noOfBedsProperty = ref(6);
const noOfBedroomsProperty = ref(6);
const noOfBathroomsProperty = ref(8);
const currentVal = ref(1);
const totalVal = ref(3);
const selectedBedroomImg = ref();
const openBedroomImgDialog = ref(false)
const emits = defineEmits(["update-dates"])
const bedroomsList = ref([
  {
    img1: require("@/assets/bedrooms/bedroomsImg/im1.jpeg"),
    img2: require("@/assets/bedrooms/bedroomsImg/im2.jpeg"),
    id: 1
  },
  {
    img1: require("@/assets/bedrooms/bedroomsImg/im3.jpeg"),
    img2: require("@/assets/bedrooms/bedroomsImg/im4.jpeg"),
    id: 3
  },
  {
    img1: require("@/assets/bedrooms/bedroomsImg/im5.jpeg"),
    img2: require("@/assets/bedrooms/bedroomsImg/im6.jpeg"),
    id: 5
  },
]);
const aboutProperty = ref(
  `Nestled at the base of the picturesque Aravalli Hills, Khohar Haveli is a distinct amalgamation of old-world charm and modern comforts. A treasured gem, the haveli has gone through a thorough process of restoration, retaining its 18th-century architecture, beautiful artefacts and fresco paintings. Evenings are for enjoying a relaxing soak in the private swimming pool.`
);

const updateDates = ({dateModel}) => {
  console.log("update dates in", dateModel)
  emits('update-dates', dateModel)
}
</script>

<style scoped>
.button-style {
  box-shadow: 0px 0px 5px #413f3f !important;
  background-color: #efefef1f;
  color: black !important;
}
.carousel-img:hover {
    cursor:hand !important;
}
</style>
