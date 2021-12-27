import React from "react";
import { createGlobalStyle } from "styled-components";
import download_page from "./img/download_page.png";
import model_description from "./img/model_description.png";
import model_upload_page1 from "./img/model_upload_page1.png";
import model_upload_page2 from "./img/model_upload_page2.png";
import model_upload_page3 from "./img/model_upload_page3.png";

const GlobalStyle = createGlobalStyle`
 
  body {
    // background: linear-gradient(to bottom, #403B4A, #E7E9BB);
    background: linear-gradient(to bottom, #F5E8F5, #C4C4C4);
    height: 150%;
    margin-bottom: 10%;
    
  }
`;

export default function Tutorial() {
  return (
    <>
      <GlobalStyle />;
      <div className="ml-16  mr-16">
        <div class="card mt-16 ">
          <div class="card-header text-black font-extrabold">
            {" "}
            Step-1: Getting started - Welcome to tranSCend!
          </div>
          <div class="card-body">
            <h5 class="card-title">Introduction</h5>
            <p class="card-text">
              <br />
              Welcome to the Home page of tranSCend!
              <br />
              <br />
              tranSCend is a platform where pretrained models can be downloaded
              and uploaded. The pretrained models are trained on large datasets
              , and the model weights/parameteres are available to download for
              the user, which can be futher fine-tuned on the desired small
              datasets at the user end. This platform also provides an
              opportunity to the users to upload their own pretrained models
              along with the desired metadata for the verification and
              reproducibility of the code.
              <br />
              At the homepage, user can see the featured models which are
              avaliable for downloading and can upload models. It also provides
              the full guide to use this platform which is available at the
              tutorial button.
            </p>

            <img
              style={{
                marginTop: "2rem",
                // marginLeft: "4rem",
                height: "400",
                width: "1000",
              }}
              src={download_page}
              alt=" Models Download Page "
            ></img>
          </div>
        </div>

        <div class="card mt-8">
          <div class="card-header text-black font-extrabold">
            Step-2: How to Search for Models and Download!
          </div>
          <div class="card-body">
            <h5 class="card-title">Use Download Page</h5>

            <p class="card-text">
              <br />
              In the download page, you can see all the available models which
              can be further explored by clicking the respective model names and
              can be downloaded. To filter the models according to the species
              and organ , you can write appropriate species or organ for the
              same. Further you can query the whole table, using the search bar
              provided at the top right corner of the table. Each column has a
              filter option, which can be used to narrow down the results from
              the avaialable models table. Select the model about which you want
              to know and download, by clicking the model name which will lead
              you to the model description page.
            </p>
            <img
              style={{
                marginTop: "2rem",
                // marginLeft: "4rem",
                height: "400",
                width: "1000",
              }}
              src={download_page}
              alt=" Models Download Page "
            ></img>
          </div>
        </div>

        <div class="card mt-8">
          <div class="card-header text-black font-extrabold">
            Step-3: Explore Description of each model
          </div>
          <div class="card-body">
            <h5 class="card-title">Model Description</h5>
            <p class="card-text">
              <br />
              In the model card page, full description of the model is given. It
              includes all the details of the dataset on which the model is
              trained, along with any publications related to the owner of the
              model. Here all the details can be found about the number of
              cells, number of genes that are used in the input data matrix.
              Also the model architecture has been described in brief to get the
              overall idea of the working model.
              <br />
            </p>

            <img
              style={{
                marginTop: "2rem",
                // marginLeft: "4rem",
                height: "400",
                width: "1000",
              }}
              src={model_description}
              alt=" Model Description Page "
            ></img>
          </div>
        </div>

        <div class="card mt-8">
          <div class="card-header text-black font-extrabold">
            Step-4: How to use the downloaded model
          </div>
          <div class="card-body">
            <h5 class="card-title">Use Notebooks</h5>
            <p class="card-text">
              <br />
              From the table provided in the Download page, download the
              notebook directly by clicking the download icon or if downloadable
              link is given then download from the respective source. You can
              now use the recently downoaded model weights file in the given
              notebook, and following the steps marked in the notebook, you can
              fine tune the pretrained model on the target dataset.
              <br />
            </p>
          </div>
        </div>

        <div className="card mt-8 ">
          <div class="card-header text-black font-extrabold">
            Step-5: Upload your Model!
          </div>
          <div class="card-body">
            <h5 class="card-title">Provide Information</h5>
            <p class="card-text">
              In the upload model page section, you can upload your own models
              along with necessary Information asked in the model upload form.
              From the File uploads section, upload only one zip file containing
              the files related to the pretrained model.Then, the basic
              information is asked about the species and organ/tissue on the
              whch you trained your model.
            </p>

            <img
              style={{
                marginTop: "2rem",
                // marginLeft: "4rem",
                height: "400",
                width: "1000",
              }}
              src={model_upload_page1}
              alt=" Model Description Page "
            ></img>
            <br />
            <p> Here the model information is asked</p>

            <img
              style={{
                marginTop: "2rem",
                // marginLeft: "4rem",
                height: "400",
                width: "1000",
              }}
              src={model_upload_page2}
              alt=" Model Description Page "
            ></img>
            <br />

            <p>
              Here the dataset information is asked which has been used for the
              training purpose.
            </p>

            <img
              style={{
                marginTop: "2rem",
                // marginLeft: "4rem",
                height: "400",
                width: "1000",
              }}
              src={model_upload_page3}
              alt=" Model Description Page "
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}
