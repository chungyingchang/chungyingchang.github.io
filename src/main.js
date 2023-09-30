import 'bootstrap/dist/css/bootstrap.css'
import { createApp} from 'vue'
import App from './App.vue'

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
import 'bootstrap/dist/js/bootstrap.js'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram, faFacebookSquare} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faInstagram, faFacebookSquare)