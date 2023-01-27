import axios from "axios";

const baseUrl = 'https://hapi-books.p.rapidapi.com'
const options = {
 
  
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_URL ,
      'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
    }
};
  

export const fetchApi = async (url) => {
    const { data } = await axios.get(`${baseUrl}/${url}`, options)
    

    return data
}
