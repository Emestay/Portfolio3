<template>
    <div>
      <template v-for="(item, index) in items" :key="index">
        <div class="accordion-item" >
          <div @click="toggleAccordion(index)" class="accordion-header " :class="{ 'active': item.open }">
            {{ item.header }}
          </div>
          <div v-if="item.open" class="accordion-body ">
            {{ item.body }}
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
    scroll(e){

    },
    
  }
  </script>
  
  <style>
  *{
    color: aqua;
  }
  .accordion-item {
    border: 1px solid #ccc;
  }
  
  .accordion-header {
    background-color: #f5f5f5;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    transition: 0.4s;
  }
  .active{
    color: chartreuse;
  }
  .active, .accordion-header:hover {
    background-color: brown;
  }
  
  .accordion-body {
    padding: 0 18px;
    
    overflow: hidden;
    background-color: white;
  }
  </style>