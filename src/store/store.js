import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "./todo.slise";

const store = configureStore (
    {
        reducer :{
            todo: todoReducer
        }
    }
);
export default store;