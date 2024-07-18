<template>
  <v-hover v-slot="{ isHovering, props }">
  <router-link :to="{name:`productView`, params:{id:id}}">    
    <v-card class="mx-2 my-4" dark color="grey-lighten-4" v-bind="props">
      <v-img :aspect-ratio="16 / 9" :src="image" :alt="date" cover>
        <v-expand-transition>
          <div v-if="isHovering" class="d-flex transition-fast-in-fast-out bg-grey-darken-2 v-card--reveal text-p"
            style="height: 100%;">
            {{ explanation }}
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text class="pt-5">
        <div class="font-weight-light dark text-h6 mb-2">
         <span>{{ cardTitle }} 
           <v-icon color="white-darken-2 floatRight" icon="mdi-arrow-right" size="large"></v-icon>
        </span>
       </div>
      </v-card-text>
    </v-card>
  </router-link>    
  </v-hover>
</template>

<script>
export default {
  props: {
    cardTitle: String,
    instructions: String,
    explanation: String,
    image: String,
    date: Number,
    id: Number
  },
  data() {
    return {
      // isHovered:true,
    };
  },
};
</script>
<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .9;
  position: absolute;
  width: 100%;
  font-size: 15px !important;
  padding: 10px;
}

a {
  color: #000 !important;
}
.floatRight{
  float:right;
}
</style>