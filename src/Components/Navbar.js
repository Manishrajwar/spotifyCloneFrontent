import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import HoverText from "./HoverText";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";


function Navbar(){
 const {cookie , setCookie , removeCookie} = useContext(AppContext);

     return (
    <nav className="w-[calc(100%-22%)] z-20  h-[90px] bg-black bg-opacity-50 text-white flex  justify-between pr-4 top-0 fixed right-0">
            {/* two button < > */}
            <div className="flex gap-4 items-center pl-4 ">
         <p className="text-2xl bg-black rounded-full p-4  cursor-pointer  font-bold" > <AiOutlineLeft/></p>
         <p className="text-2xl bg-black rounded-full p-4 cursor-pointer font-bold " > <AiOutlineRight/></p>
          
            </div>

            <div className="flex gap-10 items-center ">
                {/* three words */}
                <div className="flex gap-10 cursor-pointer">
              <HoverText text={'Premium'} />
              <HoverText text={'Support'} />
              <HoverText text={'Download'} />
              
                </div>

                {/* straight sign */}
                <div className="h-[60%] w-[1px] bg-white "></div>

                {/* two button */}
                <div className="flex gap-10 items-center">

              {
                
              
                cookie.token?(
                    <>

                  <Link to="/login"> <button onClick={()=>{
                    removeCookie('token')
                  }} className="bg-white text-black px-6 rounded-3xl py-2 font-bold cursor-pointer hover:scale-x-105 transition-all duration-100">Logout</button> </Link>

                  <Link> <button onClick={()=>{
                    removeCookie('token')
                  }} className=" w-12 h-12 bg-white rounded-full text-black font-bold cursor-pointer hover:scale-105 duration-150">MR</button> </Link>
                    </>
                  ):(
                    <>
                    <Link to="/signup"> <button  className="cursor-pointer hover:text-red-600 duration-150">signup</button> </Link>

                    <Link to="/login"> <button className="bg-white text-black px-6 rounded-3xl py-2 font-bold cursor-pointer hover:scale-x-105 transition-all duration-100">login</button> </Link>
                    </>
                  )
                }
                
                
                </div>
            </div>
          </nav>
    )
}

export default Navbar;