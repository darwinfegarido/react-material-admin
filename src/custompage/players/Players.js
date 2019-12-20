import React, { forwardRef } from 'react';
import {
  Route,
  Router,
  Link,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";

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
  const link = `/app/profile/${props.id}`
  return (
    <div>
      <Link to={link} >
        <button className="btn btn-md btn-info" >View</button>
      </Link>
    </div>
  )
}





export default function Players() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Player id', field: 'id' },
      { title: 'Joined', field: 'date_joined' },
      { title: 'Login', field: 'date_login' },
      { title: 'Status', field: 'status' },
      { title: 'Online', field: 'online' },
      { title: 'View', field: 'action' },
    ],
    data: [
      { id: '7B766FCB794C38CE', date_joined: new Date('2019-11-10 12:33:48').toDateString(), date_login: new Date('2019-11-10 12:33:48').toDateString(), status: 1, online: 1, action: <Button id='7B766FCB794C38CE'/>},
      { id: '7B766FCB794C38CE', date_joined: new Date('2019-11-10 12:33:48').toDateString(), date_login: new Date('2019-11-10 12:33:48').toDateString(), status: 1, online: 1, action: <Button id='asdfasdf'/>},
      { id: '7B766FCB794C38CE', date_joined: new Date('2019-11-10 12:33:48').toDateString(), date_login: new Date('2019-11-10 12:33:48').toDateString(), status: 1, online: 1, action: <Button id='asdfasdf'/>},
      { id: '7B766FCB794C38CE', date_joined: new Date('2019-11-10 12:33:48').toDateString(), date_login: new Date('2019-11-10 12:33:48').toDateString(), status: 1, online: 1, action: <Button id='asdfasdf'/>},
      { id: '7B766FCB794C38CE', date_joined: new Date('2019-11-10 12:33:48').toDateString(), date_login: new Date('2019-11-10 12:33:48').toDateString(), status: 1, online: 1, action: <Button id='asdfasdf'/>},
      { id: '7B766FCB794C38CE', date_joined: new Date('2019-11-10 12:33:48').toDateString(), date_login: new Date('2019-11-10 12:33:48').toDateString(), status: 1, online: 1, action: <Button id='asdfasdf'/>},

    ],
  });

  return (
    <MaterialTable
      icons={tableIcons}
      title="Players"
      columns={state.columns}
      data={state.data}

    />
  );
}
