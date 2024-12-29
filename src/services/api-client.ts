import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1692657acda9465298b404fdbacaa670",
  },
});
