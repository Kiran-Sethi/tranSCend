import React, { useState } from "react";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { createGlobalStyle } from "styled-components";
import axios from "axios";
import Mytable from "./Table";
// import { SampleTable } from "./SampleTable";
import { SampleTable } from "./SampleTable_copy";

import {MTable}  from "./MTable";

import { alignPropType } from "react-bootstrap/esm/types";

const GlobalStyle = createGlobalStyle`
 
  body {
    background: linear-gradient(to bottom, #403B4A, #E7E9BB);
    height: 90%;
    
  }
`;

const species = [
  { label: "mouse", value: 1 },
  { label: "human", value: 2 },
];

const organs = [
  { label: "blood", value: 1 },
  { label: "pancreas", value: 2 },
  {label:"lung",value:3},
  {label:"kidney",value:4}
];

// this is hardcoded; needed to be fetched
const datas = [
  { label: "pbmc6k", value: 1 },
  { label: "pbmc11k", value: 2 },
  { label: "pbmc68k", value: 3 },
  { label: "pbmc60k", value: 4 },
];

export default function Home(props) {
  let myStyle = {
    marginTop: "100px",
    marginLeft: "220px",
    marginRight: "30px",
    marginBottom: "50px",
  };

  const [specie, setSpecie] = useState("human");
  // const [specie, setSpecie] = useState("");

  const [organ, setOrgan] = useState("blood");
  // const [organ, setOrgan] = useState('');

  const [data, setData] = useState(["pbmc6k"]);
  // const [data,setData]=useState([]);

  const [model_data, setModelNData] = useState([]); //api returning the array of model and data

  const fetchdataName = (resp) => {
    var data = [];

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

    for (let i = 0; i < resp.length; i++) {
      data[i] = resp[i].dataName;
    }

    data = new Set(data);
    data = Array.from(data);
    return data;
  };

  // axios.get("http://localhost:8000/api/alldata/").then((response) => {

  React.useEffect(() => {
    axios.get("http://localhost:8000/api/alldata/").then((response) => {
      console.log(response);
      setModelNData(response.data);

      var dataName = fetchdataName(response.data);
      if (dataName.length != 0) console.log(dataName);
      setData(dataName);
    });
  }, []);

  const fetchFilterData = (arg) => {
    console.log("specie here", specie);
    console.log("arg here", arg);
    // setSpecie(arg)

    var link =
      "http://localhost:8000/api/filterData/?dataName=" +
      data[data.length - 1] +
      "&Species=" +
      specie +
      "&Organ=" +
      organ +
      "";
    axios.get(link).then((response) => {
      console.log(response);
      setModelNData(response.data);
    });
  };

  const selSpecie = (arg) => {
    // setSpecie(arg)
    setSpecie((arg) => {
      return arg;
    });

    // if(organ!=null && data.length!=0)
    //   fetchFilterData()
    setModelNData([]);

    if (specie == arg) fetchFilterData(arg);
  };

  const selOrgan = (arg) => {
    setOrgan(arg);
    console.log(arg);
    setModelNData([]);
    fetchFilterData(arg);
  };

  const selData = (arg) => {
    // setData(arg)
    data.push(arg);
    console.log(arg);
    setModelNData([]);
    fetchFilterData(arg);
  };

  return (
    //  specie ,organ and dataset select ; dynamic table
    <>
      {/* <div
        style={{ background: "linear-gradient(to bottom, #403B4A, #E7E9BB)" , height= ""}}
      > */}
      <GlobalStyle />
      <div style={myStyle}>
        <div className="flex flex-row space-x-28">
          <div
            className=" basis-1/4 ml-40"
            // style={{ marginLeft: "250px" }}
          >
            <label
              htmlFor="title"
              className="ml-28 font-extrabold text-black text-xl"
            >
              Species
            </label>
            <Select options={species} onChange={(e) => selSpecie(e.label)} />
          </div>

          <div className="basis-1/4 relative" style={{ paddingLeft: "15px" }}>
            <label
              htmlFor="title"
              className="ml-28 font-extrabold text-black text-xl"
              // style={{  fontWeight: "bold" }}
            >
              Organ
            </label>
            {/* <div ><Select options={ organs }  defaultValue={{  label: "blood", value: 1  }}  onChange={e => selOrgan(e.label)} /></div> */}
            <Select options={organs} onChange={(e) => selOrgan(e.label)} />
          </div>
        </div>
        <div className="flex flex-row">
          <div
            className="basis-1/4 ml-96 mr-36 mt-8"
            // style={{ overflow: "auto" }}
          >
            <label
              htmlFor="title"
              className="ml-28 font-extrabold text-black text-xl"
            >
              Dataset
            </label>
            {/* <div ><Select options={ datas }  defaultValue={{ label: "pbmc6k", value: 1 }}  onChange={e => selData(e.label)} /></div> */}
            <Select className="absolute" options={datas} onChange={(e) => selData(e.label)} />
          </div>
        </div>
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
      {/* </div> */}
    </>
  );
}
