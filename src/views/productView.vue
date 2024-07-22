<template>   
        <v-container id="HomePage" mode="in-out" transition="fade-transition" fluid>
           <v-row>
            <v-col>
            <router-link to="/">
                <v-icon color="white-darken-2" icon="mdi-arrow-left" size="large"></v-icon>
                    <span class="font-weight-light ml-2">Accueil </span>
            </router-link>
            </v-col>
           </v-row>
           <v-row>
            <v-col v-for="(n,index) in products" :key="index" cols="12"  sm="4">
                <TreasureCard 
                :image ="`${n.url}`"
                :cardTitle="`${n.title}`"
                :explanation ="`${n.explanation}`"
                :id ="n.id"
                />
            </v-col>
          </v-row>
        </v-container>
    
</template>
<script>
import TreasureCard from '@/components/TreasureCard.vue'
import products  from "@/resources/data.json";
// const API_URL = 'http://localhost:8081/data'
export default {
    name: 'HomeView',
    data() {
        return {
            products,          
        }
    },
    components:{
        TreasureCard
    },
    created(){
       this.products;
    }
    // created() {  photos: [],
    //     fetch(API_URL)
    //     .then(result => result.json())
    //     .then(result => {this.photos = result})
    // }
}
</script>
<style scoped>
#HomePage > h3{
 margin-left:20px; 
}
.returnBack{
   cursor: pointer;
   line-height:3;
   float:left;
   margin-right:20px;
}
 
</style>
