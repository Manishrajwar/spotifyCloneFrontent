import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import HoverText from "./HoverText";

function Navbar({btn1 , btn2 , removeCookie}){
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
                    btn1?(  <Link to="/signup"> <button onClick={()=>{
                      if(btn1.includes('Logout'))
                      removeCookie('token')
                    }} className="cursor-pointer hover:text-red-600 duration-150">{btn1}</button> </Link>):('')
                  }
                   {
                    btn2?(<Link to="/login"> <button className="bg-white text-black px-6 rounded-2xl py-2 font-bold cursor-pointer hover:scale-x-105 transition-all duration-100">{btn2}</button> </Link>):('')
                   }
                
                </div>
            </div>
          </nav>
    )
}

export default Navbar;