<template>
    <div>
        <v-text-field v-model="points" label="Enter Points"></v-text-field>
        <v-btn @click="recordPoints">Record Points</v-btn>
    </div>
</template>

<script>
import { projectAuth,projectFirestore } from '@/firebase/config'
import { collection, addDoc } from "firebase/firestore";

export default {
    data() {
        return {
            points: 0,
            user:projectAuth
        };
    },
    methods: {
        async recordPoints() {
            if (this.user.currentUser) {
                await addDoc(collection(projectFirestore, `users/${this.user.currentUser.uid}/points`), {
                    userId: this.user.currentUser.uid,
                    points: this.points,
                    timestamp: new Date()
                });
            } else {
                alert("You need to log in first!");
            }
        }
    }
};
</script>
