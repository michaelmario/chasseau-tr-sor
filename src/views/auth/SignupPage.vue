<template>
  <v-container>
    <v-row>
      <v-col>
        <router-link to="/LoginPage">
          <v-icon color="white-darken-2" icon="mdi-arrow-left" size="large"></v-icon>
          <span class="font-weight-light ml-2">Connexion</span>
        </router-link>
      </v-col>
      <v-col>
        <v-spacer></v-spacer>
        <div class="gotoLogin">
          
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="formSignup">
          <h5>S'inscrire</h5>
          <v-sheet class="mx-auto p-5">             
        <v-form @submit.prevent="handleSubmit">         
          <v-text-field v-model="displayName"  label="Display name">
          </v-text-field>
          <v-text-field v-model="email"  label="Email">
          </v-text-field>
          <v-text-field  v-model="password"  label="Password">
          </v-text-field>         
          <div v-if="error" class="error">{{ error }}</div>
          <v-btn v-if="!isPending"  type="submit" block>S'inscrire</v-btn>
          <v-btn v-if="isPending" disabled>Loading</v-btn>
        </v-form>
          </v-sheet>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// using @ means start at the project src root
import getUser from'@/composables/getUser'
import useSignup from '@/composables/useSignup'
import { ref,onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const {user} = getUser()
    const { error, signup, isPending } = useSignup()
    const router = useRouter()

    const email = ref('')
    const password = ref('')
    const displayName = ref('')

    const handleSubmit = async () => {
      const res = await signup(email.value, password.value, displayName.value)
      console.log(res);
      if (!error.value) {
        router.push({ name:'GamePage'})
      }
      return res;
    }

   
  onMounted(() => {
   if(user.value != null){
    window.location.href='/gamePage'
  }
})
 return { email, password, displayName, handleSubmit, error, isPending,onMounted }
  },
}
</script>
<style scoped>
.formSignup{
 background-color: rgba(100, 148, 237, 0.482);
 padding:10px;
}
.formSignup >h5{
  text-align: center;
  font-size: x-large;
}
</style>