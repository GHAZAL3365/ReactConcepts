import { createContext } from "react";

const CartContext = createContext({
  cartItems: [],
    addItemToCart: () => {},
    clearCart: () => {},
})




  export default CartContext;