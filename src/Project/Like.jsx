import { MyContext } from "./Context";
import { useContext } from "react"
import { AiFillDislike } from "react-icons/ai"
import "../Pstyle/Like.css";
import { GiPlantsAndAnimals } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import { FaCartArrowDown } from "react-icons/fa";
import { BsCartCheckFill } from "react-icons/bs";
import { MdOutlineAddShoppingCart } from "react-icons/md";

export default function Likeprod() {
  const { cartprod, setcartprod,logUser,setLogUser } = useContext(MyContext)
  const { LikedProducts, setLikedProducts } = useContext(MyContext)
  console.log("Like product page.", LikedProducts)
  const nav = useNavigate()
  const UnlikedBtn = (item) => {
    alert('Are you sure to remove the item .....')
    const updateLikeprod = [...LikedProducts]
    updateLikeprod.splice(item, 1)
    setLikedProducts(updateLikeprod)
  }
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
  return (

    <div className="Like">

      <div class="navbar" id="myNavbar">
        <div className="Logo">
          <button className="LOGOBOX" ><h3><i>Plant Store < GiPlantsAndAnimals className="LogoIcon" /></i></h3></button></div>
        <div className="Rnav">
          <button className="BH"><Link to={'/'} > <b>HOME</b></Link></button>
          <button className="BtnCart"> <Link to={'/cart'} ><FaCartArrowDown />{cartprod.length > 0 && <span>({cartprod.length})</span>}</Link></button>   
 <button className="BtnLoginH">
  {logUser && logUser.length > 0 ? (
    <Link to={'/'} onClick={logoutBtn}><b>LOGOUT</b></Link>
  ) : (
    <Link to={'/login'}><b>LOGIN</b></Link>
    
  )}
</button> 

        </div>
        <h2 className="likeprod"><b>Your Liked Products...</b></h2>
       
      </div>
    
      <div>
        {LikedProducts.length === 0 ? (
          <div className="NOlike">
            <p>No liked products yet.</p>
            <img src="https://i.pinimg.com/564x/81/c4/fc/81c4fc9a4c06cf57abf23606689f7426.jpg" alt="" />
          </div>
          
          
        ) : (
          <div className="likeproduct-list">
            {LikedProducts.map((item) => (
              <div className="Lp">
                <h3>{item.Name}</h3>
                <h3>{item.Category}</h3> 
                <img width={300} height={300} src={item.Image} alt="img" /><br /><br />
                <button className="LikeB"  onClick={()=>UnlikedBtn()}><AiFillDislike  className="unlike"/></button>
               
                 <span> </span>
                <span> </span>               
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
                    {cartprod.some(cartItem => cartItem.id === item.id) ? "Remove" : "Add to cart"}
                  </button>
              
              </div>
            ))}
           
          </div>
        )}
      </div>
    </div>
  );
}