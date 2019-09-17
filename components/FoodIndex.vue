<template>
  <div>
    <nuxt-link
      :to="page+food.name"
      v-for="food in $store.state.search.foods"
      :key="food.name"
    >
      <div class="food">{{ food.name }}</div>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  methods: {},
  props: {
    page: {
      type: String,
      default: ""
    }
  }
};
</script>