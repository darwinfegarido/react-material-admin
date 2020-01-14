import 'date-fns';
import React, { useState, forwardRef } from 'react';
import {
  Grid,
  CircularProgress,
  Fade,
  Typography,
  TextField,
} from "@material-ui/core";
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

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

const getData = (oldData, setState, setLoading, setSuccess, selectedDate) => {
  const owner = document.getElementById('owner').value
  const voucher = document.getElementById('voucher').value
  const product = document.getElementById('product').value
  const value = document.getElementById('value').value
  const expires = selectedDate.toLocaleDateString()

  const data = { owner:owner, voucher: voucher, product:product, value: value, expires:expires }
  const newData = [ ...oldData, data]
  setLoading(1)
  setTimeout(() => {
    setLoading(0)
    setSuccess(1)

    setState(newData)
  },3000)
  setTimeout(() => {
    setSuccess(0)
  },6000)
}

const Button = ({ state, setDelete, data, setPage, setDetails}) => {

  const deleteBtn = () => {
    state.splice(state.indexOf(data), 1)
    setDelete(1)
  }

  const viewDetails = () => {
    setDetails(data)
    setPage(1)
  }

  return (
    <div>
        <button type="button" className="btn btn-sm btn-default" onClick={viewDetails}><Edit /></button>&nbsp;
        <button type="button" className="btn btn-sm btn-default"  onClick={deleteBtn} ><DeleteOutline /></button>
    </div>
  )
}

export default function MainPage(props){

  const [isLoading, setLoading] = useState(0)
  const [success, setSuccess] = useState(0)
  const [isDelete, setDelete] = useState('')
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
  };



  let classes = useStyles();

  const columns = [
    { title: 'Owner', field: 'owner' },
    { title: 'Serial', field: 'voucher' },
    { title: 'Product', field: 'product' },
    { title: 'Value', field: 'value' },
    { title: 'Expiration', field: 'expires' },
    { title: 'Action', field: 'action' },
    { title: 'Status', field: 'status', render: rowData => (rowData.status) ? 'Active' : 'Inactive' },

  ]



  if(isDelete){
    setDelete(0)
  }

  props.state.map((e, i) => {
    e['action'] = <Button data={e} setDetails={props.setDetails} state={props.state} setDelete={setDelete} setPage={props.setPage} />
    return e
  })

  return (
    <Grid container spacing={4}>

      <Grid item xs={12} md={12} lg={12}>

        <MaterialTable
          icons={tableIcons}
          title="Tracker Voucher"
          columns={columns}
          data={props.state}
          options={{
              rowStyle:  rowData => ({
                backgroundColor: (rowData.status) ? '#0cfd3552' : '#ff0a0a52'
              })
            }}
        />
      </Grid>


    </Grid>
  )
}
