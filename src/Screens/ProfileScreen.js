import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../Components/Nav";
import { logout, selectUser } from "../features/userSlice";
import PlanScreen from "./PlanScreen";
import "./ProfileScreen.css";
function ProfileScreen() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt=""
          />
          <div className="profileScreen__details">
            <h2>{user?.email} </h2>
            <div className="profileScreen__plans">
              <h2 style={{ color: "gold" }}>Plans</h2>
              <PlanScreen />
              <button
                onClick={() => dispatch(logout())}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
