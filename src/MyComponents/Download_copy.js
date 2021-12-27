import React,{useState} from 'react'
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import axios from 'axios';
import Mytable from './Table';
import { alignPropType } from 'react-bootstrap/esm/types';
import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from "styled-components";

import { SampleTable } from "./SampleTable";

const GlobalStyle = createGlobalStyle`
 
  body {
    background: linear-gradient(to bottom, #403B4A, #E7E9BB);
    min-height: 100vh;
    
  }
`;

const species = [
    { label: "mouse", value: 1},
    { label: "human", value: 2 },
  ];

const organs = [
    { label: "blood", value: 1 },
    { label: "pancreas", value: 2 },
    { label: "brain", value: 3 },
    {label:"lung",value:4},
    {label:"kidney",value:5}
  ];

// this is hardcoded; needed to be fetched
let datas=[
    { label: "pbmc6k", value: 1 },
    { label: "pbmc11k", value: 2 },

];



export default function Home(props){

  let myStyle = {
    marginTop: "100px",
    marginLeft: "20px"
    
  };

  // const [specie, setSpecie] = useState("human");
  const [specie, setSpecie] = useState("");

  // const [organ, setOrgan] = useState('blood');
  const [organ, setOrgan] = useState('');

  // const [data,setData]=useState(['pbmc6k']); 
  const [data,setData]=useState([]); 

  const [selectedData,setselectedData]=useState('');

  const [model_data,setModelNData]=useState([]) //api returning the array of model and data 


  const fetchdataName=(resp)=>{
    var data=[]

  //  resp is an array
//   [
//     {
//         "Sno": 1,
//         "modelName": "SCVI_Class",
//         "modelInfo": "Link to model reference",
//         "modelPath": "192.162.2.222/model/SCVI_class",
//         "Type": "classification",
//         "Species": "human",
//         "Organ": "blood",
//         "dataName": "pbmc6k",
//         "cellCount": "6k",
//         "dataInfo": "link to dataset source/reference",
//         "dataPath": "downloadable path for data",
//         "notebook": "192.162.2.222/notebook",
//         "download": 0
//     },
//     {
//         "Sno": 2,
//         "modelName": "SCVI_Batch",
//         "modelInfo": "Info link",
//         "modelPath": "192.162.2.222/model/SCVI_Batch",
//         "Type": "batch",
//         "Species": "human",
//         "Organ": "blood",
//         "dataName": "pbmc11k",
//         "cellCount": "11k",
//         "dataInfo": "link to dataset source/reference",
//         "dataPath": "downloadable path for data",
//         "notebook": "192.162.2.222/notebook",
//         "download": 0
//     }
// ]

    for( let i=0;i<resp.length;i++)
    {
       data[i]=resp[i].dataName
    }

    data=new Set(data)
    data=Array.from(data)
    // dic={ label: "pbmc11k", value: 2 },
    var arr=[]
    for(let i=0;i<data.length;i++)
     {
         let dic={}
         dic['label']=data[i];
         dic['value']=i+1
         arr.push(dic)

     }
    datas=arr
    return data
       
  }

  React.useEffect(() => {
    axios.get('http://localhost:8000/api/alldata/').then((response) => {
      console.log(response);
      setModelNData(response.data)

      var dataName=fetchdataName(response.data)
      if(dataName.length!=0)
        console.log(dataName)
        setData(dataName)
      
    });


   

  }, []);



  const fetchFilterData=(arg,type)=>
  {  
   
    var temp_specie=specie,temp_organ=organ,temp_data=selectedData
    
   
    if(type=="species")
          temp_specie=arg
    else if(type=="organs" )
          temp_organ=arg
    else if(type=="datas")
          temp_data=arg

    console.log("specie here",specie)
    console.log("arg here",arg)
    // setSpecie(arg)

   

    //  var link="http://localhost:8000/api/filterData/?dataName="+temp_data[temp_data.length-1]+"&Species="+temp_specie+"&Organ="+temp_organ+''
     var link="http://localhost:8000/api/filterData/?dataName="+temp_data+"&Species="+temp_specie+"&Organ="+temp_organ+''

     axios.get(link).then((response) => {
      console.log(response);
      setModelNData(response.data);
      if(type=="species")
          setSpecie(arg)
      else if(type=="organs" )
          setOrgan(arg)
      else if(type=="datas")
          setselectedData(arg)
      console.log("specie here later on",specie)

      
    });

  }





// return(
  
// <div style={myStyle}>
// <div style={{ display: "flex" }} className="form-row">
//   <div className="form-group col-md-4">
//     <label htmlFor="title" className="form-label">
//       Species
//     </label>
//     <Select options={species} onChange={(e) => fetchFilterData(e.label,"species")} />
//   </div>

//   <div className="form-group col-md-4" style={{ paddingLeft: "15px" }}>
//     <label htmlFor="title" className="form-label">
//       Organ
//     </label>
//     <Select options={organs} onChange={(e) => fetchFilterData(e.label,"organs")} />

//   </div>
// </div>
// <div className="form-row">
//   <div className="form-group col-md-4" style={{ marginTop: "10px" }}>
//     <label htmlFor="title" className="form-label">
//       Dataset
//     </label>
//     <Select options={datas} onChange={(e) => fetchFilterData(e.label,"datas")} />

//   </div>
// </div>

// <div style={{ marginBottom: "100px",
//         marginLeft: "220px",
//         marginRight: "200px", }}>
//   <SampleTable data={model_data} />
// </div>
// </div>
// )

// }



return (
  //  specie ,organ and dataset select ; dynamic table
  <>
    
    <GlobalStyle />
    <div style={myStyle} className="mb-6">
      <div className="flex flex-row space-x-10 justify-center mx-auto">
        {/* <div
          className="  flex items-center space-x-4 justify-center"
          // style={{ marginLeft: "250px" }}
        >
          <label
            htmlFor="title"
            className="font-extrabold text-black text-xl"
          >
            Species
          </label>
          <Select className="w-60" options={species} onChange={(e) => fetchFilterData(e.label,"species")} />
        </div> */}

        {/* <div className=" flex items-center space-x-4 justify-center" style={{ paddingLeft: "15px" }}>
          <label
            htmlFor="title"
            className="font-extrabold text-black text-xl"
            // style={{  fontWeight: "bold" }}
          >
            Organ
          </label>
          <Select className="w-60" options={organs} onChange={(e) => fetchFilterData(e.label,"organs")} />
        </div> */}
      </div>
      {/* <div className="flex flex-row">
        <div
          className="basis-1/4 ml-96 mr-36 mt-8"
          // style={{ overflow: "auto" }
        >
          <label
            htmlFor="title"
            className="ml-28 font-extrabold text-black text-xl"
          >
            Dataset
          </label>
          <Select options={datas} onChange={(e) => fetchFilterData(e.label,"datas")} />
        </div>
      </div> */}
    </div>

    <div
      style={{
        marginBottom: "100px",
        marginLeft: "220px",
        marginRight: "200px",
      }}
    >
      {/* <Mytable data={model_data}  ></Mytable> */}
      {/* <MTable data={model_data} /> */}
      <SampleTable data={model_data} />
    </div>
  </>
);
}
