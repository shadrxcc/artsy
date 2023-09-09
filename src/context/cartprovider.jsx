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
    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }

  if (action.type === "REMOVE") {
    const updatedAmount = state.totalAmount - action.price;
    const checkExistingItem = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existing = state.items[checkExistingItem];
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

  return initialState;
};

const Cartprovider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, initialState);

  const addItemHandler = (item) => {
    dispatchCart({ type: "ADD", item: item });
    localStorage.setItem("CartItems", JSON.stringify(item));
  };

  const removeItemHandler = (id) => {
    dispatchCart({ type: "REMOVE", id: id });
  };

  useEffect(() => {
    const savedCartItems = localStorage.getItem("CartItems");
    if (savedCartItems) {
      dispatchCart(savedCartItems);
    }
  }, []);

  const clearItemHandler = (id) => {
    dispatchCart({ type: "CLEAR_ITEM", id: id });
  };

  const cartcontext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    clearItem: clearItemHandler,
  };

  return (
    <CartContext.Provider value={cartcontext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default Cartprovider;

// if (action.type === "ADD") {
//   const updatedTotalAmount =
//     state.totalAmount + action.item.price * action.item.amount;

//   const existingCartItemIndex = state.items.findIndex(
//     (item) => item.id === action.item.id
//   );
//   const existingCartItem = state.items[existingCartItemIndex];
//   let updatedItems;

//   if (existingCartItem) {
//     const updatedItem = {
//       ...existingCartItem,
//       amount: existingCartItem.amount + action.item.amount,
//     };
//     updatedItems = [...state.items];
//     updatedItems[existingCartItemIndex] = updatedItem;
//   } else {
//     updatedItems = state.items.concat(action.item);
//   }

//   return {
//     items: updatedItems,
//     totalAmount: updatedTotalAmount,
//   };
// }
// if (action.type === "REMOVE") {
//   const existingCartItemIndex = state.items.findIndex(
//     (item) => item.id === action.id
//   );
//   const existingItem = state.items[existingCartItemIndex];
//   const updatedTotalAmount = state.totalAmount - existingItem.price;
//   let updatedItems;
//   if (existingItem.amount === 1) {
//     updatedItems = state.items.filter((item) => item.id !== action.id);
//   } else {
//     const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
//     updatedItems = [...state.items];
//     updatedItems[existingCartItemIndex] = updatedItem;
//   }

//   return {
//     items: updatedItems,
//     totalAmount: updatedTotalAmount,
//   };
// }
