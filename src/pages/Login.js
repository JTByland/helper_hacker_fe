import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { useUserContext } from "../context/user_context";
import useLocalState from "../utils/localState";
import { useNavigate, Link } from "react-router-dom";
import { PROD_ROOT } from "../url";
const Login = () => {
  const DEV_URL = "/api/v1/auth/login";
  const PROD_USER_URL = `${PROD_ROOT}${DEV_URL}`;
  var numberOfGroups = 1;
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const { saveUser } = useUserContext();
  const { alert, showAlert, loading, setLoading, hideAlert } = useLocalState();
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    hideAlert();
    setLoading(true);
    const { email, password } = values;
    const loginUser = { email, password };
    try {
      const { data } = await axios.post(`${DEV_URL}`, loginUser);
      setValues({ name: "", email: "", password: "" });
      showAlert({
        text: `Welcome, ${data.user.name}. Redirecting to dashboard...`,
        type: "success",
      });
      setLoading(false);
      saveUser(data.user);
      //redirect here when login
      if (numberOfGroups == 0) {
        navigate("/group");
      } else {
        navigate("/forum");
      }
    } catch (error) {
      showAlert({ text: error.response.data.msg });
      setLoading(false);
    }
  };
  return (
    <Wrapper>
      {alert.show && (
        <div className={`alert alert-${alert.type}`}>{alert.text}</div>
      )}
      <form className="container-lg " onSubmit={handleSubmit}>
        <h3 className="text-center">Login</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <Button>Submit</Button>
        </div>
        <p className="forgot-password text-right">
          Don't have an account ?{" "}
          <span>
            <Link to="/register">Register</Link>
          </span>
        </p>
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  margin-top: 1.5rem;
  max-width: 750px;
  margin: 1.5rem auto;
`;

const Button = styled.button`
  background: #f2831a;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #f2831a;
  border-radius: 10px;
`;
export default Login;
