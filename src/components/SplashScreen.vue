<template>
  <transition-group appear tag="div" @before-enter="beforeEnter" @enter="enter">
    <div id="splash-screen" >
      <v-img :src="image" alt="logo" aspect-ratio="2">
      </v-img>
    </div>
  </transition-group>
</template>

<script>
//  import { ref } from 'vue'
import gsap from 'gsap'

export default {
  setup() {
     const beforeEnter = (el) => {
      el.style.opacity = 0
      el.style.transform = 'translateY(100px)'
    }

    const enter = (el, done) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        onComplete: done,
        delay: el.dataset.index * 0.2
      })
    }
    setTimeout(() => {
      // Hide the splash screen after 3 seconds (change 3000 to 180000 for 3 minutes)
       document.getElementById('splash-screen').classList.add('isActive');
      
    }, 3000);
    return {
      beforeEnter, enter, 
      image: require('../assets/images/desktop-carousel-logo.png')
    }
  },
  // mounted() {
  //   setTimeout(() => {
  //     isActive = true ;
  //     // Hide the splash screen after 3 seconds (change 3000 to 180000 for 3 minutes)
  //     // document.getElementById('splash-screen').style.display ='none';
  //   }, 3000);
  // }
};
</script>
<style scoped>
.isActive{
 display:none;
}
</style>
