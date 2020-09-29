import React, { useState, useCallback } from "react";
import { IconButton } from "@storybook/components";
import { API } from "@storybook/api";
import { DIR_CHANGE_EVENT, DIRECTION_STORAGE_ID } from "./constants";
import { Direction } from "./types";
import { LTR } from "./icons/LTR";
import { RTL } from "./icons/RTL";

localStorage.setItem(DIRECTION_STORAGE_ID, "ltr");

type DirButtonProps = {
  api: API;
};

const emitChannelEvent = (api: API, dir: Direction): void => {
  api.getChannel().emit(DIR_CHANGE_EVENT, dir);
};

// Searches for storybook canvas iframe, and returns the element if it exists.
const getCanvasDocument = (): HTMLDocument => {
  const iframe = document.getElementById(
    "storybook-preview-iframe"
  ) as HTMLIFrameElement;
  return iframe.contentDocument || iframe.contentWindow.document;
};

// This is used for bidirectionality in angular projects.
const updateBodyDir = (dir: Direction): void => {
  const innerDoc = getCanvasDocument();
  if (innerDoc) {
    innerDoc.body.setAttribute("dir", dir);
  }
};

// This is used for angular overlay direction toggling.
const updateOverlayDir = (dir: Direction): void => {
  const innerDoc = getCanvasDocument();
  if (innerDoc) {
    const overlayContainer = innerDoc.getElementsByClassName(
      "cdk-overlay-pane"
    )[0];
    if (overlayContainer) {
      overlayContainer.setAttribute("dir", dir);
    }
  }
};

const getDirectionInvert = (dir: Direction): Direction =>
  dir === "rtl" ? "ltr" : "rtl";

export const DirButton: React.FC<DirButtonProps> = (props): JSX.Element => {
  const { api } = props;
  const [direction, setDirection] = useState<Direction>(
    localStorage.getItem(DIRECTION_STORAGE_ID) as Direction
  );

  const toggleDirection = useCallback(() => {
    setDirection((dir: Direction) => {
      const newDir = getDirectionInvert(dir);
      updateBodyDir(newDir);
      updateOverlayDir(newDir);
      localStorage.setItem(DIRECTION_STORAGE_ID, newDir);
      emitChannelEvent(api, newDir);
      return newDir;
    });
  }, [api]);

  return (
    <IconButton
      style={{ borderBottom: direction === "rtl" ? "solid 3px #eef0f0" : "" }}
      title={
        direction === "ltr"
          ? "Toggle Right-to-Left Direction"
          : "Toggle Left-to-Right Direction"
      }
      onClick={toggleDirection}
    >
      {direction === "ltr" ? <LTR /> : <RTL />}
    </IconButton>
  );
};

export default DirButton;
