import React, { useState } from "react";
import Select from "react-select";
import "../App.css";
// import uploadIcon from "./img/uploadicon.png";
import $ from "jquery";
import { useHistory } from "react-router-dom";
import styled, { createGlobalStyle, css } from "styled-components";
import axios from "axios";
import CreatableSelect from "react-select/creatable";
// import "bootstrap.bundle.min.js/bootstrap.bundle.js";

// const GlobalStyle = createGlobalStyle`
//   html {
//      height: 320%;

//   }
//   body {
//     font-family: Arial, Helvetica, sans-serif;
//     background: linear-gradient(to bottom, #F5E8F5, #C4C4C4);
//     height: 80%;
//     margin-top: 410px;
//     color: #555;
//   }
// `;
$("input[required]").parent("StyledForm").addClass("required");
//one beautiful line of Jquery that's all it takes.

// $(function () {
//   $('[data-toggle="tooltip"]').tooltip();
// });

const sharedStyles = css`
  background-color: #eee;
  height: 1rem;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

// margin: 10px 460px 20px 0;
const StyledLabel = styled.label`
  font-weight: bold;
`;
const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // height: 100%;
  padding: 0px 20px;
`;

const StyledForm = styled.form`
  margin: 100px 0px 50px 0px;
  width: 150%;
  max-width: 1200px;
  padding: 30px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
`;

