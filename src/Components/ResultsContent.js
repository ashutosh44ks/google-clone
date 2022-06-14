import { useState, useEffect } from "react";
import RData from "./RData";
import RelatedContent from "./RelatedContent";
import getResults from "../getResults";
import "./Stylesheets/ResultsContent.css";
const ResultsContent = ({ srch, setSrch, page }) => {
  const [srchData, setSrchData] = useState([1, 2, 3, 4, 5]);
  const [relatedSrch, setRelatedSrch] = useState([]);

  useEffect(() => {
    getResults(srch, page)
      .then(function (response) {
        setSrchData(response.data.value);
        setRelatedSrch(response.data.relatedSearch.slice(0, 8));
      })
      .catch(function (error) {
        alert(
          error.request.status === 429
            ? "Sorry, API only supports 100 requests per day. - ResultsContainer"
            : `Error code ${error.request.status} - ResultsContainer`
        );
        console.error(error);
      });
  }, []);
  return (
    <div className="rcontent-main">
      <div className="rfetch-info">
        About {Math.floor(Math.random() * (100 - 20) + 20)} results ({(Math.random() * (5 - 1.5) + 1.5).toFixed(2)} seconds)
      </div>
      {srchData.map((item) => (
        <RData
          key={item.id}
          url={item.url}
          title={item.title}
          desc={item.description}
        />
      ))}

      {relatedSrch.length === 0 ? (
        ""
      ) : (
        <RelatedContent relatedSrch={relatedSrch} setSrch={setSrch} />
      )}
    </div>
  );
};

export default ResultsContent;
