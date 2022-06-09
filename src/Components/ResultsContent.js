import axios from "axios";
import { useState, useEffect } from "react";
import RData from "./RData";
import RelatedContent from "./RelatedContent";
import "./Stylesheets/ResultsContent.css";
const ResultsContent = ({ srch, page }) => {
  const [srchData, setSrchData] = useState([]);
  const [relatedSrch, setRelatedSrch] = useState([]);

  const options = {
    method: "GET",
    url: "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI",
    params: {
      q: srch,
      pageNumber: page,
      pageSize: "10",
      autoCorrect: "true",
    },
    headers: {
      "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
      "X-RapidAPI-Key": "ccea0af5f9msh9ee007c92712d24p129e6bjsnf00c25d283ed",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setSrchData(response.data.value);
        setRelatedSrch(response.data.relatedSearch.slice(0, 8));
      })
      .catch(function (error) {
        alert(
          error.request.status === 429
            ? "Sorry, API only supports 100 requests per day."
            : `Error code ${error.request.status}`
        );
        console.error(error);
      });
    console.log(relatedSrch);
  }, [options]);
  return (
    <div className="rcontent-main">
      <div className="rfetch-info">
        About 19,30,00,000 results (0.46 seconds)
      </div>
      {srchData.map((item) => (
        <RData
          key={item.id}
          url={item.url}
          title={item.title}
          desc={item.description}
        />
      ))}
      <RelatedContent relatedSrch={relatedSrch} />
    </div>
  );
};

export default ResultsContent;
