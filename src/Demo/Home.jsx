import {useLocation} from 'react-router-dom';
const Home=(props)=>{
    const location=useLocation();
    return(
        <>
        <h1>This is Home page</h1>
        <p>my cuurent location is {location.pathname}</p>
        {location.pathname===`/`?
     <button>Click Me</button> :null}
        </>
    );
};
 export default Home;