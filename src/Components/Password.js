function Password({passwordHide , changeHandler , formData}){
    return (
        <div>
 <input
              required
              type={`${passwordHide ? "password" : "text"}`}
              placeholder="Password"
              onChange={changeHandler}
              name="password"
              value={formData.password}
              className="border-2 border-black w-[25rem] py-2 pl-1  rounded-md"
            />
        </div>
    )
}

export default Password;