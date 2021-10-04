import { useEffect, useState } from "react";

import { addons } from "@storybook/addons";
import { DIR_CHANGE_EVENT, DIRECTION_STORAGE_ID } from "./constants";
import { Direction } from "./types";

/** Hook that returns the currently active `Direction` and re-emits when it changes */
export const useDirection = (): Direction => {
  const [direction, setDirection] = useState<Direction>(
    localStorage.getItem(DIRECTION_STORAGE_ID) as Direction
  );
  useEffect(() => {
    const channel = addons.getChannel();
    channel.addListener(DIR_CHANGE_EVENT, setDirection);
    return (): void => channel.removeListener(DIR_CHANGE_EVENT, setDirection);
  }, [setDirection]);

  return direction;
};
