import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f1c9ba7aea8b48eda142678657977d49",
  },
});