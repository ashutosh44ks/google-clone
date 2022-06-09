import { ReactComponent as SearchIcon } from "./Stylesheets/search.svg";
import { ReactComponent as MoreIcon } from "./Stylesheets/more.svg";
import "./Stylesheets/RelatedContent.css";

const RelatedContent = ({ relatedSrch }) => {
  return (
    <>
      <div className="rcontent-related-head flex-align-center">
        Related searches <MoreIcon className="tab-icon" />
      </div>
      <div className="rcontent-related">
        {relatedSrch.map((item) => (
          <div key={item} className="related-srch-bubble">
            <SearchIcon className="search-icon-related-srch" />
            {item.slice(3, item.length - 4)}
          </div>
        ))}
      </div>
    </>
  );
};

export default RelatedContent;
