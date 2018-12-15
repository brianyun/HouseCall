import Vue from "vue";
import Router from "vue-router";

import Landing from "@/components/Landing";
import Signup_pat from "@/components/Firsttime/Index_pat";
import Signup_doc from "@/components/Firsttime/Index_doc";
import LoginOrSignup from "@/components/Login/LoginOrSignup";
import PatOrDoc from "@/components/Login/PatOrDoc";
import Timetable from "@/components/Firsttime/Timetable";
import Stack from "@/components/TakeReservation/Stack";
import Specific from "@/components/TakeReservation/Specific";
import Complete from "@/components/TakeReservation/Complete";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/doctor/reservation",
      name: "doc_reservation",
      component: Stack
    },
    {
      path: "/doctor/reservation/:id",
      name: "doc_reservation_specific",
      component: Specific
    },
    {
      path: "/doctor/reservation/complete",
      name: "doc_reservation_complete",
      component: Complete
    },
    {
      path: "/signup/patient",
      name: "signup_patient",
      component: Signup_pat
    },
    {
      path: "/signup/doctor/2",
      name: "signup_doc_timetable",
      component: Timetable
    },
    {
      path: "/signup/doctor",
      name: "signup_doctor",
      component: Signup_doc
    },
    {
      path: "/signup",
      name: "login_or_signup",
      component: LoginOrSignup
    },
    {
      path: "/signup/select",
      name: "pat_or_doc_select",
      component: PatOrDoc
    },
    {
      path: "/",
      name: "landing",
      component: Landing
    }
  ]
});
