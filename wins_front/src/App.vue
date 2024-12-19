<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderSection from './components/HeaderSection.vue'
import FooterSection from './components/FooterSection.vue'


import BannerSection from './views/BannerSection.vue'
import ItemSection from './views/ItemSection.vue'
import CounterSection from './views/CounterSection.vue'
</script>

<template>  
  <HeaderSection />
  <BannerSection />
  <ItemSection />
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
