<template>
    <v-container class="mt-5">
        <v-row>
            <v-col>
                <router-link to="/productView/">
                    <v-icon color="white-darken-2" class="mr-1" icon="mdi-arrow-left" size="large"></v-icon>
                     <span class="font-weight-light ml-2"> Les jeux
                    </span>
                </router-link>
            </v-col>
            <v-col>
                <v-spacer></v-spacer>
                <div class="gotoView" v-if="user">
                    <router-link to="/gamePage">
                        <v-btn class="font-weight-light">User play
                            <!-- <v-icon " icon="" "></v-icon> -->
                        </v-btn>
                        <v-icon color="white-darken-2" class="mr-1" size="large" icon="mdi-arrow-right"></v-icon>
                    </router-link>
                </div>
                <div class="gotoView" v-else>
                    <v-btn class="font-weight-light" @click="signinUser">play
                        <v-icon color="white-darken-2" icon="mdi-arrow-right" size="large"></v-icon>
                    </v-btn>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card>
                    <template v-slot:title>
                        <p class="font-weight-light p-5">{{ item.title }}</p>
                        <small>{{ item.date }}</small>
                    </template>
                    <div>
                        <v-img :src="item.hdurl" :alt="item.title"></v-img>
                        <p class="mt-3 p-5">{{ item.mission }}</p>
                    </div>
                    <div v-if="user">
                        <v-btn @click="gotoGamePage" :class="{ invisible: !value2 }">Add To Play</v-btn>
                        <!-- <v-card v-if="ifAddGame">
                            <h3>jeux</h3>
                            <div>
                                <v-card v-for="(item, index) in newData" :key="index" class="mb-4">
                                    <v-card-title>{{ item.question }}</v-card-title>
                                    <v-card-text>
                                        <v-radio-group v-model="data[index]" column>
                                            <v-radio v-for="choice in item.choices" :key="choice" :label="choice"
                                                :value="choice"></v-radio>
                                        </v-radio-group>
                                    </v-card-text>
                                </v-card>

                                <v-btn @click="submitQuiz" color="green" class="mt-5">Envoyer</v-btn>
                            </div>
                            
                        </v-card> -->
                        <v-card v-if="showCard">
                            <v-card-title>Game Card</v-card-title>
                            <v-card-text>This is a game card that is displayed conditionally.</v-card-text>
                        </v-card>
                    </div>
                    <div v-else>
                        <router-link to="/LoginPage">
                            <v-btn class="font-weight-light">Connexion
                                <v-icon color="white-darken-2" icon="mdi-arrow-right" size="large"></v-icon>
                            </v-btn>
                        </router-link>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>

import products from "@/resources/data.json";
import { ref } from 'vue'
import { projectAuth, projectFirestore } from '@/firebase/config'
import { collection, addDoc, query, where,onSnapshot } from "firebase/firestore";
// import DisplayGames from "@/components/NewGameDisplay.vue"


export default {
    name: 'productViewId',
    // props:['id'],
    data() {
        return {
            routerId: this.$route.params.id,
            products,
            currentGame: null,
            number: 0,
            item: {},
            user: ref(projectAuth.currentUser),
            games: [],
            keys: [],
            values: [],
            cardsReady: [],
            value2: true,
            ifAddGame: false,
            score: 0,
            points: [],
            data: [],
            newData: {},
            displayCard: true,
            sumid: 0,
            // gameId: , // Remplacez par l'ID du jeu
            cardId: this.$route.params.id , // Remplacez par l'ID de la carte
            showCard: true,
            elementData:{}  

        }
    },
    components: {
        // DisplayGames
    },
    methods: {
        async checkGameAndCard() {   
            const gamesRef = collection(projectFirestore, `users/${this.user.uid}/games`);  
            const q = query(gamesRef, where("userId", "==", this.user.uid));  
             
            onSnapshot(q, (querySnapshot) => {
              this.elementData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
              this.elementData.forEach((element) => {                 
                Object.entries(element) // Array(2) [["a", "something"], ["b", 42]]
                .forEach(([key, value]) => {                    
                  if(key === "cardId" && value === this.cardId){
                    console.log(`${key}: ${value}`)
                  }
                })
                  
              })
              
            //   
            })
    //   try {
    //        const gameDocRef =  query(collection(, `users/${this.user.uid}/games`),where()); 
    //        const gameDoc = await getDocs(gameDocRef);
    //     if (gameDoc.exists()) {
    //       const gameData = gameDoc.data();
    //       if (gameData.cardId && gameData.cardId.includes(this.cardId)) {
    //         this.showCard = false;
    //         console.log('Card exists, hiding the card.');
    //       } else {
    //         console.log('Card does not exist, showing the card.');
    //       }
    //     } else {
    //       console.log('Game does not exist.');
    //     }
    //   } catch (error) {
    //     console.error('Error checking game and card: ', error);
    //   }
    },

        async getData() {
            for (let key in this.products) {
                if (key === this.routerId) {
                    this.item = (this.products[key]);
                }
            }

        },
        getdataStorage() {
            if (this.user) {
                const dataOnLine = query(collection(projectFirestore, `users/${this.user.uid}/games`), where("userId", "==", this.user.uid));
                onSnapshot(dataOnLine, (querySnapshot) => {
                    this.games = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                    this.games.forEach((element) => {
                       if (this.routerId === element.cardId) {
                            this.value2 = false;
                            this.newData = element.games.quiz;
                        } else if (element.answers === false) {
                            this.ifAddGame = true;
                        } else {
                            this.ifAddGame = false;

                        }



                    })

                })
            }
        },
        gotoGamePage() {
            this.addToLocalStorageNewItem(this.item.title, this.item);
            this.recordGames();
        },

        async recordGames() {
            if (this.user.uid) {
                await addDoc(collection(projectFirestore, `users/${this.user.uid}/games`), {
                    userId: this.user.uid,
                    title: this.item.title,
                    cardId: this.item.id,
                    answers: false,
                    games: this.item,
                    timestamp: new Date()
                }).then(function () {
                    window.location.href = '/gamePage';
                    // alert("Game recorder");
                });
            } else {
                alert("You need to log in first!");
            }
        },
        addToLocalStorageNewItem(name) {
            // Get the existing data
            localStorage.removeItem(name);
            localStorage.setItem(name, JSON.stringify(this.games));
            // this.games.push(value);
            // Save back to localStorage


        },
        async submitQuiz() {
            this.newData.forEach((element, index) => {
                if (this.data[index] === element.correctAnswer) {
                    this.points.push(element.correctAnswer)
                }
            })
            if (this.user.uid) {
                await addDoc(collection(projectFirestore, `users/${this.user.uid}/points`),

                    {
                        answers: true,
                        cardId: this.item.id,
                        timestamp: new Date(),
                        points: this.points.length,
                    });


            } else {
                alert("You need to log in first!");
            }
        },

        getPointsToDisplayCard() {
            if (this.user) {
                const q = query(collection(projectFirestore, `users/${this.user.uid}/points`));
                onSnapshot(q, (querySnapshot) => {
                    let arrayPoints = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                    arrayPoints.forEach((el) => {
                        this.sumid += el.points;
                        this.values.push(el);

                    })
                })
            } else {
                return this.sumid;
            }
        },

        signinUser() {
            this.$router.push({ name: 'LoginPage' })
        },

    },
    mounted() {
        // this.getDataStore();
        this.checkGameAndCard();
        this.getPointsToDisplayCard();
            this.getdataStorage();
        this.getData();

    },
}
</script>

<style scoped>
.gotoView {
    float: right;
}

.class-1 {
    display: none;

}

.invisible {
    display: none;
}
</style>