<template>
    <v-row>
        <v-col>
            <v-card class="mx-2 my-4" dark color="grey-lighten-4" v-bind="props">
               
      <v-card-text class="pt-5">
        <div class="font-weight-light dark text-h6 mb-2">
         <span>{{ cardTitle }} 
           <v-icon color="white-darken-2 floatRight" icon="mdi-arrow-right" size="large"></v-icon>
        </span>
       </div>
       <div  >
                {{quiz.question}}
            </div>
      </v-card-text>
    </v-card>                       
        </v-col>
    </v-row>
</template>

<script>
// import { projectAuth, projectFirestore } from '@/firebase/config'
// import { collection, query, where, onSnapshot, addDoc } from "firebase/firestore";
// import RecordsPoints from './RecordsPoints.vue';
export default {
    props: {
    cardTitle: String,
    instructions: String,
    explanation: String,
    image: String,
    date: Number,
    id: Number,
    title:String,
    quiz:{}
  },
      data() {
        return {
            // gamesArray: [],
            // game:{},
            // answers: [],
            // score : 0,
            // location:this.$route.params,
            // cardTrue:true
        };
    },
    mounted() {
        // this.fetchGames();
        // this.submitQuiz();
       
    },
    methods: {
        // fetchGames() {
        //     const q = query(collection(projectFirestore, `users/${projectAuth.currentUser.uid}/games`), where("userId", "==", projectAuth.currentUser.uid));
        //     onSnapshot(q, (querySnapshot) => {
        //         let games = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        //         this.gamesArray.push(games);               
        //          this.gamesArray.forEach((element) => {                   
        //           this.getcardDisplay(element);                        
        //           })
        //      })

            
        // },

        // getcardDisplay(element){
        //    this.game = element;
            
        // },

        // submitQuiz() {           
        //     this.gamesArray.forEach((items) => {
        //         items.quiz.forEach((item, index) => {
        //             if (this.answers[index] === item.correctAnswer){
        //                  let answerspoints = this.score++;
        //                  this.submitAnswers(answerspoints);
        //             }                   
        //         });
        //         alert(`Your score is ${this.score}/${items.quiz.length}`);
                 
        //     });

        // },
        // async submitAnswers(answerspoint) {
        //     if (projectAuth.currentUser) {
        //         await addDoc(collection(projectFirestore, `users/${projectAuth.currentUser.uid}/points`), {
        //             userId: projectAuth.currentUser.uid,
        //             answers: answerspoint,
        //             points:this.score,
        //             timestamp: new Date()
        //         });
        //     } else {
        //         alert("You need to log in first!");
        //     }
        // }
    
    }
};
</script>