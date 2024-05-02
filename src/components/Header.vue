<template>
    <header>
        <div class="header-container">
            <!-- Menu Tablet Mobie -->
            <button @click="store.openMenuTablet = !store.openMenuTablet" class="menu-tablet-mobile">
                <font-awesome-icon :icon="['fas', 'bars']" class="menu-icon" />
            </button>

            <!-- Start List menu table mobile -->
            <div v-if="store.openMenuTablet" class="sidebar-tablet">
                <ul class="nav-list-tablet">
                    <li><span>Home</span></li>
                    <li @click="handleSubnavFeature">
                        <span>
                            Features
                            <font-awesome-icon :icon="['fas', 'caret-right']" />
                        </span>
                        <ul v-if="store.openSubnavFeature" class="subnav-list-tablet">
                            <li>
                                <a href="#">Restricted Content</a>
                            </li>
                            <li>
                                <a href="#">Playlist</a>
                            </li>
                            <li>
                                <a href="#">Geners</a>
                            </li>
                            <li>
                                <a href="#">Cast</a>
                            </li>
                            <li>
                                <a href="#">Tags</a>
                            </li>
                        </ul>
                    </li>
                    <li @click="handleSubnavPage">
                        <span>
                            Page
                            <font-awesome-icon :icon="['fas', 'caret-right']" />
                        </span>
                        <ul v-if="store.openSubnavPage" class="subnav-list-tablet">
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                            <li>
                                <a href="#">FAQ</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#">Pricing Plan</a>
                            </li>
                        </ul>
                    </li>
                    <li @click="handleSubnavBlog">
                        <span>
                            Blog
                            <font-awesome-icon :icon="['fas', 'caret-right']" />
                        </span>
                        <ul v-if="store.openSubnavBlog" class="subnav-list-tablet">
                            <li>
                                <a href="#">Blog Listing</a>
                            </li>
                        </ul>
                    </li>
                    <li @click="handleSubnavShop">
                        <span>
                            Shop
                            <font-awesome-icon :icon="['fas', 'caret-right']" />
                        </span>
                        <ul v-if="store.openSubnavShop" class="subnav-list-tablet">
                            <li>
                                <a href="#">Shop</a>
                            </li>
                            <li>
                                <a href="#">My Account Page</a>
                            </li>
                            <li>
                                <a href="#">Cart Page</a>
                            </li>
                            <li>
                                <a href="#">Wishlist Page</a>
                            </li>
                            <li>
                                <a href="#">Checkout Page</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <!-- End List menu table mobile -->

            <div class="logo">
                <a href="/">
                    <img src="@/assets/logo.webp" alt="" />
                </a>
            </div>
            <ul class="nav-list">
                <li><router-link to="/">Trang chủ</router-link></li>
                <li>
                    <router-link to="/phim-moi">Phim mới</router-link>
                </li>
                <li>
                    <router-link to="/phim-le">Phim lẻ</router-link>
                </li>
                <li>
                    <router-link to="/phim-hoat-hinh">Phim hoạt hình</router-link>
                </li>
                <li>
                    <span>
                        Thể loại
                        <font-awesome-icon :icon="['fas', 'caret-down']" />
                    </span>
                    <ul class="subnav-list">
                        <li>
                            <router-link to="/the-loại">Hành động</router-link>
                        </li>
                        <li>
                            <router-link to="/the-loại">Kinh dị</router-link>
                        </li>
                        <li>
                            <router-link to="/the-loại">Hài hước</router-link>
                        </li>
                        <li>
                            <router-link to="/the-loại">Viễn tưởng</router-link>
                        </li>
                        <li>
                            <router-link to="/the-loại">Tình cảm</router-link>
                        </li>
                        <li>
                            <router-link to="/the-loại">Thể thao</router-link>
                        </li>
                    </ul>
                </li>
                <li>
                    <span>
                        Quốc gia
                        <font-awesome-icon :icon="['fas', 'caret-down']" />
                    </span>
                    <ul class="subnav-list">
                        <li>
                            <router-link to="/quoc-gia">Trung Quốc</router-link>
                        </li>
                        <li>
                            <router-link to="/quoc-gia">Hàn Quốc</router-link>
                        </li>
                        <li>
                            <router-link to="/quoc-gia">Nhật Bản</router-link>
                        </li>
                        <li>
                            <router-link to="/quoc-gia">Mỹ</router-link>
                        </li>
                        <li>
                            <router-link to="/quoc-gia">Việt Nam</router-link>
                        </li>
                    </ul>
                </li>
            </ul>
            <div class="search-user">
                <!-- Search -->
                <button class="search-btn" @click="store.openSearchForm = !store.openSearchForm">
                    <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                </button>
                <form class="search-form" v-if="store.openSearchForm">
                    <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="search-icon" />
                    <input type="text" placeholder="Nhập tên phim..." />
                </form>
                <!-- User btn -->
                <button class="user-btn" @click="store.openDropUser = !store.openDropUser">
                    <font-awesome-icon :icon="['far', 'user']" />
                </button>
                <div class="drop-user" :class="userStore.isAuthentication ? '' : 'isAuthen'" v-if="store.openDropUser">
                    <!-- Đã login -->
                    <div v-if="userStore.isAuthentication" class="drop-user-header">
                        <img src="https://i.pinimg.com/564x/8d/9f/09/8d9f095f1c59bba933ce67c7cf7fe508.jpg" alt="" />
                        <span>Jenny</span>
                    </div>
                    <ul v-if="userStore.isAuthentication" class="drop-user-body">
                        <li>
                            <a href="#">
                                <font-awesome-icon :icon="['far', 'user']" class="user-icon" />
                                <span>Tài khoản của tôi</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <font-awesome-icon :icon="['far', 'star']" class="user-icon" />
                                <span>Phim yêu thích</span>
                            </a>
                        </li>
                    </ul>
                    <div v-if="userStore.isAuthentication" class="drop-user-footer">
                        <a href="#">
                            <font-awesome-icon :icon="['fas', 'arrow-right-from-bracket']" />
                            <span>Đăng xuất</span>
                        </a>
                    </div>

                    <!-- Chưa login -->
                    <ul v-else class="drop-user-body">
                        <li>
                            <router-link to="/dang-nhap">
                                <font-awesome-icon :icon="['fas', 'arrow-right-to-bracket']" class="user-icon" />
                                <span>Đăng nhập</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/dang-ky">
                                <font-awesome-icon :icon="['fas', 'user-plus']" class="user-icon" />
                                <span>Đăng ký</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { useStore } from "@/store/index";
