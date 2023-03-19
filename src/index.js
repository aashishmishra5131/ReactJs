import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
// import Card from "./Cards";
import App from "./App";

// ReactDOM.render( 
//   <div>
//   <h1>Hello World, Your Developer</h1>
//   <p>start to learn reactjs</p>
//   </div>,
//   document.getElementById('root')
// );

// if only use javaScript method

// var h1=document.createElement('h1');
// h1.innerHTML ="Aashish Mishra";
// document.getElementById("root").appendChild(h1);

// ReactDOM.render(
//   <>
//   <h1>Hello World, Your Developer</h1>
//   <p>start to learn reactjs</p>
//   </>,
//   document.getElementById('root')
// ) ; 

// In curly bracket only use Expression. not use Statement.

// const choice= "it's my choice,";
// const enjoy= "I hope you like it.";

//  const currentDate= new Date().toLocaleDateString();
//  const currentTime= new Date().toLocaleTimeString();
// ReactDOM.render(
//   <>
//   <h1><u>{2+3} Best Web Series</u></h1>
//   <h2>{`${choice} ${enjoy}`}</h2>
//   <table border={85}>
//     <tr>
//       <th>No</th>
//       <th>Name</th>
//       <th>Rating</th>
//     </tr>
//     <tr>
//       <td>1</td>
//       <td>Dark</td>
//       <td>4.3 star</td>
//     </tr>
//     <tr>
//       <td>2</td>
//       <td>Mr Robot</td>
//       <td>3.5 star</td>
//     </tr>
//     <tr>
//       <td>3</td>
//       <td>Bards of blood</td>
//       <td>4.9 star</td>
//     </tr>
//     <tr>
//       <td>4</td>
//       <td>My first-2 Love</td>
//       <td>3.6 star</td>
//     </tr>
//     <tr>
//       <td>5</td>
//       <td><ul>
//         <li>My Holo Love</li>
//         <li>Bihar-Ek kahani</li>
//         </ul></td>
//         <td>4.3 star</td>
//     </tr>
//   </table>
//   <br></br>
//  <p><u>Current Date :</u> {currentDate} <br></br><u>Current Time :</u> {currentTime}</p>
//    <h2 contentEditable="true">I am Aashish Mishra</h2>
//   </>,
//   document.getElementById('root')
// ) ;


//  let currentDate=new Date(2023,2,6,13);
//  currentDate =currentDate.getHours();
// let greeting ='';
// const cssStyle={};
//  if(currentDate >=1 && currentDate <12){
//    greeting='Good Morning';
//    cssStyle.color='Green';
//  }
//  else if(currentDate>=12 && currentDate<19){
//   greeting='Good Afternoon';
//   cssStyle.color='Orange';
//  }
//  else{
//   greeting='Good Night';
//   cssStyle.color='Black';
//  }
//   const curDate= new Date().toLocaleDateString();
//  const currentTime= new Date().toLocaleTimeString();


// ReactDOM.render(
// <>

// <div className='div' style={{ 
//       backgroundImage: `url("https://picsum.photos/200/300?grayscale")` 
//     }}>
// <h1>Hello Aashish, <span style={cssStyle}>{greeting}</span></h1>

// <h3>{curDate},{currentTime}</h3>
// </div>
// </>,
// document.getElementById("root")
// );


ReactDOM.render(
<BrowserRouter>
<App/></BrowserRouter>

,document.getElementById("root"));