const StyledButton = styled.button`
  margin-top: 10px;
  display: block;
  background-color: #f7797d;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

const customStyles = {
  control: (base, state) => ({
    ...base,
    background: "rgb(243 244 246)",
    height: "2.6rem",
    paddingLeft: "0.375rem",

    // match with the menu
    // borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
    // // Overwrittes the different states of border
    // borderColor: state.isFocused ? "yellow" : "green",
    // // Removes weird border around container
    // boxShadow: state.isFocused ? null : null,
    // "&:hover": {
    //   // Overwrittes the different states of border
    //   borderColor: state.isFocused ? "red" : "blue",
    // },
  }),
  // menu: (base) => ({
  //   ...base,
  //   // override border radius to match the box
  //   borderRadius: 0,
  //   // kill the gap
  //   marginTop: 0,
  // }),
  // menuList: (base) => ({
  //   ...base,
  //   // kill the white space on first and last option
  //   padding: 0,
  // }),
};

const SpeciesOptions = [
  { label: "mouse", value: "mouse" },
  { label: "human", value: "human" },
];

const OrgansOptions = [
  { label: "blood", value: 1 },
  { label: "pancreas", value: 2 },
  { label: "brain", value: 3 },
];

const dataNameOptions = [
  { label: "pbmc6k", value: 1 },
  { label: "pbmc11k", value: 2 },
  { label: "pbmc68k", value: 3 },
  { label: "pbmc60k", value: 4 },
];

const ModelUpload = () => {
  let myStyle = {
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
  };

  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [occupation, setOccupation] = useState("");

  const [Species, setSpecies] = useState("human");
  const [Organ, setOrgan] = useState("");

  const [model_file, setModel_File] = useState(null);
  // const [notebook_file, setNotebook_File] = useState(null);

  const [modelName, setModelName] = useState("");
  const [modelPath, setModelPath] = useState("");
  const [modelInfo, setModelInfo] = useState("");
  const [Type, setType] = useState("");
  const [notebook, setNotebook] = useState("");

  const [dataName, setDataName] = useState("");
  const [cellCount, setCellCount] = useState("");
  const [geneCount, setGeneCount] = useState("");

  const [dataPath, setDataPath] = useState("");
  const [dataInfo, setDataInfo] = useState("");

  // handleFile(e){

  //   console.log(e.target.files, "$$$$");
  //   console.log(e.target.files[0], "$$$$");

  // }

  const AddDatasetInfo = async () => {
    let formField = new FormData();

    formField.append("name", name);
    formField.append("email", email);
    formField.append("occupation", occupation);

    formField.append("Species", Species);
    formField.append("Organ", Organ);

    formField.append("model_file", model_file);
    // formField.append("notebook_file", notebook_file);

    formField.append("modelName", modelName);
    formField.append("modelPath", modelPath);
    formField.append("modelInfo", modelInfo);
    formField.append("Type", Type);
    formField.append("notebook", notebook);

    formField.append("dataName", dataName);
    formField.append("cellCount", cellCount);
    formField.append("geneCount", geneCount);

    formField.append("dataPath", dataPath);
    formField.append("dataInfo", dataInfo);

    await axios({
      method: "post",
      url: "http://localhost:8000/api/data",
      data: formField,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        console.log(response.data);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {/* <GlobalStyle /> */}
      <div
        style={{
          fontFamily: "Arial, Helvetica, sans-serif",
          background: "linear-gradient(to bottom, #F5E8F5, #C4C4C4)",
        }}
      >
        <StyledFormWrapper>
          <StyledForm className="needs-validation" novalidate>
            <h2 style={myStyle}> Model Upload </h2>

            <div className="card" style={{ marginTop: "20px" }}>
              <div className="card-header text-white bg-dark">
                <h5 className="mb-0">User Information</h5>
              </div>

              <div className="card-body">
                <StyledLabel htmlFor="name" className="required">
                  Name
                </StyledLabel>
                <StyledInput
                  required
                  type="text"
                  id="name"
                  className="form-control form-control-md"
                  placeholder="Enter your name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <StyledLabel htmlFor="email" className="required">
                  Email
                </StyledLabel>

                <StyledInput
                  required
                  type="email"
                  className="form-control form-control-md"
                  placeholder="Enter your email id "
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <StyledLabel htmlFor="occupation">Occupation</StyledLabel>

                <StyledInput
                  type="text"
                  className="form-control form-control-md"
                  placeholder="Enter your occupation"
                  name="occupation"
                  value={occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                />
              </div>
            </div>

            {/* <div className="Form-group"> */}
            {/* <div className="Form-group"> */}

            <div className="card" style={{ marginTop: "20px" }}>
              <h5 className="card-header text-white bg-dark">
                Model Information{" "}
              </h5>
              <div className="card-body">
                <StyledLabel htmlFor="modelName">Model Name</StyledLabel>
                <StyledInput
                  type="text"
                  className="form-control form-control-md"
                  placeholder="Enter your model name"
                  name="modelName"
                  value={modelName}
                  onChange={(e) => setModelName(e.target.value)}
                />

                <StyledLabel htmlFor="modelPath">
                  Model Weights downloadable link (optional)
                </StyledLabel>

                <StyledInput
                  type="text"
                  className="form-control form-control-md"
                  placeholder="Enter model weights downloadable link "
                  name="modelPath"
                  value={modelPath}
                  onChange={(e) => setModelPath(e.target.value)}
                />

                <StyledLabel htmlFor="modelInfo">
                  Model source/reference
                </StyledLabel>
                <StyledInput
                  type="text"
                  className="form-control form-control-md"
                  placeholder="Enter model source/reference"
                  name="modelInfo"
                  value={modelInfo}
                  onChange={(e) => setModelInfo(e.target.value)}
                />

                <StyledLabel htmlFor="Type">
                  Type of task performed by model
                </StyledLabel>
                <StyledInput
                  type="text"
                  className="form-control form-control-md"
                  placeholder="Enter Type of task performed like batch/clustering"
                  name="Type"
                  value={Type}
                  onChange={(e) => setType(e.target.value)}
                />

                <StyledLabel htmlFor="notebook">
                  Link to notebook or code (optional)
                </StyledLabel>
                <StyledInput
                  type="text"
                  className="form-control form-control-md"
                  placeholder="Enter link to notebook or code"
                  name="notebook"
                  value={notebook}
                  onChange={(e) => setNotebook(e.target.value)}
                />
              </div>
            </div>

            {/* </div> */}

            {/* <div className="Form-group"> */}

            {/* </div> */}

            {/* <div className="Form-group"> */}

            {/* </div> */}

            {/* <div className="Form-group"> */}

            {/* </div> */}

            {/* <div className="Form-group"> */}

            {/* </div> */}

            {/* <div className="Form-group"> */}

            <div className="card " style={{ marginTop: "20px" }}>
              <div className="card-header text-white bg-dark">
                <h5 className="mb-0">File Uploads</h5>
              </div>

              <div className="card-body">
                <StyledLabel htmlFor="model_file" className="required">
                  Upload File (only one zip file containing the Model weights,
                  Notebook/Code and Dataset)
                </StyledLabel>
                {/* <img
                  className="file-uploader-icon"
                  src={uploadIcon}
                  alt="Upload-Icon"
                /> */}
                <input
                  required
                  style={{ marginTop: "8px" }}
                  type="file"
                  className="form-control form-control-md"
                  // placeholder="Enter Species like human, mouse etc."
                  name="model_file"
                  // value={Species}
                  onChange={(e) => setModel_File(e.target.files[0])}
                />

                {/* <StyledLabel
                htmlFor="notebook_file"
                style={{ marginTop: "12px" }}
              >
                Select Notebook File
              </StyledLabel>
              <input
                style={{ marginTop: "6px" }}
                type="file"
                className="form-control form-control-lg"
                // placeholder="Enter Species like human, mouse etc."
                name="notebook_file"
                // value={Species}
                onChange={(e) => setNotebook_File(e.target.files[0])}
              /> */}
              </div>
            </div>

            <div className="card" style={{ marginTop: "20px" }}>
              <div className="card-header text-white bg-dark">
                <h5 className="mb-0">Dataset Information</h5>
              </div>

              <div className="card-body">
                <div className="flex flex-row space-x-4">
                  <div className="basis-1/2">
                    <StyledLabel htmlFor="Species" className="required">
                      Species
                    </StyledLabel>
                    {/* <StyledInput
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter Species like human, mouse etc."
                    name="Species"
                    value={Species}
                    onChange={(e) => setSpecies(e.target.value)}
                  /> */}
                    <CreatableSelect
                      required
                      isClearable
                      styles={customStyles}
                      name="Species"
                      className=" text-small font-medium mt-2"
                      // value={SpeciesOptions.value}
                      options={SpeciesOptions}
                      onChange={(e) =>
                        e != null ? setSpecies(e.value) : setSpecies("")
                      }
                      placeholder="Select species"
                    />
                  </div>

                  <div className="basis-1/2">
                    <StyledLabel htmlFor="Organ" className="required">
                      Tissue/Organ you trained your model on
                    </StyledLabel>
                    {/* <StyledInput
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter Tissue/Organ like blood, pancreas etc."
                    name="Organ"
                    value={Organ}
                    onChange={(e) => setOrgan(e.target.value)}
                  /> */}
                    <Select
                      required
                      styles={customStyles}
                      name="Organ"
                      className=" text-small font-medium mt-2"
                      // value={SpeciesOptions.value}
                      options={OrgansOptions}
                      onChange={(e) => setOrgan(e.label)}
                      placeholder="Select tissue/organ"
                    />
                  </div>
                </div>

                <div className="flex flex-row space-x-4 mt-3">
                  <div className="basis-1/2">
                    <StyledLabel htmlFor="dataName">Dataset Name</StyledLabel>
                    <Select
                      styles={customStyles}
                      name="dataName"
                      className=" text-md font-medium mt-2.5"
                      // value={SpeciesOptions.value}
                      options={dataNameOptions}
                      onChange={(e) => setDataName(e.label)}
                      placeholder="Select dataset"
                    />
                  </div>

                  <div className="basis-1/2">
                    <StyledLabel htmlFor="cellCount">
                      Number of Cells in dataset
                    </StyledLabel>
                    <StyledInput
                      type="text"
                      className="form-control form-control-md"
                      placeholder="Enter number of cells present in the dataset"
                      name="cellCount"
                      value={cellCount}
                      onChange={(e) => setCellCount(e.target.value)}
                    />
                  </div>
                </div>

                {/* <StyledInput
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Dataset name"
                name="dataName"
                value={dataName}
                onChange={(e) => setDataName(e.target.value)}
              /> */}

                <StyledLabel htmlFor="geneCount">
                  Number of Genes in dataset
                </StyledLabel>
                <StyledInput
                  type="text"
                  className="form-control form-control-md"
                  placeholder="Enter number of genes"
                  name="geneCount"
                  value={geneCount}
                  onChange={(e) => setGeneCount(e.target.value)}
                />

                <StyledLabel htmlFor="dataPath">
                  Dataset downloadable link
                </StyledLabel>
                <StyledInput
                  type="text"
                  className="form-control form-control-md"
                  placeholder="Enter dataset downloadable link"
                  name="dataPath"
                  value={dataPath}
                  onChange={(e) => setDataPath(e.target.value)}
                />

                <StyledLabel htmlFor="dataInfo">
                  Dataset source/platform
                </StyledLabel>
                <StyledInput
                  type="text"
                  className="form-control form-control-md"
                  placeholder="Enter dataset source/platform like 10xgenomics etc."
                  name="dataInfo"
                  value={dataInfo}
                  onChange={(e) => setDataInfo(e.target.value)}
                />
              </div>
            </div>

            {/* </div> */}

            <StyledButton className="btn btn-success" onClick={AddDatasetInfo}>
              {" "}
              Upload Model
            </StyledButton>
            {/* </div> */}
          </StyledForm>
        </StyledFormWrapper>
      </div>
    </>
  );
};

export default ModelUpload;
