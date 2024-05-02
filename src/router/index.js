import { createWebHistory, createRouter } from "vue-router";

import Home from "@/components/home/Home.vue";
import Detail from "../components/detail/Detail.vue";
import NewMovie from "@/components/newMovie/NewMovie.vue";
import AnimeMovie from "@/components/animeMovie/AnimeMovie.vue";
import SingleMovie from "@/components/singleMovie/SingleMovie.vue";
import Category from "@/components/category/Category.vue";
import Country from "@/components/country/Country.vue";
import Search from "@/components/search/Search.vue";
import Login from "@/components/account/Login.vue";
import Register from "@/components/account/Register.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/phim", component: Detail },
    { path: "/phim-moi", component: NewMovie },
    { path: "/phim-hoat-hinh", component: AnimeMovie },
    { path: "/phim-le", component: SingleMovie },
    { path: "/the-loại", component: Category },
    { path: "/quoc-gia", component: Country },
    { path: "/tim-kiem", component: Search },
    { path: "/dang-nhap", component: Login },
    { path: "/dang-ky", component: Register },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
