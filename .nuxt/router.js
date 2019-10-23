import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5cae825e = () => interopDefault(import('../pages/aboutMyFarm/index.vue' /* webpackChunkName: "pages/aboutMyFarm/index" */))
const _1e653b0c = () => interopDefault(import('../pages/aboutUs/index.vue' /* webpackChunkName: "pages/aboutUs/index" */))
const _f2b9b2c2 = () => interopDefault(import('../pages/farmers/index.vue' /* webpackChunkName: "pages/farmers/index" */))
const _60ea94b5 = () => interopDefault(import('../pages/info/index.vue' /* webpackChunkName: "pages/info/index" */))
const _836a0d04 = () => interopDefault(import('../pages/kanri/index.vue' /* webpackChunkName: "pages/kanri/index" */))
const _e02a2b50 = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _7d3c002a = () => interopDefault(import('../pages/products/index.vue' /* webpackChunkName: "pages/products/index" */))
const _084cdb06 = () => interopDefault(import('../pages/regist/index.vue' /* webpackChunkName: "pages/regist/index" */))
const _015830ce = () => interopDefault(import('../pages/test/index.vue' /* webpackChunkName: "pages/test/index" */))
const _66838a76 = () => interopDefault(import('../pages/unsub/index.vue' /* webpackChunkName: "pages/unsub/index" */))
const _56db9b92 = () => interopDefault(import('../pages/user/index.vue' /* webpackChunkName: "pages/user/index" */))
const _e19ee0bc = () => interopDefault(import('../pages/info/confirmation.vue' /* webpackChunkName: "pages/info/confirmation" */))
const _02e5ddda = () => interopDefault(import('../pages/login/passWordReset.vue' /* webpackChunkName: "pages/login/passWordReset" */))
const _f226f91e = () => interopDefault(import('../pages/farmers/farmer/_businessId.vue' /* webpackChunkName: "pages/farmers/farmer/_businessId" */))
const _7e41cb42 = () => interopDefault(import('../pages/products/product/_productId.vue' /* webpackChunkName: "pages/products/product/_productId" */))
const _9aa0f704 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/aboutMyFarm",
      component: _5cae825e,
      name: "aboutMyFarm"
    }, {
      path: "/aboutUs",
      component: _1e653b0c,
      name: "aboutUs"
    }, {
      path: "/farmers",
      component: _f2b9b2c2,
      name: "farmers"
    }, {
      path: "/info",
      component: _60ea94b5,
      name: "info"
    }, {
      path: "/kanri",
      component: _836a0d04,
      name: "kanri"
    }, {
      path: "/login",
      component: _e02a2b50,
      name: "login"
    }, {
      path: "/products",
      component: _7d3c002a,
      name: "products"
    }, {
      path: "/regist",
      component: _084cdb06,
      name: "regist"
    }, {
      path: "/test",
      component: _015830ce,
      name: "test"
    }, {
      path: "/unsub",
      component: _66838a76,
      name: "unsub"
    }, {
      path: "/user",
      component: _56db9b92,
      name: "user"
    }, {
      path: "/info/confirmation",
      component: _e19ee0bc,
      name: "info-confirmation"
    }, {
      path: "/login/passWordReset",
      component: _02e5ddda,
      name: "login-passWordReset"
    }, {
      path: "/farmers/farmer/:businessId?",
      component: _f226f91e,
      name: "farmers-farmer-businessId"
    }, {
      path: "/products/product/:productId?",
      component: _7e41cb42,
      name: "products-product-productId"
    }, {
      path: "/",
      component: _9aa0f704,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
