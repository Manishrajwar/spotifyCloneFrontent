import { Icon } from "@iconify/react";
import IconText from "../Components/IconText";
import { GoHome } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { VscLibrary } from "react-icons/vsc";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { MdLanguage } from "react-icons/md";
import { Link} from "react-router-dom";

function Slidebar({active , setActive}){
    return (
        <div className="w-[22%] overflow-hidden fixed flex flex-col  gap-10 bg-black text-white h-screen ">
        {/*  for logo */}
        <div className="flex  items-center gap-2 pl-10 mt-6">
          <Icon icon="bi:spotify" width="65px" className="" />
          <p className="text-3xl">Spotify</p>
        </div>
        {/* icons with text */}
        <div className="flex flex-col gap-4 pl-10">
          <Link to="/home">
            {" "}
            <IconText
              icon={<GoHome />}
              text={"Home"}
              active={active}
              setActive={setActive}
            />
          </Link>
          <IconText
            icon={<FiSearch />}
            text={"Search"}
            active={active}
            setActive={setActive}
          />
          <IconText
            icon={<VscLibrary />}
            text={"Your Library"}
            active={active}
            setActive={setActive}
          />

          <div className="flex flex-col gap-6 mt-14">
            <IconText
              icon={<AiOutlinePlus />}
              text={"Create Playlist"}
              active={active}
              setActive={setActive}
            />
            <IconText
              icon={<AiOutlineHeart />}
              text={"Liked Songs"}
              active={active}
              setActive={setActive}
            />
          </div>
        </div>

        <div className="flex gap-2 items-center ml-8 absolute bottom-0 mb-6 border-2 border-gray-400 hover:border-white duration-75 hover:scale-105 rounded-2xl px-3 cursor-pointer py-1">
           <p className="text-xl"> <MdLanguage /></p>
            <p className="text-lg">English</p>
        </div>
      </div>

    )
}

export default Slidebar;