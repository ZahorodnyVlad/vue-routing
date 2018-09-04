import VueRouter from 'vue-router'
import Home from './pages/Home'
import Cars from './pages/Cars'
import Car from './pages/Car'

export default new VueRouter({
    routes: [
        {
            path: '', //locallhost:8080
            component: Home
        },
        {
            path: '/cars', //locallhost:8080/Cars
            component: Cars
        },
      {
          path: '/car/:id',
          component: Car
      }
    ],
    mode: 'history'
})