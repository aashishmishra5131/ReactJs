import React,{ useState } from 'react';
import { questions } from './api';
import './Accordian.css';
import MyAccordian from './MyAccordian';
const Accordian=()=>{
    const [data, setData]= useState(questions);
    return(
        <>
           <section className="main-div">
            <h1>React interview questions</h1>
             {
        data.map((curElem)=>{
             const{id}=curElem;
           return <MyAccordian key={curElem.id} {...curElem}/>;
        })
    }
    </section>
        </>
    );
};
export default Accordian;