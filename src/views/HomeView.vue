<template>
  <v-sheet>
    <filter-menu></filter-menu>
    <filter-card></filter-card>
    <hello-world />
    <footer-component></footer-component>
  </v-sheet>
  
</template>

<script setup>
  import Vue from 'vue'
  import HelloWorld from '../components/HelloWorld.vue'
  import NavBar from '../components/NavBar.vue'
  import FilterMenu from '../components/FilterMenu/FilterMenu.vue'
  import FilterCard from '../components/FilterCard/FilterCard.vue'
  import FooterComponent from '@/components/FooterComponent.vue'
  
</script>
