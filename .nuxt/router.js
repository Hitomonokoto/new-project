import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _41f7e30d = () => interopDefault(import('../pages/aboutMyFarm/index.vue' /* webpackChunkName: "pages/aboutMyFarm/index" */))
const _70ef1aae = () => interopDefault(import('../pages/aboutUs/index.vue' /* webpackChunkName: "pages/aboutUs/index" */))
const _5d5e36ce = () => interopDefault(import('../pages/farmers/index.vue' /* webpackChunkName: "pages/farmers/index" */))
const _478a0ae6 = () => interopDefault(import('../pages/info/index.vue' /* webpackChunkName: "pages/info/index" */))
const _a8cb6d26 = () => interopDefault(import('../pages/kanri/index.vue' /* webpackChunkName: "pages/kanri/index" */))
const _7d3a3a47 = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _7bee14c8 = () => interopDefault(import('../pages/products/index.vue' /* webpackChunkName: "pages/products/index" */))
const _8f177f24 = () => interopDefault(import('../pages/regist/index.vue' /* webpackChunkName: "pages/regist/index" */))
const _53d2da65 = () => interopDefault(import('../pages/unsub/index.vue' /* webpackChunkName: "pages/unsub/index" */))
const _3d7b11c3 = () => interopDefault(import('../pages/user/index.vue' /* webpackChunkName: "pages/user/index" */))
const _7479f051 = () => interopDefault(import('../pages/info/confirmation.vue' /* webpackChunkName: "pages/info/confirmation" */))
const _894c626e = () => interopDefault(import('../pages/login/passWordReset.vue' /* webpackChunkName: "pages/login/passWordReset" */))
const _9c1e01d0 = () => interopDefault(import('../pages/farmers/farmer/_farmId.vue' /* webpackChunkName: "pages/farmers/farmer/_farmId" */))
const _b0ad459e = () => interopDefault(import('../pages/products/product/_productId.vue' /* webpackChunkName: "pages/products/product/_productId" */))
const _3c0d98a6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/aboutMyFarm",
      component: _41f7e30d,
      name: "aboutMyFarm"
    }, {
      path: "/aboutUs",
      component: _70ef1aae,
      name: "aboutUs"
    }, {
      path: "/farmers",
      component: _5d5e36ce,
      name: "farmers"
    }, {
      path: "/info",
      component: _478a0ae6,
      name: "info"
    }, {
      path: "/kanri",
      component: _a8cb6d26,
      name: "kanri"
    }, {
      path: "/login",
      component: _7d3a3a47,
      name: "login"
    }, {
      path: "/products",
      component: _7bee14c8,
      name: "products"
    }, {
      path: "/regist",
      component: _8f177f24,
      name: "regist"
    }, {
      path: "/unsub",
      component: _53d2da65,
      name: "unsub"
    }, {
      path: "/user",
      component: _3d7b11c3,
      name: "user"
    }, {
      path: "/info/confirmation",
      component: _7479f051,
      name: "info-confirmation"
    }, {
      path: "/login/passWordReset",
      component: _894c626e,
      name: "login-passWordReset"
    }, {
      path: "/farmers/farmer/:farmId?",
      component: _9c1e01d0,
      name: "farmers-farmer-farmId"
    }, {
      path: "/products/product/:productId?",
      component: _b0ad459e,
      name: "products-product-productId"
    }, {
      path: "/",
      component: _3c0d98a6,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
