import { useContext } from "react";
import { MyContext } from "./Context";
import { useParams } from "react-router-dom";
import "../Pstyle/Display.css"
import { Link } from "react-router-dom"
import { GiPlantsAndAnimals } from "react-icons/gi";
import { AiFillDislike } from "react-icons/ai";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { FaCartArrowDown } from "react-icons/fa";
import { BsCartCheckFill } from "react-icons/bs";
import { MdOutlineAddShoppingCart } from "react-icons/md";

function DisplayPlant() {

  const { prod, LikedProducts, setLikedProducts, cartprod, setcartprod,logUser ,setLogUser} = useContext(MyContext)
  const { selectedPlant } = useParams();
  console.log("cat", selectedPlant)
  const product = prod.filter((prod) => prod.id === selectedPlant)
  console.log("catprod", product)

  // LIKE PRODUCT

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
  return (
    <div className="BodyDIS">

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
      {product.map((item) => (
        <div className="cilmberDIS">
          <div className="PclDIS">
          <img className="Imga1" src={item.Image} alt="image"/><br />
              <img className="Imga2" src={item.Img} alt="" />
            {/* <img className="img.sticky" src={item.Image} alt="image" width={"450px"} /> <br /><br /> */}
            {/* <img src={item.Img} width={"250px"} height={"250px"} alt="" /> */}
          </div>

          <div className="DIS">
            <h4 className="PnameDI">{item.Name} <span>
            </span>// <span> </span>Catergory : {item.Category} </h4>
            <p className="AboutProd" >{item.AboutProduct}</p> <br />

            <button className="LikeB" onClick={() => addtolikeprod(item)} >
              {
                LikedProducts.includes(item) ? <AiFillDislike className="unlike" /> :  <FcLikePlaceholder className="heart" />
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
            <h4><i>Rs:</i>{item.Price}</h4>
          </div>


        </div>

      )
      )}
    </div>
  )
}
export default DisplayPlant