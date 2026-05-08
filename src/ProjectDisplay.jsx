import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "./App";

function DisplayProjects(receivedData){
    const { data } = useContext(DataContext)
    
    localStorage.setItem(data)
    

    return(
        <div className="m-10 border-1 rounded-xl">
            <div className="m-10 border-b-1 flex pb-10">
                <input 
                type="text"
                placeholder="Search Projects"
                className="border-1 flex w-xl rounded-xl h-10 p-3"
                
                />
            </div>
                <ul>
                    {projectList.map((item, index) => (
                    <li key={index}>{item.name || JSON.stringify(item)}</li>
                    ))}
                </ul>
            <div>

            </div>
        </div>
    )
}

export default DisplayProjects