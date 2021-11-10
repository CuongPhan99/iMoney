import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const error = ref(null);
const isPending = ref(false);

async function signup(email, password) {
  isPending.value = true;
  error.value = null;
  try {
    const reponse = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    if (!reponse) throw new Error("Could not create a new user.");
    return reponse;
  } catch (err) {
    console.log(err);
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
}

export function useSignUp() {
  return { error, isPending, signup };
}
