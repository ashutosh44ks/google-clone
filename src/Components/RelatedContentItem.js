import { useEffect } from "react";
import { ReactComponent as SearchIcon } from "./Stylesheets/search.svg";

const RelatedContentItem = ({ item, setSrch }) => {
  return (
    <div
      key={item}
      className="related-srch-bubble cursor-pointer"
      onClick={(e) => {
        setSrch(e.target.innerText);
      }}
    >
      <SearchIcon className="search-icon-related-srch" />
      <span dangerouslySetInnerHTML={{__html: item}} />
    </div>
  );
};

export default RelatedContentItem;
