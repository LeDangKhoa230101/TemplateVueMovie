<template>
    <div class="banner">
        <Carousel ref="myCarousel" :wrapAround="true" :transition="1000">
            <Slide v-for="slide in 3" :key="slide">
                <div class="carousel__item">
                    <div class="banner-img">
                        <img src="@/assets/banner02.webp" alt="" />
                    </div>
                    <div class="container banner-item-container">
                        <div class="row banner-item-row">
                            <div class="col-8 banner-item-col">
                                <div class="rank">
                                    <img src="@/assets/trending-label.webp" alt="" />
                                    <span>#4</span>
                                    <p>in Series Today</p>
                                </div>
                                <h3 class="name">The Hunter</h3>
                                <p class="description">
                                    Sand and dust storms (SDS), also known as sirocco, haboob, yellow dust, white
                                    storms, and the harmattan, are a natural phenomenon linked with land
                                </p>
                                <div class="season">
                                    <span>Nov 2022</span>
                                    <font-awesome-icon :icon="['fas', 'circle']" class="icon" />
                                    <span>Season</span>
                                </div>
                                <a href="/">
                                    stream now
                                    <font-awesome-icon :icon="['fas', 'caret-right']" class="stream-icon" />
                                </a>
                            </div>
                            <div class="col-4 banner-tab">
                                <h3>All Episode</h3>
                                <!-- Start Tabs -->
                                <div class="tab">
                                    <ul class="tab-list">
                                        <li
                                            v-for="(tab, index) in homeStore.tabs"
                                            :key="index"
                                            :class="{
                                                active: homeStore.activeTab === index,
                                            }"
                                            @click="homeStore.activeTab = index"
                                            class="tab-list-item"
                                        >
                                            {{ tab.tab }}
                                        </li>
                                    </ul>
                                    <div class="tab-content">
                                        <ul
                                            v-for="(tab, index) in homeStore.tabs"
                                            :key="index"
                                            v-show="homeStore.activeTab === index"
                                            class="episode-list"
                                        >
                                            <li
                                                v-for="content in tab.content"
                                                :key="content.id"
                                                class="episode-list-item"
                                            >
                                                <a href="#">
                                                    <div class="episode-img">
                                                        <img :src="content.image" alt="" class="image" />
                                                    </div>
                                                    <div class="body">
                                                        <span class="name"
                                                            >{{ content.epi }}
                                                            <p>
                                                                -
                                                                {{ content.name }}
                                                            </p>
                                                        </span>
                                                        <span class="time">{{ content.time }}</span>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <!-- End Tabs -->
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>
        </Carousel>
        <div class="banner-control">
            <button @click="prev" class="banner-control-btn">
                <font-awesome-icon :icon="['fas', 'chevron-left']" />
            </button>
            <button @click="next" class="banner-control-btn">
                <font-awesome-icon :icon="['fas', 'chevron-right']" />
            </button>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import { useHome } from "@/store/home";
export default {
    name: "banner-wrapper",
    components: { Carousel, Slide },
    setup() {
        const homeStore = useHome();

        const myCarousel = ref(null);

        const prev = () => {
            myCarousel.value.prev();
        };
        const next = () => {
            myCarousel.value.next();
        };

        return {
            myCarousel,
            prev,
            next,
            homeStore,
        };
    },
};
</script>

