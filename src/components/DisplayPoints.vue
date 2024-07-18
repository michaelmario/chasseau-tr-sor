// src/components/DisplayPoints.vue
<template>
    <div v-if="sum">       
          <v-chip color="green">
            {{ sum }}
          </v-chip>
          <!-- <v-list-item-subtitle>{{ point.timestamp.toDate().toLocaleString() }}</v-list-item-subtitle> -->   
    </div>
</template>

<script>
import { ref } from 'vue'
import {projectAuth, projectFirestore } from '@/firebase/config'
import { collection, query,onSnapshot } from "firebase/firestore";

export default {
    
    data() {
        return {
            points: [],
            user:ref(projectAuth.currentUser),
             sum:0

        };
     },
    mounted() {
        this.fetchPoints();
                 
    },
    methods: {
        fetchPoints() {
            const q = query(collection(projectFirestore, `users/${this.user.uid}/points`));
            onSnapshot(q, (querySnapshot) => {
                this.points = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                this.points.forEach((el)=>{ 
                    this.sum += el.points;                   
                }) 
                 
                          
            });
          
        }
    }
};
</script>
