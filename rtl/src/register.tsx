import * as React from "react";
import addons, { types } from "@storybook/addons";
import DirButton from "./Tool";
import { ADDON_ID, PARAM_KEY } from "./constants";

const BUTTON_ID = `${ADDON_ID}/button`;

addons.register(ADDON_ID, (api: any) => {
  addons.add(BUTTON_ID, {
    render: () => <DirButton api={api} />,
    title: "Set page direction",
    type: types.TOOL,
    match: ({ viewMode }: any) => viewMode === "story" || viewMode === "docs",
    paramKey: PARAM_KEY,
  });
});
