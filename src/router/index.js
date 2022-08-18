import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      meta: {
        requiresAuth: false,
      },
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      meta: {
        requiresAuth: true,
      },
      component: () => import("../views/DashboardView.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const requiresAuth = to.meta.requiresAuth;
  if (requiresAuth && !authStore.isAuth) next({ name: "Home" });
  else if (!requiresAuth && authStore.isAuth) next({ name: "Dashboard" });
  else next();
});

export default router;
