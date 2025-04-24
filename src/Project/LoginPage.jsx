
import "../Pstyle/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { GiPlantsAndAnimals } from "react-icons/gi";
import { useContext, useState } from "react";
import { MyContext } from "./Context";

export default function LoginPage() {
  const { user, logUser, setLogUser } = useContext(MyContext);

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const nav = useNavigate();

  function loginBtn() {
    const LoggedUser = user.find(
      (userdata) => userdata.email === email && userdata.pass === pass 
    );

    if (LoggedUser && !LoggedUser.banned) {
      setLogUser([LoggedUser]);
      alert("Login successful");
      nav("/");
    } else if (LoggedUser && LoggedUser.banned) {
      alert("Can't log in. Contact Admin");
    } else {
      alert("Invalid email or password");
    }
  }
  console.log("log",logUser);





    return (
        <div className="log">
            <div className="navbar" id="myNavbar">
                <div className="Logo">
                    <button className="LOGOBOX">
                        <h3>
                            <i>
                                Plant Store <GiPlantsAndAnimals className="LogoIcon" />
                            </i>
                        </h3>
                    </button>
                </div>
                <div className="Rnav"></div>
            </div>
            <img
                className="img"
                src="https://www.trustbasket.com/cdn/shop/products/07_imageforfacebookframe_1_1024x1024.webp?v=1665574183"
                alt=""
            />
            <div className="centered">
                <h3 className="login">LOGIN PAGE</h3>
                <input  required
                    className="q1"
                    type="Name"
                 
                    placeholder="Name"
                      
                    value={name}
                    onChange={(e) => setname(e.target.value) }
                />
                <br />
                <br />
                <input  required
                    className="q2"
                    type="email"
                  
                    placeholder="email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                />
                <br />
                <br />
                <input required
                className="q3" 
              type="password"  id="psw" 
              name="psw" 
              onChange={(e)=>setpass(e.target.value)} 
             placeholder="Password" />
              
              {/* <h6 className="ShowPass">Show Password  <input type="checkbox" onClick={myFunction}/></h6> */}
          
          
                <br />
                <br />
            
                    <button
                     className="q4" 
                     onClick={loginBtn}> Login  </button>
            
                <h5 className="new">
                    <i> NEW HERE?</i>{" "}
                </h5>
                <span> </span>
                <Link className="regL" to={"/reg"}>
                    {" "}
                    <i>Create an account</i>
                </Link>
            </div>
        </div>
    );
}























