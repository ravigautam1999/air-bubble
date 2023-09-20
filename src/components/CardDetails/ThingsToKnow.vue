<template>
  <v-sheet>
    <v-dialog v-model="houseRuleDialogOpen" width="800">
      <v-card>
        <v-card-title>
          <v-row class="mb-6 pt-4 pr-3">
            <v-spacer></v-spacer>
            <v-btn icon @click="houseRuleDialogOpen = false">
              <v-icon color="black">mdi-close</v-icon>
            </v-btn>
          </v-row>
        </v-card-title>
        <v-card-subtitle>
          <div class="text-h5 black--text font-weight-bold">
            House rules
          </div></v-card-subtitle
        >
        <v-card-text class="pb-16">
          <div class="text-body-1 mb-8 pb-5 black--text font-weight-light">
            {{ houseRuleDialogList.title }}
          </div>
          <div
            v-for="houseRuleItem in houseRuleTitle"
            :key="houseRuleItem"
            class="mt-5"
          >
            <span class="text-h6 black--text">{{ houseRuleItem }}</span>
            <div
              v-for="(houseRuleDialogItem, keyIndx) in houseRuleDialogList[
                houseRuleItem
              ]"
              :key="keyIndx"
              class="mt-5"
            >
              <div v-if="keyIndx !== 0">
                <v-divider class="mt-4 mb-4"></v-divider>
              </div>
              <div>
                <v-row>
                  <v-col cols="1">
                    <v-icon color="black">{{ houseRuleDialogItem.icon }}</v-icon>
                  </v-col>
                  <v-col>
                    <span class="text-body-1 black--text font-weight-normal">{{
                      houseRuleDialogItem.text
                    }}</span>
                    <div
                      v-for="(subtext, indx) in houseRuleDialogItem?.subtext"
                      :key="indx"
                    >
                      {{ subtext }}
                    </div>
                  </v-col>
                </v-row>
              </div>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog v-model="safetyAndPropertyDialogOpen" width="800">
      <v-card>
        <v-card-title>
          <v-row class="mb-6 pt-4 pr-3">
            <v-spacer></v-spacer>
            <v-btn icon @click="safetyAndPropertyDialogOpen = false">
              <v-icon color="black">mdi-close</v-icon>
            </v-btn>
          </v-row>
        </v-card-title>
        <v-card-subtitle>
          <div class="text-h5 black--text font-weight-bold">
            Safety & property
          </div></v-card-subtitle
        >
        <v-card-text class="pb-16">
          <div class="text-body-1 black--text mb-8 pb-5 font-weight-light">
            {{ safetyAndPropertyDialogList.title }}
          </div>
          <div
            v-for="safetyAndPropertyItem in safetyAndPropertyTitle"
            :key="safetyAndPropertyItem"
            class="mt-5"
          >
            <span class="text-h6 black--text">{{ safetyAndPropertyItem }}</span>
            <div
              v-for="(
                safetyAndPropertyDialogItem, keyIndx
              ) in safetyAndPropertyDialogList[safetyAndPropertyItem]"
              :key="keyIndx"
              class="mt-5"
            >
              <div v-if="keyIndx !== 0">
                <v-divider class="mt-4 mb-4"></v-divider>
              </div>
              <div>
                <v-row>
                  <v-col cols="1">
                    <v-icon color="black">{{ safetyAndPropertyDialogItem.icon }}</v-icon>
                  </v-col>
                  <v-col>
                    <span class="text-body-1 black--text font-weight-normal">{{
                      safetyAndPropertyDialogItem.text
                    }}</span>
                    <div
                      v-for="(
                        subtext, indx
                      ) in safetyAndPropertyDialogItem?.subtext"
                      :key="indx"
                    >
                      {{ subtext }}
                    </div>
                  </v-col>
                </v-row>
              </div>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog v-model="cancellationPolicyDialogOpen" width="800">
      <v-card>
        <v-card-title>
          <v-row class="mb-6 pt-4 pr-3">
            <v-spacer></v-spacer>
            <v-btn icon @click="cancellationPolicyDialogOpen = false">
              <v-icon color="black">mdi-close</v-icon>
            </v-btn>
          </v-row>
        </v-card-title>
        <v-card-subtitle>
          <div class="text-h5 font-weight-bold black--text">
            Cancellation policy
          </div></v-card-subtitle
        >
        <v-card-text class="pb-16">
          <div class="text-body-1 mb-8 black--text font-weight-light pb-5">
            {{ cancellationPolicyDialogList.title }}
          </div>
          <div
            v-for="cancellationPolicyItem in cancellationPolicyTitle"
            :key="cancellationPolicyItem"
            class="mt-5"
          >
            <span class="text-h6 black--text">{{ cancellationPolicyItem }}</span>
            <div
              v-for="(
                cancellationPolicyDialogItem, keyIndx
              ) in cancellationPolicyDialogList[cancellationPolicyItem]"
              :key="keyIndx"
              class="mt-5"
            >
              <div v-if="keyIndx !== 0">
                <v-divider class="mt-4 mb-4"></v-divider>
              </div>
              <div>
                <v-row>
                  <v-col cols="2">
                    <span class="text-body-1 font-weight-medium black--text">{{
                      cancellationPolicyDialogItem.date
                    }}</span>
                    <div
                      v-for="(
                        subtext, indx
                      ) in cancellationPolicyDialogItem?.time"
                      :key="indx"
                      class="text-caption"
                    >
                      {{ subtext }}
                    </div>
                  </v-col>
                  <v-col class="d-flex align-center black--text justify-start font-weight-normal">
                    <span>{{ cancellationPolicyDialogItem.text }}</span>
                  </v-col>
                </v-row>
              </div>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-container>
      <div class="mb-3 text-h6 font-weight-bold">Things to know</div>
      <v-row>
        <v-col>
          <div class="pl-0 pa-2 text-body-1 font-weight-bold">House rules</div>
          <div
            class="pl-0 pa-2 text-body-1 font-weight-light"
            v-for="houseRule in houseRuleList"
            :key="houseRule"
          >
            {{ houseRule }}
          </div>
          <div>
            <v-btn
              plain
              text
              color="black"
              class="pl-0"
              @click="houseRuleDialogOpen = true"
            >
              <span class="text-decoration-underline text-capitalize"
                >Show more
              </span>
              <v-icon>mdi-chevron-right</v-icon></v-btn
            >
          </div>
        </v-col>
        <v-col>
          <div class="pl-0 pa-2 text-body-1 font-weight-bold">
            Safety & property
          </div>

          <div
            class="pl-0 pa-2 text-body-1 font-weight-light"
            v-for="SafetyAndProperty in safetyAndPropertyList"
            :key="SafetyAndProperty"
          >
            {{ SafetyAndProperty }}
          </div>
          <div>
            <v-btn
              plain
              text
              color="black"
              class="pl-0"
              @click="safetyAndPropertyDialogOpen = true"
            >
              <span class="text-decoration-underline text-capitalize"
                >Show more
              </span>
              <v-icon>mdi-chevron-right</v-icon></v-btn
            >
          </div>
        </v-col>
        <v-col>
          <div class="pl-0 pa-2 text-body-1 font-weight-bold">
            Cancellation policy
          </div>
          <div
            class="pl-0 pa-2 text-body-1 font-weight-light"
            v-for="cancellationPolicy in cancellationPolicyList"
            :key="cancellationPolicy"
          >
            {{ cancellationPolicy }}
          </div>
          <div>
            <v-btn
              plain
              text
              color="black"
              class="pl-0"
              @click="cancellationPolicyDialogOpen = true"
            >
              <span class="text-decoration-underline text-capitalize"
                >Show more
              </span>
              <v-icon>mdi-chevron-right</v-icon></v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script setup>
