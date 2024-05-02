import { defineStore } from "pinia";

export const useStore = defineStore("store", {
    state: () => ({
        openSearchForm: false,
        openDropUser: false,
        openMenuTablet: false,

        openSubnavFeature: false,
        openSubnavPage: false,
        openSubnavBlog: false,
        openSubnavShop: false,

        settings: {
            itemsToShow: 5,
            wrapAround: true,
            transition: 700,
        },
        breakpoints: {
            1023: {
                itemsToShow: 5,
            },
            739: {
                itemsToShow: 3,
            },
            0: {
                itemsToShow: 1,
            },
        },
    }),
    getters: {
        handleSubnavFeature(state) {
            state.openSubnavPage = false;
            state.openSubnavBlog = false;
            state.openSubnavShop = false;
            return (state.openSubnavFeature = !state.openSubnavFeature);
        },
        handleSubnavPage(state) {
            state.openSubnavFeature = false;
            state.openSubnavBlog = false;
            state.openSubnavShop = false;
            return (state.openSubnavPage = !state.openSubnavPage);
        },
        handleSubnavBlog(state) {
            state.openSubnavFeature = false;
            state.openSubnavPage = false;
            state.openSubnavShop = false;
            return (state.openSubnavBlog = !state.openSubnavBlog);
        },
        handleSubnavShop(state) {
            state.openSubnavFeature = false;
            state.openSubnavPage = false;
            state.openSubnavBlog = false;
            return (state.openSubnavShop = !state.openSubnavShop);
        },
    },
});
