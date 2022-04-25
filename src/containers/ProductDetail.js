import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProduct,
  removeSelectedProduct,
} from "../redux/actions/productsActions";
const ProductDetails = () => {

  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId && productId !== "") dispatch(fetchProduct(productId));
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div className="card-detail-wrapper">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="card-detail-main">
          <div class="card-detail-img">
            <img src={image} alt={title} />
          </div>
          <div className="card-detail-info">
            <h2 className="card-detail-title">{title}</h2>
            <h3 className="card-detail-price">$ {price}</h3>
            <p className="card-detail-category">{category}</p>
            <p className="card-detail-description">{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;