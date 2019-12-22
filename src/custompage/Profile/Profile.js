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

const Input = ({ type, value, id }) => {
  const [newValue, setValue] = useState(value)
  return <input type={type} className="form-control" value={newValue} id={id} onChange={(e) => setValue(e.target.value)}  />

}

const Form = (props) => {
  const [datas, setDatas] = useState()

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
    changeStatus()
    props.setSuccess(1)
  }

  return (
    <>
      <form >
        <fieldset disabled={(props.disable) ? true : false}>
        <div className="row">

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="form-group">
              <label for="displayName">Display Name:</label>
              <Input type="text" id="displayName" value="Berlin" />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="form-group">
              <label for="firstname">First Name:</label>
              <Input type="text"  value='test' id="firstname" />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="form-group">
              <label for="lastname">Last Name:</label>
              <Input type="text" className="form-control" placeholder="Fast Name" value='test' id="lastname" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="form-group">
              <label for="email">Email address:</label>
              <Input type="email" className="form-control" placeholder="Email" value='test' id="email" />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="form-group">
              <label for="email">Email Verified:</label>
              <Input type="text" className="form-control" placeholder="Email" value='test' id="email" />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="form-group">
              <label for="email">Secret Question:</label>
              <Input type="email" className="form-control" placeholder="Email" value='test' id="email" />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="form-group">
              <label for="email">User Type:</label>
              <Input type="email" className="form-control" placeholder="Email" value='test' id="email" />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="form-group">
              <label for="gender">Gender:</label>
              <Input type="text" className="form-control" placeholder="Gender" value='test' id="gender" />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="form-group">
              <label for="gender">Age:</label>
              <Input type="text" className="form-control" placeholder="Gender" value='test' id="gender" />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="form-group">
              <label for="birthday">Birthday:</label>
              <Input type="date" className="form-control" placeholder="Birthday" value='test' id="birthday" />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="form-group">
              <label for="gender">Address 1:</label>
              <Input type="text" className="form-control" placeholder="Gender" value='test' id="gender" />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="form-group">
              <label for="gender">Address 2:</label>
              <Input type="text" className="form-control" placeholder="Gender" value='test' id="gender" />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="form-group">
              <label for="gender">Contact Number:</label>
              <Input type="text" className="form-control" placeholder="Gender" value='test' id="gender" />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="form-group">
              <label for="gender">Marital Status:</label>
              <Input type="text" className="form-control" placeholder="Gender" value='test' id="gender" />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="form-group">
              <label for="children">Children:</label>
              <Input type="text" className="form-control" placeholder="Gender" value='test' id="children" />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="form-group">
              <label for="occupation">Occupation:</label>
              <Input type="text" className="form-control" placeholder="Occupation" value='test' id="occupation" />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="form-group">
              <label for="education">Education Level:</label>
              <Input type="text" value='test' id="education" />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="form-group">
              <label for="school">School:</label>
              <Input type="text" value='test' id="school" />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="form-group">
              <label for="gender">Hobbies and Interest:</label>
              <Input type="text" className="form-control" placeholder="Gender" value='test' id="gender" />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="form-group">
              <label for="gender">Height:</label>
              <Input type="text" className="form-control" placeholder="Gender" value='test' id="gender" />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="form-group">
              <label for="gender">Weight:</label>
              <Input type="text" className="form-control" placeholder="Gender" value='test' id="gender" />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="form-group">
              <label for="gender">Built Type:</label>
              <Input type="text" className="form-control" placeholder="Gender" value='test' id="gender" />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="form-group">
              <label for="gender">Foot size:</label>
              <Input type="text" className="form-control" placeholder="Gender" value='test' id="gender" />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="form-group">
              <label for="gender">Mobile Device:</label>
              <Input type="text" className="form-control" placeholder="Gender" value='test' id="gender" />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="form-group">
              <label for="gender">Games you Play:</label>
              <Input type="text" className="form-control" placeholder="Gender" value='test' id="gender" />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="form-group">
              <label for="gender">App you use:</label>
              <Input type="text" className="form-control" placeholder="Gender" value='test' id="gender" />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="form-group">
              <label for="joined_date">Joined Date:</label>
              <Input type="date" className="form-control" placeholder="Joined Date" value='test' id="joined_date" />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="form-group">
              <label for="updated">Update:</label>
              <Input type="date" className="form-control" placeholder="Updated" value='test' id="updated" />
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
  const [success, setSuccess] = useState(0);
  const [ disable, setDisable ] = useState(1);
  const id = match.params.id
  const title = `Player id : ${id}`
  console.log(success)
  return (
    <>
      <button className="btn btn-default btn-md">
        <Typography variant="h5" color="textSecondary">
          <Link to="/app/players" >
            <ArrowBackIcon />
          </Link>

        </Typography>
      </button>
      {(success) ? <div className="alert alert-success alert-dismissible" >
        <strong>Success!</strong> Player Updated.
      </div> : ""}
      <br />
      <Grid container spacing={1}>
        <Grid item xs={12} md={12} lg={12}>
          <Widget upperTitle disableWidgetMenu header={ <Header id={id} setDisable={setDisable} disable={disable} /> } >
            <Form disable={disable} setDisable={setDisable} setSuccess={setSuccess} />
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
