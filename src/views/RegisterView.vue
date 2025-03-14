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
            <van-field
                v-model="form.comfirmPassword"
                type="password"
                name="确认密码"
                label="确认密码"
                placeholder="确认密码"
                :rules="comfirmPasswordRules"
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
    username: '123',
    // 密码
    password: '123456',
    // 确认密码
    comfirmPassword: '123456'
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

// 确认密码校验
const comfirmPasswordRules = ref([
    {
        required: true,
        pattern: /^\w{6,20}$/,
        message: "确认密码必须为6~20个字符"
    },
    // 验证密码和确认密码是否一致
    {
        validator: value => {
            // 如果不一致则提示
            if (value !== form.password) {
                return "两次输入的密码不一致"
            }
            return true
        }
    }
])

// 提交
const onSubmit = function() {
    showSuccessToast("注册成功")
}
</script>

<style lang="scss" scoped>

</style>