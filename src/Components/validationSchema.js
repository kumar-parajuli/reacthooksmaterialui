import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import TextField from "../TextField";
const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export const ValidationSchema = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
      }}
      ValidationSchema={SignupSchema}
      const
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form style={{ textAlign: "center", justifyContent: "center" }}>
          {/* <label>Firstname</label>
          // <br /> */}
          <Field name="firstName" />
          <br />
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          {/* <label>lastname</label>
          <br /> */}
          <Field name="lastName" />
          <br />
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}
          {/* <label>Email</label>
          <br /> */}
          <Field name="email" type="email" />
          {/* <br /> */}
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);
