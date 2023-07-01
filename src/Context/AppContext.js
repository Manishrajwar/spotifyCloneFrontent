import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useCookies } from "react-cookie";

export const AppContext = createContext();

export default function AppContextProvider({children}){
    

   const [active, setActive] = useState('');
   
   useEffect(()=>{
       if(sessionStorage.getItem('active') !== null){
        let storedData =  sessionStorage.getItem('active');
      let activeData = JSON.parse(storedData);
      setActive(activeData);
    }
    else{
       setActive('Home')
    }
   },[]);


   const [cookie , setCookie , removeCookie] = useCookies(["token"]);





    const value ={

 active , 
 setActive ,
 cookie , 
 setCookie ,
 removeCookie
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}