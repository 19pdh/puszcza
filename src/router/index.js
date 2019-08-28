import VueRouter from 'vue-router';

import HomeView from '../views/HomeView';
import AboutView from '../views/AboutView';
import DownloadView from '../views/DownloadView';
import PageNotFoundView from '../views/PageNotFoundView';

export const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/o-nas', name: 'O nas', component: AboutView },
  { path: '/download', name: 'Do pobrania', component: DownloadView }
];

export const externalRoutes = [
  {
    path: 'https://kronika-puszcza.netlify.com',
    name: 'Kronika'
  },
  { path: 'https://kronika-puszcza.netlify.com/galeria', name: 'Galeria' }
];

export const router = new VueRouter({
  mode: 'history',
  routes: [...routes, { path: '*', component: PageNotFoundView }]
});
