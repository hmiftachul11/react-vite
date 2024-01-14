import React from 'react'
import Label from './Label';
import Input from './input';

const InputForm = (props) => {
    const {name, label, type, placeholder} = props;
  return (
    <div className='mb-6'>
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder}></Input>
    </div>
  )
}

export default InputForm;
