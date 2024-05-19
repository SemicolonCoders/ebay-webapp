

const initialState = {
  cartItems: [],
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex !== -1) {
        // If item already exists, update its quantity
        const updatedCartItems = state.cartItems.map((item, index) => {
          if (index === existingItemIndex) {
            return {
              ...item,
              quantity: item.quantity + 1 // Increment quantity
            };
          }
          return item;
        });
        return {
          ...state,
          cartItems: updatedCartItems,
        };
      } else {
        // If item does not exist, add it to the cart
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map(item => {
          if (item.id === action.payload.productId) {
            return { ...item, quantity: action.payload.quantity };
          }
          return item;
        }),
      };
    default:
      return state;
  }
};
export default cartReducer;