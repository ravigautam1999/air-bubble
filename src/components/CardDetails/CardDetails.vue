<template>
  <v-sheet class="mr-12 ml-12 mt-6">
    <share-dialog :openShareDialog="openShareDialog"></share-dialog>
    <img-dialog :openImgDialog="openImgDialog"></img-dialog>
    <div class="text-h5">{{ pageTitle }}</div>
    <v-row>
      <span>
        <v-btn
          depressed
          plain
          link
          class="text-lowercase font-weight-medium text-decoration-underline text-subtitle-1 ma-1 pa-2"
        >
          {{ noOfReview }} review
        </v-btn>
      </span>
      <span class="font-weight-medium mt-2">.</span>
      <span
        class="pa-3 text-subtitle-2 text-decoration-underline font-weight-medium"
      >
        {{ propertyTitle }}
      </span>
      <v-spacer> </v-spacer>
      <span>
        <v-btn
          text
          class="text-capitalize"
          @click="openShareDialog = !openShareDialog"
          ><v-icon class="mr-1">mdi-share-outline</v-icon> Share</v-btn
        >
        <v-btn text class="text-capitalize"
          ><v-icon class="mr-1">mdi-heart-outline</v-icon>Save</v-btn
        >
      </span>
    </v-row>
    <div class="ml-4">
      <v-row>
        <v-col cols="6" class="pa-0 pt-4"
          ><v-img
            class="rounded-bl-xxl rounded-tl-xxl"
            :src="require('../../assets/CardImg/air_bubble_app_pic_1.png')"
            width="auto"
            height="400"
            @click="openImgDialog = !openImgDialog"
          ></v-img
        ></v-col>
        <v-col cols="6" class="pl-1">
          <v-row class="ma-0">
            <v-col
              cols="6"
              class="pa-1"
              v-for="(imgV, indx) in propertyImg"
              :key="indx"
            >
              <v-img
                :src="imgV"
                width="auto"
                height="196"
                @click="openImgDialog = !openImgDialog"
                :class="
                  indx === 3
                    ? 'rounded-br-xxl'
                    : '' || indx === 1
                    ? 'rounded-tr-xxl'
                    : ''
                "
              >
                <template v-slot:default>
                  <span v-if="indx === 3" class="show-all-img-button">
                    <v-btn
                      class="rounded-lg"
                      @click="openImgDialog = !openImgDialog"
                    >
                      <v-icon left>mdi-dots-grid</v-icon>
                      <span class="text-capitalize">Show all photos</span>
                    </v-btn>
                  </span>
                </template>
              </v-img>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
    <v-row>
      <v-col cols="7">
       <DetailsPageBottomSection/>
      </v-col>
      <v-col cols="5">
        <v-card elevation="6" class="rounded-xl">
          <v-card-title>
            <v-row class="pa-3 pt-4">
              <span class="font-weight-bold">
                <v-icon> mdi-currency-rupee</v-icon>
                {{ propertyPrice }}</span
              >
              <span class="text-body-1 pa-1 pl-3">night</span>
              <v-spacer></v-spacer>
              <v-btn plain class="text-decoration-underline text-capitalize"
                >{{ noOfReview }} review</v-btn
              >
            </v-row>
          </v-card-title>
          <v-card-subtitle>
            <v-row class="ma-0 pa-0 mt-6">
              <v-col class="ma-0 pa-0">
                <v-text-field
                  outlined
                  v-model="guestCheckInDate"
                  label="check-in"
                  placeholder="Add date"
                ></v-text-field>
              </v-col>
              <v-col class="ma-0 pa-0">
                <v-text-field
                  outlined
                  v-model="guestCheckOutDate"
                  label="check-out"
                  placeholder="Add date"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class="ma-0 pa-0">
              <v-select v-model="guestSelectValue" label="Guests" outlined>
                <template v-slot:no-data>
                  <v-row class="ma-2" v-for="it in guestSelectOptions" :key="it.title">
                    <v-col class="pl-6 pt-3 pb-3">
                      <div class="text-body-1">{{ it.title }}</div>
                      <div class="text-caption pt-1">{{ it.subtitle }}</div>
                    </v-col>
                    <v-col class="d-flex justify-end align-center">
                      <span class="pr-4">
                        <v-btn small class="plus-minus-button-style" plain icon @click="it.itemValue += 1">
                          <v-icon color="black">mdi-plus</v-icon>
                        </v-btn>
                      </span>
                      <span>{{ it.itemValue }}</span>
                      <span class="pl-4 pr-4">
                        <v-btn small class="plus-minus-button-style" plain :disabled="it.itemValue === 0" icon @click="it.itemValue -= 1">
                          <v-icon color="black">mdi-minus</v-icon>
                        </v-btn>
                      </span>
                    </v-col>
                  </v-row>
                </template>
              </v-select>
            </v-row>
          </v-card-subtitle>
          <v-card-actions class="mr-3 ml-3 mb-4 pb-5">
            <v-btn large block class="text-capitalize" dark>Check availability</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script setup>
import { ref } from "vue";
import ShareDialog from "../CardDetails/ShareDialog.vue";
import ImgDialog from "../CardDetails/ImgDialog.vue";
import DetailsPageBottomSection from "./BottomSection/DetailsPageBottomSection.vue";

const pageTitle = ref("Camp Apple Retreat #serenic #village");
const noOfReview = ref(2);
const pageSubTitle = ref("Shimla, Himachal Pradesh, India");
const propertyTitle = ref("Farm stay hosted by Lalit");
const noOfGuestsPropertyCapacity = ref(12);
const noOfBedsPropertyCapacity = ref(6);
const noOfBedroomsPropertyCapacity = ref(6);
const noOfBathroomsPropertyCapacity = ref(8);
const openShareDialog = ref(false);
const openImgDialog = ref(false);
const selectOptions = [];
const guestSelectOptions = ref([
  { itemValue: 0, title: "Adults", subtitle: "Age 13+" },
  { itemValue: 0, title: "Children", subtitle: "Age 2-12" },
  { itemValue: 0, title: "Infants", subtitle: "Under 2" },
  { itemValue: 0, title: "Pets", subtitle: "Bringing a service animal" },
]);

const guestSelectValue = ref([]);
const aboutPlace =
  ref(`soak up the vintage view and charm ,in the camp ,surrounded by Apple orchard and serenic view .
we have 10 camps with luxury bedding and place .
with a open restaurant and sitting area .where you can enjoy the peaceful view and sitting with your friends
The space
this is Swiss camps with full of modern facilities this is Apple farm stay and u can enjoy beautiful valley view from every camp we offer u food stay bonfire music 🎶 in open area
Guest access
spece comprises of 6 camps and farm where you an enjoy the walk and pluck your own apples from the orchard .
there is also an open sitting area and restaurant for food services`);
const hostProfileImg = ref();
const propertyPrice = ref('1,000');
const guestCheckInDate = ref();
const guestCheckOutDate = ref();
const guestBookingCount = ref();


const propertyImg = [
  require("../../assets/CardImg/air_bubble_app_pic_2.png"),
  require("../../assets/CardImg/air_bubble_app_pic_3.png"),
  require("../../assets/CardImg/air_bubble_app_pic_4.png"),
  require("../../assets/CardImg/air_bubble_app_pic_5.png"),
];
</script>

<style scoped>
.show-all-img-button {
  display: flex;
  width: 100%;
  height: 200px;
  justify-content: center;
  align-items: end;
  padding-bottom: 20px;
}

.plus-minus-button-style {
    box-shadow: 0px 0px 2px black;
}
</style>
