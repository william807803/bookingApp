import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages/Home.vue";
import SignIn from "@/pages/auth/SignIn.vue";
import SignUp from "@/pages/auth/SignUp.vue";
import SignOut from "@/pages/auth/SignOut.vue";
import SignUpConfirm from "@/pages/auth/SignUpConfirm.vue";
import MyProfile from "@/pages/MyProfile.vue";
import AddressBook from "@/pages/AddressBook.vue";
import BookingHistory from "@/pages/BookingHistory.vue";
import PaymentsDetails from "@/pages/PaymentsDetails.vue";
import UpdatePassword from "@/pages/UpdatePassword.vue";

import store from "@/store";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: { title: "Home", auth: true },
    children:[
      {
        path: "/myProfile",
        name: "myProfile",
        component: MyProfile,
        meta: { title: "MyProfile", auth: true }
      },
      {
        path: "/addressBook",
        name: "addressBook",
        component: AddressBook,
        meta: { title: "AddressBook", auth: true }
      },
      {
        path: "/bookingHistory/:status",
        name: "bookingHistory",
        component: BookingHistory,
        meta: { title: "BookingHistory", auth: true }
      },
      {
        path: "/paymentsDetails",
        name: "paymentsDetails",
        component: PaymentsDetails,
        meta: { title: "PaymentsDetails", auth: true }
      },
      {
        path: "/updatePassword",
        name: "updatePassword",
        component: UpdatePassword,
        meta: { title: "UpdatePassword", auth: true }
      },
    ],
  },
  {
    path: "/signIn",
    name: "signIn",
    component: SignIn,
    meta: { title: "Sign In", auth: false }
  },
  {
    path: "/signOut",
    name: "signOut",
    component: SignOut,
    meta: { title: "Sign Out", auth: true }
  },
  {
    path: "/signUp",
    name: "signUp",
    component: SignUp,
    meta: { title: "Sign Up", auth: false }
  },
  {
    path: "/SignUpConfirm",
    name: "SignUpConfirm",
    component: SignUpConfirm,
    meta: { title: "Confirm SignUp", auth: false }
  },
];

const router = new Router({ mode: "history", routes });

// this routine will ensure that any pages marked as `auth` in the `meta` section are
// protected from access by unauthenticated users.
router.beforeEach((to, from, next) => {
  // Use the page's router title to name the page
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  }

  // is there a meta and auth attribute?
  if (to.meta && to.meta.auth !== undefined) {
    // if the page requires auth
    if (to.meta.auth) {
      // and we are authenticated?
      if (store.getters["auth/isAuthenticated"]) {
        next(); // route normally
        return;
      }
      // otherwise off to the sign in page
      router.push({ name: "signIn" });
      return;
    }
    // otherwise are we already authenticated?
    if (store.getters["auth/isAuthenticated"]) {
      // yes we are, so off to dashboard
      router.push({ name: "dashboard" });
      return;
    }
    next(); // route normally
    return;
  }
  next(); // route normally
  return;
});

export default router;
