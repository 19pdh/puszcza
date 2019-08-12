import VueRouter from "vue-router";

import HomeView from "../views/HomeView";
import GalleryView from "../views/GalleryView";
import DownloadView from "../views/DownloadView";
import PageNotFoundView from "../views/PageNotFoundView";

const routes = [
  { path: "/", component: HomeView },
  { path: "/gallery", component: GalleryView },
  { path: "/download", component: DownloadView },
  { path: "*", component: PageNotFoundView }
];

export const router = new VueRouter({
  mode: "history",
  routes
});
