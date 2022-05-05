import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";

import { useUserAuth } from "../../context/UserAuthContext";
import { Button } from "@mui/material";
import quarklogo from "./Pics/Quarkhublogolight.png" 
export const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
    <div className="login__box">
      <div className="p-4_box">
      <div><img src={quarklogo} alt="logo" /></div>
        <h2> Signup</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="contained" type="Submit">
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div>
        Already have an account? <Link to="/">Log In</Link>
      </div>
      </div>
    </>
  );
};

export default Signup;
