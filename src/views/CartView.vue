<template>
    <div class="cart">
        <div class="container">
            <van-empty
                description="购物车目前还没有商品"
                v-show="productList.length === 0"
            >
                <router-link :to="{ name: 'category'}" >
                    <van-button>去购物</van-button>
                </router-link>
            </van-empty>
            
            <!-- 购物车列表 -->
            <div v-for="item in productList" :key="item.id" class="list">
                <van-swipe-cell>
                    <!-- 复选框 -->
                    <div class="checkbox">
                        <van-checkbox :name="item" v-model="item.check" />
                    </div>
                    <!-- 商品图片 -->
                    <div class="image">
                        <van-image width="50" height="50" :src="item.picture" />
                    </div>
                    <!-- 商品信息 -->
                    <div class="info">
                        <div>{{  item.name }}</div>
                        <div class="bottom">
                            <div class="price">
                                <span>¥</span>{{ item.price }}
                            </div>
                            <van-stepper
                                v-model="item.stock"
                                theme="round"
                                button-size="22"
                                disable-input 
                            />
                        </div>
                    </div>
                    <!-- 右滑删除按钮 -->
                    <template #right>
                        <van-button
                            square text="删除"
                            type="danger"
                            class="delete-button"
                            @click="onDelete(item.id)"
                        />
                    </template>
                </van-swipe-cell>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.delete-button {
    height: 100%;
}

.cart {
    margin: 0.3rem;
    padding: 0.05rem 0 3rem 0;

    .container {
        margin-top: 0.8rem;

        // 单个商品的样式
        .list {
            position: relative;
            height: 5rem;
            box-shadow: 0 0 5px #ccc;
            border-radius: 10px;
            margin-bottom: 0.8rem;

            // 复选框
            .checkbox {
                position: absolute;
                top: 50%;
                left: 0.2rem;
                transform: translate(0, -50%);
            }

            // 图片
            .image {
                position: absolute;
                top: 50%;
                left: 2rem;
                transform: translate(0, -50%);
            }

            // 信息
            .info {
                height: 5rem;
                display: flex;
                justify-content: space-around;
                padding: 0 1rem 0 6rem;
                align-items: center;

                .bottom {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .price {
                        color: #c82519;
                        font-size: 1rem;
                        line-height: 22px;
                        height: 22px;
                        margin-right: 0.5rem;
                    }
                }
            }
        }
    }
}
</style>

<script setup>
import { ref } from 'vue';

const productList = ref([
    {
        id: 1,
        category_id: 1,
        description: '维生素ABC',
        name: '橘子',
        picture: '/images/product1.png',
        price: '100.00',
        stock: 20,
        check: true,
    },
    {
        id: 2,
        category_id: 1,
        description: '维生素ABC',
        name: '橘子',
        picture: '/images/product2.png',
        price: '200.00',
        stock: 30,
        check: false,
    },
    {
        id: 3,
        category_id: 1,
        description: '维生素ABC',
        name: '橘子',
        picture: '/images/product3.png',
        price: '300.00',
        stock: 40,
        check: false,
    },
    {
        id: 4,
        category_id: 1,
        description: '维生素ABC',
        name: '橘子',
        picture: '/images/product4.png',
        price: '400.00',
        stock: 60,
        check: false,
    }
]);

// 删除商品
const onDelete = (id) => {
    productList.value.forEach((item, index) => {
        // 找到对应的商品
        if (item.id === id) {
            // 从列表里边删除
            productList.value.splice(index, 1);
        }
    })
}

</script>