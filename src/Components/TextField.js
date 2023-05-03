import React from "react";
import { useField, Form, FormikProps, Formik } from "formik";

const TextField = (props) => {
  const [field, meta] = useField(props);
  return (
    <>
      <input {...field} {...props} />

      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
