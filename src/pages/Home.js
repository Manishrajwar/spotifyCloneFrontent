
import PlaylistView from "../Components/PlaylistView";
import Navbar from "../Components/Navbar";
import Slidebar from "../Components/Slidebar";
import cardData from "../store";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";


function Home() {

    const {active , setActive , cookie , setCookie , removeCookie} = useContext(AppContext);
  return (
    <div className="w-full flex relative overflow-x-hidden ">
      {/* left part */}
      <Slidebar cookie={cookie}  active={active} setActive={setActive} />


      {/* right part music content */}
      <div className="w-screen h-full bg-app-black items-center ">
          
          {/* navbar stick  */}
           <Navbar  />

          {/* second part */}
          <div className="pl-[23%] pt-[100px] pr-[3rem] w-screen h-full mb-16 flex flex-col gap-9">
             <PlaylistView playlistTitle={'Focus'} cardData={cardData} />
             <PlaylistView  playlistTitle={'Manish'} cardData={cardData} />
             <PlaylistView playlistTitle={'Dabang3'} cardData={cardData} />
          </div>

      </div>
    </div>
  );
}

export default Home;
