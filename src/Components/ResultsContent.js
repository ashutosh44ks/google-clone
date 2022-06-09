import axios from "axios";
import { ReactComponent as SearchIcon } from "./Stylesheets/search.svg";
import { useState, useEffect } from "react";
import RData from "./RData";
import "./Stylesheets/ResultsContent.css";
const ResultsContent = ({ srch, page, setPage }) => {
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
      <div className="rcontent-related-head">Related searches</div>
      <div className="rcontent-related">
        {relatedSrch.map((item) => (
          <div key={item} className="related-srch-bubble">
            <SearchIcon className="search-icon-related-srch" />
            {item.slice(3, item.length - 4)}
          </div>
        ))}
      </div>
      <div className="pagination">
        <div>Goooooogle</div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <span className="cursor-pointer link" style={{marginRight: "8px"}} onClick={(e) => setPage(e.target.innerText)}>{item}</span>
        ))}
      </div>
    </div>
  );
};

export default ResultsContent;
