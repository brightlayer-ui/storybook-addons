import {DIRECTION_STORAGE_ID} from "./constants";

export * from "./constants";

export const getDirection = () => localStorage.getItem(DIRECTION_STORAGE_ID) || 'ltr';

