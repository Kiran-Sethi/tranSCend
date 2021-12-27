import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 
  body {
    // background: linear-gradient(to bottom, #403B4A, #E7E9BB);
    background: linear-gradient(to bottom, #F5E8F5, #C4C4C4);
    height: 150%;
    margin-bottom: 15%;
    
  }
`;

export default function ContactUs() {
  return (
    <>
      <GlobalStyle />;
      <div className="ml-16  mr-16">
        <div class="card mt-16 ">
          <div class="card-header text-black font-extrabold">
            {" "}
            Contact Information
          </div>
          <div class="card-body">
            <h5 class="card-title">Contact Email Id:</h5>
            <a class="card-text" href="mailto: dinesh20208@iiitd.ac.in">
              {" "}
              dinesh20208@iiitd.ac.in
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
