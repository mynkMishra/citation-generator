import { useEffect, useState } from "react";
import "./style.css";
import { SourceOptionsConstant } from "../shared/constants/compose.constant";
import { SourceOptionType } from "../shared/types/compose.type";

export default function Compose() {
  const sourceOptions = SourceOptionsConstant;
  const [source, setSource] = useState<SourceOptionType>();
  const [isSourceOptionsOpen, setIsSourceOptionsOpen] = useState(false);
  const onSourceSelect = function (_source: SourceOptionType): void {
    setSource(_source);
    setIsSourceOptionsOpen(false);
  };

  return (
    <div id="search-container" className="h-full">
      <div id="search-input-container" className="p-2">
        <input
          className="w-full text-md outline-none placeholder:text-nav-item-text/[0.4]"
          type="text"
          name="search"
          id="search"
          placeholder="Search Website, Book, Journal, Video, Article, ..."
          onClick={(ev) => {
            ev.stopPropagation();
          }}
        />
      </div>
      <div id="search-options-container" className="flex flex-row p-2">
        <div className="search-option">
          <div
            className="search-pill"
            onClick={(ev) => {
              ev.stopPropagation();
              setIsSourceOptionsOpen(!isSourceOptionsOpen);
            }}
          >
            {!source ? "Source" : source.label}
          </div>
          {isSourceOptionsOpen ? (
            <div id="source-option-list" className="option-list">
              {sourceOptions.map((el) => (
                <div
                  className="option-list-item"
                  key={el.id}
                  onClick={(ev) => {
                    ev.stopPropagation();
                    onSourceSelect(el);
                  }}
                >
                  {el.label}
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <div className="search-option">
          <div className="search-pill">Style</div>
        </div>
      </div>
    </div>
  );
}
