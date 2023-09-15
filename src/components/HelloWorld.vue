<template>
  <div>
    <!-- <v-footer>
      <v-row>
        <v-col v-for="(r,indx) in list" :key="indx">
          <span v-if="indx%2 === 0">
            { "title": "{{ r }}",
          </span>
          <span v-else>
            "subtitle": "{{ r }}" },
          </span>
        </v-col>
      </v-row>
    </v-footer> -->
  </div>
</template>

<script setup>
import {ref} from "vue";
import list from "../assets/dummyData/footerTabsItems.json";


</script>
