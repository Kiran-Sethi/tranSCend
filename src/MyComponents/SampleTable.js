import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MaterialTable from "material-table";
import {Link} from '@material-ui/core';
import axios from 'axios';
import downloadImg from './img/download.png'


import {
  // Table,
  // TableBody,
  // TableCell,
  // TableContainer,
  // TableHead,
  // TableRow,
  Paper,
  // Avatar,
  // Grid,
  // Typography,
  // TablePagination,
  // TableFooter,
} from "@material-ui/core";

export const SampleTable = (props) => {
  //   var d = props.data;

  //   print("---------------x------------------");
  //   print(d);
  //   const data = [
  //     {
  //       modelName: "xyz",
  //       type: "class",
  //       notebook: "link",
  //       dataName: "pbmc6k",
  //       download: 0,
  //       Species: "human",
  //       Organ: "blood",
  //     },
  //   ];

  // const columns = [
  //   { title: "MODELNAME", field: "modelName" },
  //   { title: "TYPE", field: "Type" },
  //   { title: "NOTEBOOK", field: "notebook" },
  //   { title: "DATANAME", field: "dataName" },
  //   { title: "DOWNLOAD", field: "download" },
  //   { title: "SPECIES", field: "Species" },
  //   { title: "ORGAN", field: "Organ" },
  // ];
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
       link.href=url;
       link.setAttribute('download','name.ipynb')
       // link.setAttribute('download',modelName+".ipynb")

       document.body.append(link)
       link.click()
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
       //

       return link
     })
     .catch((err) => {
       console.log(err);
     });


 }

  const columns = [
    { title: "MODELNAME", field: "modelName" ,render:rowData=><>{}<Link href={`../modelcard?model=${rowData.modelName}`}>{rowData.modelName}</Link></>},
    { title: "NOTEBOOK", field: "notebook" ,render:rowData=><button onClick={() =>getNotebook(rowData,rowData.notebook, rowData.modelName)}>
      <div class="container " style={{width:"80px",height:"20"}}><img  style={{
      marginTop: "2rem",
      // marginLeft: "4rem",
      height: ".2",
      width: ".2",
    }}src={downloadImg} /></div>
      </button>},

    { title: "DATANAME", field: "dataName" },
    { title: "DOWNLOAD", field: "download" ,render:rowData=><stop>{rowData.download}</stop>},



    { title: "SPECIES", field: "Species" },
    { title: "ORGAN", field: "Organ" },
  ];


  return (
    <div>
      <MaterialTable
        style={{
          borderTop: "2px solid gray",
          borderBottom: "2px solid gray",
          borderRadius: "20px",
          borderRight: "2px solid gray",
          borderLeft: "2px solid gray",
        }}
        component={Paper}
        title="Available Models"
        data={props.data}
        columns={columns}
        options={{
          title: false,
          search: true,
          pagination: true,
          filtering: true,
          headerStyle: {
            backgroundColor: "gray",
            color: "black",
            fontWeight: "bold",
            // position:"relative",
            // overflow:"hidden", 
          },
        }}
      />
    </div>
  );
};
