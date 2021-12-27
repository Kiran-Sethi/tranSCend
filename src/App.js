import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header.js";

import Footer from './MyComponents/Footer.js';
// import Download from './MyComponents/Download.js'
import Download from './MyComponents/Download_copy.js'

import UploadModel from './MyComponents/ModelUpload.js';
import ModelCard    from './MyComponents/ModelCard.js'
import Tutorial from './MyComponents/Tutorial.js'
import ContactUs from './MyComponents/ContactUs.js'
import HomePage from './MyComponents/HomePage';

import React,{useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';




function App() {


  const [dataset, setDataset] = useState(null);
  // const [form, setState] = useState({
  //   username: '',
  //   password: ''
  // });
  
  // all the values from 2nd page 
  const[secondPage,setsecondPage]=useState({
       dataId:'',
       cellfilter:'',
       genefilter:'',
       hvg:''

  })
  const[model,setModel]=useState("")


  const handleCallback = (childData) =>{
     setDataset(childData)
     console.log(childData)
    //  console.log(React.version)
    
  
  }

  // saving the data coming from 2nd page
  const handleCallback2= (childData)=>{
    setsecondPage(childData) // childData will be in the form of object
    console.log(childData)

     }

  const handleCallback3=(childData) =>
  {
    setModel(childData)
    console.log(childData)

  }

  return(

    <>
    <Header/>
    <BrowserRouter>
    <Switch>
    <Route exact path="/">{<HomePage/>}</Route> 

    <Route exact path="/download">{<Download/>}</Route> 
    <Route exact path="/upload">{<UploadModel/>}</Route>   
    <Route exact path="/modelcard">{<ModelCard/>}</Route> 
    <Route exact path="/tutorial">{<Tutorial />}</Route>
    <Route exact path="/contact">{<ContactUs />}</Route>


    </Switch>
    </BrowserRouter>


    {/* <Download></Download> */}
    {/* <UploadModel></UploadModel> */}
    <Footer/>
    </>


  );
}

export default App;
