import { backendUrl } from "./config";

const getToken = () => {
    const accessToken = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, "$1");
    return accessToken;
  };
  

export const makeUnauthenticatedPOSTRequest =async (route , body)=>{
    try{
        const response = await fetch(backendUrl + route , {method:"POST" , 
    headers:{
        "content-type":"application/json",
    },
    // the body will send like this to backend
    body:JSON.stringify(body),
});

const formattedResponse = await response.json();
return formattedResponse;
    } catch(error){
  console.log(`error in fetch api `,error);
    }
}
const token = getToken();

export const makeAuthenticatedPOSTRequest =async (route , body)=>{
    try{
        const response = await fetch(backendUrl + route , {method:"POST" , 
    headers:{
        "content-type":"application/json",
        "Authorization":`Bearer ${token}`
    },
    // the body will send like this to backend
    body:JSON.stringify(body),
});

const formattedResponse = await response.json();
return formattedResponse;
    } catch(error){
  console.log(`error in fetch api `,error);
    }
}




