import { useState } from "react";
import "./index.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";


const App = () => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

// sign up
  const handleSubmit = async () => {

   try {
    const user =  await createUserWithEmailAndPassword(auth, email, password)
    console.log(user);
   }
    catch(error) {
    console.log(error.message);
   }
  } 

  return (
    <>
      <p>Email</p>
      <input value={email} onChange={e => setEmail(e.target.value)}  type="text"/>

      <p className="pas">Password</p>
      <input value={password} onChange={e => setPassword(e.target.value)}  type="text"/>

      <br />
      <button onClick={handleSubmit}>Sign up</button>

    </>
  );
};

export default App;
