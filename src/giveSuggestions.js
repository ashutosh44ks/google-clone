import axios from "axios";
function giveSuggestions(srch) {
  const options = {
    method: "GET",
    url: `${process.env.REACT_APP_BASE_API_DOMAIN}/api/spelling/AutoComplete`,
    params: { text: srch },
    headers: {
      "X-RapidAPI-Host": process.env.REACT_APP_BASE_API_HOST,
      "X-RapidAPI-Key": process.env.REACT_APP_BASE_API_KEY,
    },
  };
  console.log("giveSuggestions was called");
  return axios.request(options);
}
export default giveSuggestions;
