import React from "react";
import { motion } from "framer-motion";
import { data } from "./ProjectsData";

export default function ImageGrid({ setSelectedImg, setSelectedImgData }) {
  return (
    <div id="img-grid">
      {data &&
        data.map((doc) => (
          <motion.div
            id="img-wrap"
            key={doc.name}
            layout
            whileHover={{ opacity: 1 }}
          >
            <motion.img
              src={doc.image2}
              alt="uploaded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
            <div id="overlay">
              <div id="project-name">{doc.name}</div>
              <div id="project-technologies">{doc.technologies}</div>
              <button
                id="project-modal-btn"
                onClick={() => {
                  setSelectedImg(doc.image);
                  setSelectedImgData({
                    description: doc.description,
                    deployed: doc.deployed,
                  });
                }}
              >
                LERAN MORE
              </button>
            </div>
          </motion.div>
        ))}
    </div>
  );
}
