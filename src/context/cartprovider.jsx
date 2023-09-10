import React, { useEffect, useReducer } from "react";
import { CartContext } from "./cartcontext";

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const checkExistingItem = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[checkExistingItem];
    let updatedItems;
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[checkExistingItem] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    localStorage.setItem("CartItems", JSON.stringify(updatedItems));
    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }

  if (action.type === "REMOVE") {
    
    const checkExistingItem = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existing = state.items[checkExistingItem];
    const updatedAmount = state.totalAmount - existing.price;
    let updatedItems;
    if (existing.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existing, amount: existing.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[checkExistingItem] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }

  if (action.type === "CLEAR_ITEM") {
    const updatedItems = state.items.filter((item) => item.id !== action.id);
    const updatedAmount = state.totalAmount - action.price * action.amount;

    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }

  if (action.type === "CLEAR_CART") {
    return initialState;
  }

  return initialState;
};

const Cartprovider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, initialState);

  const addItemHandler = (item) => {
    dispatchCart({ type: "ADD", item: item });
  };

  const removeItemHandler = (id) => {
    dispatchCart({ type: "REMOVE", id: id });
  };

  const clearCartHandler = () => {
    dispatchCart({ type: "CLEAR_CART" });
  };

  const clearItemHandler = (id) => {
    dispatchCart({ type: "CLEAR_ITEM", id: id });
  };

  const cartcontext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    clearItem: clearItemHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartcontext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default Cartprovider;
