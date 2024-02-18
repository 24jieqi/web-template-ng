import { useMemoizedFn } from 'ahooks'
import { useNavigate } from 'react-router-dom'

import { LOGIN } from '@/pages/auth/route'

const useNavigateToLogin = () => {
  const navigate = useNavigate()

  const navigateToLogin = useMemoizedFn(() => {
    navigate(LOGIN)
  })

  return navigateToLogin
}

export default useNavigateToLogin
