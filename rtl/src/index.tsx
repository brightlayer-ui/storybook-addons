import {DIRECTION_STORAGE_ID} from "./constants";

export * from "./constants";

localStorage.setItem(DIRECTION_STORAGE_ID, 'ltr');
export const getDirection = () => localStorage.getItem(DIRECTION_STORAGE_ID);

