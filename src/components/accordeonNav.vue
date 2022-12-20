<template>
  <div>
    <div v-for="(item, index) in items" :key="index" @click="toggle(index)">
      {{ item.title }}
      <div v-if="item.open">{{ item.content }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accordion',
  data() {
    return {
      items: [
        {
          title: 'Debut',
          content: 'encore un test 1',
          open: null
        },
        {
          title: 'Truc encore',
          content: 'encore un test 2',
          open: null
        },
        {
          title: 'du coup',
          content: 'test blalalalalalalalallalalalalalalalalalalalala',
          open: null
        },
        {
          title: 'mes projets',
          content: 'test blalalalalalalalallalalalalalalalalalalalala',
          open: null
        },
        {
          title: 'me contacter',
          content: 'test blalalalalalalalallalalalalalalalalalalalala',
          open: null
        }
      ]
    }
  },
  methods: {
    toggle(index) {
      this.items[index].open = !this.items[index].open;
    }
  }
}
</script>

<style>
.open {
  display: block;
}
</style>