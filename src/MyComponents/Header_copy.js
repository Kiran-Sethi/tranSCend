import React from 'react'
import PropTypes from 'prop-types'


export default function Header(props) {
  return (
    
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark" style={{"backgroundColor":"black"}}>
    <div className="container">
        <a href="../home">
            {/* <img src="/static/image/TISCH.png" width="140"/> */}
            
        </a>
        <div id="navbar-nav-scroll">
            <ul className="navbar-nav bd-navbar-nav flex-row">

                <li className="nav-item active">
                    <a className="nav-link nav-a" href="../download" style={{"paddingLeft":"1.5rem", "paddingRight": "1rem"}}>Download</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link nav-a" href="../upload" style={{"paddingLeft": "1.5rem", "paddingRight": "1rem"}}>Upload</a>
                </li>
               
                {/* <li className="nav-item">
                    <a className="nav-link nav-a" href="../data-summary" style={{"paddingLeft": "1rem", "paddingRight": "1rem"}}>Data Summary</a>
                </li> */}

               
            </ul>
        </div>
    </div>
</nav>


  )
}

// // if no props passed from the parent i.e app.js file
// Header.defaultProps={title:"default"}
// // ensure that only valid data type pass in the component 
// Header.propTypes={title:PropTypes.string};

