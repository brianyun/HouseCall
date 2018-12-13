<template>
  <div id="app">
    <v-app>
      <page-header/>

      <main>
        <v-container ma-0 pa-0 fluid>
          <router-view/>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
import PageHeader from "@/components/Header";
export default {
  name: "App",
  components: {
    PageHeader
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 48px;
}

.input-group--text-field input {
  border-bottom: 1px solid black;
}
</style>
