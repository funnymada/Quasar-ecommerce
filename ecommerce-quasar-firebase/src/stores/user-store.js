import {defineStore} from "pinia";

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';
import {computed, ref} from "vue";
export const useUserStore = defineStore('user', () => {

  const accessToken = ref('');
  const vid = ref('');
  const details = ref({})

  const login = async (email, password) => {
    try {
      const auth = getAuth();
      const firestore = getFirestore();
      const credential = await signInWithEmailAndPassword(auth, email, password)

      accessToken.value = await credential.user.getIdToken()
      vid.value = credential.user.vid;
      const docRef = doc(firestore, 'users', credential.user.vid);
      const docSnap = await getDoc(docRef);

      if(docSnap.exists()){
        const user = docSnap.data()
        console.debug({user})
        return user;
      }
      await setDoc(docRef, {
        name: "mario",
        email
      })

    } catch (e) {
      console.error({e})
      return Promise.reject(e)
    }
  }

  const logout = () => {
    accessToken.value = "";
    vid.value = ""
    details.value = {}
  }

  const isLoggedIn = computed(() => !!accessToken.value)

  return {
    accessToken,
    vid,
    details,
    login,
    logout,
    isLoggedIn
  }
},{
  persist: true
})
