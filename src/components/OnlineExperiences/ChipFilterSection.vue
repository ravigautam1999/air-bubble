<template>
    <v-sheet class="ma-6">
      <!-- <v-row>
        <v-col class="d-flex">
          
          <v-card>
            <v-card-title> </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="5"> </v-col>
      </v-row> -->
  
  <!-- $vuetify.breakpoint.smAndDown -->
  
      <div class="d-flex">
        <div class="align-center d-flex justify-center col-style">
          <v-btn class="rounded-pill text-none ml-2 mt-1 mb-1" small outlined
            >Dates</v-btn
          >
          <v-btn class="rounded-pill text-none ml-2 mt-1 mb-1" small outlined
            >Group size</v-btn
          >
          <v-btn class="rounded-pill text-none ml-2 mt-1 mb-1" small outlined
            >More filters</v-btn
          >
        </div>
        <v-divider vertical class="pa-2 mr-sm-0 ml-sm-2 d-none d-sm-flex col-sm-1" inset v-if="!$vuetify.breakpoint.smAndDown"></v-divider>
        <div class="col-sm-8 col-md-8 col-lg-8 col-xl-8 col-xxl-8 d-flex align-start">
          <v-slide-group v-model="chipFilterModel" :show-arrows="$vuetify.breakpoint.smAndDown? false: true">
            <v-slide-item
              v-for="sItem in OnlineExperiencesChipFilterList"
              :key="sItem"
              v-slot="{ active, toggle }"
            >
              <v-btn
                :input-value="active"
                active-class="purple white--text"
                @click="toggle"
                small
              
                class="rounded-pill mr-3 pa-2 text-none font-weight-regular mt-1 mb-1"
              >
                {{ sItem }}
              </v-btn>
            </v-slide-item>
          </v-slide-group>
        </div>
       
      </div>
    </v-sheet>
  </template>
  
  <script setup>
  import OnlineExperiencesChipFilterList from "@/assets/OnlineExperiences/OnlineExperiencesChipFilterList.json";
  import { onMounted, ref } from "vue";
  
  const chipFilterModel = ref();
  
  
  // onMounted(()=> {
  //     console.log(this.$vuetify);
  // });
  </script>
  
  <style scoped>
  .first-div{
      width: 40%;
      display: flex;
  }
  
  .second-div{
      width: 70%;
      display: flex;
  }
  
  .first-div-min{
      min-width: 10%;
  }
  
  .first-div-max{
      width: 30%;
  }
  
  .second-div-min{
      width: 100%;
  }
  
  .second-div-max{
      width: 50%;
  }
  
  .col-style{
      max-width: max-content !important;
  }
  </style>
  
  