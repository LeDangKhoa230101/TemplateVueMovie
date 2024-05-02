<template>
    <div class="movie-item">
        <div class="block-item">
            <div class="slide-img">
                <img src="https://i.pinimg.com/736x/a6/ca/1f/a6ca1f11144b562f43567fef0aea1401.jpg" alt="" />
            </div>
            <ul class="slide-list">
                <li>
                    <span class="name">Batter Cail Batter Cail</span>
                    <span class="time">2hr:55mins</span>
                </li>
                <li>
                    <a href="#"><font-awesome-icon :icon="['fas', 'play']" class="play-icon" /></a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "movie-item",
};
</script>

<style scoped>
.movie-item:hover .block-item {
    transform: scale(1, 1);
}
.movie-item:hover .slide-list {
    opacity: 1;
    visibility: visible;
}
.movie-item:hover .block-item::before {
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
