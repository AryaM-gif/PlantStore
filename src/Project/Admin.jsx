import React, { useContext } from 'react'
import { MyContext } from "./Context";
import { useState } from 'react'
import "../Pstyle/AdminPage.css"
import { Link, Navigate, useNavigate } from "react-router-dom";
// import UserDetail from './user.jsx'; // Import UserDetail component

  
const AdminPage = () => {
  const nav = useNavigate();
  
    const { prod, setprod, user, logUser, setLogUser } = useContext(MyContext);
  
  

  const initialProduct = {
    id: '',
    Name: '',
    Price: '',
    AboutProduct: '',
    Category: '',
    Image: '',
    Img: '',
    quantity: 1,
  };

  const [currentProduct, setCurrentProduct] = useState(initialProduct);

  const addProduct = () => {
    setprod([...prod, currentProduct]);
    setCurrentProduct(initialProduct);
  };

  const removeProduct = (productId) => {
    setprod(prod.filter((product) => product.id !== productId));
  };

  const editProduct = (productId) => {
    const productToEdit = prod.find((product) => product.id === productId);
    setCurrentProduct(productToEdit || initialProduct);
  };

  const updateProduct = () => {
    const updatedProducts = prod.map((product) =>
      product.id === currentProduct.id ? currentProduct : product
    );
    setprod(updatedProducts);
    setCurrentProduct(initialProduct);
  };
  const categories = ['Flowering Plants', 'Succulents', 'Indoor Plants', 'Outdoor Plants'];

  return (
    <div>
      <h1 className='ARE'><b>Admin Page</b></h1>
      <Link to={'/'} >    <button className="BUTTONHOME"> <b>Home</b></button></Link>
      <Link to={'/user'} >    <button className="userbtn"> <b>UserDetail</b></button></Link>
       
  
      <div className='Prod'>
        <h3><b>Add/Edit Product</b></h3>
       <b>Id:</b> 
        <input  className='type'
        placeholder='Id'
         type="text" 
        value={currentProduct.id} 
        onChange={(e) =>setCurrentProduct({...currentProduct,id:e.target.value})} name="" id="" /> <span> </span> <span> </span>
     <span>  </span>   <span> </span> <b>Name :</b> <span> </span>
          <input className='type'
          placeholder='Name'
            type="text"
            value={currentProduct.Name}
            onChange={(e) => setCurrentProduct({ ...currentProduct, Name: e.target.value })}
          /> <br />
   <b> Price:</b>
         
          <input className='type'
          placeholder='Price'
            type="text"
            value={currentProduct.Price}
            onChange={(e) => setCurrentProduct({ ...currentProduct, Price: e.target.value })}
          /><span> </span> <span> </span>

        <b>Category:</b>
          
          <input className='type'
          placeholder='Category'
            type="text"
            value={currentProduct.Category}
            onChange={(e) => setCurrentProduct({ ...currentProduct, Category: e.target.value })}
          />
          <br />
           {/* <b>About the product:</b>
          
          <input className='type'
          placeholder='About product'
            type="text"
            value={currentProduct.AboutProduct}
            onChange={(e) => setCurrentProduct({ ...currentProduct, Category: e.target.value })}
          /> */}
       <br />

       <b>Image:</b>  
   <input className='type' type='text' placeholder='Image URL' value={currentProduct.Image} onChange={(e) => setCurrentProduct({...currentProduct,Image:e.target.value})} />
   <br />
   <b>Image:</b>  

   <input className='type' type='text' placeholder='Image URL' value={currentProduct.Img} onChange={(e) => setCurrentProduct({...currentProduct,Img:e.target.value})} />
  <br />
 
         
        <br />
        {/* {currentProduct.id ? (
          <button onClick={updateProduct}>Update Product</button>
        ) : (
          <button className='AdminAdd' onClick={addProduct}>Add Product</button>
        )} */}
        <button  className='AdminAdd' onClick={updateProduct}>Update Product</button>
        <button  className='AdminAdd' onClick={addProduct}> Add Product</button>
      </div>

<div>



</div>
      <div>
        <h2>Product List</h2>
        <ul >
          {prod.map((product) => (
            <li  key={product.id } >
              <h3 >id: {product.id} </h3>
              <h3>Name: {product.Name} </h3>
              <br />
              <img  className="Imga1" src={product.Image} alt="image"/>
              {/* <img className="Imga2" src={product.Img} alt="" /> */}
              {/* <h3>About the prodcut:</h3><p>{product.AboutProduct} </p> */}
              <h3>Category:{product.Category}</h3>
              <h4>${product.Price}</h4>
              <button className='Adminedit' onClick={() => editProduct(product.id)}>Edit</button>
              <button className='Adminremove' onClick={() => removeProduct(product.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPage;
