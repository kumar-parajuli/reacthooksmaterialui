import React from "react";
import { useFormik } from "formik";
// import './App.css';

const YoutubeForm = () => {
  const formik = useFormik({
    initalValues: {
      name: "",
      email: "",
      channel: "",
    },
    onSubmit: (values) => {
      console.log("Form data", values);
    },
  });

  //   console.log("Form values", formik.values);

  return (
    <div
      style={{
        justifyContent: "center",
        textAlign: "center",
        marginTop: "20px",
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name"> Name</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <br />
        <lable htmlFor="email">EMail</lable>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <br />
        <lable htmlFor="channel">Channel</lable>
        <br />
        <input
          type="text"
          id="channel"
          name="channel"
          onChange={formik.handleChange}
          value={formik.values.channel}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default YoutubeForm;
