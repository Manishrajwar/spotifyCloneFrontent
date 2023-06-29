import Card from "./Card";

function PlaylistView({ playlistTitle, cardData }) {
   
  return (
    <div className="text-white">
      <p className="font-semibold text-3xl hover:underline cursor-pointer inline">
        {playlistTitle}
      </p>

      <div className="w-full mt-4 pl-4 flex flex-wrap gap-6">
        {cardData.map((item, index) => {
          return (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              imgUrl={item.imgUrl}
            />
          );
        })}

      </div>
    </div>
  );
}
export default PlaylistView;

