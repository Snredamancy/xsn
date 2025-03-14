<template>
    <div class="home-top">
        <h3>人气推荐</h3>
        <div class="content">
            <van-card v-for="item in productList"
                :tag="item.tag"
                :price="item.price"
                :desc="item.desc"
                :title="item.title"
                :thumb="item.thumb"
                :origin-price="item.origin_price"
            />
        </div>
    </div>
</template>

<script setup>
const productList = [
    {
        title: '儿童蚕丝被',
        desc: '儿童蚕丝被儿童蚕丝被',
        price: '300.00',
        origin_price: '500.00',
        tag: 'TOP1',
        thumb: '/images/top1.jpg'
    },
    {
        title: '玩具车',
        desc: '玩具车玩具车',
        price: '300.00',
        origin_price: '500.00',
        tag: 'TOP2',
        thumb: '/images/top2.jpg'
    },
    {
        title: '懒人沙发',
        desc: '懒人沙发懒人沙发',
        price: '300.00',
        origin_price: '500.00',
        tag: 'TOP3',
        thumb: '/images/top3.jpg'
    },
    {
        title: '乐高积木',
        desc: '乐高积木乐高积木',
        price: '300.00',
        origin_price: '500.00',
        tag: 'TOP4',
        thumb: '/images/top4.jpg'
    },
    {
        title: '摇摇车',
        desc: '摇摇车摇摇车',
        price: '300.00',
        origin_price: '500.00',
        tag: 'TOP5',
        thumb: '/images/top5.jpg'
    },
];
</script>

<style lang="scss" scoped>
.home-top {
    h3 {
        font-size: 22px;
        line-height: 30px;
        text-align: center;
        margin: 0.5em auto;
    }
    .content {
        :deep(.van-card) {
            .van-card__title {
                font-size: 15px;
                line-height: 20px;
            }
        }
    }
}
</style>