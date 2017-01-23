import React from 'react';
import { Field, reduxForm } from 'redux-form'

const LoginForm = ({ handlePressLogin }) => {
  return (
    <div>
      <form onSubmit={handlePressLogin}>
        <div>
          <label htmlFor='username'>Username</label>
          <Field name='username' component='input' type='text' />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <Field name='password' component='input' type='text' />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

// Decorate the form component
export default reduxForm({
  form: "login"
})(LoginForm)