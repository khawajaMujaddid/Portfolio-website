import React from "react";
import { motion } from "framer-motion";
import { data } from "./ProjectsData";
import redux from "../../assets/react-blog.jpg";

export default function ImageGrid({ setSelectedImg }) {
  return (
    <div id="img-grid">
      {data &&
        data.map((doc) => (
          <motion.div
            id="img-wrap"
            key={doc.name}
            layout
            whileHover={{ opacity: 1 }}
            s
            onClick={() => setSelectedImg(doc.image)}
          >
            <motion.img
              src={redux}
              alt="uploaded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
}
