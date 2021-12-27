import React from "react";
import PropTypes from "prop-types";

export default function Header(props) {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top navbar-dark"
      style={{ backgroundColor: "white" }}
    >
      <div className="container">
        <h2>tranSCend</h2>
        <div id="navbar-nav-scroll">
          <ul className="navbar-nav bd-navbar-nav flex-row">
            <li className="nav-item ">
              <a
                className=" nav-link nav-a bg-purple-600 text-white font-bold rounded-md px-3 py-2 mx-1 hover:bg-purple-700"
                href="../download"
                role="button"
              >
                Download
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link nav-a bg-sky-400 text-white font-bold rounded-md px-3 py-2 mx-1 hover:bg-sky-500"
                href="../upload"
                role="button"
              >
                Upload
              </a>
            </li>
            <li className="nav-item ">
              <a
                className=" nav-link nav-a bg-indigo-600 text-white font-bold rounded-md px-3 py-2 mx-1 hover:bg-indigo-500"
                href="../tutorial"
                role="button"
              >
                Tutorial
              </a>
            </li>
            <li className="nav-item ">
              <a
                className=" nav-link nav-a bg-teal-400 text-white font-bold rounded-md px-3 py-2 mx-1 hover:bg-teal-500"
                href="../contact"
                role="button"
              >
                Contact Us
              </a>
            </li>

            {/* <li className="nav-item">
                    <a className="nav-link nav-a" href="../data-summary" style={{"paddingLeft": "1rem", "paddingRight": "1rem"}}>Data Summary</a>
                </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

// // if no props passed from the parent i.e app.js file
// Header.defaultProps={title:"default"}
// // ensure that only valid data type pass in the component
// Header.propTypes={title:PropTypes.string};
