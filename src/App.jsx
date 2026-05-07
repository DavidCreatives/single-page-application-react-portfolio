import { useState, createContext } from "react";
import Form from "./Form";
import App from "./Heading";
import DisplayProjects from "./ProjectDisplay";

export const DataContext = createContext([])

function ParentApp(){
    const[data, setData] = useState('')

    return(
    <DataContext.Provider value={{data, setData}}>
        <Form/>
        <DisplayProjects/>
    </DataContext.Provider>
    )
}

export default ParentApp