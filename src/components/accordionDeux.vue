<template>
  <div>
    <template v-for="(item, index) in items" :key="index">
      <div class="accordion-item">
        <div @click="toggleAccordion(index)" class="accordion-header " :class="{ 'active': item.open }">
          {{ item.header }}
        </div>
        
        <div v-if="item.open" class="accordion-body ">
          <transition name="fade" >
            {{ item.body }}
          </transition>
          </div>
        </div>
    </template>
  </div>
</template>
  
<script>
export default {
  name: 'AccordionDeux',
  data() {
    return {
      items: [
        {
          header: 'Header 1',
          body: 'Body 1 lorem Body 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 lorem',
          open: null
        },
        {
          header: 'Header 2',
          body: 'Body 1 lorem Body 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 lorem',
          open: null
        },
        {
          header: 'Header 3',
          body: 'Body 1 lorem Body 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 loremBody 1 lorem',
          open: null
        }
      ]
    }
  },
  methods: {
    toggleAccordion(index) {
      this.items.forEach((item, i) => {
        if (index === i) {
          item.open = !item.open
        } else {
          item.open = false
        }
      })
    }
  },
  scroll(e) {

  },

}
</script>
  
<style>
* {
  color: black;
}

.accordion-item {
  border: 2px black solid;
  box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 1);
  -webkit-box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 1);
  -moz-box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 1);
  margin-bottom: 0.2%;
}

.accordion-header {
  background-color: #f5f5f5;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  text-align: center;
  font-size: 25px;
  transition: 0.4s;
  font-family: 'Rubik 80s Fade', cursive;
  font-weight: 600;
}

.active {
  color: wheat;
}

.active,
.accordion-header:hover {
  background-color: brown;
}

.accordion-body {
  background-color: white;
  padding: 1%;
}

.hiddenfrr {
  display: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  transform: translateX(20px);
  opacity: 0;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>