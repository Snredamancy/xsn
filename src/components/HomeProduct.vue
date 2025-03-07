<template>
    <div class="home-product">
        <ul>
            <li>
                <img src="/images/product1.png" />
                <h4>推荐</h4>
            </li>
            <li>
                <img src="/images/product2.png" />
                <h4>分享</h4>
            </li>
            <li>
                <img src="/images/product3.png" />
                <h4>补贴</h4>
            </li>
            <li>
                <img src="/images/product4.png" />
                <h4>分享</h4>
            </li>
        </ul>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.home-product {
    // 作用于home-product里所有的ul标签
    &>ul {
        // 弹性布局
        display: flex;
        // 水平方向两端对齐
        justify-content: space-between;
        // 允许元素自动换行
        flex-wrap: wrap;
        // ul里边的li标签
        li {
            width: 49.5%;
            // 相对定位
            position: relative;
            // li里的图片
            img {
                width: 100%;
            }
            // 实现图片标签效果
            h4 {
                // 绝对定位
                position: absolute;
                font-size: 14px;
                // 让标签处于图片的左上角
                left: 0;
                top: 0;
                // 背景颜色
                background-color: lightcoral;
                // 文字颜色
                color: white;
                padding: 2px 4px;
                // 给标签效果的右下角实现一个圆角效果
                border-radius: 0 0 20% 0;
            }
        }
    }
}
</style>