import { ref } from "vue";

const houseRuleDialogOpen = ref(false);
const safetyAndPropertyDialogOpen = ref(false);
const cancellationPolicyDialogOpen = ref(false);

const houseRuleList = ref([
  "Check-in after 2:00 pm",
  "Checkout before 11:00 am",
  "Pets allowed",
]);

const cancellationPolicyList = ref([
  "Free cancellation before 24 Sep.",
  "Review the Host’s full cancellation policy which applies even if you cancel for illness or disruptions caused by COVID-19.",
]);

const safetyAndPropertyList = ref([
  "Carbon monoxide alarm not reported",
  "Smoke alarm not reported",
  "Pool/hot tub without a gate or lock",
]);

const houseRuleTitle = ref(["Checking in and out", "During your stay"]);

const cancellationPolicyTitle = ref(["Cancel by"]);

const safetyAndPropertyTitle = ref(["Safety considerations", "Safety devices"]);

const houseRuleDialogList = ref({
  title:
    "You'll be staying in someone's home, so please treat it with care and respect.",

  "Checking in and out": [
    { icon: "mdi-clock-outline", text: "Check-in after 2:00 pm" },
    { icon: "mdi-clock-outline", text: "Checkout before 11:00 am" },
  ],

  "During your stay": [
    { icon: "mdi-paw-outline", text: "Pets allowed" },
    {
      icon: "mdi-weather-night",
      text: "Quiet hours",
      subtext: ["11:00 pm - 7:00 am"],
    },
    { icon: "mdi-balloon", text: "No parties or events" },
    { icon: "mdi-camera-off-outline", text: "No commercial photography" },
    { icon: "mdi-smoking-off", text: "No smoking" },

    {
      icon: "mdi-note-text-outline",
      text: "Additional rules",
      subtext: [
        "- Alcohol consumption is allowed.",
        "- Smoking is only allowed outdoors.",
        "- Guests are earnestly requested to treat the home with care.",
      ],
    },
  ],
});

const safetyAndPropertyDialogList = ref({
  title:
    "Avoid surprises by looking over these important details about your Host's property.",

  "Safety considerations": [
    { icon: "mdi-pool", text: "Pool/hot tub without a gate or lock" },
  ],

  "Safety devices": [
    {
      icon: "mdi-weather-night",
      text: "Carbon monoxide alarm not reported",
      subtext: [
        "The host hasn't reported a carbon monoxide alarm on the property. We suggest bringing a portable detector for your trip.",
      ],
    },
    {
      icon: "mdi-note-text-outline",
      text: "Smoke alarm not reported",
      subtext: [
        "The host hasn't reported a smoke alarm on the property. We suggest bringing a portable detector for your trip.",
      ],
    },
  ],
});

const cancellationPolicyDialogList = ref({
  title:
    "Before you book, make sure you're comfortable with this Host's cancellation policy. Keep in mind that Airbnb's Extenuating Circumstances policy doesn't cover cancellations due to illness or travel disruptions caused by COVID-19.",

  "Cancel by": [
    {
      text: "Full refund: Get back 100% of what you paid.",
      date: "24 Sep",
      time: ["2:00 pm"],
    },
    {
      text: "Partial refund: Get back 50% of every night. No refund of the service fee.",
      date: "17 Oct",
      time: ["2:00 pm"],
    },
    {
      text: "No refund",
      date: "24 Oct",
      time: ["2:00 pm", "(check-in)"],
    },
  ],
});
</script>

<style scoped></style>
