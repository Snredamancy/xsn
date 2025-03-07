import { createRouter, createWebHistory } from "vue-router";
// 导入 HomeView 组件
import HomeView from "../views/HomeView.vue";

// 创建路由实例
const router = createRouter({
  // 使用 HTML5 模式
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 首页
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "首页"
      }
    },
    // 分类页面
    {
      path: "/category",
      name: "category",
      component: () => import("../views/CategoryView.vue"),
      meta: {
        title: "分类",
        // 显示底部导航栏
        isTab: true,
        // 显示顶部导航栏
        isShowNav: true,
      }
    },
    // 购物车页面
    {
      path: "/cart",
      name: "cart",
      component: () => import("../views/CartView.vue"),
      meta: {
        title: "购物车",
        // 显示底部导航栏
        isTab: true,
        // 显示顶部导航栏
        isShowNav: true,
      }
    },
    // 消息页面
    {
      path: "/message",
      name: "message",
      component: () => import("../views/MessageView.vue"),
      meta: {
        title: "消息",
        // 显示底部导航栏
        isTab: true,
        // 显示顶部导航栏
        isShowNav: true,
        // 显示顶部导航栏的返回按钮
        isShowBack: true,
      }
    },
    // 我的页面
    {
      path: "/user",
      name: "user",
      component: () => import("../views/UserView.vue"),
      meta: {
        title: "我的",
        // 显示底部导航栏
        isTab: true,
        // 显示顶部导航栏
        isShowNav: true,
      }
    },
  ],
});

// 路由守卫
// 让页面的标题能够根据不同的页面变化
router.beforeEach((to, from, next) => {
  // 获取页面属性中的标题
  const title = to.meta && to.meta.title;
  // 如果页面属性中有标题存在
  if (title) {
    // 将页面的标题设置为 标题 - 微商城
    document.title = title + ' - 微商城';
  }
  // 放行
  next();
})

export default router;
