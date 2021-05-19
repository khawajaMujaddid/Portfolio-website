import React from "react";
import "../../styles/blogs.scss";
import SingleBlog from "./SingleBlog";
import redux from "../../assets/redux-blog.jpg";
import react from "../../assets/react-blog.jpg";
import web from "../../assets/web-blog.jpg";

export default function Blogs() {
  return (
    <div id="blogs-container">
      <div id="heading_container">
        <h2 id="heading">Blogs</h2>
        <h2 id="heading_bar"></h2>
      </div>
      <div id="blogs-section">
        <SingleBlog
          title={"Why one Should use Redux?"}
          date={"May 15, 2021"}
          description={
            "Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark back then."
          }
          image={redux}
          link={
            "https://ibad23ahmad.medium.com/why-one-should-use-redux-e1057c24e6ab"
          }
        />
        <SingleBlog
          title={"Getting Started with React JS"}
          date={"May 11, 2021"}
          description={
            "React is an open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page."
          }
          image={react}
          link={
            "https://ibad23ahmad.medium.com/getting-started-with-react-js-db3bf6134f14"
          }
        />
        <SingleBlog
          title={"Road Map for Web Development"}
          date={"May 8, 2021"}
          description={
            "Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services."
          }
          image={web}
          link={
            "https://ibad23ahmad.medium.com/road-map-for-web-development-in-2021-3ed9b5d56aa9"
          }
        />

        <SingleBlog
          title={"Why one Should use Redux?"}
          description={
            "Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark back then."
          }
          date={"May 15, 2021"}
          image={redux}
          link={
            "https://ibad23ahmad.medium.com/why-one-should-use-redux-e1057c24e6ab"
          }
        />
      </div>
    </div>
  );
}
