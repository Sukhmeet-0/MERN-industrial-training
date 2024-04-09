// import Cards from "./Cards";
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'

// import ComponentsB from "./ComponentsB";

function App() {
  // let style = {
  //   color: "yellow",
  //   backgroundColor: "black",
  // };
  // function sum(){
  //   return 10+20
  // }
  return (
    <>
        {/* /<div className="container">
          <span>Demo project</span>{" -> "}<span>Hello world</span>{" -> "}
          Output::{sum(10,50)}
          <h1 style={{ color: "red", backgroundColor: "green" }}>
            Hello world
          </h1>
          <p style={style}>ki haaal aa sohneeooo.....</p>
          <div className="row">
            <Cards title='Sukhmeet singh' description='Bhut sohna munda' age={22}/>
            <Cards title='Harmeet singh' description='Bhut ganda munda' age={26}/>
          </div>
          
          <hr/>
          <button type={"button"} className="btn-primary btn mx-2">Click me</button>
          <ComponentsB/>
          
        </div> */}

        <BrowserRouter>
        
          <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/about'} element={<About/>}/>
            <Route path={'/contact'} element={<Contact/>}/>
          </Routes>
        
        </BrowserRouter>




    </>
  );
}
// let Cards=(props)=>{
//   return (
//       <>
//           {/* Output::{sum(10,50)} */}
//           <div className="col-lg-4">
//           <div className="card">
//               <div className="card-header  bg-primary"><h1>{props.title}, {props.age}</h1></div>
//               <div className="card-body">
//                   <p>{props.description} </p>
//               </div>
//           </div>
//           </div>
//       </>
//   )
// }

// import React from "react";
// class App extends React.Component{
//   render(){
//     return <h1>Hello world</h1>
//   }
// }
export default App;
