import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const SignUpUser = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Check if passwords match
    if (data.password !== data.confirmPassword) {
      alert('Passwords do not match.');
    } else {
      // Show an alert with all data and log the object
      alert(JSON.stringify(data, null, 2));
      console.log(data);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: '10px' }}>
          <label>First Name:</label>
          <Controller
            name="firstName"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <input {...field} type="text" />}
          />
          {errors.firstName && <span>This field is required.</span>}
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Last Name:</label>
          <Controller
            name="lastName"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <input {...field} type="text" />}
          />
          {errors.lastName && <span>This field is required.</span>}
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Username:</label>
          <Controller
            name="userName"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <input {...field} type="text" />}
          />
          {errors.userName && <span>This field is required.</span>}
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label>
          <Controller
            name="email"
            control={control}
            rules={{ required: true, pattern: /^\S+@\S+$/i }}
            render={({ field }) => <input {...field} type="text" />}
          />
          {errors.email && errors.email.type === 'required' && <span>This field is required.</span>}
          {errors.email && errors.email.type === 'pattern' && <span>Invalid email format.</span>}
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Password:</label>
          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <input {...field} type="password" />}
          />
          {errors.password && <span>This field is required.</span>}
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Confirm Password:</label>
          <Controller
            name="confirmPassword"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <input {...field} type="password" />}
          />
          {errors.confirmPassword && <span>This field is required.</span>}
        </div>
        <button type="submit" style={{ display: 'block', width: '100%' }}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpUser;
