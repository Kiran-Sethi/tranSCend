import React,{useEffect, useState} from 'react'

import MaterialTable from "material-table";
import {Link} from '@material-ui/core';
import axios from 'axios';



export const SampleTable = (props) => {
  
  const [downloadCount, setdownloadCount] = useState([])

  React.useEffect(() => {
      if(props.data.length)
       {  var arr=[]
          console.log("data updated",props.data)
          for(var i=0;i<props.data.length;i++)
          {  var row=props.data[i]
             arr.push(row.download)
             
          }
          setdownloadCount(arr)
       } 
      //  getDownloadCount()

  }, [props.data]);
  
  const getDownloadCount=(rowData)=>{
    var download=0
    if (downloadCount.length)
       { download=downloadCount[rowData.Sno-1]
        }
  
    console.log("download value",download)
    return download

  }

  
  
  

  const getNotebook=(rowData,modelLink,modelName)=>{
     axios({
      method: "GET",
      url: "http://localhost:8000/api/downloadNb/",
      // url: modelLink, according to the modelName selected

      //data: formField,
      responseType:'blob'
    })
      .then((response) => {
        console.log(response.data);
        const url=window.URL.createObjectURL(new Blob([response.data]))
        const link=document.createElement('a')
        // link.href=url;
        // link.setAttribute('download','name.ipynb')
        // // link.setAttribute('download',modelName+".ipynb")

        // document.body.append(link)
        // link.click()
        // increase the value of rowData.download
        
        rowData.download=rowData.download+1
        console.log(rowData)
        console.log(props,"props")
        // updating props
        props.data[rowData.Sno]=rowData
        console.log("props after updating",props,"props")

        ///
        ///
        //update api call
        updateDownloadCount(rowData.Sno,downloadCount[rowData.Sno])
        //

        return link
      })
      .catch((err) => {
        console.log(err);
      });


  }

  const updateDownloadCount=(id,count)=>{


    
    // send the post request to update the download value 
    axios({
      method: "POST",
      url: "",

      //data: formField,
    })
      .then((response) => {
        console.log(response.data);
       
      })
      .catch((err) => {
        console.log(err);
      });



  }

  const print=()=>
  {
    console.log("button clicking called")
  }

  const columns = [
    { title: "MODELNAME", field: "modelName" ,render:rowData=><>{}<Link href={`../modelcard?model=${rowData.modelName}`}>{rowData.modelName}</Link></>},
    { title: "TYPE", field: "Type" },
    { title: "NOTEBOOK", field: "notebook" ,render:rowData=><button onClick={() =>getNotebook(rowData,rowData.notebook, rowData.modelName)}>NB</button>},
    // { title: "NOTEBOOK", field: "notebook" ,render:rowData=><button onClick={() =>print()}>NB</button>},

    { title: "DATANAME", field: "dataName" },
    // { title: "DOWNLOAD", field: "download" ,render:rowData=><stop>{getDownloadCount(rowData)}</stop>},
    // { title: "DOWNLOAD", field: "download" ,render:rowData=><stop>{downloadCount[rowData.Sno-1]}</stop>},
    // { title: "DOWNLOAD", field: "download" ,render:rowData=><stop>{rowData.download}</stop>},
    { title: "DOWNLOAD", field: "download" ,render:rowData=><stop>{getDownloadCount(rowData)}</stop>},



    { title: "SPECIES", field: "Species" },
    { title: "ORGAN", field: "Organ" },
  ];

  return (
    <div>
      <MaterialTable
        title="Available Models"
        data={props.data}
        columns={columns}
        options={{
          title: false,
          pagination: true,
        }}
      
      />
    </div>
  );
};

// https://www.youtube.com/watch?v=S7-99HqpWvo
//https://stackoverflow.com/questions/42622526/dropbox-api-v2-javascript-read-file
//https://codesandbox.io/s/material-ui-editable-tables-wsp0c?file=/src/index.js