import { useUserStore } from "@/store/userStore";
export default {
    name: "header-wrapper",
    setup() {
        const store = useStore();
        const userStore = useUserStore();

        const handleOpenSearch = () => {
            store.handleShowSearchForm;
        };
        // Bắt sự kiện click ra ngoài để đóng form search
        const handleClickOutside = (e) => {
            if (!e.target.closest(".search-btn") && !e.target.closest(".search-form")) {
                store.openSearchForm = false;
            }
        };

        // Bắt sự kiện click ra ngoài để đóng form user
        const handleClickOutPropUser = (e) => {
            if (!e.target.closest(".user-btn") && !e.target.closest(".drop-user")) {
                store.openDropUser = false;
            }
        };

        //
        window.addEventListener("scroll", function () {
            var header = this.document.querySelector("header");
            header.classList.toggle("sticky", this.window.scrollY > 74);
        });

        const handleSubnavFeature = () => {
            store.handleSubnavFeature;
        };
        const handleSubnavPage = () => {
            store.handleSubnavPage;
        };
        const handleSubnavBlog = () => {
            store.handleSubnavBlog;
        };
        const handleSubnavShop = () => {
            store.handleSubnavShop;
        };

        // Thêm sự kiện click vào document
        document.addEventListener("click", handleClickOutside);
        document.addEventListener("click", handleClickOutPropUser);

        return {
            handleOpenSearch,
            store,
            userStore,
            handleSubnavFeature,
            handleSubnavPage,
            handleSubnavBlog,
            handleSubnavShop,
        };
    },
};
</script>

