import axios from "axios";
function getResults(srch, page) {
  const options = {
    method: "GET",
    url: `${process.env.REACT_APP_BASE_API_DOMAIN}/api/Search/WebSearchAPI`,
    params: {
      q: srch,
      pageNumber: page,
      pageSize: "10",
      autoCorrect: "true",
    },
    headers: {
      "X-RapidAPI-Host": process.env.REACT_APP_BASE_API_HOST,
      "X-RapidAPI-Key": process.env.REACT_APP_BASE_API_KEY,
    },
  };
  console.log("getResults was called");
  return axios.request(options);
}
export default getResults;
