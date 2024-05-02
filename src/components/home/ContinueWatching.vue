<template>
    <div class="continue-wrapper">
        <h3>Tiếp tục xem</h3>
        <Carousel ref="myCarousel" v-bind="store.settings" :breakpoints="store.breakpoints">
            <Slide v-for="slide in 10" :key="slide">
                <div class="carousel__item">
                    <div class="slide-img">
                        <img src="@/assets/banner1.webp" alt="" />
                    </div>
                    <div class="slide-body">
                        <span>70 of 230m</span>
                        <div class="progress progress-setup" aria-valuemax="100" style="height: 2px">
                            <div class="progress-bar" style="width: 25%"></div>
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
    name: "continue-wrapper",
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
    margin: 0 15px;
}
.slide-img img {
    height: 180px;
    width: 100%;
    border-radius: 4px;
    cursor: pointer;
    background-repeat: no-repeat;
    background-origin: inherit;
    background-size: cover;
}
.slide-control-btn {
    position: absolute;
    top: 58%;
    transform: translateY(-58%);
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
    width: 100%;
    font-size: 14px;
    color: #d1d0cf;
    text-align: left;
    padding: 0 30px 0 0;
}
.slide-body span {
    margin-left: 30px;
    margin-bottom: 10px;
    display: block;
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
        padding: 90px 40px;
    }
    .slide-control-btn:first-child {
        left: 39px;
    }
    .slide-control-btn:last-child {
        right: 39px;
    }
}
</style>
