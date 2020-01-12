import React, { useState } from 'react';
import {
  Grid,
  CircularProgress,
  Fade,
  Typography,
  TextField,
} from "@material-ui/core";

// components
import Widget from "../../components/Widget";

// Icon
import Edit from '@material-ui/icons/Edit';

// Style
import useStyles from "./styles";


const Header = ({ setEdit, isEdit }) => {
  return (
    <>
      <Typography variant="h5" color="textSecondary">
        Voucher Details
      </Typography>
      {!isEdit ?
        <Typography>
          <button className="btn btn-md btn-default" onClick={() => setEdit(1)} ><Edit /></button>
        </Typography>
        :""
      }
    </>
  )
}

const EditDetails = ({details, setEdit, setSuccess}) => {
  const [isLoading, setLoading] = useState(0)
  const [isSubmit, setSubmit] = useState(0)
  const classes = useStyles()

  const getData = () => {
    setLoading(1)
    setSubmit(1)
    setTimeout(() => {
      setLoading(0)
      setSubmit(0)
      setSuccess(1)
      setEdit(0)
    }, 3000)
  }
  return (
    <>

      <div className="row">

        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="form-group">
            <TextField id="voucher" label="Serial" disabled={isSubmit}  defaultValue={details.voucher} />
          </div>
        </div>

        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="form-group">
            <TextField id="product"  label="Product" disabled={isSubmit} defaultValue={details.product}/>
          </div>
        </div>

        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="form-group">
            <TextField id="value"  type="number" label="Value" disabled={isSubmit} defaultValue={details.value} />
          </div>
        </div>

        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="form-group">
            <TextField id="expires"  type="date" label="Expiration" disabled={isSubmit} defaultValue={details.expires} />
          </div>
        </div>

      </div>

      {isLoading ?
        <CircularProgress size={26} className={classes.loginLoader} /> :
        <div>
          <button type="button" className="btn btn-sm btn-danger" onClick={() => setEdit(0)}  >Cancel</button>&nbsp;
          <button type="button" className="btn btn-sm btn-success" onClick={() => getData()}  >Submit</button>
        </div>
      }

    </>
  )
}


export default function ViewItem(props){
  const [edit, setEdit] = useState(0)
  const [success, setSuccess] = useState(0)

  if(success){
    setTimeout(() => setSuccess(0), 3000)
  }

  const details = props.viewDetails
  return (
    <>
      <Typography>
        <button className="btn btn-md btn-info" onClick={() => props.setPage(0)}>Back</button>
      </Typography>
      <Fade in={success}>
        <div className="alert alert-success small text-center" >
          Success
        </div>
      </Fade>
      <Grid container spacing={4}>
        <Grid item xs={12} md={12} lg={12}>
          <Widget upperTitle disableWidgetMenu  header={<Header setEdit={setEdit} isEdit={edit} />} >
          {!edit ?
            <div>
              <p><strong>Serial : </strong> {details.voucher}  </p>
              <p><strong>Product : </strong> {details.product} </p>
              <p><strong>Value : </strong> {details.value} </p>
              <p><strong>Expiration : </strong> {details.expires} </p>
            </div>

          :
            <EditDetails details={details} setEdit={setEdit} setSuccess={setSuccess}/>
          }
          </Widget>
        </Grid>
      </Grid>
    </>
  )
}
