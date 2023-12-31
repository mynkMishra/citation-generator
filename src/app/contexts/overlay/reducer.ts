import { OPEN_OVERLAY } from "./action.type";

export type OverlayState = {
  isOpen: boolean;
  children: React.ReactNode | null;
};

export const initialOverlayState: OverlayState = {
  isOpen: false,
  children: null,
};

export function overlayReducer(
  state: OverlayState,
  action: { type: string; payload: any }
): OverlayState {
  switch (action.type) {
    case OPEN_OVERLAY:
      return {
        ...state,
        isOpen: action.payload.isOpen,
        children: action.payload.children,
      };
    default:
      return initialOverlayState;
  }
}
