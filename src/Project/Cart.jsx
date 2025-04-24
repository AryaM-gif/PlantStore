import React, { useContext,useEffect } from 'react';
import { MyContext } from "./Context";
import { Link } from "react-router-dom";
import { GiPlantsAndAnimals } from "react-icons/gi";
import "../Pstyle/Cart.css"
import { FcLike } from "react-icons/fc";
import { BsCartCheckFill } from "react-icons/bs";
import { MdOutlineAddShoppingCart } from "react-icons/md";

// import { FaCartArrowDown } from "react-icons/fa";
export default function CartProd() {
  const { cartprod, setcartprod,logUser,setLikedProducts,setLogUser,LikedProducts } = useContext(MyContext);
  const updateQuantity = (dat, newQuantity) => {
    const updatedCart = cartprod.map(item => {
      if (item.id === dat.id) {
        const updatedItem = { ...item, quantity: newQuantity };
        updatedItem.totalPrice = item.Price * newQuantity; // Calculate total price using the new quantity
        return updatedItem;
      }
      return item;
    });
    setcartprod(updatedCart);
  };
  
 
  useEffect(() => {
    const updatedCart = cartprod.map(item => ({
      ...item,
      totalPrice: item.Price * item.quantity,
    }));
    setcartprod(updatedCart);
  }, [cartprod]);
  

  const increaseQuantity = (dat) => {
    updateQuantity(dat, dat.quantity + 1);
  };

  const decreaseQuantity = (dat) => {
    if (dat.quantity > 1) {
      updateQuantity(dat, dat.quantity - 1);
    }
  };

  // Function to calculate total price
  const calculateTotal = () => {
    return cartprod.reduce((total, prod) => total + (prod.Price*prod.quantity),0);
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
    <div className="Cart">
      <div className="navbar" id="myNavbar">
        <div className="Logo">
          <button className="LOGOBOX"><h3><i>Plant Store < GiPlantsAndAnimals className="LogoIcon" /></i></h3></button>
        </div>
        <div className="Rnav">
        <button className="BH"><Link to={'/'} > <b>HOME</b></Link></button>
          <button className="BtnLike"  ><Link to={'/Like'} > <FcLike />{LikedProducts.length > 0 && <span>({LikedProducts.length})</span>}</Link></button>
      <button className="BtnLoginH">
  {logUser && logUser.length > 0 ? (
    <Link to={'/'} onClick={logoutBtn}><b>LOGOUT</b></Link>
  ) : (
    <Link to={'/login'}><b>LOGIN</b></Link>
    
  )}
</button> 

        </div>
        <h2 className='YourCart' ><b>Your Cart List...</b></h2>
      </div>
      
      <div>
        {cartprod.length === 0 ? (
          <div className='NOcart'>
            <img src="https://i.pinimg.com/564x/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038.jpg" alt="" />
          </div>
        ) : (
            <div >
              <div className="Cartproduct-list">
                {cartprod.map((item) => (
                  <div className="Cp" key={item.id}>
                    <h3>{item.Name}</h3>
                    {/* <h3>{item.Category}</h3> */}
                    <img width={250} height={250} src={item.Image} alt="img" /><br /> <br />
                    <h4><i>Rs:</i>{item.totalPrice}</h4>
                    <div className="Quantity" id="myNavbar">
                    <button onClick={() => increaseQuantity(item)}>+</button>  {item.quantity} <button onClick={() => decreaseQuantity(item)}>-</button>
                 </div><br />
                      <button className='CartBHome' onClick={() => Remove(item)}> <MdOutlineAddShoppingCart className="cartAdd" /> </button>

                      
                
                  </div>
                ))}
                
              </div>
              <h2>Total: {calculateTotal()}</h2>
            </div>
          )}
      </div>
    </div>
  );
}