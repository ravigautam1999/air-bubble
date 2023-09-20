<template>
  <div>
    <v-row class="pt-3 mt-5 mb-0">
      <v-col cols="col-xs-2 col-sm-2 col-md-1 col-lg-1 col-xl-1">
        <v-img
          :src="hostProfilPic.src"
          width="60"
          height="60"
          class="rounded-pill"
        ></v-img>
      </v-col>
      <v-col class="mb-0 pa-0 d-flex flex-column justify-center align-start">
        <div class="text-h6 font-weight-medium">Hosted by {{ hostName }}</div>
        <div class="text-subtitle-2 font-weight-light">
          Joined in {{ hostJoinDate }}
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div>
          <span class="pa-1">
            <v-icon color="black"> mdi-star </v-icon>
          </span>
          <span class="pa-1"> {{ hostTotalReview }} Reviews </span>
        </div>
        <div>
          <v-icon color="black" class="pa-1"> mdi-shield-check </v-icon>
          <span class="pa-1"> Identity verified </span>
        </div>
        <div class="pa-1 mt-3 text-subtitle-1 font-weight-light">
          {{ hostIntro }}
        </div>
      </v-col>
      <v-col class="text-subtitle-1 font-weight-normal">
        <div>
          <span class="pa-1"> Languages: </span>
          <span v-for="(lang, indx) in hostLangs" :key="lang">
            <span v-if="indx !== 0" class="pr-1">,</span>
            {{ lang }}
          </span>
        </div>
        <div class="pa-1">
          <span>Response rate: {{ hostResponseRate }} %</span>
        </div>
        <div>
          <span class="pa-1"> Response Time: {{ hostResponseTime }} </span>
        </div>
        <div class="pa-1 mt-5">
          <v-btn large outlined color="black" class="text-capitalize rounded-lg"
            >Contact host</v-btn
          >
        </div>
        <div class="mt-5 ml-2 ">
          <v-row>
            <v-col class="pa-1 mr-3" cols="1">
              <v-icon> mdi-alert-octagram </v-icon>
            </v-col>
            <v-col class="text-caption pa-1">
              {{ alertMessage }}
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref } from "vue";

const hostName = ref("Mandeep");
const hostProfilPic = ref({
  src: require("../../assets/CardImg/hostPic.jpg"),
});
const hostJoinDate = ref("January 2023");
const hostTotalReview = ref("7");
const hostIdentityVerify = ref(true);
const hostResponseRate = ref("100");
const hostLangs = ref(["English", "हिंदी", "ਪੰਜਾਬੀ"]);
const hostResponseTime = ref("within an hour");
const hostIntro = ref(
  "Hello there, I love to travel, especially to new places. So, I am generally on the move somewhere near the mountains or the sea. An extrovert and a foodie at heart... meeting new people and experiencing cultures is always been a passion. We host our guests like family and our homes have no rules, other than to enjoy them to the very full and to take care of them like you would your own. Cheers!!"
);
const alertMessage = ref(
  "To protect your payment, never transfer money or communicate outside of the Airbnb website or app."
);
</script>

<style scoped></style>
