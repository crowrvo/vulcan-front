export type chapterURL = {
    to: string;
    chapterNumber: number;
}

export type novelDetails = {
    title: string;
    image: string;
    description: string;
    visibleAsTopRating?: boolean;
    lastEnumerateChaptersUploaded?: Array<chapterURL>
    novelUrl: string;
}

export const novels: Array<novelDetails> = [{
    title: "Eu sou o único necromante",
    image: "/assets/images/background/capa-vulcan-eu-sou-o-unico-necromante-2.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    visibleAsTopRating: true,
    lastEnumerateChaptersUploaded: [{
        to: "/",
        chapterNumber: 12.4
    }, {
        to: "/",
        chapterNumber: 13.4
    }, {
        to: "/",
        chapterNumber: 13
    }],
    novelUrl: "/"
}, {
    title: "The Great Gatsby",
    image: "/assets/images/background/capa-vulcan-eu-sou-o-unico-necromante-2.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    visibleAsTopRating: true,
    lastEnumerateChaptersUploaded: [{
        to: "/",
        chapterNumber: 23.1
    }],
    novelUrl: "/"
}, {
    title: "Eu sou o único necromante",
    image: "/assets/images/background/capa-vulcan-eu-sou-o-unico-necromante-2.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    visibleAsTopRating: true,
    lastEnumerateChaptersUploaded: [{
        to: "/",
        chapterNumber: 2
    }],
    novelUrl: "/"
}, {
    title: "The Great Gatsby",
    image: "/assets/images/background/capa-vulcan-eu-sou-o-unico-necromante-2.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    visibleAsTopRating: false,
    lastEnumerateChaptersUploaded: [{
        to: "/",
        chapterNumber: 23
    }, {
        to: "/",
        chapterNumber: 24
    }, {
        to: "/",
        chapterNumber: 25
    }],
    novelUrl: "/"
}];

export const topNovels:Array<novelDetails> = novels.filter(novel => novel.visibleAsTopRating);