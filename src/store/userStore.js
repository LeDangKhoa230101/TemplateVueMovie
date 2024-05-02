import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
    state: () => ({
        isAuthentication: false,
        regexEmail: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        // login
        emailLogin: "",
        errorEmailLogin: "",

        passwordLogin: "",
        errorPasswordLogin: "",
        typePassLogin: "password",

        hidePassLogin: true,
        showPassLogin: true,

        // register
        firstName: "",
        lastName: "",

        emailRegister: "",
        errorEmailRegister: "",

        passwordRegister: "",
        errorPassRegister: "",

        connfirmPasswordRegister: "",
        errorConfirmPassRegister: "",
    }),
    actions: {
        validateEmailLogin() {
            if (this.regexEmail.test(this.emailLogin) || this.emailLogin.length === 0) {
                this.errorEmailLogin = "";
                return true;
            } else {
                this.errorEmailLogin = "Email không hợp lệ";
                return false;
            }
        },
        validatePassLogin() {
            if (this.passwordLogin.length >= 6 || this.passwordLogin.length === 0) {
                this.errorPasswordLogin = "";
                return true;
            } else {
                this.errorPasswordLogin = "Mật khẩu không hợp lệ";
                return false;
            }
        },
        handleShowPassLogin() {
            if (this.passwordLogin.length !== 0) {
                this.hidePassLogin = false;
                this.showPassLogin = false;
                this.typePassLogin = "text";
                return true;
            }
            return false;
        },
        handleHidePassLogin() {
            if (this.passwordLogin.length !== 0) {
                this.hidePassLogin = true;
                this.showPassLogin = true;
                this.typePassLogin = "password";
                return true;
            }
            return false;
        },
        handleValidateEmailRegister() {
            if (this.regexEmail.test(this.emailRegister) || this.emailRegister.length === 0) {
                this.errorEmailRegister = "";
                return true;
            } else {
                this.errorEmailRegister = "Email không hợp lệ";
                return false;
            }
        },
        handleValidatePassRegister() {
            if (this.passwordRegister.length >= 6 || this.passwordRegister.length === 0) {
                this.errorPassRegister = "";
                return true;
            } else {
                this.errorPassRegister = "Mật khẩu ít nhất 6 kí tự";
                return false;
            }
        },
        handleValidateConfirmPassword() {
            if (this.connfirmPasswordRegister === this.passwordRegister && this.connfirmPasswordRegister.length !== 0) {
                this.errorConfirmPassRegister = "";
                return true;
            } else {
                this.errorConfirmPassRegister = "Mật khẩu không trùng khớp";
                return false;
            }
        },
    },
});
