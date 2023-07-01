import { openUploadWidget } from "../utils/cloudinaryUploader";
import {cloudinary_upload_preset , cloudinary_cloud_name} from "../config"

const CloudinaryUpload = ({setPlaylistUrl , setUploadedFileSongName , uploadedFileSongName})=>{
    const uploadImageWidget = ()=>{
        let myUploadWidget = openUploadWidget(
            {
                cloudName:cloudinary_cloud_name,
                uploadPreset:cloudinary_upload_preset,
            
                sources:['local'],
            },
            function (error , result){
                if(!error && result.event === 'success'){
                     setPlaylistUrl(result.info.secure_url);
                   setUploadedFileSongName(result.info.original_filename);
                }
                else{
                    if(error){
                        console.log(error);
                    }
                  
                }
            }
        );
        myUploadWidget.open();
    };

    return (<div>

        {
            uploadedFileSongName?(
               <div className="flex gap-2">
                <p className="text-white font-semibold cursor-default">You selected song :</p>
               <p className="text-red-400 font-semibold cursor-default ">{uploadedFileSongName.slice(0,30)}...</p> 
               </div>
            ):(
                <button className="text-white border-2 border-white px-3 py-2 rounded-3xl hover:bg-gray-700 transition-all duration-200" onClick={uploadImageWidget}>Select Track</button>
            )
        }
    </div>
        
       
    );
};

export default CloudinaryUpload;