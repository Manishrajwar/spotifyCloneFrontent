import { useState } from "react";
import Navbar from "../Components/Navbar";
import Slidebar from "../Components/Slidebar";
import { useContext } from "react";
import InputField from "../Components/InputField";
import { AppContext } from "../Context/AppContext";
import CloudinaryUpload from "../Components/CloudinaryUpload";
import { useEffect } from "react";
import {makeAuthenticatedPOSTRequest} from "../utils/serverHelper"
import { useNavigate } from "react-router-dom";

function UplaodSong() {
  const { active, setActive , cookie , setCookie , removeCookie } = useContext(AppContext);
    const navigate = useNavigate();
 const [formData , setFormData] = useState({
    name:"",
    thumbnail:"",
    track:""
})

    const [playlistUrl, setPlaylistUrl] = useState("");
    const [uploadedFileSongName, setUploadedFileSongName] = useState();



  //   ! any changes in input field handler
  function changeHandler(event) {
    const { value, name } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }


  useEffect(() => {
    setFormData(prevFormData => ({
      ...prevFormData,
      track: playlistUrl
    }));
  }, [playlistUrl]);

//   ! submit handler
async function submitHandler(event){
    event.preventDefault();
    console.log(formData);
       const response = await makeAuthenticatedPOSTRequest("/song/create" ,formData);
       if(!response.success ){
        alert("could not create song");
       }
       else{
        alert('success');
        navigate("/home")
       }
}



  return (
    <div className="w-full h-full flex relative overflow-x-hidden ">
      {/* left part */}
      <Slidebar cookie={cookie} active={active} setActive={setActive} />

      {/* right part music content */}
      <div className="w-screen h-screen bg-app-black items-center ">
        {/* navbar stick  */}
        <Navbar cookie={cookie} removeCookie={removeCookie} />

        {/* upload form part  */}
        <div className="pl-[23%] pt-[100px] pr-[3rem] w-screen h-[calc(100%-90px)] mb-16 flex flex-col gap-9">
          <p className="text-white font-bold text-3xl cursor-default">
            Upload Your Music
          </p>
          <div className="flex  gap-4">

            {/* two input field  */}
            <label htmlFor="name" className="text-white font-semibold">
              Name
        <InputField formData={formData} changeHandler={changeHandler} name={'name'} placeholder={'Name'} value={formData.name} />
            </label>

            <label htmlFor="thumbnail" className="text-white font-semibold">
              Thumbnail
              <InputField formData={formData} changeHandler={changeHandler} name={'thumbnail'} placeholder={'Thumbnail'} value={formData.thumbnail} />
            </label>


          </div>
          <div>
            <CloudinaryUpload
              setPlaylistUrl={setPlaylistUrl}
              setUploadedFileSongName={setUploadedFileSongName} uploadedFileSongName={uploadedFileSongName}
            />
          </div>
          <div>
            <button className="text-white bg-black px-4 py-3 rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300" onClick={submitHandler}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UplaodSong;
