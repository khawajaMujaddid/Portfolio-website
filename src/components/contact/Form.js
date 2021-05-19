import React from "react";

export default function ContactForm() {
  const [formData, setData] = React.useState({
    email: "",
    name: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="input_field"
          type="text"
          value={formData.firstName}
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
        <button type="submit" id="form_submit_btn">
          Send
        </button>
      </form>
    </div>
  );
}
