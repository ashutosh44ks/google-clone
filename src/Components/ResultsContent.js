import { useState } from "react";
import "./Stylesheets/ResultsContent.css";
const ResultsContent = ({ srch }) => {
  const [srchData, setSrchData] = useState([1,2]);
  return (
    <div className="rcontent-main">
      <div>About 19,30,00,000 results (0.46 seconds) </div>
      {srchData.map((item) => (
        <div>
          <h2>Site Name for {srch} result</h2>
          <p>
            Content PreviewContent PreviewContent PreviewContent PreviewContent
            PreviewContent PreviewContent PreviewContent PreviewContent
            PreviewContent PreviewContent PreviewContent PreviewContent
            PreviewContent PreviewContent PreviewContent PreviewContent
            PreviewContent PreviewContent PreviewContent PreviewContent
            PreviewContent PreviewContent PreviewContent PreviewContent
            PreviewContent PreviewContent PreviewContent PreviewContent
            PreviewContent PreviewContent PreviewContent PreviewContent
          </p>
        </div>
      ))}
    </div>
  );
};

export default ResultsContent;
