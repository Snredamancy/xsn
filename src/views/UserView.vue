<script setup>

</script>

<template>
    <van-row class="user-info" align="center">
        <!-- 头像 -->
        <van-image src="/src/assets/images/avatar_default.png" round width="100" height="100" />
        <!-- 登录按钮 -->
        <RouterLink :to="{ name:'login' }">
            <span class="user-info-name">登录</span>
        </RouterLink>
        <span class="user-info-name">|</span>
        <!-- 注册按钮 -->
        <RouterLink :to="{ name: 'register' }">
            <span class="user-info-name">注册</span>
        </RouterLink>
    </van-row>
    <!-- 按钮列表 -->
    <van-row class="user-links">
        <van-col span="6">
            <van-icon name="pending-payment"/>
            待付款
        </van-col>
        <van-col span="6">
            <van-icon name="records-o" />
            待收货
        </van-col>
        <van-col span="6">
            <van-icon name="tosend" />
            待评价
        </van-col>
        <van-col span="6">
            <van-icon name="after-sale" />
            退款/售后
        </van-col>
    </van-row>
</template>

<style lang="scss" scoped>
.user-info {
    padding: 15px;
    background: url(../assets/images/user_head_bg.png) no-repeat center;
    .user-info-name {
        display: inline-block;
        color: white;
        padding: 0 5px;
    }

    // 按钮列表
    .user-links {
        .van-col {
            display: flex;
            flex-direction: column;
        }
    }
}
</style>