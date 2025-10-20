import { use } from "react";
import { AuthContext } from "../../contexts/AuthContext";


const Register = () => {
  const {createUser} = use(AuthContext)
  const handleSubmit = (event) =>{
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUser(email, password)
    .then(result => {
      console.log(result.user);
    })
    .catch(error =>{
      console.log(error.message);
    })
  }
  return (
    <div className="hero-content mx-auto mt-10 flex-col lg:flex-row-reverse">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <form onSubmit={handleSubmit}>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input type="text" name="name" className="input" placeholder="Name" />
              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" />
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
