import React from "react";
import { Formik } from "formik";
import { object, string } from "yup";
import TextField from "./TextField";



const App5 = () => {
  const userLoginSchema = object({
    email: string().email().required(),
    password: string().required().min(7).max(30),
  });
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(data) => {
          console.log(data);
          console.log("form submitted");
        }}
        validationSchema={userLoginSchema}
        // validate={(values) => {
        //   console.log("validate values:", values);

        //   if (values.email.length < 1) {
        //     return { email: "email field is required" };
        //   }
        // }}
      >
        {({ errors, handleChange, handleSubmit, values }) => {
          return (
            <form onSubmit={handleSubmit}>
                <label>Email</label>
              <TextField name="email" placeholder="email address" />
             
              <br />
              <label>Password</label>
              <TextField name="password"  type="password" placeholder="password"/>
              
              <br />
              <input type="Submit" />
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default App5;
