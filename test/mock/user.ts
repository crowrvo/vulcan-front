import type { permissionLevels } from "./allowedActions";

export type UserInfoDTO = {
    id: string;
    image: string;
    name: string;
    email: string;
    permissions: permissionLevels
}
export type UserBasicInfo = Omit<UserInfoDTO, "id"> & {
    email?: string;
}

export const user:UserBasicInfo = {
    name: "Devzinho",
    image: "/assets/images/placeholder/user.jpg",
    email: "",
    permissions: "user"
}