<style scoped>
header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
}
header.sticky {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    transition: all 0.3s ease-out 0s;
    backdrop-filter: blur(4px);
    animation: header-slide-down 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 74px;
    padding: 0 100px;
}
.logo a {
    display: block;
}
.logo img {
    height: 38px;
    max-height: 38px;
}
/* ---------------- */
.nav-list {
    list-style: none;
    margin: 0;
    padding: 0;
}
.nav-list > li {
    position: relative;
    display: inline-block;
    cursor: pointer;
    margin-right: 30px;
    transition: all ease-out 0.2s;
}
.nav-list > li > a {
    text-decoration: none;
}
.nav-list > li > span,
.nav-list > li > a {
    padding: 17px 15px;
    display: block;
    color: #d1d0cf;
    font-size: 14px;
    font-weight: 600;
}
.nav-list > li > span:hover,
.nav-list > li > a:hover {
    color: #e50914;
}
.nav-list > li:hover .subnav-list {
    display: block;
}
.subnav-list {
    position: absolute;
    list-style: none;
    margin: 0;
    padding: 15px 0;
    min-width: 256px;
    top: 55px;
    display: none;
    background: #141314;
    box-shadow: 0 0.625rem 1.875rem #0000001a;
    border-radius: 2px;
    z-index: 999;
}
.subnav-list > li {
    padding: 0 15px;
    margin-bottom: 0.8px;
}
.subnav-list > li > a {
    text-decoration: none;
    font-size: 14px;
    color: #d1d0cf;
    font-weight: 400;
    display: block;
    padding: 13px 15px;
}
.subnav-list > li:hover > a {
    border-left: 3px solid red;
    color: white;
    background: transparent -webkit-gradient(linear, right top, left top, from(rgba(229, 9, 20, 0)), to(rgba(229, 9, 20, 0.3)));
}
/* ---------------- */
.search-user {
    display: flex;
    align-items: center;
    position: relative;
}
.search-form {
    position: absolute;
    right: 44px;
    animation: scale-in-hor-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.search-form.show {
    display: block;
}
.search-form .search-icon {
    position: absolute;
    color: #d1d0cf;
    font-size: 20px;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
}
.search-form input[type="text"] {
    padding: 12px 24px 12px 44px;
    font-size: 14px;
    background: black;
    color: white;
    border: none;
}
.search-form input[type="text"]:focus-visible {
    outline: none;
}
.search-form input[type="text"]::placeholder {
    color: #d1d0cf;
    font-weight: 500;
}
/* ---------------- */
.user-btn,
.search-btn {
    background: black;
    color: white;
    border: none;
    padding: 10px;
    font-size: 16px;
    border-radius: 50%;
    cursor: pointer;
    margin-left: 10px;
}
/* ------------------ */
.drop-user {
    position: absolute;
    top: 52px;
    right: 2px;
    background-color: #000;
    box-shadow: 0 0.625rem 1.875rem #0000001a;
    border-radius: 2px;
    z-index: 999;
    min-width: 280px;
}
.drop-user.isAuthen {
    min-width: 170px;
}
.drop-user-header {
    padding: 16px 20px;
    margin-bottom: 16px;
    border-bottom: 1px solid #656363;
}
.drop-user-header img {
    width: 40px;
}
.drop-user-header span {
    color: #fff;
    margin-left: 20px;
    font-size: 18px;
}
.drop-user-body {
    list-style: none;
    padding: 0;
    margin: 0;
}
.drop-user-body > li:hover span {
    color: red;
}
.drop-user-body > li a {
    padding: 15px 20px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fff;
}
.drop-user-body > li a span {
    margin-left: 10px;
}
.drop-user-body > li a .user-icon {
    width: 16px;
    height: 16px;
}
.drop-user-footer {
    background-color: #141314;
}
.drop-user-footer > a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 20px;
    text-decoration: none;
    color: #fff;
}
.drop-user-footer > a:hover span {
    color: red;
}
.drop-user-footer > a span {
    margin-left: 10px;
}
</style>

<style scoped>
@media screen and (min-width: 1025px) {
    .menu-tablet-mobile {
        display: none;
    }
}
/* Mobile */
@media screen and (max-width: 739px) {
    .header-container {
        padding: 0 10px;
    }
}

/* Tablet */
@media screen and (min-width: 740px) and (max-width: 1024px) {
    .header-container {
        padding: 0 20px;
    }
}

/* Tablet And Mobile */
@media screen and (max-width: 1024px) {
    .nav-list {
        display: none;
    }
    .menu-tablet-mobile {
        background: black;
        color: white;
        border: none;
        padding: 10px;
        font-size: 16px;
        border-radius: 50%;
        cursor: pointer;
    }
    .sidebar-tablet {
        background: #000;
        position: absolute;
        top: 74px;
        left: 0;
        padding: 20px 30px;
        width: 280px;
        z-index: 99;
        animation: open-in-left 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    .nav-list-tablet {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .nav-list-tablet li {
        color: #fff;
        margin-bottom: 16px;
        font-size: 20px;
    }
    .subnav-list-tablet {
        list-style: none;
        margin: 8px 0;
    }
    .subnav-list-tablet > li {
        margin-bottom: 10px;
    }
    .subnav-list-tablet > li > a {
        text-decoration: none;
        color: #fff;
    }
}
</style>
