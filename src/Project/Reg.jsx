import "../Pstyle/Register.css"
import { GiPlantsAndAnimals } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { MyContext } from "./Context";
import { useContext, useState } from "react";
import {useNavigate } from "react-router-dom";
export default function Reg() {
    const { user, setuser,} = useContext(MyContext)

    const [name, setname ] = useState("")
    const [email, setemail] = useState("")
    const [ pass, setpass]= useState("")
    const nav = useNavigate();

    const IsUserRegistered = () => {
        return user.find((data) => data.email === email && data.pass === pass )
    }
    const handleButtonClick = () =>{ 
        if (IsUserRegistered()) {
          alert("User Already Registered.") 
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          alert("Please enter a valid email address.");
          return;
        }
        if (pass.length < 5 || !/[!@#$%^&*(),.?":{}|<>]/.test(pass)) {
          alert("Password must be at least 5 characters long that contain an uppercase letter and a special character.");
          return;
        }
        const userdata = { name, email, pass }
        setuser([...user, userdata])
        nav("/login")
        console.log("hlooo", user)

    }
    //Showpassword
    function myFunction() {
      var x = document.getElementById("psw");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    }
  return (
    <div> 
      <div className="navbar" id="myNavbar">
    <div className="Logo">
  <button className="LOGOBOX" ><h3><i>Plant Store < GiPlantsAndAnimals className="LogoIcon" /></i></h3></button></div>

    <div className="Rnav">
</div>
</div>
<div >
<img className="pic" src="https://i.pinimg.com/564x/cc/23/9e/cc239e3398c4004a67bdbde8bb373c90.jpg" alt="" />
<div className="centered">
                <h3 className="login">REGISTER PAGE</h3>
                <input className="q1"
                 type="Name"
                 placeholder="Name" 
                 required
                 value={name}
                 onChange={(e) => setname(e.target.value)}/><br /><br />

                <input className="q2" 
                type="email" 
                placeholder="email"
                required
                value={email}
                onChange={(e) => setemail(e.target.value)}/> <br /><br />
              <input className="q3" 
              type="password" id="psw" 
                required 
                value={pass}
                onChange={(e)=> setpass(e.target.value)}
                placeholder="Password" />
                <h6 className="ShowPass">Show Password  <input type="checkbox" onClick={myFunction}/></h6>
          
                <button className="q4"onClick={handleButtonClick} >OK</button>
                {/* <h5 className="new"><i> NEW HERE?</i> </h5><span> </span><Link className="regL" to={'/login'} > <i>LOGIN</i></Link> */}
                 </div>
</div>
</div>
   
 
 
  );
}

 
        
//         <div className="log">
//         <div class="topnav">
//   <div className="Logo">
//   <button className="LOGOBOX" ><h3><i>Plant Store < GiPlantsAndAnimals className="LogoIcon" /></i></h3></button></div>
// <div className="Tnav"> 
// </div>

  
// </div>
//         <img className="img" src="https://imgcdn.floweraura.com/haworthia-in-aesthetic-bird-planter-9800687pl-B_0.jpg" alt="" />
//         <div className="centered">
//             <h3 className="login">Register PAGE</h3>
//             <input className="q1" type="Name" placeholder="Name" /><br /><br />
            
//             <input className="q2" type="email" placeholder="email" /> <br /><br />

//             <input className="q3" type="password" name="" placeholder="Password" id="" /><br /><br />
//             <button className="q4">LOGIN</button>
//         </div>
//     </div>
      
        //         <div className="body"> <h3 className="reg" >Register </h3>
        //             <div className="image"><img src="https://imgcdn.floweraura.com/haworthia-in-aesthetic-bird-planter-9800687pl-B_0.jpg" alt="" />
        //             </div>

        //             <img className="img1" src="https://i.pinimg.com/564x/a1/77/68/a1776809df553a2f199e6d712b52d5dc.jpg" alt="" />
        //             <img className="img2" src="https://i.pinimg.com/564x/7e/b3/10/7eb3106319d6f7f5956fd695b0cbb468.jpg" alt="" />



        //         </div>
        //     </div>
        // </div>

 