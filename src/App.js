import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MyContext } from './Project/Context';
import { useState } from 'react';
import Home from './Project/Home'
import { Plant } from './Project/Data'
import LikedProd from './Project/Like'
import CartProd from './Project/Cart';
import Register from './Project/Reg';
import UserByCategory from './Project/Category'
import LoginPage from './Project/LoginPage';
import HandleDisplay from './Project/Display'
import AdminPage from './Project/Admin';
import FPlant from './Project/Flowering';
import ClimberPlant from './Project/Climbers';
import TreePlant from  './Project/Tree';
import CSPlant from  './Project/CandS';
import FruitPlant from './Project/fruti';
import AdminloginPage from './Project/Alogin'
import UserDetail from './Project/user';


function App() {
  const [LikedProducts, setLikedProducts] = useState([])
  const [prod, setprod] = useState(Plant)
  const [cartprod, setcartprod ] = useState([])
  const [user, setuser] = useState([])
  const [logUser, setLogUser] = useState([])
  const [isLoggedin, setIsLoggedin] =useState([])


  const values = {
    LikedProducts,
    setLikedProducts,
    prod,
    setprod,
    cartprod,
    setcartprod,
    user,
    setuser,
    logUser,
    setLogUser,
 
   

  }

  const StringData = 'copy right'
  const ObjData = {
    "Name": "Arya",
    "Tech": "Mern stack"
  }
  const dataArray = [{ "Name": "Arya" }, { "Name": "Aswathy" }]

  console.log("applog",logUser);
  return (
    <div className="App">


      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Cart' element={<CartProd />} />
            <Route path='/Like' element={<LikedProd />} />
           <Route path='/reg' element={<Register />} /> 
           // <Route path='/login' element={<LoginPage />} />
           // <Route path='/reg' element={<Register />} />
           //<Route path='/cat/:selectedcategory' element={< UserByCategory/>} />
           //<Route path='/dis/:selectedPlant' element={< HandleDisplay/>} />
           //<Route path='/Admin' element={<AdminPage/>}/>
           <Route path='/Fp' element={<FPlant/>}/>
           <Route path='/Cp' element={<ClimberPlant/>}/>
           <Route path='/Tp' element={<TreePlant/>}/>
           <Route path='/CSp' element={<CSPlant/>}/>
           <Route path='/FSp' element={<FruitPlant/>}/>
           <Route path='/AdminloginPage' element={<AdminloginPage/>}/>
          <Route path='/user' element ={<UserDetail/>}/>
          </Routes>
        </MyContext.Provider>
      </BrowserRouter>
     

      {/* <Display /> 
      <Home />
      <Print />
      <Fact />
      <Usecase1 />
// <Usecase2 />
// <Usecase3 />
// <Apifetch /> */}


    </div>
  )
}
export default App;