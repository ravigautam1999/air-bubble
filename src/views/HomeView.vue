<template>
  <v-sheet>
    <filter-menu></filter-menu>
    <filter-card></filter-card>
    <hello-world />
  </v-sheet>
  
</template>

<script lang="ts">
  import Vue from 'vue'
  import HelloWorld from '../components/HelloWorld.vue'
  import NavBar from '../components/NavBar.vue'
  import FilterMenu from '../components/FilterMenu/FilterMenu.vue'
  import FilterCard from '../components/FilterCard/FilterCard.vue'
  
  export default Vue.extend({
    name: 'HomeView',

    components: {
      HelloWorld,
      FilterMenu,
      FilterCard
    },
  })
</script>
