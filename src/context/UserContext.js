import React from "react";

var UserStateContext = React.createContext();
var UserDispatchContext = React.createContext();

function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, isAuthenticated: true };
    case "LOGIN_FAILURE":
      return { ...state, isAuthenticated: false };
    case "SIGN_OUT_SUCCESS":
      return { ...state, isAuthenticated: false };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function UserProvider({ children }) {
  var [state, dispatch] = React.useReducer(userReducer, {
    isAuthenticated: !!localStorage.getItem("id_token"),
  });

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

function useUserState() {
  var context = React.useContext(UserStateContext);

  if (context === undefined) {
    throw new Error("useUserState must be used within a UserProvider");
  }
  return context;
}

function useUserDispatch() {
  var context = React.useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error("useUserDispatch must be used within a UserProvider");
  }
  return context;
}



export { UserProvider, useUserState, useUserDispatch, loginUser, register, signOut };

// ###########################################################

async function loginUser(dispatch, login, password, history, setIsLoading, setError, setToken) {
  // setError(false);
  setIsLoading(true);

  if (!!login && !!password) {
    const url = `https://api.youplayed.tk/login`
    const data = {
      email:login,
    	password:password
    }
    const loginToApi = await fetch(url, {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body:JSON.stringify(data)
    }).then((res) => res.json())

    const result = await loginToApi
    const status = result.status
    const message = result.message

    if(status === 200 && message === 'Success'){
      setTimeout(() => {
        // localStorage.setItem("id_token", "1");
        setToken(result.data)
        dispatch({ type: "LOGIN_SUCCESS" });
        setError(false);
        setIsLoading(false);

        history.push("/app/home");
      }, 2000);
    }else{
      setTimeout(() => {
        setError(true);
        setIsLoading(false);
      }, 2000);
    }

  } else {
    dispatch({ type: "LOGIN_FAILURE" });
    setError(true);
    setIsLoading(false);
  }
}

async function register(dispatch, firstname, lastname, email, password, history, setIsLoading, setError, setErrorValue, setSuccessValue) {
  // setError(false);
  setIsLoading(true);
  if (!!firstname && !!lastname && !!email && !!password) {
    const url = `https://api.youplayed.tk/register`
    const data = {
        "email": email,
        "password": password,
        "firstname": firstname,
        "lastname": lastname
    }
    const loginToApi = await fetch(url, {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body:JSON.stringify(data)
    }).then((res) => res.json())

    const result = await loginToApi
    const status = result.status
    const message = result.message
    if(status === 201 && message === 'Success'){
      setSuccessValue("Registration success! Please Login")
      setTimeout(() => {
        // localStorage.setItem("id_token", "1");
        // dispatch({ type: "LOGIN_SUCCESS" });
        setError(false);
        setIsLoading(false);

        history.push("/app/home");
      }, 2000);
    }else{
      setErrorValue(message)
      setTimeout(() => {
        setError(true);
        setIsLoading(false);
      }, 2000);
    }

  } else {
    dispatch({ type: "LOGIN_FAILURE" });
    setError(true);
    setIsLoading(false);
  }
}

function signOut(dispatch, history, setToken) {
  // localStorage.setItem('id_token', '0')
  setToken('')
  dispatch({ type: "SIGN_OUT_SUCCESS" });
  history.push("/login");
}
