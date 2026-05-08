import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "./App";

function DisplayProjects(receivedData){
    const { data } = useContext(DataContext)

    if(receivedData && data){
        localStorage.setItem(data.title, data.description)
        console.log(localStorage.getItem(data.title))
    }
    

    function handleDelete(deleteItem){
        localStorage.removeItem(deleteItem)
        
    }

    const myEntries = Object.entries(localStorage)
    

    return(
        <div className="m-10 border-1 rounded-xl">
            <div className="mx-3 mt-4 rounded-sm  border-b-1 flex pb-10">
                <input 
                type="text"
                placeholder="Search Projects"
                className="border-1 flex w-full rounded-xl h-10 p-3"

                />
            </div>
                <ul className="overflow-auto mt-5">
                    {myEntries.map(([key, value]) => (
                        <li key={key} className="border-1 rounded-sm m-5 py-10 text-left px-5 bg-(--accent-bg)">
                            <strong>Project Name :  {key} </strong> <br />
                            <strong>Project Description :  {value} </strong>
                            <button
                            className="border-1 w-15 rounded-xl p-3 flex  flex-end mt-10 transition: all duration:500 ease-in-out hover:bg-red-200 hover:text-black"
                            onClick={() => handleDelete(key)}
                            >✘</button>
                            
                        </li>
                    ))

                    }
                </ul>
            <div>

            </div>
        </div>
    )
}

export default DisplayProjects