import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { added } from '../redux/actions';

function ProductInputForm() {
  const dispatch = useDispatch();

  const [product, setProduct] = useState({
    name: '',
    category: '',
    image: '',
    price: '',
    quantity: '',
  });

  const handleInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(added(product));
    setProduct({
      name: '',
      category: '',
      image: '',
      price: '',
      quantity: '',
    });
  };
  return (
    <div className="formContainer">
      <h4 className="formTitle">Add New Product</h4>
      <form
        className="space-y-4 text-[#534F4F]"
        id="lws-addProductForm"
        onSubmit={handleSubmit}
      >
        {/* product name  */}
        <div className="space-y-2">
          <label htmlFor="name">Product Name</label>
          <input
            className="addProductInput"
            id="lws-inputName"
            type="text"
            value={product.name}
            onChange={handleInputChange}
            name="name"
            required
          />
        </div>
        {/* product category  */}
        <div className="space-y-2">
          <label htmlFor="category">Category</label>
          <input
            className="addProductInput"
            id="lws-inputCategory"
            type="text"
            value={product.category}
            onChange={handleInputChange}
            name="category"
            required
          />
        </div>
        {/* product image url  */}
        <div className="space-y-2">
          <label htmlFor="image">Image Url</label>
          <input
            className="addProductInput"
            id="lws-inputImage"
            type="text"
            value={product.image}
            onChange={handleInputChange}
            name="image"
            required
          />
        </div>
        {/* price & quantity container  */}
        <div className="grid grid-cols-2 gap-8 pb-4">
          {/* price  */}
          <div className="space-y-2">
            <label htmlFor="price">Price</label>
            <input
              className="addProductInput"
              type="number"
              id="lws-inputPrice"
              value={product.price}
              onChange={handleInputChange}
              name="price"
              required
            />
          </div>
          {/* quantity  */}
          <div className="space-y-2">
            <label htmlFor="quantity">Quantity</label>
            <input
              className="addProductInput"
              type="number"
              id="lws-inputQuantity"
              value={product.quantity}
              onChange={handleInputChange}
              name="quantity"
              required
            />
          </div>
        </div>
        {/* submit button  */}
        <button type="submit" id="lws-inputSubmit" className="submit">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default ProductInputForm;
