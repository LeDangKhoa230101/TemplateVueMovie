import { defineStore } from "pinia";

export const useDetailStore = defineStore("detail", {
    state: () => ({
        activeTab: "Description",
        tabs: [
            {
                id: 1,
                tab: "Description",
                description:
                    "Zombie Island is a 1998 direct-to-video animated comedy horror film based on Hanna-Barbera's Scooby-Doo Saturday-morning cartoons. In the film, Shaggy, Scooby, Fred, Velma, and Daphne reunite after a year-long hiatus from Mystery, Inc. to investigate a bayou island said to be haunted by the ghost of the pirate Morgan Moonscar. The film was directed by Jim Stenstrum, from a screenplay by Glenn Leopold.",
            },
            {
                id: 2,
                tab: "Cast",
                cast: [
                    {
                        castId: 1,
                        image: "https://templates.iqonic.design/streamit/vue/frontend/assets/images/genre/g1.webp",
                        name: "James Chinlund",
                        as: "James",
                    },
                    {
                        castId: 2,
                        image: "https://templates.iqonic.design/streamit/vue/frontend/assets/images/genre/g2.webp",
                        name: "James Earl Jones",
                        as: "Jones",
                    },
                ],
            },
            {
                id: 3,
                tab: "Trailer",
                src: "https://www.youtube-nocookie.com/embed/4ftIUL-MG20",
            },
        ],
    }),
    getters: {
        getDescription() {
            const descriptionTab = this.tabs.find((tab) => tab.tab === "Description");
            return descriptionTab ? descriptionTab.description : "";
        },
    },
});
