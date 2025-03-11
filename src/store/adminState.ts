import { atom } from "recoil";

export const isAdminLoggedInState = atom<boolean>({
    key: 'isAdminLoggedInState',
    default: false,
});