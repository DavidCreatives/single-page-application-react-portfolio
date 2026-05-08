import { useContext, useState } from "react";
import {DataContext} from "./App";

function Form(){
    const [projectName, setProjectName] = useState('')
    const [projectDescription, setProjectDescription] = useState('')

    const { setData } = useContext(DataContext)

    function handleSubmit(){
        let projectArray = {
            title: projectName,
            description: projectDescription
        }
        
        setData(projectArray)
    }
    return(
        <div className="border-1 m-10 rounded-2xl p-5">
            <h2 className="text-left">Add Project</h2>

            <p className="text-left">Title</p>
            <input
                className="border-1 flex w-full rounded-xl h-10 p-3"
                onChange={(e) => setProjectName(e.target.value) }
                required
            />

            <p className="text-left">Description</p>
            <textarea 
                className="border-1 flex w-full rounded-xl h-20 p-3" 
                onChange={(e) => setProjectDescription(e.target.value)}
            ></textarea> <br />

            <button 
            className="border-1 px-10 rounded-xl flex transition-all duration-300 ease-in-out hover:bg-(--accent-bg) cursor-pointer hover:py-3"
            onClick={handleSubmit}
            >Add</button>
        </div>
    )
}

export default Form