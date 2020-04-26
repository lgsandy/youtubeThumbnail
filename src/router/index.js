import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import ContactUs from "../views/ContactUs.vue";
import AboutUs from "../views/AboutUs.vue";
import loginPage from "../admin/loginpage.vue";
import disclaimer from "../views/disclaimer.vue"
import privacypolicy from "../views/privacypolicy.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/contactus",
    name: "contactus",
    component: ContactUs,
  },
  {
    path: "/aboutus",
    name: "aboutus",
    component: AboutUs,
  },
  {
    path: "/disclaimer",
    name: "disclaimer",
    component: disclaimer,
  },
  {
    path: "/privacypolicy",
    name: "privacypolicy",
    component: privacypolicy,
  },
  {
    path: "/adminlogin",
    name: "Admin",
    component: loginPage,
  },
  {
    path: "/*",
    name: "dashboard",
    component: Dashboard,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
