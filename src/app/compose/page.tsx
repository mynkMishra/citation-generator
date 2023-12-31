import { useState } from "react";
import "./style.css";
import { SourceOptionsConstant } from "../shared/constants/compose.constant";
import { SourceOptionType } from "../shared/types/compose.type";
import debounce from "../shared/utils/debounce";
import { getJounrals } from "../services/journal.service";
import { getBooks } from "../services/book.service";
import { getArticles } from "../services/article.service";

type SearchResultsType = {
  bookResults: Array<any>;
  journalResults: Array<any>;
  articleResults: Array<any>;
};
export default function Compose() {
  const sourceOptions = SourceOptionsConstant;
  const [source, setSource] = useState<SourceOptionType>();
  const [isSourceOptionsOpen, setIsSourceOptionsOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResultsType>();
  const onSourceSelect = (_source: SourceOptionType): void => {
    setSource(_source);
    setIsSourceOptionsOpen(false);
  };

  const onSearch = debounce(async (searchInput: string): Promise<void> => {
    const results = await Promise.allSettled<Array<any>>([
      getJounrals(searchInput),
      getBooks(searchInput),
      getArticles(searchInput),
    ]);
    setSearchResults({
      journalResults: results[0].status === "fulfilled" ? results[0].value : [],
      bookResults: results[1].status === "fulfilled" ? results[1].value : [],
      articleResults: results[2].status === "fulfilled" ? results[2].value : [],
    });
  });

  return (
    <div id="search-container" className="h-full">
      <div id="search-input-container" className="p-2">
        <input
          className="w-full text-md outline-none placeholder:text-nav-item-text/[0.4]"
          type="text"
          name="search"
          id="search"
          placeholder="Search Website, Book, Journal, Video, Article, ..."
          onChange={(ev) => onSearch(ev.target.value)}
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
      <div id="search-results-container" className="h-full">
        <div id="search-results-content" className="h-full overflow-y-scroll">
          {searchResults?.bookResults.length ? (
            <div id="search-category" className="mb-18px">
              <div
                id="search-category-label"
                className="flex pl-14px pr-14px mt-6px mb-8px text-xs font-semibold"
              >
                Book
              </div>
              <div id="category-results-container">
                {searchResults?.bookResults.slice(0, 10).map((el) => (
                  <div
                    id="category-result"
                    className="pl-1 pt-8px pb-8px ml-1 mr-1 text-sm rounded-4px hover:cursor-pointer"
                  >
                    <div className="ml-2 font-medium"> {el.title}</div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
          {searchResults?.journalResults.length ? (
            <div id="search-category" className="mb-18px">
              <div
                id="search-category-label"
                className="flex pl-14px pr-14px mt-6px mb-8px text-xs font-semibold"
              >
                Journal
              </div>
              <div id="category-results-container">
                {searchResults?.journalResults.slice(0, 10).map((el) => (
                  <div
                    id="category-result"
                    className="pl-1 pt-8px pb-8px ml-1 mr-1 text-sm rounded-4px hover:cursor-pointer"
                  >
                    <div className="ml-2 font-medium"> {el.title}</div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
          {searchResults?.articleResults.length ? (
            <div id="search-category" className="mb-18px">
              <div
                id="search-category-label"
                className="flex pl-14px pr-14px mt-6px mb-8px text-xs font-semibold"
              >
                Article
              </div>
              <div id="category-results-container">
                {searchResults?.articleResults.slice(0, 10).map((el) => (
                  <div
                    id="category-result"
                    className="pl-1 pt-8px pb-8px ml-1 mr-1 text-sm rounded-4px hover:cursor-pointer"
                  >
                    <div className="ml-2 font-medium"> {el.title}</div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
