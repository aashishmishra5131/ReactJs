// import { getValue } from "@testing-library/user-event/dist/utils";
// import React,{useState,useEffect} from "react";

// import { useReducer } from "react";


// const App = ()=>{
//  const state =useState();

// const [count,setCount] =useState(0);

// const Inc = () =>{
//     setCount(count +1);
// };


// use useEffect 
// 1. No dependency passed
//  useEffect(() => {
//    document.title =count;
//  });

//2.an empty aaray
// it run only one time
 //  useEffect(() => {
//    document.title =count;
//  },[]);

// 3. props or state Value
//  useEffect(() =>{
//     document.title =count;
//  },[count]);

//     const[widthCount,setWidthCount]=useState(window.screen.width);

//     const currentScreenWidth=()=>{
//         setWidthCount(()=>window.innerWidth);
//     };

//     useEffect(()=>{
// window.addEventListener("resize",currentScreenWidth);
// return()=>{
//  window.removeEventListener("resize",currentScreenWidth);
// };
//     });


//     return(
//         <>
//         <h1>{count}</h1>
//         <button onClick={Inc}>Click Me</button>
//         <h1>The size of window is {widthCount}</h1>
//         </>
//     );
// };

//useContext;

// import { useState } from "react";
// import ReactDOM from "react-dom/client";

// function Component1() {
//   const [user, setUser] = useState("Jesse Hall");

//   return (
//     <>
//       <h1>{`Hello ${user}!`}</h1>
//       <Component2 user={user} />
//     </>
//   );
// }

// function Component2({ user }) {
//   return (
//     <>
//       <h1>Component 2</h1>
//       <Component3 user={user} />
//     </>
//   );
// }

// function Component3({ user }) {
//   return (
//     <>
//       <h1>Component 3</h1>
//       <Component4 user={user} />
//     </>
//   );
// }

// function Component4({ user }) {
//   return (
//     <>
//       <h1>Component 4</h1>
//       <Component5 user={user} />
//     </>
//   );
// }

// function Component5({ user }) {
//   return (
//     <>
//       <h1>Component 5</h1>
//       <h2>{`Hello ${user} again!`}</h2>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Component1 />);

//  export default Component1;

//useRef hook

// import { useState, useEffect, useRef } from "react";
// import ReactDOM from "react-dom/client";

// function App() {
//   const [inputValue, setInputValue] = useState("");
//   const count = useRef(0);

//   useEffect(() => {
//     count.current = count.current + 1;
//   });

//   return (
//     <>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <h1>Render Count: {count.current}</h1>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
// export default App;

//useReducer
// import { useReducer } from "react";
// import ReactDOM from "react-dom/client";

// const initialTodos = [
//   {
//     id: 1,
//     title: "Todo 1",
//     complete: false,
//   },
//   {
//     id: 2,
//     title: "Todo 2",
//     complete: false,
//   },
// ];

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "COMPLETE":
//       return state.map((todo) => {
//         if (todo.id === action.id) {
//           return { ...todo, complete: !todo.complete };
//         } else {
//           return todo;
//         }
//       });
//     default:
//       return state;
//   }
// };

// function Todos() {
//   const [todos, dispatch] = useReducer(reducer, initialTodos);

//   const handleComplete = (todo) => {
//     dispatch({ type: "COMPLETE", id: todo.id });
//   };

//   return (
//     <>
//       {todos.map((todo) => (
//         <div key={todo.id}>
//           <label>
//             <input
//               type="checkbox"
//               checked={todo.complete}
//               onChange={() => handleComplete(todo)}
//             />
//             {todo.title}
//           </label>
//         </div>
//       ))}
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Todos />);
// export default reducer;

//useMemo

// import { useState } from "react";
// import ReactDOM from "react-dom/client";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState([]);
//   const calculation = expensiveCalculation(count);

//   const increment = () => {
//     setCount((c) => c + 1);
//   };
//   const addTodo = () => {
//     setTodos((t) => [...t, "New Todo"]);
//   };

