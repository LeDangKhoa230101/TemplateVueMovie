<template>
    <div class="category-movie">
        <h2>Phim thể loại Hành động</h2>
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

        <!-- Pagination -->
        <nav class="nav-paginate">
            <ul class="paginate-list">
                <li class="paginate-item">
                    <a class="paginate-link" href="#">
                        <font-awesome-icon :icon="['fas', 'arrow-left']" />
                    </a>
                </li>
                <li class="paginate-item active">
                    <a class="paginate-link" href="#">1</a>
                </li>
                <li class="paginate-item">
                    <a class="paginate-link" href="#">2</a>
                </li>
                <li class="paginate-item">
                    <a class="paginate-link" href="#">3</a>
                </li>
                <li class="paginate-item">
                    <a class="paginate-link" href="#">
                        <font-awesome-icon :icon="['fas', 'arrow-right']" />
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import MovieItem from "@/components/MovieItem.vue";
export default {
    name: "category-movie",
    components: { MovieItem },
};
</script>

<style scoped>
.category-movie {
    padding: 100px 80px 40px;
}
.category-movie > h2 {
    color: transparent;
    background-image: url("@/assets/texure.webp");
    background-clip: text;
    font-weight: 600;
    margin-bottom: 40px;
}
.movie-col {
    padding: 0;
}
/* Paginate */
.nav-paginate {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px 0 30px;
}
.paginate-list {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
}
.paginate-item {
    margin-right: 8px;
}
.paginate-link {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #e50914;
    background: white;
    font-size: 20px;
    width: 40px;
    height: 40px;
    border-radius: 4px;
    text-decoration: none;
}
.paginate-item.active .paginate-link {
    background: #e50914;
    color: white;
}
</style>

<style scoped>
/* Mobile */
@media screen and (max-width: 739px) {
    .category-movie {
        padding: 100px 30px 40px;
    }
}
</style>
