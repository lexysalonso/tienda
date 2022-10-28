import { createSlice } from "@reduxjs/toolkit";

let intinialState = {
  card: [],
};

const cardSlice = createSlice({
  name: "card",
  initialState: intinialState,
  reducers: {
    addToCard(state, action) {
      let ItemCard = state.card.find((c) => c.id === action.payload.id);
      console.log("ver ACTION", action);
      return ItemCard
        ? {
            ...state,
            card: state.card.map((item) =>
              item.id === ItemCard.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            card: [...state.card, { ...action.payload, quantity: 1 }],
          };
    },
    removeItemCard(state, action) {
      const { change, item } = action.payload;
      let quantity = item.quantity;
      console.log("ver action", change);
      return change
        ? quantity > 1
          ? {
              ...state,
              card: state.card.map((items) =>
                items.id === item.id
                  ? { ...items, quantity: items.quantity - 1 }
                  : items
              ),
            }
          : {
              ...state,
              card: state.card.filter((items) => items.id !== item.id),
            }
        : {
            ...state,
            card: state.card.filter((items) => items.id !== item.id),
          };
    },
    clearToCard(state) {
      return {
        ...state,
        card: [],
      };
    },
  },
});

export const { addToCard, clearToCard, removeItemCard } = cardSlice.actions;

export default cardSlice.reducer;
