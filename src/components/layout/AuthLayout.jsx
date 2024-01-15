import React from "react";
import FormLogin from "../Fragments/FormLogin";
import { Link } from "react-router-dom";

export default function AuthLayout(props) {
  const { children, title, type } = props;
  return (
    <div className="flex-auto flex space-x-4 justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-700 mb-8">
          Welcome, please enter your details.
        </p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
}

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-center mt-3 text-sm">
        Don't have an account?{" "}
        <Link className="font-bold text-blue-600" to="/register">
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-center mt-3 text-sm">
        Already have an account?{" "}
        <Link className="font-bold text-blue-600" to="/login">
          Login
        </Link>
      </p>
    );
  }
};
