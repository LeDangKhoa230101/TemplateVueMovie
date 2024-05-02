<template>
    <Carousel ref="myCarousel" :wrap-around="true" :transition="700">
        <Slide v-for="slide in 3" :key="slide">
            <div class="carousel__item">
                <div class="slide-image">
                    <img src="@/assets/banner1.webp" alt="" />
                </div>
                <div class="container slide-wrapper">
                    <div class="row">
                        <div class="col-8" style="text-align: left">
                            <h1 class="slide-name">Ban Tam Giao</h1>
                            <div class="slide-scan">
                                <div class="star">
                                    <font-awesome-icon :icon="['fas', 'star']" class="star-icon" />
                                    <font-awesome-icon :icon="['fas', 'star']" class="star-icon" />
                                    <font-awesome-icon :icon="['fas', 'star']" class="star-icon" />
                                    <font-awesome-icon :icon="['fas', 'star']" class="star-icon" />
                                    <font-awesome-icon :icon="['far', 'star-half-stroke']" class="star-icon" />
                                </div>
                                <div class="rate">4.3/5</div>
                                <span class="imdb">IMDb</span>
                                <span class="action">ACTION</span>
                                <span class="time">2hr42ms 2019</span>
                            </div>
                            <p class="description">
                                Mai anh sẽ phải đi xa, mang đi cả tình yêu hai ta Mang trái tim này đến một nơi chỉ có
                                súng đạn và lòng thành người đàn ông Ngắm nhìn em từng giây phút cuối, sao hai dòng lệ
                                anh rơi Sương mù giăng lối chân anh trên con dốc nơi ta đã thề hẹn cùng nhau Hai năm anh
                                sẽ sống trọn tình yêu với Tổ Quốc, em là sức mạnh - hằn màu áo xanh Đôi khi chông gai
                                phủ lên đời trai vẫn hơn sống đời mờ phai, nhạt nhoà êm ái
                            </p>
                            <p class="genre">
                                Geners:
                                <span>Hành động</span>
                            </p>
                            <p class="tag">
                                Tag:
                                <span>Hành động, Viễn tưởng, Kinh dị</span>
                            </p>
                            <a href="#" class="slide-play-btn">
                                Xem phim
                                <font-awesome-icon :icon="['fas', 'caret-right']" />
                            </a>
                        </div>
                        <div class="col-4" style="display: flex; align-items: center; justify-content: center">
                            <a href="#" class="slide-trailer-btn">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-play-circle play-trailer-icon"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                    <path
                                        d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"
                                    />
                                </svg>
                                <span>Watch Trailer</span>
                            </a>
                        </div>
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
</template>

<script>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { ref } from "vue";
import { useStore } from "@/store/index";
export default {
    name: "slide-wrapper",
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
.carousel__item {
    height: 100vh;
    width: 100%;
}
.carousel__slide {
    padding: 10px 2px 10px 10px;
}
.slide-control-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: white;
    background-color: transparent;
    border: 1px solid white;
    padding: 9.2px 16.2px;
    border-radius: 50%;
    transition: all 0.2s;
}
.slide-control-btn:hover {
    color: #e50914;
    border-color: #e50914;
}
.slide-control-btn:first-child {
    left: 30px;
}
.slide-control-btn:last-child {
    right: 30px;
}
/* ---------------- */
.slide-image {
    position: relative;
    width: 100%;
    height: 100%;
}
.slide-image::before {
    position: absolute;
    width: 100%;
    content: "";
    top: 0;
    left: 0;
    height: 100%;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.9) 0%, rgba(20, 20, 20, 0.9) 15%, rgba(83, 100, 141, 0) 100%);
}
.slide-image img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}
.slide-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
}
.slide-name {
    font-size: 80px;
    font-weight: 700;
    text-transform: uppercase;
    color: transparent;
    background-clip: text;
    background-image: url("@/assets/texure.webp");
    animation: RightAnimate 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) 0.2s both;
}
.slide-scan {
    display: flex;
    align-items: center;
    animation: RightAnimate 0.7s cubic-bezier(0.39, 0.575, 0.565, 1) 0.3s both;
}
.star .star-icon {
    color: rgb(236 186 18);
}
.rate {
    color: white;
    margin: 0 10px 0 20px;
}
.slide-scan .imdb {
    background: rgb(236 186 18);
    color: black;
    font-weight: 800;
    padding: 2px;
    border-radius: 4px;
}
.slide-scan .action {
    background: #6c657d;
    color: #fff;
    font-weight: 600;
    margin: 0 16px;
    padding: 8px;
    font-size: 12px;
}
.slide-scan .time {
    font-size: 14px;
    color: #d1d0cf;
}
.description {
    display: -webkit-box;
    line-height: 20px;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    color: #d1d0cf;
    margin: 36px 0;
    width: 600px;
    max-width: 600px;
    animation: RightAnimate 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) 0.4s both;
}
.genre {
    color: #e50914;
    font-weight: 600;
    animation: RightAnimate 0.9s cubic-bezier(0.39, 0.575, 0.565, 1) 0.5s both;
}
.genre > span {
    color: white;
    font-weight: 500;
}
.tag {
    color: #e50914;
    font-weight: 600;
    animation: RightAnimate 1s cubic-bezier(0.39, 0.575, 0.565, 1) 0.6s both;
}
.tag > span {
    color: white;
    font-weight: 500;
}
.slide-play-btn {
    display: inline-block;
    text-decoration: none;
    color: white;
    background: #e50914;
    padding: 16px 32px;
    border-radius: 4px;
    margin-top: 16px;
    transition: 0.3s;
    animation: RightAnimate 1.1s cubic-bezier(0.39, 0.575, 0.565, 1) 0.7s both;
}
.slide-play-btn:hover {
    box-shadow: inset -80px 0 0 0 #bc0c15, inset 80px 0 0 0 #bc0c15;
}
/* ----------------- */
.slide-trailer-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: all 0.3s;
}
.slide-trailer-btn:hover {
    color: #e50914;
}
.slide-trailer-btn .play-trailer-icon {
    width: 80px;
    height: 80px;
    margin-right: 18px;
}
.slide-trailer-btn span {
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.21825em;
}
</style>

<style scoped>
/* Mobile */
@media screen and (max-width: 739px) {
    .carousel__item {
        height: 38vh;
    }
    .slide-name {
        font-size: 18px;
    }
    .slide-scan,
    .description {
        display: none;
    }
    .slide-play-btn {
        font-size: 12px;
        padding: 12px 10px;
    }
}

/* Tablet */
@media screen and (min-width: 740px) and (max-width: 1024px) {
    .carousel__item {
        height: 50vh;
    }
    .slide-name {
        font-size: 50px;
    }
}

/* Tablet And Mobile */
@media screen and (max-width: 1024px) {
    .slide-control {
        display: none;
    }
    .slide-trailer-btn {
        display: none;
    }
}

@media screen and (min-width: 1025px) {
}
</style>
