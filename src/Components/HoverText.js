function HoverText({text}){
    return (
        <div>
  <p className="text-gray-400 hover:text-white duration-100 transition-all hover:scale-105">{text}</p>
        </div>
    )
}

export default HoverText;