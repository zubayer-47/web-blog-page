import {
  FILTER_BY_AUTHOR,
  FILTER_BY_CATEGORY,
  FILTER_BY_SEARCH
} from "./ActionTypes";
import { initialState } from "./InitialState";

const BlogReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_AUTHOR:
      return {
        ...state,
        blogs: state.blogs.map((blog) =>
          blog.author === action.payload
            ? { ...blog, isShow: true }
            : { ...blog, isShow: false }
        ),
      };
    case FILTER_BY_CATEGORY:
      const category = action.payload;
      return {
        ...state,
        blogs: state.blogs.map((blog) => blog.category.includes(category) ? {...blog, isShow: true} : {...blog, isShow: false} ),
      };
    case FILTER_BY_SEARCH:
      return {
        ...state,
        blogs: state.blogs.map((blog) =>{
        const search = blog.title
        .toLowerCase()
        .includes(action.payload.toString().toLowerCase())
        
        if (search) {
          return {
            ...blog,
            isShow: true
          }
        }

        return {
          ...blog,
          isShow: false
        }
      })
      };
    default:
      return state;
  }
};

export default BlogReducer;
