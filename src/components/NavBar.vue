<template>
  <v-sheet>
    <v-app-bar>
      <v-row>
        <v-col>
          <v-img :src="navIcon.icon" height="60" width="100"></v-img>
        </v-col>
        <v-col class="d-flex align-center justify-center">
          <div class="d-flex justify-center align-center search-bar">
            <span class="pl-2 pr-2 text-subtitle-2">Anywhere</span>
            <v-divider vertical></v-divider>
            <span class="pl-2 pr-2 text-subtitle-2">Any week</span>
            <v-divider vertical></v-divider>
            <span class="pl-2 pr-2 text-subtitle-2">Add guests</span>
            <span class="pl-2 pr-0 text-subtitle-2">
              <v-btn icon fab x-small color="white" class="red">
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
            </span>
          </div>
        </v-col>
        <v-col class="d-flex align-center justify-end">
          <span>
            <v-btn text class="text-subtitle-2 text-capitalize">
              Air bubble home
            </v-btn>
          </span>
          <span class="pr-2">
            <v-btn fab icon @click="openDialog = !openDialog">
              <v-icon color="black">mdi-web</v-icon>
            </v-btn>
          </span>
          <span>
            <v-menu bottom offset-y rounded="xl" nudge-bottom="10">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  outlined
                  class="rounded-pill pa-5 pr-4"
                >
                  <v-icon left>mdi-menu</v-icon>
                  <v-icon large right>mdi-account-circle</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item>
                  <v-btn
                    text
                    block
                    class="justify-start text-capitalize text-subtitle-2"
                    @click="openSignDialog = !openSignDialog"
                    >Sign up</v-btn
                  >
                </v-list-item>

                <v-list-item>
                  <v-btn
                    text
                    block
                    class="justify-start text-capitalize text-subtitle-2"
                    @click="openSignDialog = !openSignDialog"
                    >Log in</v-btn
                  >
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item>
                  <v-btn
                    text
                    block
                    class="justify-start text-capitalize text-subtitle-2"
                    >Air bubble your home</v-btn
                  >
                </v-list-item>

                <v-list-item>
                  <v-btn
                    text
                    block
                    class="justify-start text-capitalize text-subtitle-2"
                    >Help Center</v-btn
                  >
                </v-list-item>
              </v-list>
            </v-menu>
          </span>
        </v-col>
      </v-row>
      <LanguageAndCurrencyDialog :openDialog="openDialog" />
      <LoginOrSignupDialog :openSignDialog="openSignDialog" />
    </v-app-bar>
  </v-sheet>
</template>

<script setup>
import { ref } from "vue";
import LanguageAndCurrencyDialog from "@/components/CardDetails/LanguageAndCurrencyDialog.vue";
import LoginOrSignupDialog from "@/components/User/LoginOrSignupDialog.vue";
import CardDetails from "@/components/CardDetails/CardDetails.vue"
const navIcon = ref({ icon: require("@/assets/web_app_logo.png") });

const openDialog = ref(false);
const openSignDialog = ref(false);
</script>

<style scoped>
.search-bar {
  border: 1px solid rgb(233, 233, 233);
  padding: 7px;
  border-radius: 40px;
  box-shadow: 0px 0px 8px rgb(186, 186, 186);
}
</style>
