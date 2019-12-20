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


  $("#customFile").on("change", function(e) {
    var fileName = $(this).val().split("\\").pop();
    console.log(e)
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
  });

  return (
    <>
      <form >
        <fieldset >
        <div className="row">
          

          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="form-group">
              <label for="banner">Banner:</label>
              <textarea type="text" className="form-control" placeholder="Email" value='test' id="banner" />
            </div>
          </div>

          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="form-group">
              <label for="description">Description:</label>
              <textarea type="text" className="form-control" placeholder="Email" value='test' id="description" />
            </div>
          </div>

          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="form-group">
              <label for="about">About Us:</label>
              <textarea type="text" className="form-control" placeholder="Email" value='test' id="about" />
            </div>
          </div>

        </div>
        </fieldset>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="form-group">
              <button type="reset" className="btn btn-danger" >Reset</button> &nbsp;
              <button type="button" className="btn btn-info" >Submit</button>
            </div>
          </div>
        </div>

      </form>
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
      <Grid container spacing={1}>
        <Grid item xs={12} md={12} lg={12}>
          <Widget upperTitle disableWidgetMenu title='Web Content' >
            <Form  />
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
