import React from "react";
import Axios from "axios";
import {
  NotificationManager,
  NotificationContainer,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

export default function ContactForm() {
  const [formData, setData] = React.useState({
    email: "",
    name: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    Axios.post("https://test-emailserver.herokuapp.com/sendEmail", formData)
      .then((_) => {
        NotificationManager.success(
          "Email sent",
          "I'll be in contact with you shortly",
          4000
        );
        setData({ email: "", name: "", message: "" });
      })
      .catch((error) => {
        NotificationManager.error("Error message", `${error}`, 5000);
      });
  };
  return (
    <div
      style={{ zIndex: "100" }}
      data-aos="fade-up"
      data-aos-offset="10"
      data-aos-duration="1700"
    >
      <form onSubmit={handleSubmit}>
        <input
          id="input_field"
          type="text"
          value={formData.name}
          onChange={(e) => setData({ ...formData, name: e.target.value })}
          required
          placeholder="Name (1-12 char)"
        />

        <br />
        <input
          id="input_field"
          type="email"
          value={formData.email}
          onChange={(e) => setData({ ...formData, email: e.target.value })}
          required
          placeholder="Email"
        />

        <br />
        <textarea
          id="message"
          type="text"
          value={formData.message}
          onChange={(e) => setData({ ...formData, message: e.target.value })}
          pattern="[A-Za-z]{1,300}"
          required
          placeholder="Message (>1)"
        />
        <br />
        <NotificationContainer />
        <button type="submit" id="form_submit_btn">
          Send
        </button>
      </form>
    </div>
  );
}
