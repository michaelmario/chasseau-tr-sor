<template>
  <v-app class="grey lighten-4">
    <Navbar />
    <v-main id="main">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
    <FooterComponent />
  </v-app>
</template>

<script>
import Navbar from '@/components/NavComponent.vue'
import FooterComponent from '@/components/FooterComponent'


export default {
  name: 'App',
  components: {
    FooterComponent,
    Navbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#main {
  margin-top: 10px;

}
</style>
