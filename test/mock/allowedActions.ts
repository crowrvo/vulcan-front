import type { URL } from "./navigation";

export type permissionLevels = "user" | "admin" | "author" | "all";
export type actions = URL & {
    icon: string;
    permissions: permissionLevels;
}

export const actionsList: Array<actions> = [{
    to: "/profile",
    icon: "uil:user",
    name: "perfil",
    permissions: "all"
}]