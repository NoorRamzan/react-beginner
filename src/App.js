
import React from 'react';
import Header from './Component/Header'
import Todos from  './Component/Todos'
import AddTodo from './Component/AddTodo'
import Footer from  './Component/Footer'
import About from './Component/About'
import Item from './Component/Item';
import {useState,useEffect  } from 'react';
import Add from './Component/Add'


// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";




function App() {

<Add/>
// let initTodo;
// if(localStorage.getItem("todos")===null){
//   initTodo=[]
// }else
// {
//   initTodo= JSON.parse(localStorage.getItem("todos"));
// }


//   function onDelete(todo){
//     console.log(" i am on delete", todo)

//     setTodos(todos.filter((e)=>{
//       return e!==todo;
//     }));
//     localStorage.getItem("todos",JSON.stringify("todos"));
//   }
//     const addTodo = (title,desc)=>{
//       console.log("i am adding this todo", title, desc)
//       let sno;
//       if(todos.length === 0){
//         sno = 0;
//       }
//       else{
//          sno=  todos[todos.length-1].sno+1;
//       }
      
//       const myTodo = {
//         sno:sno,
//         title: title,
//         desc: desc,
//       }
//       setTodos([...todos,myTodo])
//       console.log(myTodo)
//     }
  
//   const [todos, setTodos] = useState(initTodo);
//   useEffect(()=>{
//     localStorage.getItem("todos",JSON.stringify("todos"));
//   },[todos])

  return (
    <div>
      <>
      {/* <Router>
      <Header title="My TodosList" searchBar={true} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router> */}

   
      </>
    </div>
  );
}

export default App


