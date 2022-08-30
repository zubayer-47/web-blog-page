import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore } from "redux";
import BlogReducer from "./Blog/BlogReducer";

const store = createStore(BlogReducer, composeWithDevTools());

export default store;