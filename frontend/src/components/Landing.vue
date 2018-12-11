<template>
  <div class="white elevation-2">
    <v-toolbar flat dense class="cyan" dark>
      <v-toolbar-title dark>Title</v-toolbar-title>

      <slot name="action"></slot>
    </v-toolbar>

    <div class="pl-4 pr-4 pt-3 pb-3">
      <slot>No slot content defined.</slot>
    </div>
  </div>
</template>



<script>
export default {
  async mounted() {
    console.log("Landing.vue mounted()");
  }
};
</script>

<style scoped>
</style>