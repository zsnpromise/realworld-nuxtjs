import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1e38f128 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _12f0525d = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _4b5241ab = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _163b2aa1 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _126a176b = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _ce21592a = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _7fb996b8 = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "",
    component: _1e38f128,
    children: [{
      path: "/",
      component: _12f0525d,
      name: "home"
    }, {
      path: "/login",
      component: _4b5241ab,
      name: "login"
    }, {
      path: "/register",
      component: _4b5241ab,
      name: "register"
    }, {
      path: "/settings",
      component: _163b2aa1,
      name: "settings"
    }, {
      path: "/editor/:slug",
      component: _126a176b,
      name: "editor"
    }, {
      path: "/profile/:username",
      component: _ce21592a,
      name: "profile"
    }, {
      path: "/article/:slug",
      component: _7fb996b8,
      name: "articleDetial"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
