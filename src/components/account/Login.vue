<template>
    <div class="account">
        <img src="@/assets/background-account.webp" alt="" />
        <div class="login">
            <div class="logo">
                <img src="@/assets/logo.webp" alt="" />
            </div>
            <form>
                <div class="form-group">
                    <label>Email</label>
                    <div class="form-group-input">
                        <font-awesome-icon :icon="['fas', 'envelope']" class="form-group-icon" />
                        <input
                            @input="userStore.validateEmailLogin()"
                            v-model="userStore.emailLogin"
                            type="email"
                            placeholder="abc@gmail.com"
                            class="form-input"
                            :class="userStore.regexEmail.test(userStore.emailLogin) ? 'success' : ''"
                        />
                    </div>
                    <p class="error-form">{{ userStore.errorEmailLogin }}</p>
                </div>
                <div class="form-group">
                    <label>Mật khẩu</label>
                    <div class="form-group-input">
                        <font-awesome-icon :icon="['fas', 'lock']" class="form-group-icon" />
                        <input
                            @input="userStore.validatePassLogin()"
                            v-model="userStore.passwordLogin"
                            class="form-input"
                            :type="userStore.typePassLogin"
                            :class="userStore.passwordLogin.length >= 6 ? 'success' : ''"
                        />
                        <div class="form-password-control">
                            <button
                                @click="userStore.handleHidePassLogin()"
                                v-if="!userStore.showPassLogin"
                                type="button"
                                class="form-password-btn"
                            >
                                <font-awesome-icon :icon="['fas', 'eye']" />
                            </button>
                            <button
                                @click="userStore.handleShowPassLogin()"
                                v-if="userStore.hidePassLogin"
                                type="button"
                                class="form-password-btn"
                            >
                                <font-awesome-icon :icon="['fas', 'eye-slash']" />
                            </button>
                        </div>
                    </div>
                    <p class="error-form">{{ userStore.errorPasswordLogin }}</p>
                </div>
                <div style="text-align: right">
                    <div class=""></div>
                    <span class="forgot-text">Forgot password?</span>
                </div>
                <button class="form-login-btn" type="submit">LOGIN</button>
            </form>
            <span class="text-or-login">Hoặc đăng nhập bằng</span>
            <div class="login-control">
                <a href="#" class="login-control-link">
                    <img src="@/assets/google.png" alt="" />
                    Google
                </a>
                <a href="#" class="login-control-link" style="margin: 0 12px">
                    <img src="@/assets/facebook.png" alt="" />
                    Facebook
                </a>
            </div>
            <div class="text-signup">
                Tạo tài khoản mới?
                <router-link to="/dang-ky">Đăng ký</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { useUserStore } from "@/store/userStore";
export default {
    name: "login-page",
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
.login {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 500px;
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
    margin-bottom: 40px;
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
.forgot-text {
    display: inline-block;
    color: #e50914;
    cursor: pointer;
    margin: 10px 0 14px;
}
.form-login-btn {
    display: block;
    width: 100%;
    background: #e50914;
    color: #fff;
    border: none;
    font-size: 14px;
    padding: 9px 0;
    border-radius: 2px;
    transition: 0.5s;
}
.form-login-btn:hover {
    box-shadow: inset -240px 0 0 0 #bc0c15, inset 240px 0 0 0 #bc0c15;
}
.text-or-login {
    position: relative;
    display: block;
    text-align: center;
    color: #d1d0cf;
    margin: 30px 0;
}
.text-or-login::before {
    position: absolute;
    content: "";
    left: 0;
    top: 50%;
    right: 70%;
    height: 1px;
    transform: translateY(-50%);
    background: #2d2d2d;
}
.text-or-login::after {
    position: absolute;
    content: "";
    right: 0;
    top: 50%;
    left: 70%;
    height: 1px;
    transform: translateY(-50%);
    background: #2d2d2d;
}
.login-control {
    text-align: center;
}
.login-control-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 40px;
    padding: 0 12px;
    color: white;
    background: #313131;
    border-radius: 2px;
    transition: 0.3s;
}
.login-control-link:hover {
    box-shadow: inset -80px 0 0 0 #3c3c3c, inset 80px 0 0 0 #3c3c3c;
}
.login-control-link img {
    width: 20px;
    height: 20px;
    margin-right: 6px;
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
    .login {
        width: 400px;
    }
}
</style>
