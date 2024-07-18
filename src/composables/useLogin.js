import { ref } from 'vue'
import { projectAuth,signInWithEmailAndPassword } from '../firebase/config'


const error = ref(null)
const isPending = ref(false)

const login = async (email, password) => {
  error.value = null
  isPending.value = true

 signInWithEmailAndPassword(projectAuth, email, password)
      .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      
      return user
      // ...
    }).catch((err)=> {
    console.log(err.message)
    error.value = 'Incorrect login credentials'
    isPending.value = false
  })
}

const useLogin = () => {
  return { error, login, isPending }
}

export default useLogin

