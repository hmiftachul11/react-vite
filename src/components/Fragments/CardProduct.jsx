import React from "react";
import Button from "../Elements/button";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="flex justify-center py-5">
      <div className="w-full max-w-sm bg-gray-500 border border-sky-500 rounded-lg shadow">
        {children}
      </div>
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <a href="#">
      <img src={image} alt="shoes 1" className="p-4 rounded-t-lg" />
    </a>
  );
};

const Body = (props) => {
  const { title, children } = props;
  return (
    <div className="px-4 pb-5">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {title}
        </h5>
        <p className="text-s text-white">{children}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price } = props;
  return (
    <div className="flex items-center justify-between px-4 pb-5">
      <span className="text-3xl font-bold text-white">{price}</span>
      <Button classname="bg-blue-500">Add to cart</Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
