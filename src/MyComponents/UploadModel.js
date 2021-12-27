import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled, { createGlobalStyle, css } from "styled-components";
import axios from "axios";

const GlobalStyle = createGlobalStyle`
  html {
    height: 206%
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(to bottom, #403B4A, #E7E9BB);
    height: 100%;
    margin: 0;
    color: #555;
  }
`;

const sharedStyles = css`
  background-color: #eee;
  height: 40px;
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
  height: 190vh;  //change here for height
  padding: 0 20px;
`;

const StyledForm = styled.form`
  margin: 150px 0 20px 0;
  width: 150%;
  max-width: 700px;
  padding: 40px;
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

const UploadModel = () => {
  let myStyle = {
    textAlign: "center",
  };

  const history = useHistory();

  const [Species, setSpecies] = useState("");
  const [Organ, setOrgan] = useState("");

  const [modelName, setModelName] = useState("");
  const [modelPath, setModelPath] = useState("");
  const [modelInfo, setModelInfo] = useState("");
  const [Type, setType] = useState("");
  const [notebook, setNotebook] = useState("");

  const [dataName, setDataName] = useState("");
  const [cellCount, setCellCount] = useState("");
  const [dataPath, setDataPath] = useState("");
  const [dataInfo, setDataInfo] = useState("");

  const AddDatasetInfo = async () => {
    let formField = new FormData();

    formField.append("Species", Species);
    formField.append("Organ", Organ);

    formField.append("modelName", modelName);
    formField.append("modelPath", modelPath);
    formField.append("modelInfo", modelInfo);
    formField.append("Type", Type);
    formField.append("notebook", notebook);

    formField.append("dataName", dataName);
    formField.append("cellCount", cellCount);
    formField.append("dataPath", dataPath);
    formField.append("dataInfo", dataInfo);

    await axios({
      method: "post",
      url: "http://localhost:8000/api/alldata/",
      data: formField,
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
      <GlobalStyle />
      <StyledFormWrapper>
        <StyledForm>
          <h2 style={myStyle}> Model Upload </h2>

          {/* <div className="Form-group"> */}
          {/* <div className="Form-group"> */}
          <StyledLabel htmlFor="Species">Species</StyledLabel>
          <StyledInput
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Species like human, mouse etc."
            name="Species"
            value={Species}
            onChange={(e) => setSpecies(e.target.value)}
          />

          <StyledLabel htmlFor="Organ">
            Tissue/Organ you trained your model on
          </StyledLabel>
          <StyledInput
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Tissue/Organ like blood, pancreas etc."
            name="Organ"
            value={Organ}
            onChange={(e) => setOrgan(e.target.value)}
          />

          <StyledLabel htmlFor="modelName">Model Name</StyledLabel>
          <StyledInput
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter your model name"
            name="modelName"
            value={modelName}
            onChange={(e) => setModelName(e.target.value)}
          />

          {/* </div> */}

          {/* <div className="Form-group"> */}
          <StyledLabel htmlFor="modelPath">
            Model Weights downloadable link
          </StyledLabel>

          <StyledInput
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter model weights downloadable link "
            name="modelPath"
            value={modelPath}
            onChange={(e) => setModelPath(e.target.value)}
          />
          {/* </div> */}

          {/* <div className="Form-group"> */}

          {/* </div> */}

          {/* <div className="Form-group"> */}

          {/* </div> */}

          {/* <div className="Form-group"> */}
          <StyledLabel htmlFor="modelInfo">Model source/reference</StyledLabel>
          <StyledInput
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter model source/reference"
            name="modelInfo"
            value={modelInfo}
            onChange={(e) => setModelInfo(e.target.value)}
          />
          {/* </div> */}

          {/* <div className="Form-group"> */}
          <StyledLabel htmlFor="Type">
            Type of task performed by model
          </StyledLabel>
          <StyledInput
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Type of task performed like batch/clustering"
            name="Type"
            value={Type}
            onChange={(e) => setType(e.target.value)}
          />

          <StyledLabel htmlFor="notebook">Link to notebook or code</StyledLabel>
          <StyledInput
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter link to notebook or code"
            name="notebook"
            value={notebook}
            onChange={(e) => setNotebook(e.target.value)}
          />

          <StyledLabel htmlFor="dataName">Dataset Name</StyledLabel>
          <StyledInput
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Dataset name"
            name="dataName"
            value={dataName}
            onChange={(e) => setDataName(e.target.value)}
          />

          <StyledLabel htmlFor="cellCount">
            Number of cells in dataset
          </StyledLabel>
          <StyledInput
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter number of cells present in the dataset"
            name="cellCount"
            value={cellCount}
            onChange={(e) => setCellCount(e.target.value)}
          />

          <StyledLabel htmlFor="dataPath">
            Dataset downloadable link
          </StyledLabel>
          <StyledInput
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter dataset downloadable link"
            name="dataPath"
            value={dataPath}
            onChange={(e) => setDataPath(e.target.value)}
          />

          <StyledLabel htmlFor="dataInfo">Dataset source/platform</StyledLabel>
          <StyledInput
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter dataset source/platform like 10xgenomics etc."
            name="dataInfo"
            value={dataInfo}
            onChange={(e) => setDataInfo(e.target.value)}
          />

          {/* </div> */}

          <StyledButton className="btn btn-success" onClick={AddDatasetInfo}>
            {" "}
            Upload Model
          </StyledButton>
          {/* </div> */}
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
};

export default UploadModel;
