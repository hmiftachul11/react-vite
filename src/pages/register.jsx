import React from 'react'
import AuthLayout from '../components/layout/AuthLayout'
import FormRegister from '../components/Fragments/FormRegister'

export default function RegisterPage(props) {
  return (
    <AuthLayout title="Register" type='register'>
        <FormRegister />
    </AuthLayout>
  )
}
