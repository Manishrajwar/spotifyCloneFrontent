import { Icon } from "@iconify/react";

function Card({ title, description  , imgUrl}) {
  
  let finalDescription = description.length> 30 ? description.slice(0, 40) : description;

return (
  <div className="w-[22%] cursor-pointer pt-3 max-h-[300px] h-[300px] flex flex-col gap-3 pb-3 bg-black pl-5 pr-5 bg-opacity-30 hover:bg-[#232222] transition-all duration-150 rounded-md group ">
    <div className="w-full relative">
      <img src={imgUrl} className="w-full h-[180px] rounded-lg" />
      <Icon
        icon="carbon:play-filled"
        color="green"
        className="absolute opacity-0 text-[5rem] right-0 bottom-[-1rem] group-hover:opacity-100 trasition-opacity duration-200 group-hover:bottom-0"
      />
    </div>

    <p className="text-white font-semibold text-lg">{title}</p>
    <p className="text-gray-400 "> {
        description.length>30 ?(`${finalDescription}...`):(`${description}`)
    } </p>
  </div>
);
}

export default Card;
