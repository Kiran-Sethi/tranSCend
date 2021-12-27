import Card from 'react-bootstrap/Card'
import React, { useState } from 'react';
import styled from 'styled-components';
import logo from "./img/logo.jpeg";
import downloadImg from './img/download.png'



const Section = styled.section`
  color: ${props => props.textColor};

  /* Pass variables as inputs */

  /* Adjust the background from the properties */
  background: ${props => props.background};
  width: 100%;
  height: ${props => props.height} 
`




export default function HomePage()
{
return(
<div className="my-20 flex flex-col items-center">


<Section className=" sec1  " background="white" textColor='black' height='300px'>
<div className='flex flex-col items-center '>
{/* <div className="container " style={{width:"20",height:"20"}}> */}
<img  src={logo} />
{/* </div> */}
<h2>tranSCend</h2>
<h3 style={{color:'#4b4146b5'}}>Single cell RNAseq Transfer Learning models</h3>
<br></br>
<br></br>

</div>
</Section>

{/* max-726780 ,min -C4C4C4 */}




<Section className=" sec2 " background="linear-gradient(to bottom, #403B4A, #E7E9BB)" textColor='black'  >
<div className='flex space-x-60 items-center '>
<div className='flex px-60 flex-col items-center  '>
<h3 className=''>Featured Models</h3>
<a href='../download' >Explore Models</a>
{/* <h6 className='border'>Explore Models</h6> */}


</div>


<div className='grid grid-cols-1  md:grid-cols-2     lg:grid-cols-2      grid-rows-2 gap-x-7 gap-y-1 mx-10'>
<Card className="my-3 px-4 w-full  rounded-xl opacity-80 ">
    <Card.Body>
    <Card.Title>SCANVAE_kidney</Card.Title>  
    <div className='flex items-center space-x-20 '>
    <span className=' '>Clustering</span>

    <div className='flex items-center text-sm text-gray-400 leading-tight whitespace-nowrap overflow-hidden mr-1'>
    <div class="inline-flex items-center"><svg className="w-6 h-6  "  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path></svg>
	<span>2.5k</span></div>
    </div>
    </div>
    </Card.Body>
</Card>

<Card className="my-3 px-4 w-full  rounded-xl opacity-80">
    <Card.Body>
    <Card.Title>SCVI_pancreas</Card.Title>  
    <div className='flex items-center space-x-20 '>
    <span className=' '>Clustering</span>

    <div className='flex items-center text-sm text-gray-400 leading-tight whitespace-nowrap overflow-hidden mr-1'>
    <div class="inline-flex items-center"><svg className="w-6 h-6  "  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path></svg>
	<span>2.5k</span></div>
    </div>
    </div>
    </Card.Body>
</Card>


<Card className=" my-3 px-4 w-full  rounded-xl opacity-80">
    <Card.Body>
    <Card.Title>SCVI_blood_pbmc68k</Card.Title>  
    <div className='flex items-center space-x-20 '>
    <span className=' '>Clustering</span>

    <div className='flex items-center text-sm text-gray-400 leading-tight whitespace-nowrap overflow-hidden mr-1'>
    <div class="inline-flex items-center"><svg className="w-6 h-6  "  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path></svg>
	<span>2.5k</span></div>
    </div>
    </div>
    </Card.Body>
</Card>

<Card className="my-3 px-4 w-full  rounded-xl opacity-80">
    <Card.Body>
    <Card.Title>SCVI_lung_epithelial</Card.Title>  
    <div className='flex items-center space-x-20 '>
    <span className=' '>Clustering</span>

    <div className='flex items-center text-sm text-gray-400 leading-tight whitespace-nowrap overflow-hidden mr-1'>
    <div class="inline-flex items-center"><svg className="w-6 h-6  "  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path></svg>
	<span>2.5k</span></div>
    </div>
    </div>
    </Card.Body>
</Card>


 
</div>
</div>
</Section>




{/* max-ECD0ED
min-C4C4C4 */}


<Section className=" sec3  " background=" linear-gradient(to bottom, #F5E8F5, #C4C4C4)" textColor='black' >
<div className='flex space-x-80 items-center justify-items-center'>
<div className='flex px-60 flex-col items-center  '>
<h3 className=''>Models</h3>
<div className='flex space-x-3 '>
<a href='../upload' >Upload </a>
<a href='../download' >Download </a>
</div>

{/* <h6 className='border'>Explore Models</h6> */}


</div>

<div className='flex flex-col items-center justify-item-center space-y-2 py-10'>
<div className='flex x-space-3 mx-20'>
<svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
</svg>

<svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
</svg>
</div>

<span>Upload or Download state-of-art  Single Cell Sequencing Transfer Learning Models</span>
{/* <span>OR</span>
<span>Download the Single Cell Sequencing Transfer Learning Models with the how to use code and datasets.</span> */}

</div>




</div>

{/* <p>Hello this is 3rd section</p> */}
</Section>


</div>

)

}