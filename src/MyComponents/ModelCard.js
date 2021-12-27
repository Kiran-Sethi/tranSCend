import { createGlobalStyle } from "styled-components";
import Card from 'react-bootstrap/Card'
import React, { useState } from 'react';
import axios from 'axios';


// https://www.daggala.com/passing-props-through-link-in-react-router/ ; currently fetching data again ,data corresponding to the model, need to be improvised



const GlobalStyle = createGlobalStyle`
 
body {
  background: linear-gradient(to bottom, #403B4A, #E7E9BB);
  
}
`;




export default function ModelCard(props) {
  let myStyle = {
    textAlign: "center",
  };

  const [Card_data,setCarddata]=useState({}) 

  React.useEffect(() => {
    // axios.get("http://localhost:8000/api/modelCard/?modelName="+SCVI_blood_pbmc68k+'').then((response) => {
    axios.get("http://localhost:8000/api/modelCard/?modelName="+'SCVI_blood_pbmc68k'+'').then((response) => {

      console.log("response.data",response.data[0]);
      setCarddata(response.data[0])
  
     
  
    });
  
  
  
  
  }, []);









  
  return (

    <div className="my-20 flex flex-col items-center" >
      <GlobalStyle />

      <div className="card w-full mx-2 my-2  sm:w-2/3 opacity-80">
  <div className="card-header">
    <h5 className="card-title px-4 ">Model Card</h5>
  </div>
  <div className="card-body   ">
    <p className="card-text px-4 ">All the information related to the model,data on which it is trained on,how to use it and the description can be found here.</p>
    
  </div>
</div>  

      
      <Card className="my-2 mx-1 px-4 py-4 mx-2 w-full sm:w-2/3  hover:shadow-lg opacity-80">
        <Card.Body className="">
          <Card.Title >Model Information</Card.Title>
          <div className="flex space-x-2 ">
            < Card.Text>Model Name : </Card.Text>
            {/* < Card.Text> SCVI_lung_epithelial </Card.Text> */}
            < Card.Text> {Card_data.modelName} </Card.Text>

          </div>

          <div className="flex space-x-2">
            < Card.Text>Publication : </Card.Text>
            {/* <a href="https://doi.org/10.1038/s41592-018-0229-2" className="card-link">https://doi.org/10.1038/s41592-018-0229-2 </a> */}
            <a href={Card_data.modelInfo}className="card-link">{Card_data.modelInfo} </a>

          </div>


          {/* <div className="flex space-x-2">
            < Card.Text>Git Repo : </Card.Text>
            <a href="https://github.com/YosefLab/scvi-tools" className="card-link">https://github.com/YosefLab/scvi-tools </a>
            <a href="https://github.com/YosefLab/scvi-tools" className="card-link">https://github.com/YosefLab/scvi-tools </a>

          </div> */}

        </Card.Body>
      </Card>



      <Card className="my-2 mx-1 px-4 py-4 w-full sm:w-2/3 opacity-80">
        <Card.Body>
          <Card.Title  >Description</Card.Title>
          <div className="flex space-x-2">
            {/* < Card.Text> SCVI is a generative model intended for analysis of scRNAseq data.
              It explicitly models two chief nuisance factors in scRNAseq data i.e. library size and batch effects.
              It is based on a hierarchical bayesian model with conditional distributions specified by neural networks.
              In some detail, the observed expression xng of each gene g in cel n is modeled as a sample drawn from a zero-inflated negative binomial (ZINB) distribution p(xng|zn,sn,ln). Here sn is the batch annotation of each cell(if available) and ln and zn are two additional unobserved random variables.
              ln which is a one dimensional gaussian RV that represents nuisance variation due to differences in capture efficiency and sequencing depth.
              Zn is a low dimensional vector of Gaussian that represents variation owing to biological differences between cells.
              Each cell is represented as a point in a low dimensional latent space. This representation can be used for clustering and subsequent visualization.
              A neural network is used to map the latent variables to the parameters of the ZINB distribution. The mapping is processed to incorporate batch-correction.
            </Card.Text> */}
            < Card.Text> {Card_data.description}
            </Card.Text>
          </div>
        </Card.Body>
      </Card>



      <Card className="my-2 px-4 py-4 mx-2 w-full sm:w-2/3 opacity-80">
        <Card.Body>
          <Card.Title  >Data Information</Card.Title>
          <div className="flex space-x-2">
            < Card.Text>Data  : </Card.Text>
            {/* < Card.Text> lung epithelial cells</Card.Text> */}
            < Card.Text> {Card_data.dataName}</Card.Text>

          </div>

          <div className="flex space-x-2">
            < Card.Text>Source : </Card.Text>
            {/* <a href="https://ftp.ncbi.nlm.nih.gov/geo/series/GSE158nnn/GSE158127/suppl/GSE158127_01epithelial.h5ad.gz" className="card-link">https://ftp.ncbi.nlm.nih.gov/geo/series/GSE158nnn/GSE158127/suppl/GSE158127_01epithelial.h5ad.gz </a> */}
            <a href={Card_data.dataPath} className="card-link">{Card_data.dataPath}</a>

          </div>


          <div className="flex space-x-2">
            < Card.Text>No of cells : </Card.Text>
            {/* < Card.Text> 37294</Card.Text> */}
            < Card.Text> {Card_data.cellCount}</Card.Text>

          </div>

          <div className="flex space-x-2">
            < Card.Text>No of genes : </Card.Text>
            {/* < Card.Text> 19202 </Card.Text> */}
            < Card.Text>{Card_data.geneCount} </Card.Text>

          </div>

        </Card.Body>
      </Card>

  <Card className="my-2  mx-2 px-4 w-full sm:w-2/3 opacity-80">
    <Card.Body>

    <Card.Title>How To Use</Card.Title>  
    
    <div className=''>
    <Card.Text>A stepwise tutorial for how to finetune the pretrained model can be found here</Card.Text>
    <a href={Card_data.notebook_file} className="card-link">{Card_data.notebook_file}</a>

    </div>



    </Card.Body>
  </Card>
  





    </div>
  )
}