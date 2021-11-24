import axios from "axios";

export const getProducts = () => {
    return axios.get("https://ezbrowser.herokuapp.com/ezpz/v1/crawler/asus");
  };
  