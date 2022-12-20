<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AccordeonNav from './components/accordeonNav.vue';
import AccordionDeux from './components/accordionDeux.vue';

</script>

<template>
  <header>
    

    <div class="wrapper">
    

      <nav>
        <AccordeonNav />
        <AccordionDeux />
        
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
