<template>
    <van-cell-group>
        <van-cell v-for="item in messageList"
            :icon="item.icon"
            :title="item.title"
            :value="item.date"
            :label="item.label"
            center
        />
    </van-cell-group>
</template>

<script setup>
const messageList = [
    {
        icon: '/images/avatar1.jpg',
        title: '水果旗舰店',
        date: '一分钟前',
        label: '你好'
    },
    {
        icon: '/images/avatar2.jpg',
        title: '水果旗舰店',
        date: '两分钟前',
        label: '你好'
    },
    {
        icon: '/images/avatar3.png',
        title: '订阅号',
        date: '星期一',
        label: '你好'
    },
    {
        icon: '/images/avatar4.png',
        title: '通知',
        date: '星期二',
        label: '你好'
    },
]
</script>

<style lang="scss" scoped>
:deep(.van-cell) {
    .van-cell__left-icon {
        width: 40px;
        height: 40px;
        margin-right: 10px;
        .van-icon__image {
            width: 100%;
            height: 100%;
        }
    }
}
</style>