import { createContext, useState } from "react";

export const CartContext =
  createContext();

export function CartProvider({
  children,
}) {
  const [cartItems, setCartItems] =
    useState([]);

  const addToCart = (product, quantity = 1) => {
  setCartItems((prev) => {
    const existingItem = prev.find(
      (item) =>
        item.slug === product.slug
    );

    if (existingItem) {
      return prev.map((item) =>
        item.slug === product.slug
          ? {
              ...item,
              quantity:
                item.quantity +
                quantity,
            }
          : item
      );
    }

    return [
      ...prev,
      {
        ...product,
        quantity,
      },
    ];
  });
};

const increaseQuantity = (
  slug
) => {
  setCartItems((prev) =>
    prev.map((item) =>
      item.slug === slug
        ? {
            ...item,
            quantity:
              item.quantity + 1,
          }
        : item
    )
  );
};

const decreaseQuantity = (
  slug
) => {
  setCartItems((prev) =>
    prev
      .map((item) =>
        item.slug === slug
          ? {
              ...item,
              quantity:
                item.quantity - 1,
            }
          : item
      )
      .filter(
        (item) =>
          item.quantity > 0
      )
  );
};
  const removeFromCart = (index) => {
  setCartItems((prev) =>
    prev.filter((_, i) => i !== index)
  );
};

  return (
    <CartContext.Provider
      value={{
  cartItems,

  addToCart,

  removeFromCart,

  increaseQuantity,

  decreaseQuantity,
}}
    >
      {children}
    </CartContext.Provider>
  );
}