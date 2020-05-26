import React, { Fragment } from "react";

export default ({ mode, filterData }) => {
  return (
    <Fragment>
      <h1>Filtered</h1>
      <p>{mode}</p>
      <pre>{JSON.stringify(filterData, null, 2)}</pre>
    </Fragment>
  );
};
