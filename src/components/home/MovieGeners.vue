<template>
    <div class="continue-wrapper">
        <h3>Thể loại phim</h3>
        <Carousel ref="myCarousel" v-bind="store.settings" :breakpoints="store.breakpoints">
            <Slide v-for="slide in 10" :key="slide">
                <div class="carousel__item">
                    <div class="slide-img">
                        <img src="@/assets/banner1.webp" alt="" />
                    </div>
                    <div class="slide-body">
                        <span>Hành động</span>
                        <div class="progress progress-setup" aria-valuemax="100" style="height: 1px">
                            <div class="progress-bar" style="width: 100%"></div>
                        </div>
                    </div>
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
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { ref } from "vue";
import { useStore } from "@/store/index";
export default {
    name: "movie-gener-wrapper",
    components: { Carousel, Slide },
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
.continue-wrapper {
    position: relative;
    padding: 100px 100px 100px 100px;
}
.continue-wrapper h3 {
    font-size: 21px;
    color: #fff;
    padding: 0 16px;
    margin: 24px 0;
}
.carousel__item {
    width: 100%;
    cursor: pointer;
    transform: scale(0.9, 0.9);
    transition: 0.3s ease-in-out transform;
}
.carousel__item:hover {
    transform: scale(1, 1);
}
.carousel__item:hover .progress-setup {
    opacity: 1;
}
.slide-img {
    position: relative;
}
.slide-img::before {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #263238;
    cursor: pointer;
    opacity: 0.5;
}
.slide-img img {
    width: 100%;
    border-radius: 4px;
    background-repeat: no-repeat;
    background-origin: inherit;
    background-size: cover;
}
.slide-control-btn {
    position: absolute;
    top: 59%;
    transform: translateY(-59%);
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
.slide-body {
    position: absolute;
    bottom: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
}
.slide-body span {
    display: block;
    margin-bottom: 52px;
    font-size: 20px;
    color: white;
}
.progress-setup {
    opacity: 0;
    transition: 0.3s;
}
.progress-setup .progress-bar {
    background-color: #e50914;
}
</style>

<style scoped>
/* Mobile */
@media screen and (max-width: 739px) {
    .continue-wrapper {
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
    .continue-wrapper {
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
