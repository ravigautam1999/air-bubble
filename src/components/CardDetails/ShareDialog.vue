<template>
  <v-dialog v-model="openShareDialog" width="600">
    <v-card class="rounded-xl">
      <v-card-title>
        <v-row>
          <v-spacer></v-spacer>
          <v-btn fab small icon @click="openShareDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-row>
      </v-card-title>
      <v-card-title class="mb-4"> Share this place </v-card-title>
      <v-card-subtitle>
        <v-row>
          <v-col cols="2">
            <v-img
              :src="require('@/assets/CardImg/air_bubble_app_pic_1.png')"
              width="60"
              height="60"
              class="rounded-lg"
            ></v-img>
          </v-col>
          <v-col
            cols="10"
            class="d-flex justify-start align-center text-body-1"
          >
            {{ propertyName }} . {{ noOfBedroomsShareDialog }} bedroom .
            {{ noOfBedsShareDialog }} beds .
            {{ noOfBathroomsShareDialog }} bathrooms
          </v-col>
        </v-row>
      </v-card-subtitle>
      <v-card-actions class="pb-10">
        <v-row>
          <v-col cols="6" v-for="share in shareOptions" :key="share.name">
            <v-card class="rounded-lg">
              <v-card-title>
                <v-btn
                  block
                  plain
                  class="justify-start text-capitalize text-body-1 font-weight-medium"
                >
                  <v-icon large left>
                    {{ share.icon }}
                  </v-icon>
                  <span class="ml-4">{{ share.name }}</span>
                </v-btn>
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, watch, defineProps } from "vue";

const openShareDialog = ref(false);
const shareDialogTitleImg = ref("");
const propertyName = ref("Bed and breakfast in Pharog");
const noOfGuestsShareDialog = ref(12);
const noOfBedsShareDialog = ref(6);
const noOfBedroomsShareDialog = ref(6);
const noOfBathroomsShareDialog = ref(8);
const props = defineProps(["openShareDialog"]);
const shareOptions = ref([
  { name: "Copy Link", icon: "mdi-content-copy" },
  { name: "Email", icon: "mdi-email-outline" },
  { name: "Message", icon: "mdi-message-text-outline" },
  { name: "WhatsApp", icon: "mdi-whatsapp" },
  { name: "Messenger", icon: "mdi-facebook-messenger" },
  { name: "Facebook", icon: "mdi-facebook" },
  { name: "Twitter", icon: "mdi-twitter" },
  { name: "Embed", icon: "mdi-xml" },
]);

watch(
  () => props.openShareDialog,
  () => {
    console.log("share", openShareDialog.value);
    openShareDialog.value = true;
  }
);
</script>

<style scoped></style>
