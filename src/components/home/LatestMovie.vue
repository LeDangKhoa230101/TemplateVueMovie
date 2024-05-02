<template>
    <div class="latest-movie-wrapper">
        <div class="latest-movie-wrapper-header">
            <h3>Những bộ phim gần đây</h3>
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
    name: "latest-movie-wrapper",
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
.latest-movie-wrapper {
    position: relative;
    padding: 0 100px 100px 100px;
}
.latest-movie-wrapper-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    margin: 24px 0;
}
.latest-movie-wrapper h3 {
    font-size: 21px;
    color: #fff;
}
.latest-movie-wrapper-header a {
    color: red;
    font-size: 15px;
    text-decoration: none;
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
</style>

<style scoped>
/* Mobile */
@media screen and (max-width: 739px) {
    .latest-movie-wrapper {
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
    .latest-movie-wrapper {
        padding: 0px 40px 40px;
    }
    .slide-control-btn:first-child {
        left: 39px;
    }
    .slide-control-btn:last-child {
        right: 39px;
    }
    .slide-control-btn {
        top: 52%;
        transform: translateY(-52%);
    }
}
/* Tablet And Mobile */
@media screen and (max-width: 1024px) {
    .slide-list {
        opacity: 1;
    }
}
</style>
