<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderSection from './components/HeaderSection.vue'
import FooterSection from './components/FooterSection.vue'

import CounterSection from './views/CounterSection.vue'
</script>

<template>  
  <HeaderSection />
  <CounterSection />
  <FooterSection />
  <RouterView />
</template>


<style scoped>


 @media (min-width: 481px) and (max-width: 1014px){

 }


 @media (max-width: 481px){
  
}
  

</style>
