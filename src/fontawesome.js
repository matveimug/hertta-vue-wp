import Vue from 'vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

import {} from '@fortawesome/free-regular-svg-icons'

import {
  faShoppingBasket,
  faShoppingCart,
  faCartPlus,
  faEnvelope,
  faTimes,
  faPlus
} from '@fortawesome/free-solid-svg-icons'

import {
  faInstagram,
  faFacebook
} from '@fortawesome/free-brands-svg-icons'

library.add(
    faShoppingBasket,
    faShoppingCart,
    faCartPlus,
    faEnvelope,
    faTimes,
    faPlus,
    faInstagram,
    faFacebook
);

Vue.component('fa', FontAwesomeIcon);