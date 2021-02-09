import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./Components/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import ProfileScreen from "./Screens/ProfileScreen";
import Stripe from "./Screens/Stripe";
function App() {
  const user = useSelector(selectUser);
  /* useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]); */
  console.log("user is", user);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route exact path="/profile">
              <ProfileScreen />
            </Route>
            <Route exact path="/stripe">
              <Stripe />
            </Route>
            <Route exact path="/homescreen">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
