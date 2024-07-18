<template>
    <v-container class="mt-5">
        <v-row>
            <v-col>
                <router-link to="/productView">
                    <v-icon color="white-darken-2" icon="mdi-arrow-left" size="large"></v-icon>
                    <span class="font-weight-light ml-2">Game collection
                    </span>
                </router-link>
            </v-col>
        </v-row>
        <v-row>
        <v-col>
            <v-card class="mx-4 my-4" dark color="grey-lighten-4" v-for="game in gameInCloud" :key="game.id"
                elevation="5" outlined shaped tile>
                <v-img :aspect-ratio="16 / 9" :src="game.hdurl" :alt="game.date" cover class="align-end"></v-img>
                <v-card-item>
                    <template v-slot:title>
                        {{ game.title }}
                    </template>
                    <template v-slot:text>
                        <p>{{ game.explanation }}</p>
                        <p>{{ game.mission }}</p>
                    </template>
                    <v-expansion-panels v-for="(quiz, index) in game.quiz" :key="index" >
                        <v-expansion-panel :title="quiz.question" :text="quiz.content" class="mt-4 px-5 py-4" game="foo">
                            <v-radio-group v-model="answers[index]" column>
                                <v-radio v-for="choice in quiz.choices" :key="choice" :label="choice"
                                    :value="choice"></v-radio>
                            </v-radio-group>                         
                        </v-expansion-panel>
                    </v-expansion-panels> 
                    <v-btn @click="submitQuiz" color="green">Envoyer</v-btn>
                </v-card-item>

            </v-card>
           
        </v-col>
    </v-row>
        <v-row>
            <v-col>
                <h1>Game Play </h1>
                <p v-if="user">
                    {{ user.email }}</p>
                <v-main>
                    <v-row>
                        <v-col cols="12" sm="4" md="12">
                            <div class="text-center d-flex pb-4">
                                <v-btn class="ma-2" @click="all">
                                    All
                                </v-btn>
                                <v-btn class="ma-2" @click="none">
                                    None
                                </v-btn>
                            </div>
                        </v-col>
                        <v-col v-if="user">
                            {{ user.games }}
                           
                        </v-col>
                    </v-row>
                </v-main>
            </v-col>
        </v-row>

    </v-container>
</template>
<script>
// import RecordPoints from "@/components/RecordsPoints.vue";

import getUser from '../composables/getUser'
import { projectAuth, projectFirestore } from '@/firebase/config'

import { collection, query, where, onSnapshot } from "firebase/firestore";

export default {
    components: {
       
    },
    setup() {
        const { user } = getUser();
        let values = "";
        let datavalue = [];
        let mergedArray = [];
        let panel = [];
        let gameInCloud = [] 
        let gamesArray = [];

        const getLocalData = () => {
            let keys = Object.keys(localStorage),
                i = keys.length;

            while (i--) {
                values = JSON.parse(localStorage.getItem(keys[i]));
                datavalue = datavalue.concat(values);

            }

            datavalue.forEach((elm) => {
                mergedArray.push(elm);
            })
        }
        const all = () => {
            panel.push('foo', 'bar', 'baz');
        }

        const none = () => {
            panel = []
        }
       
        const fetchGames = ()=>{
            const q = query(collection(projectFirestore, `users/${projectAuth.currentUser.uid}/games`), where("userId", "==", projectAuth.currentUser.uid));
            onSnapshot(q, (querySnapshot) => {
               let games = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                console.log(games)            
                // games.forEach((el) => {
                //      gameInCloud = el; 
                    
                //     })
                //     console.log(gameInCloud)
                });
            }
        
        return { user, values, getLocalData, datavalue, mergedArray, all, none, panel,fetchGames,gameInCloud,gamesArray }
    },
    mounted() {
        // this.mergedArray.forEach((element) => {
        //     console.log(element)
        // })
        // this.getLocalData();
         this.fetchGames();

    }

}
</script>
<style scoped></style>