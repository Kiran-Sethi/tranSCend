
import React,{useState} from 'react';
import Table from 'react-bootstrap/Table'

export default function Mytable(props){

const  getKeys = ()=>
{
  // const key=['Model','Type','Notebook','Dataset','Stats']  
  const key=['modelName','Type','notebook','dataName','download',"Species","Organ"]  

  return key;
}

const getRows=()=>
{
  // var data=[{"Model":"SCVI_class","Dataset":"some_path","Notebook":"source_link","Type":"classification",'Stats':"99k"},{"Model":"SCVI_class","Dataset":"some_path","Notebook":"source_link","Type":"classification",'Stats':"99k"}]
//   var data=[
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

  var data=props.data
  // var items = this.props.data;
  var items = data;

  var keys = getKeys();

  return items.map((row, index)=>{
  return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>

  })
    
}

const RenderRow = (props) =>{
  return props.keys.map((key, index)=>{
      return <td key={props.data[key]}>{props.data[key]}</td>
      })
  
 }

 

const getHeader=()=>{
    var keys = getKeys();
    var keymap={'modelName':'MODEL','Type':'TYPE','notebook':'NOTEBOOK','dataName':'DATA','download':'DOWNLOAD',"Species":'SPECIES',"Organ":'ORGAN'} // mapping the header name with the api field name
    return keys.map((key, index)=>{
    // return <th key={key}>{key.toUpperCase()}</th>
    return <th key={key}>{keymap[key]}</th>

    })


};

return(
    <>
    <Table responsive>
    <thead>
    <tr>{getHeader()}</tr>
    </thead>
  <tbody>
    {getRows()}

    {/* <tr>
      <td>1</td>
      {Array.from({ length: 4 }).map((_, index) => (
        <td key={index}>Table cell {index}</td>
      ))}
    </tr> */}
    {/* <tr>
      <td>2</td>
      {Array.from({ length: 4}).map((_, index) => (
        <td key={index}>Table cell {index}</td>
      ))}
    </tr>
    <tr>
      <td>3</td>
      {Array.from({ length: 4 }).map((_, index) => (
        <td key={index}>Table cell {index}</td>
      ))}
    </tr> */}
  </tbody>
</Table>
    
    
    
    
    </>
)


}