"use client";
import Sidebar from "./sidebar/page";
import ActionFrame from "./action-frame/page";
import Overlay from "./overlay/page";
import {
  OverlayContext,
  OverlayDispatchContext,
} from "./contexts/overlay/context";
import { useReducer } from "react";
import {
  initialOverlayState,
  overlayReducer,
} from "./contexts/overlay/reducer";

export default function Home() {
  const [overlayState, dispatch] = useReducer(
    overlayReducer,
    initialOverlayState
  );
  return (
    <main className="relative flex h-full w-full flex-row items-center justify-between">
      <OverlayContext.Provider value={overlayState}>
        <OverlayDispatchContext.Provider value={dispatch}>
          <Overlay />
          <div
            id="app-view"
            className="flex h-screen w-full flex-row items-center justify-between"
          >
            <Sidebar />
            <ActionFrame />
          </div>
        </OverlayDispatchContext.Provider>
      </OverlayContext.Provider>
    </main>
  );
}
