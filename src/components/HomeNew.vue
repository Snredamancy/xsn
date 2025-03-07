<template>
    <div class="home-new">
        <div class="title">
            <h3>每周上新</h3>
        </div>
        <ul>
            <li v-for="item in newList" :key="item.id">
                <img :src="item.pic_url" />
                <p>{{ item.name }}</p>
                <p><span>¥</span>{{ item.retail_price }}</p>
            </li>
        </ul>
    </div>
</template>

<script setup>
const newList = [
    { id: 1, name: '懒人沙发', pic_url: '/images/new1.jpg', retail_price: 3000 },
    { id: 2, name: '篮球', pic_url: '/images/new2.jpg', retail_price: 300 },
    { id: 3, name: '夹子', pic_url: '/images/new3.jpg', retail_price: 100 },
    { id: 4, name: '兔子', pic_url: '/images/new4.jpg', retail_price: 500 }
]
</script>

<style lang="scss" scoped>
.home-new {
    margin-top: 0.5em;

    // 标题
    .title {
        text-align: center;
        font-size: 16px;
        height: 25px;

        h3 {
            width: 50%;
            border-top: 2px solid #ccc;
            padding-top: 6px;
            // 让元素居中
            margin: 0 auto;
        }
    }

    // 商品列表
    ul {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 1em 0 0;

        li {
            margin-top: 2px;
            width: 49.5%;
            background-color: rgb(245, 245, 245);

            // 图片
            img {
                width: 100%;
            }

            // 图片下的文本
            p {
                text-align: center;
                margin: 0.5em auto;
            }

            // 价格
            span {
                color: red;
                font-size: 14px;
                margin-right: 2px;
            }
        }
    }
}
</style>