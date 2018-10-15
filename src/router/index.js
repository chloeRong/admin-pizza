import Home from '../components/Home.vue'
import Menu from '../components/Menu.vue'
import Admin from '../components/Admin.vue'
import About from '../components/about/About.vue'

import History from '../components/about/history.vue'
import Contact from '../components/about/contact.vue'
import Order from '../components/about/order.vue'
import Delivery from '../components/about/delivery.vue'

import Login from '../components/Login.vue'
import Register from '../components/Register.vue'


export const routes = [
    {
        path: '/',
        components: {
            default: Home,
            'contact': Contact,
            'order': Order,
            'delivery': Delivery
        }
    },
    {
        path: '/menu',
        component: Menu
    },
    {
        path: '/admin',
        component: Admin
    },
    {
        path: '/about',
        component: About,
        children: [
            {
                path: '/history',
                component: History
            },
            {
                path: '/contact',
                component: Contact
            },
            {
                path: '/order',
                component: Order
            },
            {
                path: '/delivery',
                component: Delivery
            }

        ]
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
]

//  default {
//     routes
// }
