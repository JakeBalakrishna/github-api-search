import React from "react";
import "@tamagui/core/reset.css";
import { TamaguiProvider } from "tamagui";
import config from "../tamagui.config";

import Home from "./components/Home";

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <Home />
    </TamaguiProvider>
  );
}
