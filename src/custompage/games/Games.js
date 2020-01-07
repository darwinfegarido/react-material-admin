import React, { useState } from 'react';
import {
  Grid,
  LinearProgress,
  Select,
  OutlinedInput,
  MenuItem,
  Divider,
  IconButton,
} from "@material-ui/core";
import {
  Link,
} from "react-router-dom";

// Icons
import {
  Add as AddIcon,
  ArrowBack as ArrowBackIcon
 } from "@material-ui/icons";

// components
import Widget from "../../components/Widget";
import { Typography } from "../../components/Wrappers";

const Input = ({ type, value, id }) => {
  const [newValue, setValue] = useState(value)
  return <input type={type} className="form-control" value={newValue} id={id} onChange={(e) => setValue(e.target.value)}  />
}

const Header = ({ name, setViews }) => {
  return (
    <>
    <Typography variant="h5" color="textSecondary">
        {name}
    </Typography>
    <button className="btn btn-info btn-sm" onClick={() => setViews(2)}> Edit </button>
    </>
  )
}

const AddGame = ({ setViews }) => {
  return (
    <>
    <button className="btn btn-default btn-md" onClick={() => setViews(0)}>
      <Typography variant="h5" color="textSecondary">
          <ArrowBackIcon />
      </Typography>
    </button>

    <Grid container >

      <Grid item xs={12} md={12} lg={12}>
        <Widget upperTitle disableWidgetMenu title='Add Game' >
          <form >
            <div className="row">

              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="form-group">
                  <label for="displayName">Game Name:</label>
                  <Input type="text" id="gameName" value="" />
                </div>
              </div>

              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="form-group">
                  <label for="firstname">Description:</label>
                  <Input type="textarea"  value='' id="description" />
                </div>
              </div>

              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="form-group">
                  <label for="firstname">Banner:</label>
                  <Input type="text"  value='' id="banner" />
                </div>
              </div>

              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="form-group">
                  <label for="firstname">Upload File:</label>
                  <Input type="text"  value='' id="file" />
                </div>
              </div>
            </div>

            <button type='button' className="btn btn-info btn-md" >
              <Typography variant="h5" color="textSecondary">
                  Submit
              </Typography>
            </button>

          </form>

        </Widget>
      </Grid>

    </Grid>

    </>)
}

const ViewGame = ({ setViews }) => {
    return (
      <>
      <button className="btn btn-default btn-md" onClick={() => setViews(0)}>
        <Typography variant="h5" color="textSecondary">
            <ArrowBackIcon />
        </Typography>
      </button>
      </>)
}

const ListGames = ({setViews}) => {

  return (<>
    <Typography >
      <button className="btn btn-md btn-success" onClick={() => setViews(1)} >
          Add Game
      </button>
    </Typography>
    <br />
    <Grid container spacing={1}>

      <Grid item xs={12} md={6} lg={4}>
        <Widget upperTitle disableWidgetMenu header={<Header name="Ping Pong" setViews={setViews}/>} >

        </Widget>
      </Grid>

      <Grid item xs={12} md={6} lg={4}>
        <Widget upperTitle disableWidgetMenu header={<Header name="Jungle Game" setViews={setViews}/>} >

        </Widget>
      </Grid>

      <Grid item xs={12} md={6} lg={4}>
        <Widget upperTitle disableWidgetMenu header={<Header name="Debugging Game" setViews={setViews}/>} >

        </Widget>
      </Grid>
    </Grid>
  </>)
}


export default function Games({ match }) {
  const [views, setViews] = useState(1)

  const ViewModel = () => {
    switch(views){
      case 1:
        return (<AddGame setViews={setViews}/>);
      case 2:
        return (<ViewGame setViews={setViews}/>);
      default:
        return (<ListGames setViews={setViews}/>);
    }
  }

  return (
    <ViewModel />
  );
}
