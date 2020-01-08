import React, { useState } from "react";
import {
  Grid,
  CircularProgress,
  Typography,
  Button,
  Tabs,
  Tab,
  TextField,
  Fade,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// logo
import logo from "./logo.svg";
import google from "../../images/google.svg";

// context
import { useUserDispatch, loginUser, register } from "../../context/UserContext";

function Login(props) {
  let classes = useStyles();
  // global
  let userDispatch = useUserDispatch();

  // local
  let [isLoading, setIsLoading] = useState(false);
  let [error, setError] = useState(null);
  let [errorValue, setErrorValue] = useState(null);
  let [successValue, setSuccessValue] = useState(null);
  let [activeTabId, setActiveTabId] = useState(0);
  let [nameValue, setNameValue] = useState("");
  let [loginValue, setLoginValue] = useState("");
  let [firstname, setFirstname] = useState("");
  let [lastname, setLastname] = useState("");
  let [passwordValue, setPasswordValue] = useState("");
  let setToken = props.setToken
  return (
    <Grid container className={classes.container}>
      <div className={classes.logotypeContainer}>
        <img src='youplay_logo.png' alt="logo" className={classes.logotypeImage} />
        <Typography className={classes.logotypeText}>You Play Tool</Typography>
      </div>
      <div className={classes.formContainer}>
        <div className={classes.form}>
              
              <Fade in={error}>
                <Typography color="secondary" className={classes.errorMessage}>
                  Something is wrong with your login or password :(
                </Typography>
              </Fade>
              <TextField
                id="email"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={loginValue}
                onChange={e => setLoginValue(e.target.value)}
                margin="normal"
                placeholder="Email Adress"
                type="email"
                fullWidth
              />
              <TextField
                id="password"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
                margin="normal"
                placeholder="Password"
                type="password"
                fullWidth
              />
              <div className={classes.formButtons}>
                {isLoading ? (
                  <CircularProgress size={26} className={classes.loginLoader} />
                ) : (
                  <Button
                    disabled={
                      loginValue.length === 0 || passwordValue.length === 0
                    }
                    onClick={() =>
                      loginUser(
                        userDispatch,
                        loginValue,
                        passwordValue,
                        props.history,
                        setIsLoading,
                        setError,
                        setToken,
                      )
                    }
                    variant="contained"
                    color="primary"
                    size="large"
                  >
                    Login
                  </Button>
                )}
                <Button
                  color="primary"
                  size="large"
                  className={classes.forgetButton}
                >
                  Forget Password
                </Button>
              </div>

              </div>

        </div>
    </Grid>
  );
}

export default withRouter(Login);
