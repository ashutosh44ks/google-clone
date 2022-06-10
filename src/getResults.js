import axios from "axios";
function getResults(srch, page) {
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
  return axios.request(options);
}
export default getResults;
