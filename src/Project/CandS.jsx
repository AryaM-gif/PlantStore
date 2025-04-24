import { useContext } from "react";
import { MyContext } from "./Context";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { GiPlantsAndAnimals } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { FaInstagramSquare } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { AiFillDislike } from "react-icons/ai";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { FaCartArrowDown } from "react-icons/fa";
import { BsCartCheckFill } from "react-icons/bs";
import { MdOutlineAddShoppingCart } from "react-icons/md";


export default function CSPlant() {
  const nav = useNavigate()
    const { prod, LikedProducts, setLikedProducts, cartprod, setcartprod,logUser,setLogUser } = useContext(MyContext)
    const product = prod.filter((prod) => prod.Category === "Cactus and Succulent Plants")
    //Like product
    const addtolikeprod = (prod) => {
        if (LikedProducts.includes(prod)) {
          setLikedProducts(LikedProducts.filter((dt) => dt !== prod))
        } else {
          setLikedProducts([...LikedProducts, prod]);
        }
      };
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

  function logoutBtn() {
    // window.location.reload();
    setLikedProducts([]);
    setcartprod([]);
    setLogUser("")
    // setuser("")

  }
  //display
  const HandleDisplay = (id) => {
    nav(`/dis/${id}`)
  }
    return (
        <div className="Filter">
          {/* NAVBAR TOP */}
             <div class="navbar" id="myNavbar">
        <div className="Logo">
          <button className="LOGOBOX" ><h3><i>Plant Store < GiPlantsAndAnimals className="LogoIcon" /></i></h3></button></div>

        <div className="Rnav">

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
            <div className="Body">
            {product.map((item) => (
                    <div className="cilmber">
                    {/* <div className="Bproduct" > */}
                      <div className="containerIMG"  onClick={() => HandleDisplay(item.id)} >
                        <img className="Imga1"  width={250} height={250} src={item.Image} alt="image" />
                        {/* <div className="overlayIMG">
                          <img className="Imga2" src={item.Img} alt="" />
                        </div> */}
                      </div>
                      <h4 className="Pname">{item.Name} <span> </span>// <span> </span> {item.Category} </h4>
                      <h4><i>Rs:</i>{item.Price}</h4>
                      <div className="Pcl">
                      <button className="LikeB" onClick={() => addtolikeprod(item)} >
                    {
                      LikedProducts.includes(item) ? <AiFillDislike className="unlike" /> : <FcLikePlaceholder className="heart" />
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
    
                  // </div>

            )
            )}
            </div>
            {/* NAVBAR BOTTOM */}
   <div className="navbar" id="myNavbar">
        
        {/* <a href="#home">Home</a> */}
        {/* <a href="#news">News</a> */}
        <li className="writing"><i>Refund policy.Privacy policy.Terms of service.Shipping policy.Contact information</i></li>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
       <a href=""> <FaFacebook /></a>
        <a href=""><FaInstagramSquare /></a>
        <a href=""> <TiSocialTwitter /></a><span> </span> <span> </span>

      </div>

        </div>
    )
}
    
