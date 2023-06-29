
function Continue({title , logo}){
    return (
        <div className={`flex  ${title.includes(`google`)?('bg-white text-black'):('bg-[#405A93] text-white')}  gap-3 py-2 w-[25rem]  rounded-3xl justify-center items-center border-2 border-black cursor-pointer `}>
            {logo}
           {title}
        </div>
    )

}

export default Continue;