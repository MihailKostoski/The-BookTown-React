import axios from "axios";

const baseUrl = "https://hapi-books.p.rapidapi.com";
const options = {
  headers: {
    "X-RapidAPI-Key": "33cd884451msh63e77e0b0e4e5eep1e2adbjsnd4f06e3df30c",
    "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
  },
};

export const fetchApi = async (url) => {
  const { data } = await axios.get(`${baseUrl}/${url}`, options);

  return data;
};
