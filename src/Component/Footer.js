import React from 'react'

function Footer() {
  let styleFooter = {
     position: "relative",
     top: "70vh",
     width: "100%",
     margin : 0,    
  }
  return (
    
    <footer className= 'bg-dark text-light py-3' style={styleFooter}>
      <p className='text-center'>
       Copyright &copy; MyTodoList.com
       </p>
    </footer>

  )
};

export default Footer
