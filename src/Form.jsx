import { useState } from "react";

function Form(){
    const [name, setName] = useState('')

    return(
        <div className="border-1 m-10 rounded-2xl p-10 ">
            <h2 className="text-left">Add Project</h2>
            <p className="text-left">Title</p>
            <input
                className="border-1 flex w-xl rounded-xl h-10"
                
            />
            <p className="text-left">Description</p>
            <textarea className="border-1 flex w-xl rounded-xl h-20"></textarea> <br />

            <button className="border-1 px-10 rounded-xl flex ">Add</button>
        </div>
    )
}

export default Form