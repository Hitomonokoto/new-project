<template>
  <div>
    <nuxt-link
      :to="page+pref.name"
      v-for="pref in $store.state.search.prefs"
      :key="pref.name"
    >
      <div class="prefecture">{{ pref.name }}</div>
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