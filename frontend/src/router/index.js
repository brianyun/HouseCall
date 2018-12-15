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

import checkout_Index from "@/components/NurseHistory/Index";
import checkout_Specific from "@/components/NurseHistory/Specific";
import checkout_Memo from "@/components/NurseHistory/Memo";
import checkout_Payment from "@/components/NurseHistory/Payment";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/nurse/checkout",
      name: "nurse_checkout",
      component: checkout_Index
    },
    {
      path: "/nurse/checkout/memo",
      name: "nurse_checkout_memo",
      component: checkout_Memo
    },
    {
      path: "/nurse/checkout/:id",
      name: "nurse_checkout_specific",
      component: checkout_Specific
    },
    {
      path: "/nurse/checkout/payment",
      name: "nurse_checkout_payment",
      component: checkout_Payment
    },
    {
      path: "/reservation",
      name: "reservation",
      component: make_Start
    },
    {
      path: "/take/reservation",
      name: "take_reservation",
      component: take_Stack
    },
    {
      path: "/take/reservation/:id",
      name: "take_reservation_specific",
      component: take_Specific
    },
    {
      path: "/take/reservation/complete",
      name: "take_reservation_complete",
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
