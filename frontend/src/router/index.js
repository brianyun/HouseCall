import Vue from "vue";
import Router from "vue-router";

import Landing from "@/components/Landing";
import Signup_pat from "@/components/Firsttime/Index_pat";
import Signup_doc from "@/components/Firsttime/Index_doc";
import LoginOrSignup from "@/components/Login/LoginOrSignup";
import PatOrDoc from "@/components/Login/PatOrDoc";
import Timetable from "@/components/Firsttime/Timetable";
import take_Stack from "@/components/TakeReservation/Stack";
import take_Specific from "@/components/TakeReservation/Specific";
import take_Complete from "@/components/TakeReservation/Complete";
import make_Start from "@/components/MakeReservation/Start";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/reservation",
      name: "reservation",
      component: make_Start
    },
    {
      path: "/doctor/reservation",
      name: "doc_reservation",
      component: take_Stack
    },
    {
      path: "/doctor/reservation/:id",
      name: "doc_reservation_specific",
      component: take_Specific
    },
    {
      path: "/doctor/reservation/complete",
      name: "doc_reservation_complete",
      component: take_Complete
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
