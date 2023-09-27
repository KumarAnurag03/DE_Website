import React, { Fragment, Suspense, lazy } from "react";
import { ThemeProvider, StyledEngineProvider, CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "./theme";
import GlobalStyles from "./GlobalStyles";
import Pace from "./shared/components/Pace";
import {auth,db} from './firebase.js';
import { useStateValue } from "./MyContexts/StateProvider.js";
import { useEffect } from "react";

const LoggedInComponent = lazy(() => import("./logged_in/components/Main"));

const LoggedOutComponent = lazy(() => import("./logged_out/components/Main"));

function App() {

  const [{user,firstName,lastName},dispatch]=useStateValue();

  // useEffect(()=>{
  //   auth.onAuthStateChanged((authUser)=>{
  //     if(authUser){
  //       // dispatch({
  //       //   type:'SET_USET',
  //       //   user:authUser
  //       // })
  //       console.log(authUser);
  //       db.collection('users').doc(authUser.uid).get()
  //       .then(doc=>{
  //         let firstName=doc.data().firstName;
  //         let lastName=doc.data().lastName;
  //         let company=doc.data().company;

  //         dispatch({
  //           type:'SET_USER',
  //           user:authUser,
  //           firstName,lastName,company
  //         })
  //       })
  //       console.log("User="+user?.uid+", name="+firstName+" "+lastName);
  //     }
  //     else{
  //       dispatch({
  //         type:'SET_USER',
  //         user:null,
  //         firstName:'',
  //         lastName:'',
  //         company:[]
  //       })
  //     }
  //   })
  // },[auth])

  return (
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles /> 
          <Pace color={theme.palette.primary.light} />
          <Suspense fallback={<Fragment />}>
            <Switch>
              {/* <Route path="/c">
                <LoggedInComponent />
              </Route> */}
              <Route>
                <LoggedOutComponent />
              </Route>
            </Switch>
          </Suspense>
        </ThemeProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  );
}

export default App;
