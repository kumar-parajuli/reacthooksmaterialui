import React from "react";
import { useFormik } from "formik";

const initialValues = {
  firstName: "kumar",
  lastName: "",
  email: "",
};

const onSubmit = (values) => {
  console.log("Form data", values);
};

const validate = (values) => {
  //values.firstname values.lastname values.email//
  let errors = {};

  if (!values.FirstName) {
    errors.firstName = "Required";
  }
  if (!values.LastName) {
    errors.lastName = "Required";
  }
  if (!values.Email) {
    errors.email = "Required";
  }
  return errors;
};

const SignupForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  console.log("Form errors", formik.errors);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">FirstName</label>
          <br />

          <input
            type="text"
            name="firstname"
            id="firstname"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          {formik.errors.FirstName ? (
            <div>{formik.errors.firstName}</div>
          ) : null}
          <br />
        </div>

        <div className="form-control">
          <label htmlFor="lastName">Last Name</label>
          <br />
          <input
            type="text"
            name="lastname"
            id="lastname"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          {formik.errors.lastName ? <div>{formik.errors.LastName}</div> : null}
          <br />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email Address</label>
          <br />

          <input
            type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />

          {formik.errors.Email ? <div>{formik.errors.email}</div> : null}
          <br />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignupForm;
