<template>
    <Slide />
    <ContinueWatchingVue />
    <UpcomingMovie />
    <LatestMovie />
    <Banner />
    <MovieGeners />
</template>

<script>
import Slide from "../home/Slide.vue";
import ContinueWatchingVue from "../home/ContinueWatching.vue";
import UpcomingMovie from "../home/UpcomingMovie.vue";
import LatestMovie from "../home/LatestMovie.vue";
import Banner from "../home/Banner.vue";
import MovieGeners from "../home/MovieGeners.vue";
export default {
    name: "home-wrapper",
    components: {
        Slide,
        ContinueWatchingVue,
        UpcomingMovie,
        LatestMovie,
        Banner,
        MovieGeners,
    },
};
</script>

<style scoped></style>
