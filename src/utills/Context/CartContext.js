import { createContext } from "react";

const CartContext = createContext({
  cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearCart: () => {},
})




  export default CartContext;