import React, { useState, forwardRef } from 'react';
import {
  Grid,
  CircularProgress,
  Fade,
  Typography,
} from "@material-ui/core";

// styles
import useStyles from "./styles";


// components
import Widget from "../../components/Widget";

// materialtable
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

  const Input = ({type, value, id }) => {
    const [newValue, setValue] = useState(value)
    return <input type={type} className="form-control" value={newValue} id={id} onChange={(e) => setValue(e.target.value)}  />
  }

export default function Store(props){
  let classes = useStyles();
  const [isLoading, setLoading] = useState(0)
  const [success, setSuccess] = useState(0)

  const [state, setState] = useState([
      { name: "Sword", price: 5.1 },
      { name: "Shield", price: 5.1 },
      { name: "Shoes",  price: 5.1 },
      { name: "Helmet",  price: 5.1 },
      { name: "Dagger", price: 5.1 },
      { name: "Axe", price: 5.1 },
    ]);

  const columns = [
    { title: 'Item', field: 'name' },
    { title: 'Price', field: 'price' },
    { title: 'Action', field: 'action' },
  ]

  const getData = (oldData, setState, setLoading, setSuccess) => {
    const name = document.getElementById('itemname').value
    const description = document.getElementById('description').value
    const price = document.getElementById('price').value

    const data = { name: name, price: price  }
    const newData = [ ...oldData, data]
    setLoading(1)
    setTimeout(() => {
      setLoading(0)
      setSuccess(1)
    },3000)
    setState(newData)
    setTimeout(() => {
      setSuccess(0)
    },6000)
  }

  return(
    <>
      <Grid container spacing={4}>

        <Grid item xs={12} md={8} lg={8}>

          <MaterialTable
            icons={tableIcons}
            title="Game List"
            columns={columns}
            data={state}
          />
        </Grid>

        <Grid item xs={12} md={4} lg={4}>
          <Widget upperTitle disableWidgetMenu title='Add Item' >
            <Fade in={success}>
              <div className="alert alert-success small text-center" >
                Success
              </div>
            </Fade>
            <form >
              <div className="row">

                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group">
                    <label for="itemname">Item Name:</label>
                    <Input type="text" id="itemname" value="" />
                  </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group">
                    <label for="description">Description:</label>
                    <Input  type="text" id="description"  value='' />
                  </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group">
                    <label for="price">Price:</label>
                    <Input type="number" id="price" value='' />
                  </div>
                </div>

              </div>

              {isLoading ?
                <CircularProgress size={26} className={classes.loginLoader} /> :
                <button type="reset" className="btn btn-sm btn-success" onClick={() => getData(state, setState, setLoading, setSuccess)}  >Submit</button>
              }


            </form>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
