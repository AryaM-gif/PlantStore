import "../Pstyle/Home.css"
import React from 'react';
import { MyContext } from "./Context";
import { useContext, useState } from "react";
import { Plant } from "./Data"
import { TfiSearch } from "react-icons/tfi";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { IoHeartDislike } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { FaInstagramSquare } from "react-icons/fa";
import { GiPlantsAndAnimals } from "react-icons/gi";
import { AiFillDislike } from "react-icons/ai";
import { FcLikePlaceholder } from "react-icons/fc";
import { FaSearch } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { RiAdminLine } from "react-icons/ri";
import { FaCartArrowDown } from "react-icons/fa";
import { BsCartCheckFill } from "react-icons/bs";
import { MdOutlineAddShoppingCart } from "react-icons/md";

export default function Home() {
  const { prod, LikedProducts, setLikedProducts, cartprod, setcartprod, logUser, setLogUser, user, setuser } = useContext(MyContext)
  const [filterprod, setfilterprod] = useState(prod)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectcategory, setSelectCategory] = useState("")
  const [selectedPlant, setSelectPlant] = useState("")




  console.log("Product", Plant)

  console.log("logUser", logUser);


  const nav = useNavigate()
  // search
  function handleSearchInput(e) {
    const query = e.target.value
    setSearchQuery(query)
    const filterResult = prod.filter((product) => {
      const { id, Name, Category } = product
      return (
        id.toString().includes(query) ||
        Name.toLowerCase().includes(query.toLowerCase()) ||
        Category.toLowerCase().includes(query.toLowerCase())
      )
    })
    setfilterprod(filterResult)
  }

  //display
  const HandleDisplay = (id) => {
    // const selectedPlant = e.target.value
    // console.log("selectedPLant", id);
    // setSelectPlant(selectedPlant)
    nav(`/dis/${id}`)
  }
  const getFilteredData = (selectedPlant) => {
    const newUser = prod.filter((item) => item.id === selectedPlant)
    return newUser
  }
  const distinctDisplay = [...new Set(prod.map(item => item.id))]



  // LIKE PRODUCT

  const addtolikeprod = (prod) => {
    if (LikedProducts.includes(prod)) {
      setLikedProducts(LikedProducts.filter((dt) => dt !== prod))
    } else {
      setLikedProducts([...LikedProducts, prod]);
    }
  }
  console.log("Liked Products", LikedProducts);

  //CART PRODUCT
  const addtocart = (prod) => {
    if (logUser.length > 0) {
      const isProductInCart = cartprod.some(item => item.id === prod.id);

      if (isProductInCart) {
        alert("This product is already in your cart.");
      } else {
        setcartprod([...cartprod, prod]);
      }
    } else {
      alert("Please log in to add products to the cart.");
    }
  };
  const Remove = (dat) => {
    alert('Are you sure to remove this item')
    const updatedCart = cartprod.filter(item => item.id !== dat.id);
    setcartprod(updatedCart);
  };


  //CATEGORY
  const Handlecategory = (e) => {
    const selectedcategory = e.target.value
    setSelectCategory(selectedcategory)
    nav(`/cat/${selectedcategory}`)
  }
  const getFilteredUser = (selectcategory) => {
    const newUser = prod.filter((item) => item.Category === selectcategory)
    return newUser
  }
  const distinctCategory = [...new Set(prod.map(item => item.Category))]

  //login

  function logoutBtn() {
    // window.location.reload();
    setLikedProducts([]);
    setcartprod([]);
    setLogUser("")
  }
  return (
    <div className="home">

      <div className="navbar" id="myNavbar">

        <div className="Logo">

          <button className="LOGOBOX" ><h3><i>Plant Store < GiPlantsAndAnimals className="LogoIcon" /></i></h3></button></div>
        <button className="BtnAdmin">   <Link to={'/AdminloginPage'}>  <RiAdminLine />  </Link> </button>
        <div className="RnavHome">

          <button className="BH"><Link to={'/'} > <b>HOME</b></Link></button>
          <button className="BtnLike"  ><Link to={'/Like'} > <FcLike />{LikedProducts.length > 0 && <span>({LikedProducts.length})</span>}</Link></button>
          <button className="BtnCart"> <Link to={'/cart'} ><FaCartArrowDown />{cartprod.length > 0 && <span>({cartprod.length})</span>}</Link></button>

          <button className="BtnLoginH">
            {logUser && logUser.length > 0 ? (
              <Link to={'/'} onClick={logoutBtn}><b>LOGOUT</b></Link>
            ) : (
              <Link to={'/login'}><b>LOGIN</b></Link>

            )}
          </button>



        </div>


      </div>



      <div className="Thome">
        <div className="PIC">
          {/* <img className="Lpic3" src="https://hips.hearstapps.com/hmg-prod/images/indoor-plants-1-64f051a37d451.jpg?crop=1xw:0.9xh;center,top&resize=1200:*" alt="" /> */}
          {/* <img className="Lpic1" src="https://png.pngtree.com/background/20230526/original/pngtree-group-of-plants-in-white-pots-picture-image_2744096.jpg" alt="" /> */}

          <img className="Lpic2" src="https://positivebloom.com/wp-content/uploads/2022/04/The-Most-Inspiring-Indoor-Plants-Quotes-And-Sayings.jpg" alt="" />
          <div className="note">
            <h3><b>"Life <br /> is <br /> too Short, <br /> buy <br /> more <br /> &<br /> more <br /> PLANTS"</b></h3>

          </div>
        </div>

      </div>
      <div className="Bright">
        <div className="div" class="navbar">
          <h6 className="NotePlants">"There is no such sweet thing as too many Plants."</h6>


          <div className="Center">

            {/* <button className="BP"> <Link to={'/Fp'}> flowering plants </Link></button> */}
            {/* <input className="Search"  type="search" name="" i="" placeholder="Search by the here ..." /> */}
            <br />
            {/* <select className="Category" name="" id="" onChange={Handlecategory}>
              <option className="Type" value="">Select category</option>
              {distinctCategory.map((Category) =>
                <option value={Category}>{Category}</option>)
              }
            </select> */}
          </div>


        </div>
        <input className="SearchH" type="text" onChange={handleSearchInput} placeholder="Search.." name="search" /><br />

        <div className="tab">

          <Link to={'Fp'}> <button className="tablinks"> <b>FLOWERING PLANT</b></button>  </Link>
          <Link to={'Cp'}> <button className="tablinks"><b>CLIMBER</b> </button> </Link>
          <Link to={'Tp'}> <button className="tablinks"> <b>TREE</b></button> </Link>
          <Link to={'CSp'}> <button className="tablinks"> <b>CACTUS & SUCCULENT PLANTS</b> </button> </Link>
          <Link to={'FSp'}> <button className="tablinks"> <b>FRUITS</b> </button> </Link>

        </div>


        <div className="Bleft">


          {
            filterprod.map((item) =>
              <div className="cilmber">
                {/* <div className="Bproduct" > */}
                {/* <h4 >{item.id}</h4> */}
                <div className="containerIMG" onClick={() => HandleDisplay(item.id)}  >
                  <img className="Imga1" src={item.Image} alt="image" />
                  <div className="overlayIMG">
                    <img className="Imga2" src={item.Img} alt="" />
                  </div>
                </div><br /><br />
                <h4 className="Pname">{item.Name} <span> </span>// <span> </span> {item.Category} </h4>
                <h4><i>Rs:</i>{item.Price}</h4>
                <div className="Pcl">
                  <button className="LikeB" onClick={() => addtolikeprod(item)} >
                    {
                      LikedProducts.includes(item) ? <FcLike className="heart" /> : <FcLikePlaceholder className="heart" />
                    }
                  </button> <span> </span><span> </span><span> </span>
                  <button
                    className="CartBHome"
                    onClick={() => {
                      if (cartprod.some(cartItem => cartItem.id === item.id)) {
                        Remove(item);
                      } else {
                        addtocart(item);
                      }
                    }}
                  >
                    {cartprod.some(cartItem => cartItem.id === item.id) ? <  BsCartCheckFill className="cart" /> : <MdOutlineAddShoppingCart className="cartAdd" />}
                  </button>


                </div >


              </div>
            )
          }
        </div>
      </div>
      <div className="navbar" id="myNavbar">

        {/* <a href="#home">Home</a> */}
        {/* <a href="#news">News</a> */}
        <h5 className="writing"><i>Refund policy.Privacy policy.Terms of service.Shipping policy <span> </span> <br />.Contact information</i></h5>
        <div className="B">
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
          <a href=""> <FaFacebook /></a>
          <a href=""><FaInstagramSquare /></a>
          <a href=""> <TiSocialTwitter /></a><span> </span> <span> </span>

        </div>

      </div>




      {/* <a href="">PlantStore</a> */}


    </div>

  )
}









