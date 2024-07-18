<template>
    <v-expand-transition>
    <v-container>
        <v-row>
            <v-col>
                <router-link to="/">
                    <span class="font-weight-light ml-2">Accueil</span>
                </router-link>
            </v-col>
            <v-spacer></v-spacer>
            <v-col>
                <router-link to="/productView" class="float-end">
                    <v-btn class="font-weight-light">Voir Plus ...
                        <v-icon color="white-darken-2" icon="mdi-arrow-right" size="large"></v-icon>
                    </v-btn>
                </router-link>
            </v-col>
        </v-row>
        <!-- <SplashScreen /> -->
        <v-container transition="slide-y-transition" @before-enter="beforeEnter">           
            <div class="wrapper">
                <iframe loading="lazy" src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGJfo_qSDQ&#x2F;oK64JkCPVc3eKJ2OxiLrdA&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>
                
            </div> 
            
          
        </v-container>
        
    </v-container>
    </v-expand-transition>
</template>
<script>
// import SplashScreen from '@/components/SplashScreen.vue'
// import gsap from 'gsap'
export default {
    name: 'HomeView',
    data() {
        return {

        }
    },
    components: {
        // SplashScreen,
    },
    methods:{
        // beforeEnter(el){
        //     el.style.opacity = 0
        //     el.style.transform = 'translateY(100px)'
        // },
        // enter(el, done){
        //     gsap.to(el, {
        //         opacity: 1,
        //         y: 0,
        //         duration: 6,
        //         onComplete: done,
        //         delay: 5000
        //     })    }
},
    mounted() {
        //  this.beforeEnter;
        //  this.enter;
    //   setTimeout(() => {
    //     // Hide the splash screen after 3 seconds (change 3000 to 180000 for 3 minutes)
    //      let animate = document.querySelector('.AnimateContent');
    //      animate.classlist.replace('AnimateContent', 'active'); 
        
    //   }, 4000);
    }

}
</script>
<style scoped>
.wrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
    height: 0;
    
}
.wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border:none !important;
}
@media only screen and (max-width: 768px) {
    .wrapper {
    padding-bottom: 73.25%;
    padding-top: 43px;
   }
}

  
/* iframe {
    position:relative;
    width: 100%;
    height: 100%;
    min-height:600px;
    top: 0;
    left: 0;
    border: none;
    padding: 0;
    margin: 0;
    overflow: hidden;
    border-radius: 8px;
    will-change: transform;
    box-shadow: 0 2px 8px 0 rgba(63, 69, 81, 0.16);
} */

/* #iframe {
    position: ;
    width: 100%;
    height: 350px;
    padding-top: 56.2225%;
    padding-bottom: 0;  
    margin-top: 1.6em;
    margin-bottom: 0.9em;
  
} */
.AnimateContent{
 display:none;
}

.AnimateContent .active{
 display:block;
}

</style>
