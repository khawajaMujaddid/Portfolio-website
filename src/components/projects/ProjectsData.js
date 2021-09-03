import gym from "../../assets/gym.PNG";
import travelguide2 from "../../assets/travelguide.jfif";
import instagram from "../../assets/instagram.PNG";
import trimax from "../../assets/trimax.jpg";
import blogging from "../../assets/blogging.PNG";
import portfolio from "../../assets/portfolio.PNG";
import gym2 from "../../assets/gym.jpg";
import travelguide from "../../assets/travelguide.PNG";
import instagram2 from "../../assets/instagram.jpg";
import worko from "../../assets/worko.PNG";
import blogging2 from "../../assets/blogging.jfif";
import portfolio2 from "../../assets/portfolio.jpg";
export const data = [
  {
    name: "Travel Guide",
    image: travelguide,
    image2: travelguide2,
    technologies: " React / GraphQL / Apollo-Client ",
    category: ["React", "NodeJS"],
    github: "https://github.com/IbadAhmad80/Brando-TravelGuide",
    deployed: "https://brando-travelguide.netlify.app/",
    description:
      "Travel Guide Web App. GraphQL used as an API service with Apollo-Client for react",
  },

  {
    name: "Buisniss Agency",
    image: worko,
    image2: trimax,
    technologies: " React / Bootstrap 5.0 ",
    category: ["React"],
    github: "https://github.com/IbadAhmad80/Worko",
    deployed: "https://worko.netlify.app/",
    description:
      "Organization Portfolio styled with CSS Framework Bootstrap and JS UI Library React used as a frontend",
  },
  {
    name: "GymHut - Not Responsive",
    image: gym,
    image2: gym2,
    category: ["React", "Redux", "NodeJS"],
    technologies: " React / Node ",
    github: "https://github.com/IbadAhmad80/GymHut",
    deployed: "https://gymhut.netlify.app/",
    description:
      "Gym website created with MERN Stack and Redux as a State Management Tool",
  },
  {
    name: "Instagram Clone - Not Responsive",
    image: instagram,
    image2: instagram2,
    technologies: " React / Firebase ",
    category: ["React", "SASS"],
    github: "https://github.com/IbadAhmad80/Instagarm-Clone",
    deployed: "https://instagarm-clone-5b04e.web.app/",
    description: "Website with Instagarm basic functionalities embedded in",
  },
  {
    name: "Portfolio",
    image: portfolio,
    image2: portfolio2,
    technologies: " React / SASS ",
    category: ["React", "SASS", "NodeJS"],
    github: "https://github.com/IbadAhmad80/Portfolio",
    deployed: "https://findibad.netlify.app/",
    description: "Portfolio website with CSS Proprocessor SASS and React",
  },

  {
    name: "Blogging Website",
    image: blogging,
    image2: blogging2,
    technologies: " NextJS / Strapi ",
    category: ["React", "SASS", "Redux"],
    github: "https://github.com/IbadAhmad80/Blogging-Web_App",
    deployed: "",
    description:
      "Blogging app with CMS and Server side React as a primary tools",
  },
];
