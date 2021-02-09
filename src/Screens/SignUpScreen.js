import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../features/userSlice";
import "./SignUpScreen.css";
function SignUpScreen() {
  //const emailRef = useRef(null);
  //const passwordRef = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const dispatch = useDispatch();
  const register = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(
        login({
          email: email,
          password: password,
        })
      );
      history.push("/profile");
    }

    /* auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      }); */
  };
  const signIn = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(
        login({
          email: email,
          password: password,
        })
      );
      history.push("/profile");
    }
    /* auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      }); */
  };
  return (
    <div className="signUpScreen">
      <form>
        <h1>Sign In</h1>
        <input
          /* ref={emailRef} */ value={email}
          type="Email"
          placeholder="Email..."
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          /* ref={passwordRef} */ value={password}
          type="password"
          placeholder="password..."
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={signIn} type="submit">
          Sign In
        </button>
        <h4>
          {" "}
          <span className="signUpScreen__gray">New to Netflix?</span>
          <span className="signUpScreen__link" onClick={register}>
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
