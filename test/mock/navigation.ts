export type URL = {
    to: string;
    name: string;
    icon?: string;
}

export const pages: Array<URL> = [{
    to: "/novels",
    name: "novels",
}, {
    to: "/categories",
    name: "categorias",
}]