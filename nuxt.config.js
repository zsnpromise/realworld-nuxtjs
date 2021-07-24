export default {
    router: {
      linkActiveClass: 'active',
      extendRoutes(routes, resolve) {
        routes.splice(0)
        routes.push(...[
            {
                // name: 'layout',
                path: '',
                component: resolve(__dirname, 'pages/layout/'),
                children: [{
                    name: 'home',
                    path: '/',
                    component: resolve(__dirname, 'pages/home/'),
                },{
                    name: 'login',
                    path: '/login',
                    component: resolve(__dirname, 'pages/login/'),
                },{
                    name: 'register',
                    path: '/register',
                    component: resolve(__dirname, 'pages/login/'),
                },{
                    name: 'settings',
                    path: '/settings',
                    component: resolve(__dirname, 'pages/settings/'),
                },{
                    name: 'editor',
                    path: '/editor/:slug',
                    component: resolve(__dirname, 'pages/editor/'),
                },{
                    name: 'profile',
                    path: '/profile/:username',
                    component: resolve(__dirname, 'pages/profile/'),
                },{
                    name: 'articleDetial',
                    path: '/article/:slug',
                    component: resolve(__dirname, 'pages/article/'),
                }]
            }
        ])
      }
    },
    server: {host: '0.0.0.0'},
    plugins: ['~/plugins/request.js', '~/plugins/filter.js']
}