import React from "react";
import { motion } from "framer-motion";
import { data } from "./ProjectsData";
import AOS from "aos";

export default function ImageGrid({ setSelectedImg, setSelectedImgData }) {
  // const { loading, data } = useQuery(getPackages);
  const [selectedCategory, setSelectedCatgeory] = React.useState("all");
  const [activePackages, setActivePackages] = React.useState(null);

  React.useEffect(() => {
    document.querySelector(".active").classList.remove("active"); //getting the active category
    document.querySelector(`.${selectedCategory}`).classList.add("active"); //removing the active category
    if (selectedCategory === "all") {
      setActivePackages(data);
      return;
    } // if cateogry is all then return projects from all categories

    const filteredprojects = // if its other than all only return projects from that category
      data &&
      data.filter(({ category }) => {
        return category.includes(selectedCategory);
      });
    // setting packages accroding to the active category
    setActivePackages(filteredprojects);
  }, [selectedCategory]);

  React.useEffect(() => {
    AOS.refresh();
  }, [activePackages]);

  return (
    <div>
      <div className="items">
        <span
          className="item all active"
          onClick={() => setSelectedCatgeory("all")}
        >
          React
        </span>
        <span
          className="item NodeJS"
          onClick={() => setSelectedCatgeory("NodeJS")}
        >
          Node
        </span>
        <span
          className="item Redux"
          onClick={() => setSelectedCatgeory("Redux")}
        >
          Redux
        </span>

        <span className="item SASS" onClick={() => setSelectedCatgeory("SASS")}>
          SASS
        </span>
      </div>
      <div id="img-grid" data-aos="fade-up" data-aos-duration="1500">
        {data &&
          activePackages &&
          activePackages.map((doc) => (
            <motion.div
              id="img-wrap"
              key={doc.name}
              layout
              whileHover={{ opacity: 1 }}
            >
              <motion.img
                src={doc.image2}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0 }}
                alt="uploaded pic"
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
                      github: doc.github,
                    });
                  }}
                >
                  LERAN MORE
                </button>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
}
