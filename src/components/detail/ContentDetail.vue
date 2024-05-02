<template>
    <div>
        <iframe
            width="100%"
            height="518"
            src="https://www.youtube-nocookie.com/embed/4ftIUL-MG20"
            frameborder="2"
            allowfullscreen
        ></iframe>
    </div>
    <div class="container detail-part">
        <div class="row">
            <div class="col-xl-8 col-12">
                <div class="detail-body">
                    <h4 class="name">ZOMBIE ISLAND</h4>
                    <div class="detail-body-rate">
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star']" />
                        <font-awesome-icon :icon="['fas', 'star-half-stroke']" />
                    </div>
                    <div class="detail-body-gener">
                        <span>Action, Adventure, Drama</span>
                    </div>
                    <div class="detail-body-time">
                        <span>Horror</span>
                        <span>1hr 48mins Feb 2017</span>
                    </div>
                    <div class="detail-body-control">
                        <button class="detail-body-control-btn">
                            <font-awesome-icon :icon="['fas', 'share-nodes']" />
                        </button>
                        <button class="detail-body-control-btn">
                            <font-awesome-icon :icon="['fas', 'heart']" />
                        </button>
                        <button class="detail-body-control-btn">
                            <font-awesome-icon :icon="['fas', 'plus']" />
                        </button>
                        <button class="detail-body-control-btn">
                            <font-awesome-icon :icon="['fas', 'download']" />
                        </button>
                    </div>
                    <div class="detail-body-tag">
                        <span>
                            <font-awesome-icon :icon="['fas', 'tags']" />
                            Tags:
                        </span>
                        <p>Action, Adventure, Drama</p>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-12">
                <img src="@/assets/banner1.webp" alt="" class="detail-part-image" />
            </div>
        </div>
    </div>
    <div class="detail-content">
        <ul class="tab-list">
            <li
                v-for="tab in detailStore.tabs"
                :key="tab.id"
                :class="{ active: detailStore.activeTab === tab.tab }"
                @click="detailStore.activeTab = tab.tab"
                class="tab-list-item"
            >
                <span>{{ tab.tab }}</span>
            </li>
        </ul>
        <div class="tab-content">
            <div class="tab-content-dexcription" v-if="detailStore.activeTab === 'Description'">
                <p>{{ detailStore.getDescription }}</p>
            </div>
            <div
                v-for="tab in detailStore.tabs"
                :key="tab.id"
                class="container"
                v-else-if="detailStore.activeTab === 'Cast'"
            >
                <div class="row">
                    <div class="col-xl-3 col-md-6 col-12" v-for="cast in tab.cast" :key="cast.castId">
                        <div class="cast-item">
                            <img :src="cast.image" alt="" />
                            <div class="cast-body">
                                <span>{{ cast.name }}</span>
                                <p>As {{ cast.as }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="text-align: center" class="tab-content-image" v-else-if="detailStore.activeTab === 'Trailer'">
                <iframe
                    width="40%"
                    height="300"
                    src="https://www.youtube-nocookie.com/embed/4ftIUL-MG20"
                    frameborder="2"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    </div>
</template>

<script>
import { useDetailStore } from "@/store/detail";
export default {
    name: "content-detail",
    setup() {
        const detailStore = useDetailStore();

        return { detailStore };
    },
};
</script>

<style scoped>
.detail-part {
    padding: 50px 0;
}
.detail-part-image {
    width: 100%;
    height: 100%;
}
.detail-body .name {
    line-height: 60px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: transparent;
    font-size: 50px;
    font-weight: 600;
    background-clip: text;
    background-image: url("@/assets/texure.webp");
}
.detail-body-rate {
    color: rgba(236, 186, 18, 1);
}
.detail-body-rate > svg {
    margin-right: 6px;
}
.detail-body-gener > span {
    display: block;
    color: #e50914;
    font-size: 16px;
    font-weight: 600;
    margin: 12px 0;
}
.detail-body-time > span:first-child {
    color: white;
    font-size: 12px;
    padding: 4px 7px;
    border-radius: 2px;
    background: #6c757d;
}
.detail-body-time > span:last-child {
    color: white;
    font-size: 17px;
    margin-left: 12px;
}
.detail-body-control {
    display: flex;
    align-items: center;
    margin: 30px 0;
}
.detail-body-control-btn {
    color: #e50914;
    border: 5px solid #6c757d;
    background: white;
    font-size: 16px;
    margin-right: 20px;
    width: 45px;
    height: 45px;
    border-radius: 50%;
}
.detail-body-tag {
    display: flex;
    align-items: center;
    font-size: 17px;
}
.detail-body-tag span {
    color: #e50914;
}
.detail-body-tag p {
    margin: 0;
    color: #d1d0cf;
    margin-left: 12px;
}
.tab-list {
    list-style: none;
    padding: 0;
    margin-bottom: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(90.06deg, rgba(0, 0, 0, 0) 1.66%, #141314 43.64%, rgba(0, 0, 0, 0) 89.28%);
}
.tab-list > li {
    margin-right: 16px;
    cursor: pointer;
}
.tab-list > li > span {
    font-size: 16px;
    color: white;
    padding: 16px 16px;
    display: block;
}
.tab-list-item.active span {
    position: relative;
    color: #e50914;
    font-weight: 400;
    background: linear-gradient(0deg, rgba(229, 9, 20, 0) 0, rgba(229, 9, 20, 0.3) 85%);
}
.tab-list-item span::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    height: 4px;
    width: 0;
    background: #e50914;
    transition: all 0.8s linear;
    opacity: 0;
}
.tab-list-item.active span::after {
    opacity: 1;
    width: 100%;
}
.tab-content {
    padding: 0 0 20px;
}
.tab-content-dexcription > p {
    color: #d1d0cf;
    font-size: 16px;
}
.cast-item {
    display: flex;
    align-items: center;
    border-radius: 4px;
    margin-top: 10px;
    background-color: #141314;
}
.cast-item img {
    height: 128px;
}
.cast-body {
    color: white;
    margin-left: 18px;
}
.cast-body > span {
    font-size: 18px;
}
.cast-body > p {
    font-size: 14px;
}
</style>

<style scoped>
/* Mobile */
@media screen and (max-width: 739px) {
    .detail-body .name {
        font-size: 40px;
    }
    .detail-body {
        margin-bottom: 20px;
    }
}

/* Tablet */
@media screen and (min-width: 740px) and (max-width: 1024px) {
    .detail-part-image {
        height: 350px;
        margin-top: 20px;
    }
}
</style>
