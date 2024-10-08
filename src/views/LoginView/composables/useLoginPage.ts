import { ref } from 'vue'
import { dummyUseCredentials } from './dummyUserCredentials'
import { useRouter } from 'vue-router'
import { RouteNames } from '@/router/constants/RouteNames'
import { useAuthStore } from '@/stores/useAuthStore'

const useLoginPage = () => {
  const { setUserEmail } = useAuthStore()

  const router = useRouter()
  const email = ref('user3@test.com')
  const password = ref('test3')

  const handleLoginSubmit = () => {
    const user = dummyUseCredentials.find((item) => item.email === email.value)

    if (user?.password !== password.value) {
      return
    }

    // after succesfull login, save email to store and redirect
    void setUserEmail(email.value)
    localStorage.setItem('email', email.value)
    router.push({ name: RouteNames.ALL_LEADS })
  }

  return {
    email,
    password,
    handleLoginSubmit
  }
}

export default useLoginPage
