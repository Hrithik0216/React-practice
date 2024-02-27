import './App.css';
import { useState } from 'react';
import axios from 'axios'
function App() {
  const [state, setState] = useState({
    name: "",
    job: ""
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      name: state.name,
      job: state.job
    };
     const res = await axios.post("https://reqres.in/api/users", userData)
     console.log(res)
     console.log(res.data, res.status)
  };

  return (
    <div>
    <h1>Register or Create new account</h1>
    <hr />
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="job">
        Job
        <input
          type="text"
          name="job"
          value={state.job}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Register</button>
    </form>
  </div>
  );
}

export default App;
