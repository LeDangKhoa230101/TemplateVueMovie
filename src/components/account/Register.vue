<template>
    <div class="account">
        <img src="@/assets/background-account.webp" alt="" />
        <div class="register">
            <div class="logo">
                <img src="@/assets/logo.webp" alt="" />
            </div>
            <h3 class="register-header">Tạo tài khoản</h3>
            <form class="container">
                <div class="row">
                    <div class="col-xl-6 col-12">
                        <div class="form-group">
                            <label>Họ*</label>
                            <div class="form-group-input">
                                <font-awesome-icon :icon="['far', 'user']" class="form-group-icon" />
                                <input
                                    v-model="userStore.firstName"
                                    class="form-input"
                                    type="text"
                                    :class="userStore.firstName.length !== 0 ? 'success' : ''"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-12">
                        <div class="form-group">
                            <label>Tên*</label>
                            <div class="form-group-input">
                                <font-awesome-icon :icon="['far', 'user']" class="form-group-icon" />
                                <input
                                    v-model="userStore.lastName"
                                    class="form-input"
                                    type="text"
                                    :class="userStore.lastName.length !== 0 ? 'success' : ''"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-12 col-12">
                        <div class="form-group">
                            <label>Email</label>
                            <div class="form-group-input">
                                <font-awesome-icon :icon="['fas', 'envelope']" class="form-group-icon" />
                                <input
                                    @input="userStore.handleValidateEmailRegister()"
                                    v-model="userStore.emailRegister"
                                    class="form-input"
                                    type="email"
                                    placeholder="abc@gmail.com"
                                    :class="userStore.regexEmail.test(userStore.emailRegister) ? 'success' : ''"
                                />
                            </div>
                            <p class="error-form">{{ userStore.errorEmailRegister }}</p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-12">
                        <div class="form-group">
                            <label>Mật khẩu</label>
                            <div class="form-group-input">
                                <font-awesome-icon :icon="['fas', 'lock']" class="form-group-icon" />
                                <input
                                    @input="userStore.handleValidatePassRegister()"
                                    v-model="userStore.passwordRegister"
                                    class="form-input"
                                    type="password"
                                    :class="userStore.passwordRegister.length >= 6 ? 'success' : ''"
                                />
                            </div>
                            <p class="error-form">{{ userStore.errorPassRegister }}</p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-12">
                        <div class="form-group">
                            <label>Nhập lại mật khẩu</label>
                            <div class="form-group-input">
                                <font-awesome-icon :icon="['fas', 'lock']" class="form-group-icon" />
                                <input
                                    @input="userStore.handleValidateConfirmPassword()"
                                    v-model="userStore.connfirmPasswordRegister"
                                    class="form-input"
                                    type="password"
                                    :class="
                                        userStore.connfirmPasswordRegister === userStore.passwordRegister &&
                                        userStore.connfirmPasswordRegister.length !== 0
                                            ? 'success'
                                            : ''
                                    "
                                />
                            </div>
                            <p class="error-form">{{ userStore.errorConfirmPassRegister }}</p>
                        </div>
                    </div>
                </div>
                <button class="form-register-btn" type="submit">Register</button>
            </form>
            <div class="text-signup">
                Đã có tài khoản?
                <router-link to="/dang-nhap">Đăng nhập</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { useUserStore } from "@/store/userStore";
export default {
    name: "register-page",
    setup() {
        const userStore = useUserStore();
        return { userStore };
    },
};
</script>

<style scoped>
.account {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.account > img {
    width: 100%;
    height: 100%;
}
.register {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 560px;
    transform: translate(-50%, -50%);
    background-color: #141314;
    border-radius: 4px;
    z-index: 99;
    padding: 24px;
}
.logo {
    text-align: center;
}
.logo img {
    height: 50px;
}
.register-header {
    color: white;
    text-align: center;
    margin: 40px 0 30px;
    font-size: 30px;
}
.form-group {
    margin-bottom: 14px;
}
.form-group > label {
    color: #fff;
    font-size: 16px;
    margin-bottom: 6px;
}
.form-group-input {
    position: relative;
}
.form-group-input > .form-input {
    width: 100%;
    font-size: 16px;
    padding: 7px 53px 7px 34px;
    border-radius: 2px;
    background: #141314;
    color: #fff;
    border: 1px solid #3e3e3e;
}
.form-input:focus-visible {
    outline: none;
    border-color: #e50914;
}
.form-input.success {
    outline: none;
    border-color: chartreuse;
}
.form-group-input .form-group-icon {
    position: absolute;
    left: 10px;
    top: 50%;
    color: #fff;
    transform: translateY(-50%);
}
.error-form {
    color: red;
    font-size: 12px;
    margin: 4px 0 0 0;
}
.form-password-control {
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    color: #fff;
}
.form-password-btn {
    border: none;
    background: #313131;
    padding: 4px 7px;
    border-radius: 50%;
    color: #fff;
    font-size: 14px;
}
.form-register-btn {
    display: block;
    width: 100%;
    background: #e50914;
    color: #fff;
    border: none;
    font-size: 16px;
    padding: 8px 0;
    margin-top: 14px;
    border-radius: 2px;
    transition: 0.5s;
}
.form-register-btn:hover {
    box-shadow: inset -240px 0 0 0 #bc0c15, inset 240px 0 0 0 #bc0c15;
}
.text-signup {
    text-align: center;
    margin-top: 70px;
    margin-bottom: 10px;
    color: #d1d0cf;
}
.text-signup a {
    margin-left: 4px;
    color: #e50914;
}
</style>

<style scoped>
/* Mobile */
@media screen and (max-width: 739px) {
    .register {
        width: 400px;
    }
}
</style>
