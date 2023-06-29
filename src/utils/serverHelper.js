import { backendUrl } from "./config";

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



