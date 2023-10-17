import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./ReduxState"

import { TypedUseSelectorHook, useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux";


export const store = configureStore({
    reducer: {
      myReducer,
    },
  });
                                     
  export const UseAppDispach: () => typeof store.dispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<
	ReturnType<typeof store.getState>
> = useSelector;