import Login from '../components/Login'
import Home from '../components/Home'
import NotFound from '../components/Error'
import UserCenter from '../components/user/UserCenter'
import RoleManagement from '../components/user/RoleManagement'
import PermissionManagement from '../components/user/PermissionManagement'

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
    component: Home,
    children: [
      {
        path: '/home/userCenter',
        name: '',
        component: UserCenter
      },
      {
        path: '/home/roleManage',
        name: '',
        component: RoleManagement
      },
      {
        path: '/home/permissionManage',
        name: '',
        component: PermissionManagement
      }
    ]
  }
]

export default routes
