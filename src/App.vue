<script setup>
import { RouterLink, RouterView } from 'vue-router'

import AccordionDeux from './components/accordionDeux.vue';

</script>

<template>
  <header>
    

    <div class="wrapper">
    

      <nav>
      
        <AccordionDeux />
        
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
