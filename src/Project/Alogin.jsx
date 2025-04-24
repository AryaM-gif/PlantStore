
import "../Pstyle/ALogin.css";
import {  useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const AdminLoginPage = () => {
    const[name,setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const nav = useNavigate()
  const handleLogin = () => {

    const adminCredentials = {
      name: 'arya',
      email: 'arya@123',
      password: '1234',
    };

    if (email === adminCredentials.email && password === adminCredentials.password) {
      alert('Admin login successful!');
      nav('/Admin');
      
      
  } else {
      setErrorMessage('Invalid email or password');
    }
  };

  return (
  
    
    
       <div className="Admin">
      <h1 >ADMIN LOGIN</h1> 
      <label className="Agap">
       Name:
        <input placeholder="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label className="Agap"><br />
      Email:
        <input placeholder="Email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label><br />
      <br />

      <label className="Agap" >
        Password:
        <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />   <br />
     
     <button onClick={handleLogin}>Login</button>   
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default AdminLoginPage;


// export default function AdminloginPage() {
//     const { user, AlogUser,AsetLogUser } = useContext(MyContext);

//     const [name, setname ] = useState("")
//     const [email, setemail] = useState("")
//     const [ pass, setpass]= useState("")
//     const nav = useNavigate();

//     function loginBtn() {
//       const LoggedUser = user.find(
//         (userdata) =>  userdata.name === "arya" && userdata.email === "arya@gmail.com" && userdata.pass === "softern"
//       );
//       if (LoggedUser) {
      
//         alert("Login successful");
//         nav("/");
//       } else {
    
//       }
//     }



//     return (
//         <div className="log">
//             <div className="navbar" id="myNavbar">
//                 <div className="Logo">
//                     <button className="LOGOBOX">
//                         <h3>
//                             <i>
//                                 Plant Store <GiPlantsAndAnimals className="LogoIcon" />
//                             </i>
//                         </h3>
//                     </button>
//                 </div>
//                 <div className="Rnav"></div>
//             </div>
//             <img
//                 className="img"
//                 src="https://www.trustbasket.com/cdn/shop/products/07_imageforfacebookframe_1_1024x1024.webp?v=1665574183"
//                 alt=""
//             />
//             <div className="centered">
//                 <h3 className="login">LOGIN PAGE</h3>
//                 <input  required
//                     className="q1"
//                     type="Name"
//                     placeholder="Name"
//                     value={name}
//                     onChange={(e) => setname(e.target.value) }
//                 />
//                 <br />
//                 <br />
//                 <input  required
//                     className="q2"
//                     type="email"
//                     placeholder="email"
//                     value={email}
//                     onChange={(e) => setemail(e.target.value)}
//                 />
//                 <br />
//                 <br />
//                 <input  required
//                     className="q3"
//                     type="password"
//                     placeholder="Password"
//                     value={pass}
//                     onChange={(e) => setpass(e.target.value)}
//                 />
//                 <br />
//                 <br />
            
//                     <button
//                      className="q4" 
//                      onClick={loginBtn}> Login  </button>
            
//                 <h5 className="new">
//                     <i> NEW HERE?</i>{" "}
//                 </h5>
//                 <span> </span>
//                 <Link className="regL" to={"/reg"}>
//                     {" "}
//                     <i>Create an account</i>
//                 </Link>
//             </div>
//         </div>
//     );
// }





