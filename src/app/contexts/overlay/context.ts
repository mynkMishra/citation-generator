import { Dispatch, createContext } from "react";
import { OverlayState } from "./reducer";

export const OverlayContext = createContext<OverlayState>({
  isOpen: false,
  children: null,
});

export const OverlayDispatchContext = createContext<
  Dispatch<{
    type: string;
    payload: any;
  }>
>(() => {});
