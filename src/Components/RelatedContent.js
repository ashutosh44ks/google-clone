import { ReactComponent as MoreIcon } from "./Stylesheets/more.svg";
import "./Stylesheets/RelatedContent.css";
import RelatedContentItem from "./RelatedContentItem";

const RelatedContent = ({ relatedSrch, setSrch }) => {
  return (
    <>
      <div className="rcontent-related-head flex-align-center">
        Related searches
        <MoreIcon className="tab-icon" style={{ marginLeft: "10px" }} />
      </div>
      <div className="rcontent-related">
        {relatedSrch.map((item) => (
          <RelatedContentItem item={item} setSrch={setSrch} />
        ))}
      </div>
    </>
  );
};

export default RelatedContent;
