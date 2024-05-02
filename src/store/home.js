import { defineStore } from "pinia";

export const useHome = defineStore("home", {
    state: () => ({
        slide: [],

        activeTab: 0,
        tabs: [
            {
                id: 1,
                tab: "Season 1",
                content: [
                    {
                        id: 1,
                        image: "https://templates.iqonic.design/streamit/vue/frontend//assets/images/tv-show/season/01.webp",
                        epi: "E1",
                        name: "Fire An Bllod",
                        time: "45 minute",
                    },
                    {
                        id: 2,
                        image: "https://templates.iqonic.design/streamit/vue/frontend//assets/images/tv-show/season/01.webp",
                        epi: "E2",
                        name: "Fire An Bllod",
                        time: "45 minute",
                    },
                    {
                        id: 3,
                        image: "https://templates.iqonic.design/streamit/vue/frontend//assets/images/tv-show/season/01.webp",
                        epi: "E3",
                        name: "Fire An Bllod",
                        time: "45 minute",
                    },
                    {
                        id: 4,
                        image: "https://templates.iqonic.design/streamit/vue/frontend//assets/images/tv-show/season/01.webp",
                        epi: "E4",
                        name: "Fire An Bllod",
                        time: "45 minute",
                    },
                ],
            },
            {
                id: 2,
                tab: "Season 2",
                content: [
                    {
                        id: 1,
                        image: "https://templates.iqonic.design/streamit/vue/frontend//assets/images/tv-show/season/05.webp",
                        epi: "E1",
                        name: "Fire An Bllod",
                        time: "45 minute",
                    },
                    {
                        id: 2,
                        image: "https://templates.iqonic.design/streamit/vue/frontend//assets/images/tv-show/season/05.webp",
                        epi: "E2",
                        name: "Fire An Bllod",
                        time: "45 minute",
                    },
                    {
                        id: 3,
                        image: "https://templates.iqonic.design/streamit/vue/frontend//assets/images/tv-show/season/05.webp",
                        epi: "E3",
                        name: "Fire An Bllod",
                        time: "45 minute",
                    },
                    {
                        id: 4,
                        image: "https://templates.iqonic.design/streamit/vue/frontend//assets/images/tv-show/season/05.webp",
                        epi: "E4",
                        name: "Fire An Bllod",
                        time: "45 minute",
                    },
                ],
            },
            {
                id: 2,
                tab: "Season 3",
                content: [
                    {
                        id: 1,
                        image: "https://templates.iqonic.design/streamit/vue/frontend//assets/images/tv-show/season/06.webp",
                        epi: "E1",
                        name: "Fire An Bllod",
                        time: "45 minute",
                    },
                    {
                        id: 2,
                        image: "https://templates.iqonic.design/streamit/vue/frontend//assets/images/tv-show/season/06.webp",
                        epi: "E2",
                        name: "Fire An Bllod",
                        time: "45 minute",
                    },
                    {
                        id: 3,
                        image: "https://templates.iqonic.design/streamit/vue/frontend//assets/images/tv-show/season/06.webp",
                        epi: "E3",
                        name: "Fire An Bllod",
                        time: "45 minute",
                    },
                    {
                        id: 4,
                        image: "https://templates.iqonic.design/streamit/vue/frontend//assets/images/tv-show/season/06.webp",
                        epi: "E4",
                        name: "Fire An Bllod",
                        time: "45 minute",
                    },
                ],
            },
        ],
    }),
});
