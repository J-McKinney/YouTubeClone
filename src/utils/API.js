import axios from "axios";
require("dotenv").config();

const BASEURL =
  "https://cors.bridged.cc/https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=";
const APIKEY = "&key=" + process.env.REACT_APP_APIKEY;

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  search: function (query) {
    return axios.get(BASEURL + query + APIKEY);
  },
};
