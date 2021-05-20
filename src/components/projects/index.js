import React from "react";
import ImageGrid from "./ImageGrid";
import Modal from "./Modal";
import "../../styles/projects.scss";

export default function Projects() {
  const [selectedImg, setSelectedImg] = React.useState(null);
  return (
    <div id="projects-container">
      <div id="heading_container">
        <h2 id="heading">Projects</h2>
        <h2 id="heading_bar">{}</h2>
      </div>
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}
