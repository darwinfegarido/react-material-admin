import React, { useState, forwardRef } from 'react';
import {
  Grid,
  CircularProgress,
  Fade,
  Typography,
} from "@material-ui/core";

// components
import Widget from "../../components/Widget";




export default function ViewItem(props){
  const details = props.viewDetails
  return (
    <>
      <Typography>
        <button className="btn btn-md btn-info" onClick={() => props.setPage(0)}>back</button>
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={12} lg={12}>
          <Widget upperTitle disableWidgetMenu title='View Details' >
            <p><strong>Name : </strong> {details.name}  </p>
            <p><strong>Price : </strong> {details.price} </p>
            <p><strong>Description : </strong> {details.description} </p>
          </Widget>
        </Grid>
      </Grid>
    </>
  )
}
