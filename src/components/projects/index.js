import React from "react";
import ImageGrid from "./ImageGrid";
import Modal from "./Modal";
import "../../styles/projects.scss";

export default function Projects() {
  const [selectedImg, setSelectedImg] = React.useState(null);
  const [selectedImgData, setSelectedImgData] = React.useState({
    description: null,
    deployed: null,
  });
  
   
    


  return (
    <div style={{ marginTop: "15vh" }}>
      <div id="projects-container">
        <div id="heading_container">
          <h2 id="heading">Projects</h2>
          <h2 id="heading_bar">{}</h2>
        </div>
        <ImageGrid
          setSelectedImg={setSelectedImg}
          setSelectedImgData={setSelectedImgData}
        />
        {selectedImg && (
          <Modal
            selectedImg={selectedImg}
            setSelectedImg={setSelectedImg}
            selectedImgData={selectedImgData}
            setSelectedImgData={setSelectedImgData}
          />
        )}
      </div>
    </div>
  );
}
