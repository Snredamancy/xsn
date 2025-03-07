<script setup>
import HomeGrid from '@/components/HomeGrid.vue';
import HomeSwiper from '@/components/HomeSwiper.vue';
import { showToast } from 'vant';
import { ref } from 'vue';

// 搜索关键词
const search = ref('');

// 在搜索的时候执行的方法
const onSearch = function() {
  showToast(search.value);
}

const onCancel = function() {
  showToast('取消');
}

</script>

<template>
  <van-search
    v-model="search"
    show-action
    placeholder="请输入搜索关键词"
    @search="onSearch"
    @cancel="onCancel"
  />
  <!-- <div>搜索栏里的内容：{{ search }}</div> -->
  <!-- 轮播图 -->
  <HomeSwiper />

  <!-- 功能区 -->
  <HomeGrid />

  <!-- 这个是一定得加上的 -->
  <VanToast />
</template>

<style lang="scss" scoped>

</style>