import Navbar from "../Components/Navbar";
import Slidebar from "../Components/Slidebar";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { useState } from "react";


function Search() {
 
 const [searchData , setSearchData] = useState();


    const {active , setActive , cookie , setCookie , removeCookie} = useContext(AppContext);
  return (
    <div className="w-full flex relative overflow-x-hidden ">
      {/* left part */}
      <Slidebar cookie={cookie}  active={active} setActive={setActive} />


      {/* right part music content */}
      <div className="w-screen h-screen bg-app-black items-center ">
          
          {/* navbar stick  */}
           <Navbar cookie={cookie} setCookie={setCookie}  removeCookie={removeCookie} />

          {/* second part */}
          <div className="pl-[23%] pt-[100px] pr-[3rem] w-screen h-[calc(100%-90px)] mb-16 flex flex-col gap-9">
               
               <input type="text" className="w-1/2 h-[40px] rounded-full mx-auto mt-10 text-black font-semibold pl-5" placeholder="Search"  onChange={(event)=>setSearchData(event.target.value)} />
                 
          </div>

      </div>
    </div>
  );
}

export default Search;