//   return (
//     <div>
//       <div>
//         <h2>My Todos</h2>
//         {todos.map((todo, index) => {
//           return <p key={index}>{todo}</p>;
//         })}
//         <button onClick={addTodo}>Add Todo</button>
//       </div>
//       <hr />
//       <div>
//         Count: {count}
//         <button onClick={increment}>+</button>
//         <h2>Expensive Calculation</h2>
//         {calculation}
//       </div>
//     </div>
//   );
// };

// const expensiveCalculation = (num) => {
//   console.log("Calculating...");
//   for (let i = 0; i < 1000000000; i++) {
//     num += 1;
//   }
//   return num;
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

// export default App;


//Slot machine*****************************************************

//  import React,{ useState }from "react";
// //  import{Theme} from 'emoji-picker-react';
// import"./App.css";
// const SlotM= (props) =>{
//     let x= props.x;
//     let y= props.y;
//     let z= props.z;
//     if((x===y)&&(y===z)){
//         return(
//             <>
//             <div className='slot_inner'>
//                 <h1>
                   
//                     {x} {y} {z}
//                     </h1>
//                     <h1>This is Matching</h1>
//                     <hr></hr>
//             </div>
//             </>
//         );
//     }
//     else{
//         return(
//             <>
//             <div className='slot_inner'>
//                 <h1>
                   
//                     {x} {y} {z}
//                     </h1>
//                     <h1>This is Not Matching</h1>
//                     <hr></hr>
//             </div>
//             </>
//         );
//     }
// }

//  const App = () => {
//     return(
//         <>
//     <h1 className="heading_style" > Welcome to Slot machine game</h1> 
//     <div className="slotmachine">
//     <SlotM x="🐸" y="🐸" z="🐸"/> 
//     <SlotM x="🤡" y="🐵" z="🤡" />
//     <SlotM x="🐵" y="🐵" z="🐸" />
//     </div>
//     </>
//  );
//  };
// *****************Time****************************
// const App=()=>{
//     let time=new Date().toLocaleTimeString();

//     const [ctime, setCtime]=useState(time);
//     const UpdateTime=()=>{
//          time=new Date().toLocaleTimeString();
//          setCtime(time);
//     };
//     setInterval(UpdateTime,1000);
        
   
//     return(
//         <>
//         <h1 className="time">{ctime}</h1>
       
//         </>
//     );
// }

//***************************Events***************************

// import React,{useState} from "react";
// import "./App.css";
// const App=()=>{
//     const purple="#8e44ad";
//     const [bg,setBg] =useState(purple);

//     const bgChange =()=>{
//         let newBg="#344495e";
//       setBg(newBg);
//     };
//     return(
//     <>
//        <div style={{backgroundColor:bg}}>
//         <button onClick={bgChange }>Click me</button>
//       </div>
//     </>
//     );
// };





//************************************form**************************

// import React,{useState} from 'react';
// import './App.css';
// const App =() =>{
//    const[name,setName]=useState();
//    const[fullName,setFullname]=useState();
//   const inputEvent = (event) =>{
//       setName(event.target.value);
//   }
// const onSubmit=(event)=>{
//   event.preventDefault();
//    setFullname(name);
// };
//   return(
//     <>
//     <h1>Hello 🌅, {fullName} </h1>
//     <input type='text' placeholder='Write Your Name' onChange={inputEvent} value={name}/><br/><br/>
//     <button onClick={onSubmit}  >Submit 🤓 </button>
//     </>
//   );
// };


//******************************** Three dots******************************

// const fullName =["Aashish","Mishra"];

// const biodata=[1,23, "male",...fullName];
// console.log(fullName);
// console.log(biodata);

// export default fullName;

// import React, { useState } from "react";

// import ToDolist from "./ToDolist";

// const App = () => {
//   const[inputList,setinputList]=useState('');
//   const[Items,setItems]=useState([]);
//   const listofItems=()=>{
//    if(inputList!=="" && Items.length<=9){
//     setItems((oldItems)=>{
//       return(
//         [...oldItems,inputList]
//       )
//     })
//    }
//    if(Items.length>9){
//     alert("You can enter 10 items only")
//    }
//    if(inputList==""){
//     alert("input field required")
//    }
//     setinputList("");
//   }
//   const deleteItems=(id)=>{
  
