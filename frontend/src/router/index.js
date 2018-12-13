import Vue from "vue";
import Router from "vue-router";

import Landing from "@/components/Landing";
import Signup from "@/components/Signup/Index";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/signup",
      name: "signup",
      component: Signup
    },
    {
      path: "/",
      name: "landing",
      component: Landing
    }
  ]
});
