import Vue from "vue";
import Router from "vue-router";

import Landing from "@/components/Landing";
import Signup from "@/components/Signup";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/signup",
      name: "Signup",
      component: Signup
    },
    {
      path: "/",
      name: "Landing",
      component: Landing
    }
  ]
});
