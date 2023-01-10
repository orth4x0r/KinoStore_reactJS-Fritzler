import React from "react";

import { useCartContext } from "../../context/CartContext";

export const CartWidget = () => {

    const {totalProducts} = useCartContext();

    return (
        <div className="cartWidget">
            <i className="bi bi-cart"></i>
            <span> {totalProducts() || ''}</span>
        </div>
    );
};

export default CartWidget;
