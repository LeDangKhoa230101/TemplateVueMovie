<template>
    <div class="upcoming-wrapper">
        <div class="upcoming-wrapper-header">
            <h3>Phim sắp chiếu</h3>
            <a href="#" class="view-all">Xem tất cả</a>
        </div>
        <Carousel ref="myCarousel" v-bind="store.settings" :breakpoints="store.breakpoints">
            <Slide v-for="slide in 10" :key="slide">
                <div class="carousel__item">
                    <MovieItem />
                </div>
            </Slide>
        </Carousel>
        <div class="slide-control">
            <button @click="prev" class="slide-control-btn">
                <font-awesome-icon :icon="['fas', 'chevron-left']" />
            </button>
            <button @click="next" class="slide-control-btn">
                <font-awesome-icon :icon="['fas', 'chevron-right']" />
            </button>
        </div>
    </div>
</template>

<script>
import MovieItem from "@/components/MovieItem.vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { ref } from "vue";
import { useStore } from "@/store/index";
export default {
    name: "upcoming-wrapper",
    components: { Carousel, Slide, MovieItem },
    setup() {
        const store = useStore();

        const myCarousel = ref(null);

        const prev = () => {
            myCarousel.value.prev();
        };

        const next = () => {
            myCarousel.value.next();
        };

        return { myCarousel, prev, next, store };
    },
};
</script>

<style scoped>
.upcoming-wrapper {
    position: relative;
    padding: 0 100px 100px 100px;
}
.upcoming-wrapper-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    margin: 24px 0;
}
.upcoming-wrapper h3 {
    font-size: 21px;
    color: #fff;
}
.upcoming-wrapper-header a {
    color: red;
    font-size: 15px;
    text-decoration: none;
}
.carousel__item:hover .block-item {
    transform: scale(1, 1);
}
.carousel__item:hover .slide-list {
    opacity: 1;
    visibility: visible;
}
.carousel__item:hover .block-item::before {
    opacity: 0.3;
}
.block-item {
    position: relative;
    padding: 0 4px;
    transform: scale(0.9, 0.9);
    transition: 0.4s ease-in-out transform;
}
.block-item::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    background-color: #263238;
    transition: all ease-in 0.1s;
}
.slide-img img {
    height: 337px;
    width: 100%;
    border-radius: 4px;
    background-repeat: no-repeat;
    background-origin: inherit;
    background-size: cover;
}
/* ---------------------- */
.slide-control-btn {
    position: absolute;
    top: 46%;
    transform: translateY(-46%);
    color: white;
    background-color: transparent;
    border: 1px solid white;
    padding: 2.2px 9.2px;
    border-radius: 50%;
    transition: all 0.2s;
}
.slide-control-btn:hover {
    background: #e50914;
}
.slide-control-btn:first-child {
    left: 100px;
}
.slide-control-btn:last-child {
    right: 100px;
}
/* ----------------- */
.slide-list {
    position: absolute;
    bottom: 12px;
    color: white;
    left: 0;
    right: 0;
    padding: 0 20px 0 20px;
    list-style-type: none;
    display: flex;
    text-align: left;
    justify-content: space-between;
    opacity: 0;
    transition: all ease-in 0.1s;
}
.slide-list li:first-child {
    display: flex;
    flex-direction: column;
}
.slide-list li .name {
    font-size: 20px;
    line-height: 28px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.slide-list li .time {
    font-size: 13px;
    color: #d1d0cf;
}
.slide-list li a {
    display: block;
    color: #fff;
    padding: 10px 16px;
    border-radius: 50%;
    background: #e50914;
    margin-left: 12px;
}
.slide-list li a:hover {
    box-shadow: inset -22px 0 0 0 #bc0c15, inset 22px 0 0 0 #bc0c15;
}
</style>

<style scoped>
/* Mobile */
@media screen and (max-width: 739px) {
    .upcoming-wrapper {
        padding: 60px 30px;
    }
    .slide-body {
        right: 0;
        left: 0;
        padding: 0 28px;
    }
    .slide-control {
        display: none;
    }
}

/* Tablet */
@media screen and (min-width: 740px) and (max-width: 1024px) {
    .upcoming-wrapper {
        padding: 0px 40px 40px;
    }
    .slide-control-btn:first-child {
        left: 39px;
    }
    .slide-control-btn:last-child {
        right: 39px;
    }
    .slide-control-btn {
        top: 51%;
        transform: translateY(-51%);
    }
}
/* Tablet And Mobile */
@media screen and (max-width: 1024px) {
    .slide-list {
        opacity: 1;
    }
}
</style>
