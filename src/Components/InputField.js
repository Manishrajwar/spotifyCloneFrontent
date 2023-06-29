function InputField({formData , changeHandler , name , placeholder , value}){
    return (
        <div>
           <input
            required
            type={`${name==='email'?('email'):('text')}`}
            placeholder={placeholder}
            onChange={changeHandler}
            name={name}
            value={formData.value}
            className="border-2 border-black w-[25rem] py-2 pl-1  rounded-md"
          />
        </div>
    )
}

export default InputField;