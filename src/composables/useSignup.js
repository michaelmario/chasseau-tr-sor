import { ref } from 'vue'
import { projectAuth, createUserWithEmailAndPassword } from '../firebase/config'

const error = ref(null)
const isPending = ref(false)

const signup = async (email, password, displayName) => {
  error.value = null
  isPending.value = true

   createUserWithEmailAndPassword(projectAuth, email, password)
   .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
    if (!user) {
      throw new Error('Could not complete signup')
    }
     user.user.updateProfile({ displayName })
    error.value = null
    isPending.value = false    
   
  }).catch((err) =>{
    console.log(err.message)
    error.value = err.message
    isPending.value = false
  })
}
const useSignup = () => {
  return { error, signup, isPending }
}
  

export default useSignup


