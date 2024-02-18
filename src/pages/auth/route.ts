import { lazy } from 'react'

import type { BuildRouteConfigFunction } from '@/utils/router'
import { BASE_PATH, buildRouteSuspense } from '@/utils/router'

export const LOGIN = `${BASE_PATH}/login`
export const SET_PASSWORD = `${BASE_PATH}/set_password`
export const CHOOSE_MERCHANT = `${BASE_PATH}/choose_merchant`

const LoginPage = buildRouteSuspense(lazy(() => import('@/pages/auth/login')))
const SetPasswordPage = buildRouteSuspense(
  lazy(() => import('@/pages/auth/set-password')),
)

const buildRoute: BuildRouteConfigFunction = () => [
  {
    path: LOGIN,
    element: LoginPage,
  },
  {
    path: SET_PASSWORD,
    element: SetPasswordPage,
  },
]

export default buildRoute
