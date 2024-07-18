<template>
  <v-container>
    <v-row>
      <v-col>
        <router-link to="/">
          <v-icon color="white-darken-2" icon="mdi-arrow-left" size="large"></v-icon>
          <span class="font-weight-light ml-2">Accueil </span>
        </router-link>
      </v-col>
      <v-col>
        <v-spacer></v-spacer>
        <div class="float-end">
          <v-btn class="font-weight-light" @click="signupUser">S'inscrire
            <v-icon color="white-darken-2" icon="mdi-arrow-right" size="large"></v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="formLogin">
           <h5>Connexion</h5>
          <v-sheet class="mx-auto" >
            <v-form fast-fail @submit.prevent="handleSubmit">
              <v-text-field v-model="email" :rules="lastNameRules" label="Email"></v-text-field>
              <v-text-field v-model="password" :rules="firstNameRules" label="Password"></v-text-field>
              <div v-if="error" class="error" >{{ error }}</div>
              <v-btn class="mt-2" type="submit" block v-if="!isPending">Envoyer</v-btn>
              </v-form>
          </v-sheet>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// using @ means start at the project src root
import getUser from'@/composables/getUser'
import useLogin from '@/composables/useLogin'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'LoginPage',
  setup() {
    const {user} = getUser()
    const { error, login } = useLogin()
     const router = useRouter()

    const email = ref('')
    const password = ref('')

    const handleSubmit = async () => {
      const res = await login(email.value, password.value).then((result)=>{
           if(result == null){
           router.push({path:'/gamePage'})
           }           
      })
      return res;
    }

 const signupUser = ()=>{
  router.push({name:'SignupPage' })
}


onMounted(() => {
   if(user.value != null){
    window.location.href='/gamePage'
  }
})
//  const created = ()=>{
  
//   }
  return { email, password, handleSubmit, error,signupUser,onMounted }
  },
  
}
</script>
<style scoped>
.formLogin {
  background-color: rgba(95, 158, 160, 0.502); 
  padding:5px;
} 
.formLogin >h5{
  text-align: center;
  font-size: x-large;
  
}
.error{
  color:red;
  text-align: center;
  }

</style>