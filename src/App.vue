<script setup>
import { useRouter } from 'vue-router';
import TabBar from './components/TabBar.vue';

// 定义路由
const router = useRouter()

// 返回按钮方法
const onClickLeft = () => {
  // 如果历史记录中有上一页存在，则返回上一页，否则返回到首页
  if (history.length > 1) {
    // 返回上一页
    router.back();
  } else {
    // 返回到首页
    router.push({ name: 'home' })
  }
}
</script>

<template>
  <van-nav-bar
    :title="$route.meta.title"
    :left-arrow="$route.meta.isShowBack"
    @click-left="onClickLeft"
    fixed
    placeholder
  />

  <RouterView />
  <TabBar />
</template>

<style lang="scss" scoped>
</style>