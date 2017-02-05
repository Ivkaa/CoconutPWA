<template>
  <div id="app">
      <eventform></eventform>
      <!-- picture thumbnail -->
      <recipe title="Thumbnail label">Hi!</recipe>
  </div>
</template>

<script>
import Recipe from './components/Recipe.vue';
import Eventform from './components/Event-form.vue';

export default {
  name: 'app',
  components: { Recipe, Eventform },
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
