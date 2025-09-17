import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginup, signup } from "../Utilityfiles/Authslice";
import { useNavigate } from "react-router-dom";

function Login() {
   const CurrentUser = useSelector((state) => state.AuthReducer.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Username, setUsername] = useState();
  const [Password, setPassword] = useState();
  const [Loginpage, setLoginpage] = useState(true);
  const [ConfirmPassword, setConfirmPassword] = useState();

  const signuphandler = (e) => {
    e.preventDefault();
    if (Password !== ConfirmPassword) {
      alert("Password and Confirm Password do not match");
      return;
    } else {
      dispatch(signup({ Username, Password }));
      setUsername("");
      setPassword("");
      setConfirmPassword("");
      setLoginpage(true);
    }
  };
  const Handler = (e) => {
    e.preventDefault();
    dispatch(loginup({ Username, Password }));
      setUsername("");
    setPassword("");
  }
  if (CurrentUser) {
      navigate("/");
    }
  return (
    <div className="login-container">
      <div className="login-page">
        {Loginpage ? (
          <>
            {" "}
            <h1>Login</h1>
            <form className="login-form" onSubmit={Handler}>
              <input
                type="email"
                placeholder="Username"
                className="Login-input"
                onChange={(e) => setUsername(e.target.value)}
                value={Username}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="Login-input"
                onChange={(e) => setPassword(e.target.value)}
                value={Password}
                required
              />
              <button type="submit" className="Login-button">
                Login
              </button>
            </form>
            <p className="login-signup">
              Don't have an account?{" "}
              <a
                href="#"
                onClick={() => {
                  setLoginpage(false);
                }}
              >
                SignUp
              </a>
            </p>
          </>
        ) : (
          <>
            {" "}
            <h1>SignUp</h1>
            <form className="login-form" onSubmit={signuphandler}>
              <input
                type="email"
                placeholder="Username"
                className="Login-input"
                onChange={(e) => setUsername(e.target.value)}
                value={Username}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="Login-input"
                onChange={(e) => setPassword(e.target.value)}
                value={Password}
                required
              />
              <input
                type="password"
                placeholder="ConfirmPassword"
                className="Login-input"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={ConfirmPassword}
                required
              />
              <button type="submit" className="Login-button">
                SignUp
              </button>
            </form>
            <p className="login-signup">
              have an account?{" "}
              <a
                href="#"
                onClick={() => {
                  setLoginpage(true);
                }}
              >
                LogIn
              </a>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
export default Login;
