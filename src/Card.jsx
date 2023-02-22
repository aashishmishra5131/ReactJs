import react from "react";


function Cards(){
    return(
        <>
        <div className="cards">
            <div className="card">
                <img src={props.imgsrc} alt="muPic"></img>
                <div className="card_info">
                    <spam className="card_category">{props.title}</spam>
                    <h3 classname="card_title">{props.sname}</h3>
                    <a href={props.link} target="_blank">
                        <button>Watch Now</button>
                    </a>
                    </div>
            </div>
        </div>
        </>
    );
}
export default Cards;