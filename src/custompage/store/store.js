import React, { useState, forwardRef, useEffect } from 'react';

import {
  Grid,
  CircularProgress,
  Fade,
  Typography,
} from "@material-ui/core";


// components
import Widget from "../../components/Widget";
import ViewItem from "./ViewItem";
import MainPage from "./MainPage";


export default function Store(){

  const [page, setPage] = useState(0)
  const [viewDetails, setDetails] = useState()
  const [state, setState] = useState([
      { name: "Sword", description:"adsfadf", price: 5.1 },
      { name: "Shield", description:"adsfadf", price: 5.1 },
      { name: "Shoes", description:"adsfadf",  price: 5.1 },
      { name: "Helmet", description:"adsfadf",  price: 5.1 },
      { name: "Dagger", description:"adsfadf", price: 5.1 },
      { name: "Axe", description:"adsfadf", price: 5.1 },
    ]);

  return(
    <>
    { !page ?
      <MainPage setPage={setPage} state={state} setState={setState} setDetails={setDetails} />
      :
      <ViewItem setPage={setPage} viewDetails={viewDetails}/>
    }
    </>
  );
}
