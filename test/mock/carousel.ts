export type carouselSlides = {
    image: string,
    title: string,
    tags: Array<string>,
    timeago: Date | Ref<Date>,
    url: string
}

export const carousel: Array<carouselSlides> = [{
    image: "/assets/images/background/capa-vulcan-eu-sou-o-unico-necromante-2.png",
    title: "Eu sou o único necromante",
    tags: ["novo capítulo"],
    timeago: useNow(),
    url: "/"
},{
    image: "/assets/images/background/capa-vulcan-eu-sou-o-unico-necromante-2.png",
    title: "Eu sou o único necromante",
    tags: ["novo capítulo"],
    timeago: useNow(),
    url: "/"
}]