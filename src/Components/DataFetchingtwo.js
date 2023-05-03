import React, { useReducer } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const initialState = {
  Loading: "true",
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH-SUCESS":
      return {
        Loading: false,
        post: action.payload,
        error: "",
      };
    case "FETCH-ERROR":
      return {
        loading: false,
        post: {},
        error: "Somthing is wrong!",
      };
    default:
      return state;
  }
};

const DataFetchingtwo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "FETCH-SUCESS", payload: response.data });
      })

      .catch((error) => {
        dispatch({ type: "FETCH-ERROR" });
      });
  }, []);

  return (
    <div>
      {state.loading ? "loading" : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
};

export default DataFetchingtwo;
