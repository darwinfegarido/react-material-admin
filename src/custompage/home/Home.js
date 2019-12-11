import React, { useState } from "react";
import {
  Grid,
  LinearProgress,
  Select,
  OutlinedInput,
  MenuItem,
  Divider,
} from "@material-ui/core";

import { useTheme } from "@material-ui/styles";
import {
  ResponsiveContainer,
  ComposedChart,
  AreaChart,
  LineChart,
  Line,
  Area,
  PieChart,
  Pie,
  Cell,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
} from "recharts";


// components
import Widget from "../../components/Widget";
import { Typography } from "../../components/Wrappers";

const WidgetHeader = ({title, percentage}) => (
    <>
    <Typography variant="h5" color="textSecondary">
      {title}
    </Typography>
    <Typography size="sm"  color={(percentage > 0) ? "success" : "secondary"}>
      {(percentage > 0) ? "+" : ""}{percentage}%
    </Typography>
    </>
  )


export default function Home(props) {
  const data = [
      {
        "name": "January",
        "users": 2400,
        "amt": 2210
      },
      {
        "name": "February",
        "users": 3000,
        "amt": 2210
      },
      {
        "name": "March",
        "users": 2000,
        "amt": 2290
      },
      {
        "name": "April",
        "users": 2780,
        "amt": 2000
      },
      {
        "name": "June",
        "users": 1890,
        "amt": 2181
      },
      {
        "name": "July",
        "users": 2390,
        "amt": 2500
      },
      {
        "name": "August",
        "users": 3490,
        "amt": 2100
      },
      {
        "name": "September",
        "users": 2900,
        "amt": 2900
      },
      {
        "name": "October",
        "users": 1100,
        "amt": 1100
      },
      {
        "name": "November",
        "users": 3100,
        "amt": 3100
      },
      {
        "name": "December",
        "users": 2900,
        "amt": 2900
      },
    ]

const appVersion = [
  {
    "name": "v1.9",
    "users": 2900,
  },
  {
    "name": "v1.4.2",
    "users": 1800,
  },
  {
    "name": "v1.1.1",
    "users": 1500,
  },
  {
    "name": "v0.23",
    "users": 1000,
  },
  {
    "name": "v0.10",
    "users": 500,
  },

]

const data01 = [
  { name: 'IOS', value: 400 }, { name: 'Browser', value: 300 },
  { name: 'Android', value: 300 }, { name: 'Others', value: 200 },
  { name: 'Windows', value: 278 },
];


const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const COLORS = [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()];

  return (
    <>
    <Grid container spacing={1}>

      <Grid item xs={12} md={3} lg={3}>
        <Widget title="Total Users" upperTitle disableWidgetMenu>
          <Typography size="xl" weight="medium">
            12,000
          </Typography>
        </Widget>
      </Grid>

      <Grid item xs={12} md={3} lg={3}>
        <Widget  upperTitle disableWidgetMenu header={<WidgetHeader title="Active Users" percentage={80}/>}>
          <Grid container>
            <Grid item lg={6} md={6} xs={12}>
              <Typography size="xl" weight="medium">
                7,568
              </Typography>
            </Grid>
            <Grid item lg={6} md={6} xs={12}>
              <ResponsiveContainer width="100%" height={50}>
                <LineChart width="100%" height="100%" data={data}>
                  <Line type="monotone" dataKey="users" dot={false} stroke="#8884d8" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </Grid>
          </Grid>
        </Widget>
      </Grid>

      <Grid item xs={12} md={3} lg={3}>
        <Widget  upperTitle disableWidgetMenu header={<WidgetHeader title="Guest Users" percentage={80}/>}>
          <Grid container>
            <Grid item lg={6} md={6} xs={12}>
              <Typography size="xl" weight="medium">
                5,000
              </Typography>
            </Grid>
            <Grid item lg={6} md={6} xs={12}>
              <ResponsiveContainer width="100%" height={50}>
                <LineChart width="100%" height="100%" data={data}>
                  <Line type="monotone" dataKey="users" dot={false} stroke="#8884d8" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </Grid>
          </Grid>
        </Widget>
      </Grid>

      <Grid item xs={12} md={3} lg={3}>
        <Widget upperTitle disableWidgetMenu header={<WidgetHeader title='Registred Users' percentage={80}/>}>
          <Grid container>
            <Grid item lg={6} md={6} xs={12}>
              <Typography size="xl" weight="medium">
                7,000
              </Typography>
            </Grid>
            <Grid item lg={6} md={6} xs={12}>
              <ResponsiveContainer width="100%" height={50}>
                <LineChart width="100%" height="100%" data={data}>
                  <Line type="monotone" dataKey="users" dot={false} stroke="#8884d8" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </Grid>

          </Grid>
        </Widget>
      </Grid>


      <Grid item xs={12} md={12} lg={12}>
        <Widget title="Monthly Active Users" upperTitle noBodyPadding disableWidgetMenu>
          <ResponsiveContainer width="100%" height={200}>
              <LineChart width={800} height={250} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={5} />
              </LineChart>
          </ResponsiveContainer>
        </Widget>
      </Grid>



      <Grid item xs={12} md={4} lg={4}>
        <Widget title="App Versions" upperTitle disableWidgetMenu>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart
              layout="vertical"
              width={500}
              height={400}
              data={appVersion}
              margin={{
                top: 20, right: 20, bottom: 20, left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip />
              <Legend />
              <Bar dataKey="users" barSize={20} fill="#413ea0" />
            </ComposedChart>
          </ResponsiveContainer >
        </Widget>
      </Grid>

      <Grid item xs={12} md={4} lg={4}>
        <Widget title="Device Usage" upperTitle disableWidgetMenu>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart >
              <Tooltip />
              <Legend />
              <Pie dataKey="value" isAnimationActive={true} data={data01} outerRadius={80} fill="#8884d8" label >
                {
                  data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                }
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer >
        </Widget>
      </Grid>

      <Grid item xs={12} md={4} lg={4}>
          <Widget title="Feeds" upperTitle disableWidgetMenu >

              <Grid container spacing={1}>
                <Grid item xs={12} md={4} lg={4}>
                    <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg" alt="Card image cap" />
                </Grid>
                <Grid item xs={12} md={8} lg={8}>
                  <Typography size="xl" weight="medium">
                    <a className="btn" href="#">Anna Feliciano</a>
                  </Typography>
                  <Typography size="sm" weight="medium">
                    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                  </Typography>
                </Grid>
              </Grid>
              <Divider />
              <br />
              <Grid container spacing={1}>
                <Grid item xs={12} md={4} lg={4}>
                    <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg" alt="Card image cap" />
                </Grid>
                <Grid item xs={12} md={8} lg={8}>
                  <Typography size="xl" weight="medium">
                    <a className="btn" href="#">Anna Feliciano</a>
                  </Typography>
                  <Typography size="sm" weight="medium">
                    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                  </Typography>
                </Grid>
              </Grid>
              <Divider />


          </Widget>
      </Grid>

    </Grid>

    </>
  );
}
