import { useContext } from "react";
import {
  OverlayContext,
  OverlayDispatchContext,
} from "../contexts/overlay/context";
import { OPEN_OVERLAY } from "../contexts/overlay/action.type";
import Compose from "../compose/page";
import { CitationGroupsConstant } from "../shared/constants/sidebar.constants";

export default function Sidebar() {
  const overlayDispatch = useContext(OverlayDispatchContext);

  const actions = [
    {
      id: "compose",
      label: "Compose",
      action: function () {
        overlayDispatch({
          type: OPEN_OVERLAY,
          payload: { isOpen: true, children: <Compose /> },
        });
      },
    },
    {
      id: "import",
      label: "Import",
      action: () => {},
    },
  ];
  const citationGroups = CitationGroupsConstant;

  return (
    <nav className="w-240px h-full p-2 text-md font-medium bg-nav-bg">
      <div className="mb-4">
        <div className="m-0.5 p-0.5 text-nav-item-text ">
          Citation Generator
        </div>
      </div>
      <div className="mb-4">
        {actions.map((el) => (
          <div
            key={el.id}
            className="m-0.5 p-0.5 text-nav-item-text text-sm opacity-60 hover:cursor-pointer hover:bg-nav-item-active/[0.04]"
            onClick={() => el.action()}
          >
            {el.label}
          </div>
        ))}
      </div>
      <div>
        {citationGroups.map((el) => (
          <div
            key={el.id}
            className="m-0.5 p-0.5 text-nav-item-text text-sm opacity-60 hover:cursor-pointer hover:bg-nav-item-active/[0.04]"
          >
            {el.label}
          </div>
        ))}
      </div>
    </nav>
  );
}
