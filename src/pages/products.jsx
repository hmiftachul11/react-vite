import React from "react";
import Button from "../components/Elements/button";
import CardProduct from "../components/Fragments/CardProduct";

const ProductsPage = () => {
  return (
    
        <CardProduct>
            <CardProduct.Header image='/images/shoes_1.svg' />
            <CardProduct.Body tittle='New Shoes'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nihil rem beatae incidunt sint iure.
            </CardProduct.Body>
            <CardProduct.Footer price='100.000'/>

        </CardProduct>
    
  );
};

export default ProductsPage;
