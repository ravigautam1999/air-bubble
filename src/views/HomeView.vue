<template>
  <v-sheet id="div-container">
    <NavBar @on-hide-overlay="hideOverlay"/>
    <filter-menu></filter-menu>
    <filter-card></filter-card>
    <hello-world />
    <footer-component></footer-component>
    <v-row justify="center">
        <v-overlay
          :absolute="absolute"
          :value="overlay"
        >
        </v-overlay>
      </v-row>
  </v-sheet>
  
</template>

<script setup>
  import Vue, { ref } from 'vue'
  import HelloWorld from '../components/HelloWorld.vue'
  import NavBar from '../components/NavBar/NavBar.vue'
  import FilterMenu from '../components/FilterMenu/FilterMenu.vue'
  import FilterCard from '../components/FilterCard/FilterCard.vue'
  import FooterComponent from '@/components/FooterComponent.vue'
  
  
const absolute = ref( true)
const overlay =ref(false)

const hideOverlay = (val) =>{
 
  overlay.value = val.val.value
  console.log("hide", val, overlay)
}
</script>
