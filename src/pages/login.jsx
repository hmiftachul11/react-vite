import React from "react";
import AuthLayout from "../components/layout/AuthLayout";
import FormLogin from "../components/Fragments/FormLogin";

export default function LoginPage(props) {
  return (
    <AuthLayout title="Login" type='login'>
      <FormLogin />
    </AuthLayout>
  );
}
