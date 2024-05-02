<template>
    <Header v-if="!isLoginPage && !isRegisterPage" />
    <router-view v-if="!isLoginPage && !isRegisterPage" />
    <Footer v-if="!isLoginPage && !isRegisterPage" />
    <router-view v-if="isLoginPage" />
    <router-view v-if="isRegisterPage" />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
    name: "App",
    components: { Header, Footer },
    computed: {
        isLoginPage() {
            return this.$route.path === "/dang-nhap";
        },
        isRegisterPage() {
            return this.$route.path === "/dang-ky";
        },
    },
};
</script>

<style>
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
body {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    background: #000;
}
#app {
    overflow: hidden;
}
a {
    text-decoration: none;
}
@keyframes scale-in-hor-right {
    0% {
        transform: scaleX(0);
        transform-origin: 100% 100%;
        opacity: 1;
    }
    100% {
        transform: scaleX(1);
        transform-origin: 100% 100%;
        opacity: 1;
    }
}
@keyframes open-in-left {
    0% {
        left: -180px;
    }
    100% {
        left: 0px;
    }
}
@keyframes header-slide-down {
    0% {
        opacity: 0;
        transform: translateY(-100%);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
@keyframes RightAnimate {
    0% {
        transform: translate(50px);
        opacity: 0;
    }
    100% {
        transform: translate(0);
        opacity: 1;
    }
}
</style>
