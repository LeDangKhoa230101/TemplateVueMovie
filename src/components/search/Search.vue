<template>
    <div class="search-movie">
        <h2>Tìm kiếm phim: Thừa Hoàn Ký</h2>
        <div class="comtainer">
            <div class="row">
                <div class="col-xl-2 col-md-6 col-12 movie-col">
                    <MovieItem />
                </div>
                <div class="col-xl-2 col-md-6 col-12 movie-col">
                    <MovieItem />
                </div>
                <div class="col-xl-2 col-md-6 col-12 movie-col">
                    <MovieItem />
                </div>
                <div class="col-xl-2 col-md-6 col-12 movie-col">
                    <MovieItem />
                </div>
                <div class="col-xl-2 col-md-6 col-12 movie-col">
                    <MovieItem />
                </div>
                <div class="col-xl-2 col-md-6 col-12 movie-col">
                    <MovieItem />
                </div>
                <div class="col-xl-2 col-md-6 col-12 movie-col">
                    <MovieItem />
                </div>
                <div class="col-xl-2 col-md-6 col-12 movie-col">
                    <MovieItem />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MovieItem from "@/components/MovieItem.vue";
export default {
    name: "search-movie",
    components: { MovieItem },
};
</script>

<style scoped>
.search-movie {
    padding: 100px 80px 40px;
}
.search-movie > h2 {
    color: transparent;
    background-image: url("@/assets/texure.webp");
    background-clip: text;
    font-weight: 600;
    margin-bottom: 40px;
}
.movie-col {
    padding: 0;
}
</style>

<style scoped>
/* Mobile */
@media screen and (max-width: 739px) {
    .search-movie {
        padding: 100px 30px 40px;
    }
}
</style>
