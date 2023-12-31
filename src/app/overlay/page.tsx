import React, { useContext } from "react";
import {
  OverlayContext,
  OverlayDispatchContext,
} from "../contexts/overlay/context";
import { CLOSE_OVERLAY } from "../contexts/overlay/action.type";
import "./style.css";

export default function Overlay() {
  const { isOpen, children } = useContext(OverlayContext);
  const overlayDispatch = useContext(OverlayDispatchContext);

  const close = () => {
    overlayDispatch({
      type: CLOSE_OVERLAY,
      payload: { isOpen: false, children: null },
    });
  };

  return (
    <>
      {isOpen ? (
        <div
          id="overlay-container"
          className="overlay-container"
          onClick={() => {
            close();
          }}
        >
          <div
            id="overlay-content"
            className="overlay-content"
            onClick={(ev) => {
              ev.stopPropagation();
            }}
          >
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
}
