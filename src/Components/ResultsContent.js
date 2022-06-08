import axios from "axios";
import { useState, useEffect } from "react";
import RData from "./RData";
import "./Stylesheets/ResultsContent.css";
const ResultsContent = ({ srch }) => {
  const [srchData, setSrchData] = useState([]);
  const [relatedSrch, setRelatedSrch] = useState([]);
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setSrchData(response.data.value);
        setRelatedSrch(response.data.relatedSearch);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  const options = {
    method: "GET",
    url: "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI",
    params: {
      // q: srch,
      q: "Johhny Depp",
      pageNumber: "1",
      pageSize: "10",
      autoCorrect: "true",
    },
    headers: {
      "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
      "X-RapidAPI-Key": "ccea0af5f9msh9ee007c92712d24p129e6bjsnf00c25d283ed",
    },
  };
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
    </div>
  );
};

export default ResultsContent;
