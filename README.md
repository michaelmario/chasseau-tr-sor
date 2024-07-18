# tresurhuntergame

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

https://api.nasa.gov/planetary/apod?start_date=2021-02-01&end_date=2021-02-17&api_key=DEMO_KEY

<v-app-bar :elevation="2">
    <v-app-bar-title class="text-uppercase">
      <router-link to="/" style="cursor: pointer">
        <span class="font-weight-light">Treasure</span>
        <span> Hunt</span>
      </router-link>
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <div class="hidden-sm-and-down">
      <v-btn class="light" icon>
        <v-icon>mdi-cart</v-icon>
      </v-btn>
      <v-btn flat color="grey">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </div>
     <template v-slot:prepend>
      <v-btn @click.stop="drawer = !drawer">
         <v-app-bar-nav-icon >
      </v-app-bar-nav-icon>
      </v-btn>     
    </template>
    <v-layout>
      <v-navigation-drawer image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg" theme="dark" 
        v-model="drawer">
        <v-list nav>
          <v-list-item prepend-icon="mdi-email" title="Inbox" value="inbox"></v-list-item>
          <v-list-item prepend-icon="mdi-account-supervisor-circle" title="Supervisors"
            value="supervisors"></v-list-item>
          <v-list-item prepend-icon="mdi-clock-start" title="Clock-in" value="clockin"></v-list-item>
        </v-list>

        <v-list class="mt-5">
          <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.link">
            <v-list-tile-action>
              <v-icon class="light" left>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content class="light">{{ item.title }}</v-list-tile-content>
          </v-list-tile>
          <v-list-tile v-if="userIsAuthenticated" @click="onLogout">
            <v-list-tile-action>
              <v-icon></v-icon>
            </v-list-tile-action>
            <v-list-tile-content class="light">Logout</v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-main style="height:600px"></v-main>


      </v-navigation-drawer>
    </v-layout>
    
  </v-app-bar>
  </template>

<script>
export default {
  data() {
    return {
      drawer: false
    }
  },

  computed: {
    menuItems() {
      let menuItems = [
        { icon: 'mdi-account', title: 'Sign up', link: '/signup' },
        { icon: 'mdi-lock_open', title: 'Sign in', link: '/signin' }
      ]
      if (this.userIsAuthenticated) {
        menuItems = [
          { icon: 'supervisor_account', title: 'View Meetups', link: '/meetups' },
          { icon: 'room', title: 'Organize Meetup', link: '/meetup/new' },
          { icon: 'person', title: 'Profile', link: '/profile' }
        ]
      }
      return menuItems
    },
  }
}
</script>
