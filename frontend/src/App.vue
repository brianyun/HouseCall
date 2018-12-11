<template>
  <div id="app">
    <v-app>
      <main>
        <v-container fluid>
          <router-view/>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
