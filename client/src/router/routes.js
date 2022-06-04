import Home from "../components/HelloWorld";
import { createRouter, createWebHashHistory } from "vue-router";
import RepoDetail from "../pages/RepoDetails";
import GistDisplay from "../pages/GistDisplay";
import AuthenticateUser from "../pages/AuthenticateUser";

const routes = [
  { path: "/", component: Home },
  { path: "/authentication", component: AuthenticateUser },
  { path: "/gistDisplay", component: GistDisplay },
  { path: "/repolist/:repoID", component: RepoDetail },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
