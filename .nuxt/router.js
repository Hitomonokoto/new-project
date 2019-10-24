import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d5a1f4ea = () => interopDefault(import('../pages/aboutMyFarm/index.vue' /* webpackChunkName: "pages/aboutMyFarm/index" */))
const _40408427 = () => interopDefault(import('../pages/aboutUs/index.vue' /* webpackChunkName: "pages/aboutUs/index" */))
const _53d36f68 = () => interopDefault(import('../pages/farmers/index.vue' /* webpackChunkName: "pages/farmers/index" */))
const _42dccbb0 = () => interopDefault(import('../pages/info/index.vue' /* webpackChunkName: "pages/info/index" */))
const _14f6bb2a = () => interopDefault(import('../pages/kanri/index.vue' /* webpackChunkName: "pages/kanri/index" */))
const _71b6d976 = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _605313de = () => interopDefault(import('../pages/products/index.vue' /* webpackChunkName: "pages/products/index" */))
const _66bbc570 = () => interopDefault(import('../pages/Q&A/index.vue' /* webpackChunkName: "pages/Q&A/index" */))
const _a855f1a0 = () => interopDefault(import('../pages/regist/index.vue' /* webpackChunkName: "pages/regist/index" */))
const _7cfaed0c = () => interopDefault(import('../pages/test/index.vue' /* webpackChunkName: "pages/test/index" */))
const _c485993a = () => interopDefault(import('../pages/unsub/index.vue' /* webpackChunkName: "pages/unsub/index" */))
const _56fabdf6 = () => interopDefault(import('../pages/user/index.vue' /* webpackChunkName: "pages/user/index" */))
const _709dda62 = () => interopDefault(import('../pages/info/confirmation.vue' /* webpackChunkName: "pages/info/confirmation" */))
const _1d5249c7 = () => interopDefault(import('../pages/login/passWordReset.vue' /* webpackChunkName: "pages/login/passWordReset" */))
const _1c6cdda6 = () => interopDefault(import('../pages/Q&A/aboutCompany/index.vue' /* webpackChunkName: "pages/Q&A/aboutCompany/index" */))
const _75bb6b9a = () => interopDefault(import('../pages/Q&A/aboutDiary/index.vue' /* webpackChunkName: "pages/Q&A/aboutDiary/index" */))
const _2cc1a10a = () => interopDefault(import('../pages/Q&A/aboutFamily/index.vue' /* webpackChunkName: "pages/Q&A/aboutFamily/index" */))
const _18cf4696 = () => interopDefault(import('../pages/Q&A/aboutGift/index.vue' /* webpackChunkName: "pages/Q&A/aboutGift/index" */))
const _15eae38d = () => interopDefault(import('../pages/Q&A/etc/index.vue' /* webpackChunkName: "pages/Q&A/etc/index" */))
const _643842e4 = () => interopDefault(import('../pages/farmers/farmer/_businessId.vue' /* webpackChunkName: "pages/farmers/farmer/_businessId" */))
const _4a6dfa2f = () => interopDefault(import('../pages/products/product/_productId.vue' /* webpackChunkName: "pages/products/product/_productId" */))
const _1ce1a32b = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/aboutMyFarm",
      component: _d5a1f4ea,
      name: "aboutMyFarm"
    }, {
      path: "/aboutUs",
      component: _40408427,
      name: "aboutUs"
    }, {
      path: "/farmers",
      component: _53d36f68,
      name: "farmers"
    }, {
      path: "/info",
      component: _42dccbb0,
      name: "info"
    }, {
      path: "/kanri",
      component: _14f6bb2a,
      name: "kanri"
    }, {
      path: "/login",
      component: _71b6d976,
      name: "login"
    }, {
      path: "/products",
      component: _605313de,
      name: "products"
    }, {
      path: "/Q&A",
      component: _66bbc570,
      name: "Q&A"
    }, {
      path: "/regist",
      component: _a855f1a0,
      name: "regist"
    }, {
      path: "/test",
      component: _7cfaed0c,
      name: "test"
    }, {
      path: "/unsub",
      component: _c485993a,
      name: "unsub"
    }, {
      path: "/user",
      component: _56fabdf6,
      name: "user"
    }, {
      path: "/info/confirmation",
      component: _709dda62,
      name: "info-confirmation"
    }, {
      path: "/login/passWordReset",
      component: _1d5249c7,
      name: "login-passWordReset"
    }, {
      path: "/Q&A/aboutCompany",
      component: _1c6cdda6,
      name: "Q&A-aboutCompany"
    }, {
      path: "/Q&A/aboutDiary",
      component: _75bb6b9a,
      name: "Q&A-aboutDiary"
    }, {
      path: "/Q&A/aboutFamily",
      component: _2cc1a10a,
      name: "Q&A-aboutFamily"
    }, {
      path: "/Q&A/aboutGift",
      component: _18cf4696,
      name: "Q&A-aboutGift"
    }, {
      path: "/Q&A/etc",
      component: _15eae38d,
      name: "Q&A-etc"
    }, {
      path: "/farmers/farmer/:businessId?",
      component: _643842e4,
      name: "farmers-farmer-businessId"
    }, {
      path: "/products/product/:productId?",
      component: _4a6dfa2f,
      name: "products-product-productId"
    }, {
      path: "/",
      component: _1ce1a32b,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
