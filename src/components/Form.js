import axios from "axios";
import React, { useState } from "react";

export default function Form() {
  const [formState, setFormState] = useState({
    email: "",
    name: "",
    message: "",
  });
  const formId = "VqdY7InM";
  const formSparkUrl = `https://submit-form.com/${formId}`;

  const submitForm = async (event) => {
    event.preventDefault();
    await postSubmission();
  };

  const postSubmission = async () => {
    const payload = {
      ...formState
    };
    try {
      const result = await axios.post(formSparkUrl, payload);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const updateFormControl = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className="container mt-5 col-md-3">
      <h1>Contact Me</h1>
      <form className="col g-3 " onSubmit={submitForm}>
        <div className="form-group ">
          <label htmlFor="name">Name</label>
          <input
            type="name"
            className="form-control"
            onChange={updateFormControl}
            value={formState.name}
            id="name"
            name="name"
            aria-describedby="nameHelp"
            placeholder="Enter name"
          />
          <small id="emailHelp" className="form-text text-muted"></small>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            onChange={updateFormControl}
            value={formState.email}
            className="form-control"
            id="email"
            placeholder="Enter email"
          />
        </div>
        <div className="form-check">
          <textarea
            className="form-control"
            value={formState.message}
            onChange={updateFormControl}
            id="message"
            name="message"
            placeholder="Enter Message"
            rows="5"
          ></textarea>
          <label className="form-check-label" htmlFor="Textarea1"></label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
