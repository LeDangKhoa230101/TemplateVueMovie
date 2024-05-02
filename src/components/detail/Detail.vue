<template>
    <div class="detail">
        <ContentDetail />
        <MoviesRecommended />
        <RelatedMovies />
    </div>
</template>

<script>
import { useDetailStore } from "@/store/detail";
import ContentDetail from "@/components/detail/ContentDetail.vue";
import MoviesRecommended from "@/components/detail/MoviesRecommended.vue";
import RelatedMovies from "@/components/detail/RelatedMovies.vue";
export default {
    name: "detail-wrapper",
    components: { ContentDetail, MoviesRecommended, RelatedMovies },
    setup() {
        const detailStore = useDetailStore();

        return { detailStore };
    },
};
</script>

<style scoped>
.detail {
    margin-top: 80px;
    padding: 0 100px;
}
</style>

<style scoped>
/* Mobile */
@media screen and (max-width: 739px) {
    .detail {
        padding: 0 10px;
    }
}

/* Tablet */
@media screen and (min-width: 740px) and (max-width: 1024px) {
    .detail {
        padding: 0 20px;
    }
}
</style>
