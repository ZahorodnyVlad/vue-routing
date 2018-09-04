import VueRouter from 'vue-router'
import Home from './pages/Home'
import Cars from './pages/Cars'
import Car from './pages/Car'
import CarFull from './pages/CarFull'

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
          component: Car,
          children: [
              {
                  path: 'full', //locallhost:8080/car/10/full
                  component: CarFull
              }
          ]
      }
    ],
    mode: 'history'
})