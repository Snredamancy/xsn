<script setup>
import menu1 from '../assets/images/menu1.png';
import menu2 from '../assets/images/menu2.png';
import menu3 from '../assets/images/menu3.png';
import menu4 from '../assets/images/menu4.png';
import menu5 from '../assets/images/menu5.png';
import menu6 from '../assets/images/menu6.png';
import menu7 from '../assets/images/menu7.png';
import menu8 from '../assets/images/menu8.png';
import menu9 from '../assets/images/menu9.png';
import menu10 from '../assets/images/menu10.png';

const menuList = [
    {text: '今日爆款', url: menu1},
    {text: '好物分享', url: menu2},
    {text: '推荐购买', url: menu3},
    {text: '手机充值', url: menu4},
    {text: '推荐购买', url: menu5},
    {text: '今日爆款', url: menu6},
    {text: '购物心得', url: menu7},
    {text: '特价优惠', url: menu8},
    {text: '立即充值', url: menu9},
    {text: '我的客服', url: menu10},
]
</script>

<template>

</template>

<style lang="scss" scoped>
.home-grid {
    .van-image {
        width: 55%;
    }
    span {
        margin-top: 5px;
        font-size: 12px;
    }
}
</style>