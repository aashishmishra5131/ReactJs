import React,{useState} from 'react';
import Searesult from './Searesult';

const Search=()=>{
    const[img,setImg]=useState("");
    const inputEvent=(event)=>{
        const data=event.target.value;
        setImg(data);
    }
    return(
        <><br></br>
        <br></br>
        <div className="searchbar">
        <input placeholder='Search' value={img} onChange={inputEvent}></input>
        </div>
        {img===""?null:<Searesult name={img}/>}
        </>
        
    );
};
export default Search;