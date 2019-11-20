import React, { useState } from 'react';

import PageTitle from "../../components/PageTitle";

export default function Articles(props){

  return(
    <>
      <PageTitle title="Articles" />
      <button type="button" className="btn btn-info">This is  Articles Page</button>

    </>
  );
}
