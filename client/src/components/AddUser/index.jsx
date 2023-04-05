import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUsers } from "../../redux/reducer/usersSlice";
function AddUser() {
    const distpatch=useDispatch()
    const [input,setInput]=useState('')
   const handelChange=(e)=>{
    setInput(e.target.value)
   }
   const handelSubmit=()=>{
    distpatch(addUsers({
        Username:input
    }))
    setInput('')
   }
    return (
        <div className="addUser">
            <input type="text" value={input} onChange={handelChange} />
            <button onClick={handelSubmit}>Add user</button>
        </div>
    );
}

export default AddUser;