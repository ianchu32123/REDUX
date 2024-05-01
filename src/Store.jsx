import accountreducer from "./features/account/accountSlice";
import customerreducer from "./features/customer/customerSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    account: accountreducer,
    customer: customerreducer,
  },
});

export default store;
