
import React from 'react'

export default function Footer(props){
 return(

    <nav className="navbar navbar-expand-sm navbar-dark" style={{"backgroundColor":"black", "fontFamily": "Avenir,Arial,sans-serif"}} >
          <div className="container">
          
            <span className="navbar-text" style={{"fontSize": "13px"}}>tranSCend project</span>
            <a href="mailto: tranSCend@iiitd.ac.in">
              <span className="navbar-text" style={{"fontSize": "13px"}}>tranSCend@iiitd.ac.in </span>
            </a>
        </div>
  </nav>


 )


}