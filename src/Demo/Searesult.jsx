import React from "react";
const Sresult=(props)=>{
    const img=`https://source.unsplash.com/500x400/?${props.name}`;
    return(
        <>
          <img src={img} alt="search"></img>
        </>
    );
};
export default Sresult;