//     setItems((oldItems)=>{
//       return oldItems.filter((arrElem,index)=>{
//         return index!=id;
//       })
//     })
//   }

//   const inputEvent=(event)=>{
//     setinputList(event.target.value);

//   }


//   return (
//     <>
//       <div className="main_div">
//         <div className="center_div">
//           <br />
//           <h1>ToDo List</h1>
//           <br />
//           <input
//             type="text"
//             placeholder="Add a Items"
//             onChange={inputEvent}
//             value={inputList} 
            
            
//           />
//           <button onClick={listofItems}>+</button>
//           <ol>
//           {Items.map((itemVal,i)=>{
//             return(
//               <ToDolist text={itemVal} key={i} id={i} onSelect={deleteItems}></ToDolist>
//             )

//           })}
            
//           </ol>
//         </div>
//       </div>
   
//     </>
//   );
// };
// export default App;

// import React from 'react';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; 
// const App =()=>{
//  return(
// <>
// <React.Fragment>
//   <h1>Welcome to my World</h1>
//   <button className="btn btn-success">Ok</button>
// </React.Fragment>
// </>
//  );
// };
// export default App;

// ********************* Accordian************************************
// import React from 'react';
// import Accordian from './Component/Accordian/Accordian';
// // import Accordian from ""

// const App=()=>{
//   return(
//       <>
//       <Accordian/>
//       </>
//   );
// };
// export default App;

//*************some thing diff********************
// import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// const App=()=>{
//  return(
//   <>
//   <React.Fragment>
//     <h1 className="text-center  text-capitalize my-5">{" "}<u>Earth24{" "}</u> </h1>

//     <div className="container text-center">
//   <div className="row">
//     <div className="col">
//     <div class="card" >
//   <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRGI9FgO5WFaMMyRa0lbMiaE2IYQxlFyXS7riUWHZAMjBtxtyVyPDmer44fzFdeVawWLBD9fnOfdyj3WcF7uM82-4GgGPk1LahlaiNU4cIk" className="card-img-top" alt="..." height="200px"/>
//   <div className="card-body">
//     <h5 className="card-title">Plantazee Ficus Bonsai Plant</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" className="btn btn-primary">Add to Cart</a>
//   </div>
// </div>
//     </div>
//     <div className="col">
//     <div class="card">
//   <img src="https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-plants-ficus-bonsai-plant_467x467.jpg?v=1635575503" className="card-img-top" alt="..." height="200px"/>
//   <div className="card-body">
//     <h5 className="card-title">Ficus Bonsai - Plant</h5>
//     <p className="card-text">There are several tropical and subtropical trees that you can grow indoor. The most common, and the easiest to care for, is the Ficus Bonsai. The Ficus is tolerant of low humidity and is very resilient, making it an excellent choice for beginners.</p>
//     <a href="#" className="btn btn-primary">Add to Cart</a>
//   </div>
// </div>
//     </div>
//     <div className="col">
//     <div class="card">
//   <img src="https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-the-fragrant-beauties-pack_467x467.jpg?v=1637238259" className="card-img-top" alt="..." height="200px"/>
//   <div className="card-body">
//     <h5 className="card-title">The Fragrant Beauties Pack</h5>
//     <p className="card-text">Images are for reference purposes only. Actual product may vary in shape or appearance based on climate, age, height, etc. The product is replaceable but not returnable.</p>
//     <a href="#" className="btn btn-primary">Add to Cart</a>
    
//   </div>
// </div>
//     </div>
//   </div>
// </div>
//   </React.Fragment>
//   </>
//  );
// };
// export default App;
//****************************************Google Keep*******************************************
import React from 'react';
 import Statewise from './StatewiseData/Statewise.js';
const App=()=>{
 return(
    <>
     <Statewise/>
     </>
  );
};
 export default App;