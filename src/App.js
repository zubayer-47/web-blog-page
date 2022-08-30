import { Provider } from "react-redux";
import Blogs from "./page/Blogs";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Blogs />
    </Provider>
  );
}

export default App;
