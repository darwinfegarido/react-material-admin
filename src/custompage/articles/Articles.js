import React, { forwardRef } from 'react';
import {
  Route,
  Router,
  Link,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import {
  Grid,
  LinearProgress,
  Select,
  OutlinedInput,
  MenuItem,
  Divider,
} from "@material-ui/core";

import Widget from "../../components/Widget";
import { Typography } from "../../components/Wrappers";
import { ArrowBack as ArrowBackIcon } from '@material-ui/icons';

import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

const Button = (props) => {

  return (
    <div>
      <Link  >
        <button className="btn btn-sm btn-info" onClick={() => props.setPage(2)}><Edit /></button>&nbsp;
        <button className="btn btn-sm btn-danger" ><DeleteOutline /></button>
      </Link>
    </div>
  )
}

const Form = (props) => {
  return (
    <>
      <form >
        <fieldset >
        <div className="row">


          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="form-group">
              <label for="banner">Title:</label>
              <input type="text" className="form-control" placeholder="Email" value='test' id="banner" />
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
              <label for="about">Author:</label>
              <input type="text" className="form-control" placeholder="Email" value='test' id="about" />
            </div>
          </div>

          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="form-group">
              <label for="about">Status:</label>
              <input type="text" className="form-control" placeholder="Email" value='test' id="about" />
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





export default function Artiles() {
  const [ page, setPage ] = React.useState(1)
  const [state, setState] = React.useState({
    columns: [
      { title: '#', field: 'id' },
      { title: 'Title', field: 'title' },
      { title: 'Author', field: 'author' },
      { title: 'Date', field: 'date' },
      { title: 'Status', field: 'status' },
      { title: 'View', field: 'action' },
    ],
    data: [
      { id: '1', title: "10 Article Headline Examples That Got Us 10 Million Readers", author: "Profesor", date:new Date('2019-11-10 12:33:48').toDateString(), status: 1,  action: <Button setPage={setPage} id='7B766FCB794C38CE'/>},
      { id: '2', title: "21 Ways to Dominate Youtube: The Ultimate Guide", author: "Berlin", date:new Date('2019-11-10 12:33:48').toDateString(), status: 1,  action: <Button setPage={setPage} id='7B766FCB794C38CE'/>},
      { id: '3', title: "Parenting Guru: From Chaos to Access", author: "Tokyo", date:new Date('2019-11-10 12:33:48').toDateString(), status: 1,  action: <Button setPage={setPage} id='7B766FCB794C38CE'/>},
      { id: '4', title: "Twitter Goes Public: 21 Things You Should Know", author: "Moscow", date:new Date('2019-11-10 12:33:48').toDateString(), status: 1,  action: <Button setPage={setPage} id='7B766FCB794C38CE'/>},
      { id: '5', title: "Why All Guys Cheat, Fresh Insight", author: "Rio", date:new Date('2019-11-10 12:33:48').toDateString(), status: 1,  action: <Button setPage={setPage} id='7B766FCB794C38CE'/>},
      { id: '6', title: "Which One Deserves To Die?", author: "Profesor", date:new Date('2019-11-10 12:33:48').toDateString(), status: 1,  action: <Button setPage={setPage} id='7B766FCB794C38CE'/>},

    ],
  });

  return (
    <>
      {
        (page == 1) ?
        <MaterialTable
          icons={tableIcons}
          title="Articles"
          columns={state.columns}
          data={state.data}
        /> :
        <div>
          <button className="btn btn-default btn-md" onClick={() => setPage(1)}>
            <Typography variant="h5" color="textSecondary">
                <ArrowBackIcon />
            </Typography>
          </button>

          <Grid container spacing={1}>
            <Grid item xs={12} md={12} lg={12}>
              <Widget upperTitle disableWidgetMenu title='Edit Article' >
                <Form  />
              </Widget>
            </Grid>
          </Grid>
        </div>
      }

    </>
  );
}
