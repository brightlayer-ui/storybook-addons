/**
 Copyright (c) 2021-present, Eaton

 All rights reserved.

 This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
 **/
import { DIRECTION_STORAGE_ID } from "./constants";

export * from "./constants";

localStorage.setItem(DIRECTION_STORAGE_ID, "ltr");
export const getDirection = (): string =>
  localStorage.getItem(DIRECTION_STORAGE_ID);
