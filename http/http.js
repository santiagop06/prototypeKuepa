import axios from "axios";


const authHeaders= ()=> {
    const userToken = "1234";
    const clientToken = "1234";
  
    return {
      "Access-Token": userToken,
      client: clientToken,
      "token-type": "Bearer",
      "Content-Type": "application/json",
      Accept: "*/*",
    };
  }


export async const handleResponse= (response) => {
    return response;
}

export const get = ()=>{
    return axios
    .get(getBaseUrl() + url, { data: {}, headers: authHeaders() })
    .then(handleResponse);
}

export const post = (url, data) => {
    return axios.post(getBaseUrl() + url, data).then(handleResponse);
}

export const put =(url, data)=> {
    return axios
      .put(getBaseUrl() + url, data, { headers: authHeaders() })
      .then(handleResponse);
  }