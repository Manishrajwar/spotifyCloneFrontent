function IconText({icon , text , active , setActive}){
    return (
        <div  className="flex gap-3 items-center">
          <p className={`font-bold  text-2xl cursor-pointer  ${text.includes('Liked')?('bg-purple-500 z-0 px-1 py-1 rounded-sm'):('')} ${text.includes('Create')?('bg-white text-black z-0 px-1 py-1 rounded-sm'):('')}`} >{icon}</p>
          <p className={`text-lg ${(active=== text)?('text-white'):('text-gray-400')} font-semibold cursor-pointer hover:text-white duration-100 transition-all`} onClick={()=>setActive(text)} > {text}</p>
        </div>
    )
}

export default IconText;