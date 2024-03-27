import type { URL } from "./navigation";

export type sponsorsBanner = URL & {
    image: string;
    alt?: string;
    sponsor: string;
    description: string;
}

export type chapterURL = {
    to: string;
    chapterNumber: number;
}

export type novelDetails = {
    title: string;
    image: string;
    description: string;
    visibleAsTopRating?: boolean;
    novelUrl: string;
    chaptersCounter?: number;
    rating: 0 | 1 | 2 | 3 | 4 | 5;
    categories: Array<URL>,
    bannerUrl?: string,
    views: number,
    publisher: URL,
    nationality?: 'national' | 'foreign'
}

export const sponsorsBannerMock: Array<sponsorsBanner> = [{
    name: "Eu sou o único necromancete",
    image: "/assets/images/background/capa-vulcan-eu-sou-o-unico-necromante-2.png",
    to: "/",
    sponsor: "Master",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}, {
    name: "A guerra do milênio",
    image: "/assets/images/background/capa-vulcan-eu-sou-o-unico-necromante-2.png",
    to: "/",
    sponsor: "Dragon",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}]

export const novels: Array<novelDetails> = [{
    title: "Eu sou o único necromante",
    image: "/assets/images/background/capa-vulcan-eu-sou-o-unico-necromante-2.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore magna aliqua.",
    visibleAsTopRating: true,
    novelUrl: "/",
    chaptersCounter: 21,
    rating: 5,
    categories: [{ name: "Ação", to: "/categories/action" }, { name: "Necromância", to: "/categories/necromance" }],
    bannerUrl: "",
    publisher: { name: "Sxka", to: "" },
    nationality: 'national',
    views: 128281
}, {
    title: "The Great Gatsby",
    image: "/assets/images/background/capa-vulcan-eu-sou-o-unico-necromante-2.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    visibleAsTopRating: true,
    novelUrl: "/",
    chaptersCounter: 112,
    rating: 3,
    categories: [{ name: "Ação", to: "/categories/action" }, { name: "Comedia", to: "/categories/comedy" }],
    publisher: { name: "One", to: "" },
    nationality: 'foreign',
    views: 1737828
}, {
    title: "Eu sou o único necromante",
    image: "/assets/images/background/capa-vulcan-eu-sou-o-unico-necromante-2.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    visibleAsTopRating: true,
    novelUrl: "/",
    chaptersCounter: 31,
    rating: 4,
    categories: [{ name: "Musical", to: "/categories/musical" }],
    publisher: { name: "Ssaa", to: "" },
    nationality: 'national',
    views: 72729
}, {
    title: "The Great Gatsby",
    image: "/assets/images/background/capa-vulcan-eu-sou-o-unico-necromante-2.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    nationality: 'foreign',
    visibleAsTopRating: false,
    novelUrl: "/",
    chaptersCounter: 32,
    rating: 3,
    categories: [{ name: "Ação", to: "/categories/action" }, { name: "Necromância", to: "/categories/necromance" }],
    publisher: { name: "Szi", to: "" },
    views: 727392
}, {
    title: "Zhe Good Gatsby",
    image: "/assets/images/background/capa-vulcan-eu-sou-o-unico-necromante-2.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    visibleAsTopRating: true,
    novelUrl: "/",
    chaptersCounter: 122,
    rating: 4,
    categories: [{ name: "Ação", to: "/categories/action" }, { name: "Comedia", to: "/categories/comedy" }],
    publisher: { name: "One", to: "" },
    nationality: 'foreign',
    views: 288292
}];

export type NovelCollection = Pick<novelDetails, "title" | "publisher" | "novelUrl" | "categories" | "image">;

export const mockAuthors: Array<string> = ['One', 'Murata', 'Genso', 'Yusuke', 'John Carter', 'Hanabi'];
export const mockScanlators: Array<string> = ['Master', 'Next', 'CoffeSx', 'Otom'];
export const mockCategories: Array<string> = ['ação', 'aventura', 'necromância', 'corrida'];
export const mockPublishers: Array<string> = ['Master', 'Gibblin'];
export const topNovels: Array<novelDetails> = novels.filter(novel => novel.visibleAsTopRating);