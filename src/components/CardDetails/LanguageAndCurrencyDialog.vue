<template>
  <v-sheet>
    <v-dialog v-model="langDialogOpen">
      <v-card>
        <v-card-title class="mb-0">
          <v-spacer></v-spacer>
          <v-btn small icon fab @click="langDialogOpen = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-subtitle class="mt-0">
          <v-tabs color="black" v-model="languageTabs">
            <v-tabs-slider color="black"></v-tabs-slider>
            <v-tab v-for="tab in tabsList" :key="tab" class="text-capitalize">
              {{ tab }}
            </v-tab>
          </v-tabs>
          <v-tabs-items v-model="languageTabs">
            <v-divider class="black"></v-divider>
            <v-tab-item key="Language and region">
              <div>
                <div class="translate-div">
                    <v-row class="ma-3" justify="center">
                        <v-col class="d-flex flex-column justify-center align-start">
                            <div class="text-body-1 font-weight-medium">Translation <v-icon color="black" class="ml-2">mdi-translate-variant</v-icon></div>
                            <div class="text-subtitle-2 font-weight-normal">Automatically translate descriptions and reviews to English.</div>
                        </v-col>
                        <v-col class="d-flex justify-end">
                            <v-switch color="black"></v-switch>
                        </v-col>
                    </v-row>
                </div>
                <div class="text-h5 black--text pt-4 pb-6">Suggested languages and regions</div>
                <div class="pb-5">
                  <v-item-group>
                    <v-row>
                      <v-col
                        v-for="(suggLang, indx) in suggestedLangAndReg"
                        :key="indx"
                        cols="2"
                      >
                        <v-item v-slot="{ active, toggle }" class="pa-3">
                          <v-card
                            flat
                            :class="active ? '' : 'suggLangCard'"
                            @click="toggle"
                          >
                            <div>{{ suggLang.lang }}</div>
                            <div>{{ suggLang.region }}</div>
                          </v-card>
                        </v-item>
                      </v-col>
                    </v-row>
                  </v-item-group>
                </div>

                <div class="text-h5 black--text pt-4 pb-6">Choose a language and region</div>
                <div class="pb-5">
                  <v-item-group mandatory>
                    <v-row>
                      <v-col
                        v-for="(langAndReg, ind) in langAndRegionList"
                        :key="ind"
                        cols="2"
                      >
                        <v-item v-slot="{ active, toggle }" class="pa-3">
                          <v-card
                            flat
                            :class="active ? 'suggLangCardActive' : 'suggLangCard'"
                            @click="toggle"
                          >
                            <div>{{ langAndReg.lang }}</div>
                            <div>{{ langAndReg.region }}</div>
                          </v-card>
                        </v-item>
                      </v-col>
                    </v-row>
                  </v-item-group>
                </div>
              </div>
            </v-tab-item>
            <v-tab-item key="Currency"> <div class="text-h5 black--text pt-4 pb-6">Choose a currency</div>
                <div class="pb-5">
                  <v-item-group mandatory>
                    <v-row>
                      <v-col
                        v-for="countryAndCurrency in countryAndCurrencyList"
                        :key="countryAndCurrency.country"
                        cols="2"
                      >
                        <v-item v-slot="{ active, toggle }" class="pa-3">
                          <v-card
                            flat
                            :class="active ? 'suggLangCardActive' : 'suggLangCard'"
                            @click="toggle"
                          >
                            <div>{{ countryAndCurrency.country }}</div>
                            <div>{{ countryAndCurrency.currency }}</div>
                          </v-card>
                        </v-item>
                      </v-col>
                    </v-row>
                  </v-item-group>
                </div>
            </v-tab-item>
          </v-tabs-items>
        </v-card-subtitle>
      </v-card>
    </v-dialog>
  </v-sheet>
</template>

<script setup>
import { ref, defineProps, watch } from "vue";
import suggestedLangAndReg from "@/assets/dummyData/suggestedLangAndRegion.json";
import langAndRegionList from "@/assets/dummyData/languageAndRegion.json";
import countryAndCurrencyList from "@/assets/dummyData/countryAndCurrency.json";

const langDialogOpen = ref(false);
const languageTabs = ref();
const props = defineProps(["openDialog"]);

const tabsList = ref(["Language and region", "Currency"]);

watch(
  () => props.openDialog,
  () => {
    langDialogOpen.value = true;
  }
);
</script>

<style scoped>
.suggLangCardActive {
  border: 1px solid black;
  border-radius: 8px;
}
.suggLangCard:hover {
  cursor: hand;
  background-color: rgb(229, 229, 229);
}

.translate-div{
    background-color: rgba(230, 230, 230, 0.428);
    border-radius: 10px;
}
</style>