<style scoped>
.banner {
    position: relative;
}
.carousel__item {
    padding: 0 12px;
}
.banner-img {
    position: relative;
}
.banner-img::before {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(
        90deg,
        rgba(var(--bs-black-rgb), 0.9) 0%,
        rgba(20, 20, 20, 0.9) 15%,
        rgba(83, 100, 141, 0) 100%
    );
}
.banner-img img {
    width: 100%;
}
/* --------------------- */
.banner-item-container {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    padding: 0 22px;
    transform: translateY(-50%);
}
.banner-item-row {
    justify-content: space-between;
}
.banner-item-col {
    text-align: left;
    max-width: 500px;
}
.banner-item-col .rank > span {
    font-size: 21px;
    color: rgba(229, 9, 20, 1);
    margin: 0 4px 0 16px;
}
.banner-item-col .rank > p {
    font-size: 21px;
    color: #fff;
    margin: 0;
    display: inline-block;
}
.banner-item-col .name {
    font-weight: 600;
    font-size: 67px;
    margin: 24px 0 8px 0;
    display: inline-block;
    background-clip: text;
    color: transparent;
    background-image: url("@/assets/texure.webp");
}
.banner-item-col .description {
    font-size: 14px;
    color: #d1d0cf;
    line-height: 21px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.banner-item-col .season {
    color: #d1d0cf;
    font-size: 18px;
    display: flex;
    align-items: center;
    font-weight: 600;
}
.banner-item-col .season span:last-child {
    margin-bottom: 1px;
}
.banner-item-col .season .icon {
    font-size: 7px;
    color: #e50914;
    margin: 0 12px;
}
.banner-item-col > a {
    font-size: 15px;
    color: #fff;
    background: #e50914;
    text-decoration: none;
    text-transform: uppercase;
    padding: 14px 30px;
    border-radius: 4px;
    display: inline-flex;
    align-items: center;
    margin: 40px 0 40px 0;
    transition: 0.3s;
}
.banner-item-col > a:hover {
    box-shadow: inset -90px 0 0 0 #bc0c15, inset 90px 0 0 0 #bc0c15;
}
.banner-item-col > a .stream-icon {
    font-size: 17px;
    margin-left: 6px;
}
.banner-control {
    position: absolute;
    bottom: 0;
    left: 100px;
    top: 600px;
}
.banner-control .banner-control-btn {
    background: transparent;
    color: #fff;
    padding: 2.2px 9.2px;
    border-radius: 50%;
    border: 1px solid #fff;
    transition: 0.2s;
}
.banner-control .banner-control-btn:hover {
    background: #e50914;
}
.banner-control .banner-control-btn:last-child {
    margin-left: 18px;
}
/* ------------- */
.banner-tab {
    background: #141314;
    border-radius: 4px;
    padding: 35px 0 0 0;
    text-align: left;
    max-width: 400px;
}
.banner-tab h3 {
    padding: 0 35px;
    font-size: 30px;
    color: #fff;
}
.tab-list {
    padding: 0 35px;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #353434;
}
.tab-list .tab-list-item {
    color: #d1d0cf;
    font-size: 16px;
    cursor: pointer;
    padding: 16px 0;
}
.tab-list-item.active {
    color: #e50914;
}
.tab-content .episode-list {
    padding: 12px 35px;
    list-style: none;
}
.episode-img {
    overflow: hidden;
    width: 120px;
    height: 85px;
}
.episode-img .image {
    width: 100%;
    height: 100%;
    transition: transform 0.5s ease-in;
}
.episode-list-item {
    margin-bottom: 20px;
}
.episode-list-item a {
    display: flex;
    align-items: center;
    text-decoration: none;
}
.episode-list-item a:hover .image {
    transform: scale(1.2);
}
.episode-list-item > a .body {
    display: flex;
    flex-direction: column;
    margin-left: 12px;
}
.episode-list-item > a .body > .name {
    color: #e50914;
    font-size: 16px;
}
.episode-list-item > a .body > .name p {
    color: #fff;
    display: inline-block;
}
.episode-list-item > a .body > .time {
    font-size: 14px;
    color: #d1d0cf;
}
</style>

<style scoped>
/* Mobile */
@media screen and (max-width: 739px) {
    .banner-item-col .name {
        font-size: 30px;
    }
    .rank {
        display: none;
    }
    .banner-item-col > a {
        padding: 10px 4px;
        font-size: 12px;
    }
}

/* Tablet And Mobile */
@media screen and (max-width: 1024px) {
    .banner-control {
        display: none;
    }
    .banner-tab {
        display: none;
    }
    .banner-item-container {
        top: 54%;
    }
}
</style>
