import React, { useState } from 'react';
import {
  Grid,
  LinearProgress,
  Select,
  OutlinedInput,
  MenuItem,
  Divider,
} from "@material-ui/core";
import {
  Link,
} from "react-router-dom";
import { Edit as EditIcon, ArrowBack as ArrowBackIcon } from '@material-ui/icons';

// components
import Widget from "../../components/Widget";
import { Typography } from "../../components/Wrappers";
const $ = require('jquery')

const Form = (props) => {
  const [datas, setDatas] = useState()
  const [name, setName] = useState('test')
  const changeStatus = () => {
    props.setDisable(1)
  }

  const getFormData = () => {
    const displayName = document.getElementById('displayName').value
    const firstname = document.getElementById('firstname').value
    const lastname = document.getElementById('lastname').value
    const email = document.getElementById('email').value
    const gender = document.getElementById('gender').value
    const birthday = document.getElementById('birthday').value
    const occupation = document.getElementById('occupation').value
    const children = document.getElementById('children').value
    const education = document.getElementById('education').value
    const joined_date = document.getElementById('joined_date').value
    const updated = document.getElementById('updated').value
    const data = setDatas({
      displayName:displayName,
      firstname:firstname,
      lastname:lastname,
      email:email,
      gender:gender,
      birthday:birthday,
      occupation:occupation,
      children:children,
      education:education,
      joined_date:joined_date,
      updated:updated,
    })
  }

  const setValue = (e, id) => {
    const key = e.key
    setName(name + key)
  }




  return (
    <>
      <form >
        <fieldset disabled={(props.disable) ? true : false}>
        <div className="row">

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="form-group">
              <label for="displayName">Display Name:</label>
              <input type="text" className="form-control" placeholder="Display Name" value={name} id="displayName" onKeyPress={(e) => setValue(e, "displayName")}  />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="form-group">
              <label for="firstname">First Name:</label>
              <input type="text" className="form-control" placeholder="First Name" value='test' id="firstname" />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="form-group">
              <label for="lastname">Last Name:</label>
              <input type="text" className="form-control" placeholder="Fast Name" value='test' id="lastname" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="form-group">
              <label for="email">Email address:</label>
              <input type="email" className="form-control" placeholder="Email" value='test' id="email" />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="form-group">
              <label for="gender">Gender:</label>
              <input type="text" className="form-control" placeholder="Gender" value='test' id="gender" />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="form-group">
              <label for="birthday">Birthday:</label>
              <input type="date" className="form-control" placeholder="Birthday" value='test' id="birthday" />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="form-group">
              <label for="occupation">Occupation:</label>
              <input type="text" className="form-control" placeholder="Occupation" value='test' id="occupation" />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="form-group">
              <label for="email">Children:</label>
              <input type="number" className="form-control" placeholder="Email" value='test' id="children" />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="form-group">
              <label for="education">Education:</label>
              <input type="text" className="form-control" placeholder="E" value='test' id="education" />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="form-group">
              <label for="joined_date">Joined Date:</label>
              <input type="date" className="form-control" placeholder="Joined Date" value='test' id="joined_date" />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="form-group">
              <label for="updated">Update:</label>
              <input type="date" className="form-control" placeholder="Updated" value='test' id="updated" />
            </div>
          </div>


        </div>
        </fieldset>
        { (!props.disable) ?
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="form-group">
                <button type="button" className="btn btn-danger" onClick={() => changeStatus()}>Cancel</button> &nbsp;
                <button type="button" className="btn btn-info" onClick={() => getFormData()}>Submit</button>
              </div>
            </div>
          </div> : ""
         }

      </form>
    </>
  )
}

const Header = (props) => {
  const changeStatus = () => {
    props.setDisable(0)
  }

  return (
    <>
    <Typography variant="h5" color="textSecondary">
      Player id : {props.id}
    </Typography>
    { (props.disable) ? <button  type="button" className="btn btn-sm btn-default" onClick={() => changeStatus()}>
      <EditIcon />
    </button> : "" }

    </>
  )
}

export default function Profile({ match }) {
  const [state, setState] = React.useState();
  const [ disable, setDisable ] = useState(1);
  const id = match.params.id
  const title = `Player id : ${id}`
  return (
    <>
      <button className="btn btn-default btn-md">
        <Typography variant="h5" color="textSecondary">
          <Link to="/app/players" >
            <ArrowBackIcon />
          </Link>

        </Typography>
      </button>
      <br />
      <Grid container spacing={1}>
        <Grid item xs={12} md={12} lg={12}>
          <Widget upperTitle disableWidgetMenu header={ <Header id={id} setDisable={setDisable} disable={disable} /> } >
            <Form disable={disable} setDisable={setDisable} />
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
