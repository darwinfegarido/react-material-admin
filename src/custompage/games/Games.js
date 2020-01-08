import React, { useState, forwardRef } from 'react';
import {
  Grid,
  LinearProgress,
  Select,
  OutlinedInput,
  MenuItem,
  Divider,
  IconButton,
  CardMedia,
  Modal,
  Fade,
  Backdrop,
  makeStyles,
} from "@material-ui/core";
import {
  Link,
} from "react-router-dom";

// Icons
import {
  Add as AddIcon,
  ArrowBack as ArrowBackIcon
 } from "@material-ui/icons";

 import MaterialTable from 'material-table';
 import AddBox from '@material-ui/icons/AddBox';
 import CheckIcon from '@material-ui/icons/Check';
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

 // components
 import Widget from "../../components/Widget";
 import { Typography } from "../../components/Wrappers";
 import logo from "../../images/test1.jpg"


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

 const useStyles = makeStyles(theme => ({
   modal: {
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'center',
   },
   paper: {
     backgroundColor: theme.palette.background.paper,
     boxShadow: theme.shadows[5],
     padding: theme.spacing(2, 4, 3),
   },
 }));


const Input = ({ type, value, id }) => {
  const [newValue, setValue] = useState(value)
  return <input type={type} className="form-control" value={newValue} id={id} onChange={(e) => setValue(e.target.value)}  />
}

const Button = ({ setViews, id, data, setState, setConfirm }) => {

  return (
    <div>
        <button className="btn btn-sm btn-info" onClick={() => setViews(2)}><Edit /></button>&nbsp;
        <button className="btn btn-sm btn-danger" onClick={() => setConfirm(true)}  ><DeleteOutline /></button>
    </div>
  )
}

const Confirmation = ({ isConfirm, setConfirm }) => {
  const classes = useStyles()
  const handleClose = () => {
    setConfirm(false)
    console.log(isConfirm)
  }
  return (
    <>

      <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={isConfirm}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
        <Fade in={isConfirm}>
          <div className={classes.paper}>
            <h4 id="transition-modal-title">Delete this game?</h4>
            <button type="button" className="btn btn-md btn-info" onClick={() => handleClose() }> No </button> &nbsp;
            <button type="button" className="btn btn-md btn-danger" > Yes </button>
          </div>
        </Fade>
      </Modal>
    </>
    )
}

const Header = ({ name, setViews }) => {
  return (
    <>
    <Typography variant="h5" color="textSecondary">
        {name}
    </Typography>
    <button className="btn btn-info btn-sm" onClick={() => setViews(2)}> View </button>
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

      <Grid container>
        <Grid item xs={12} md={12} lg={12}>
          <Widget upperTitle disableWidgetMenu title='Tower Game' >
            <img src={logo} width="100%"  className="img img-thumbnail img-responsive" />
            <strong>Description: </strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br />
            <strong>Size: </strong> 5mb
            <br />
            <strong>Date Upload: </strong> Jan 3, 2020
            <br />
            <strong>Status: </strong> Active

          </Widget>
        </Grid>
      </Grid>
      </>)
}

const ListGames = ({setViews, games}) => {

  const [isConfirm, setConfirm] = useState(false)

  const [state, setState] = React.useState({
    columns: [
      { title: '#', field: 'id' },
      { title: 'Title', field: 'title' },
      { title: 'Action', field: 'action' },

    ],
    data: [
      { id: '1', title: "Tower Defense", action: <Button setViews={setViews} setConfirm={setConfirm} /> },
      { id: '2', title: "Ping Pong", action: <Button setViews={setViews} setConfirm={setConfirm} />  },
      { id: '3', title: "Parenting Guru", action: <Button setViews={setViews} setConfirm={setConfirm} /> },
      { id: '4', title: "Twitter Games", action: <Button setViews={setViews} setConfirm={setConfirm} /> },
      { id: '5', title: "Fresh Insight", action: <Button setViews={setViews} setConfirm={setConfirm} /> },
      { id: '6', title: "Thumbs Up", action: <Button setViews={setViews} setConfirm={setConfirm} /> },

    ],
  });

  console.log(isConfirm)

  return (<>
    <Confirmation isConfirm={isConfirm} setConfirm={setConfirm} />
    <Typography >
      <button className="btn btn-md btn-success" onClick={() => setViews(1)} >
          Add Game
      </button>
    </Typography>
    <br />
    <Grid container spacing={2}>
      <Grid row xs={12} md={8} lg={8}>

          <MaterialTable
            icons={tableIcons}
            title="Articles"
            columns={state.columns}
            data={state.data}
          />

      </Grid>
    </Grid>
  </>)
}


export default function Games({ match }) {
  const [views, setViews] = useState(0)

  const ViewModel = () => {
    switch(views){
      case 1:
        return (<AddGame setViews={setViews}/>);
      case 2:
        return (<ViewGame setViews={setViews}/>);
      default:
        return (<ListGames setViews={setViews} />);
    }
  }

  return (
    <ViewModel />
  );
}
