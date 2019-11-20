import React, { useState } from 'react';

import PageTitle from "../../components/PageTitle";

export default function Content(props){

  return(
    <>
      <PageTitle title="Content Navigation" />
      <button type="button" className="btn btn-info">This is  Content Page</button>

    </>
  );
}
