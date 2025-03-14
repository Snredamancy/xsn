<template>
    <van-form @submit="onSubmit">
        <van-cell-group inset>
            <van-field
                v-model="form.username"
                name="用户名"
                label="用户名"
                placeholder="用户名"
                :rules="usernameRules"
            />
            <van-field
                v-model="form.password"
                type="password"
                name="密码"
                label="密码"
                placeholder="密码"
                :rules="passwordRules"
            />
        </van-cell-group>
        <div style="margin: 16px;">
            <van-button round block type="primary" native-type="submit">
                提交
            </van-button>
        </div>
    </van-form>
    <van-toast/>
</template>

<script setup>
import { showSuccessToast } from 'vant';
import { reactive, ref } from 'vue';

const form = reactive({
    // 用户名
    username: '',
    // 密码
    password: '',
})

// 用户名校验
const usernameRules = ref([
    {
        // 必填
        required: true,
        // 使用正则匹配3~16个字符
        pattern: /^\w{3,16}$/,
        // 提示信息
        message: "用户名长度为3~16个字符"
    }
])

// 密码校验
const passwordRules = ref([
    {
        required: true,
        pattern: /^\w{6,20}$/,
        message: "密码必须为6~20个字符"
    }
])

// 提交方法
const onSubmit = function() {
    // console.log(form.username);
    // console.log(form.password);
    showSuccessToast("欢迎登录" + form.username)
}

</script>

<style lang="scss" scoped>
</style>