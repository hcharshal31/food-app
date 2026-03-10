
import { useRouteError } from "react-router-dom";
import React from "react";

// const err = useRouteError();
// console.log(err);

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <h1>Oops! Something went wrong</h1>
      <h2>{err.status}: {err.statusText}</h2>
      <h3>{err.data}</h3>
    </>
  )
}

export default Error;
