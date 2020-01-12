import React, { useState } from 'react';
import PageTitle from "../../components/PageTitle";

// components
import Widget from "../../components/Widget";
import ViewItem from "./ViewItem";
import MainPage from "./MainPage";


export default function Redemption(props){

  const [page, setPage] = useState(0)
  const [viewDetails, setDetails] = useState()
  const [state, setState] = useState([
    { voucher: "ASD16S2S6", product:"Jollibee", value: 150, expires:"2020-04-01" },
    { voucher: "ASD16S2S6", product:"Mcdo", value: 75, expires:"2020-04-01" },
    { voucher: "ASD16S2S6", product:"J.Co", value: 240, expires:"2020-04-01" },
    { voucher: "ASD16S2S6", product:"Starbucks", value: 300, expires:"2020-04-01" },
    { voucher: "ASD16S2S6", product:"DIY", value: 200, expires:"2020-04-01" },
    { voucher: "ASD16S2S6", product:"Watsons", value: 50, expires:"2020-04-01" },

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
