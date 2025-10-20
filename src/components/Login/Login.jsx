import React, {  useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const {signInUser} = useContext(AuthContext);
    const handleLogIn = (event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

       // Reset status handle
       setSuccess(false)
       setError('') 

       signInUser(email, password)
       .then(result =>{
        console.log(result.user)
        setSuccess(true);
       })
       .catch(error =>{
        console.log(error.message);
        setError(error.message);
       })
    }
  return (
    <div className="hero-content mx-auto mt-10 flex-col lg:flex-row-reverse">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <form onSubmit={handleLogIn}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
            {
                success && <p className="text-green-400">Login successful.</p>
            }
            {
                error && <p className="text-red-400"> {error} </p>
            }
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
