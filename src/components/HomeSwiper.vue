<script setup>
// 轮播图内容
const banner = [
    '/images/banner1.jpg',
    '/images/banner2.jpg'
]
</script>

<template>
    <van-swipe
        class="home-swiper"
        :autoplay="3000"
        indicator-color="var(--van-primary-color)"
    >
        <van-swipe-item v-for="item in banner" :key="item">
            <img :src="item" />
        </van-swipe-item>
    </van-swipe>
</template>

<style lang="scss" scoped>
.home-swiper {
    width: 100%;
    img {
        width: 100%;
    }
}
</style>