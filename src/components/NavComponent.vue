<template>
  <v-app-bar :elevation="2" dark prominent>
    <v-app-bar-title class="text-uppercase">
      <router-link to="/" style="cursor: pointer">
        <span class="font-weight-light">Treasure</span>
        <span> Hunt</span>
      </router-link>
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <div v-if="user" class="d-flex justify-space-around">
          <p class="mr-5"><router-link :to="{ name: 'GamePage' }">jeux</router-link></p>
          <DisplayPoints />
          <v-btn @click="handleClick">Logout</v-btn>
    </div>
    <template class="d-sm-none .d-md-flex">
      <v-btn icon="mdi-magnify" variant="text"></v-btn>
      <v-btn icon="mdi-filter" variant="text"></v-btn>
    </template>
    <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
    <div class="d-sm-only">
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </div>
  </v-app-bar>
  <v-navigation-drawer image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg" theme="dark" v-model="drawer"
    temporary>
    <v-list class="mt-5" nav v-for="item in menuItems" :key="item.title">
      <router-link :to="item.link">
        <v-list-item :prepend-icon="item.icon" :title="item.title" value="inbox">
        </v-list-item>
      </router-link>
    </v-list>
    <v-list v-if="user" class="mt-2">
      <v-list-item @click="handleClick">
        <v-icon icon="mdi-account-supervisor-circle" class="mr-5"></v-icon>
        logout
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { ref } from 'vue'
import { projectAuth } from '../firebase/config'
import DisplayPoints from "@/components/DisplayPoints.vue";

export default {
 components:{
  DisplayPoints
 },
  data() {
    return {     
      drawer: false,     
      user:ref(projectAuth.currentUser),
      menuItems: [
        { icon: 'mdi-access-point-off', title: "Acesss Wifi", link: '/' },
        { icon: 'mdi-cloud-upload', title: "Accueil", link: '/' },
        { icon: 'mdi-folder-open', title: "S'inscrire", link: '/LoginPage' },
        { icon: 'mdi-account', title: 'Connexion', link: '/SignupPage' },
        { icon: 'mdi-lock', title: 'Contact', link: '/contact' }
      ],
    }
  },
  methods: {
    async handleClick() {
      
  try {
    await projectAuth.signOut();
    window.location.href="/LoginPage"   
  }
  catch(err) {
    console.log(err.message)    
   
  }
      // alert(this.user)
        //this.$router.push({ name: 'LoginPage' });
      
      },     
   
    openDrawer() {
      if (this.drawer) {
        this.drawer = !this.drawer;
      }
    }

  },
  onMounted() {
    return this.menuItems;
  }
  //  if (user) {
  //     menuItems = ref([
  //       { icon: 'supervisor_account', title: 'View Meetups', link: '/meetups' },
  //       { icon: 'room', title: 'Organize Meetup', link: '/meetup/new' },
  //       { icon: 'person', title: 'Profile', link: '/profile' }
  //     ])
  //   }

}

</script>

<style>
a {
  background-color: transparent;
  text-decoration: none;
  color: #fff;
}
</style>