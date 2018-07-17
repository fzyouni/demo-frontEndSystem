import Login from '../components/Login'
import Home from '../components/Home'
import NotFound from '../components/Error'

let routes = [
  {
    path: '/login',
    name: '',
    component: Login
  },
  {
    path: '/error',
    name: '',
    component: NotFound
  },
  {
    path: '/home',
    name: '',
    component: Home
  }
]

export default routes
