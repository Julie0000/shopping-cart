import { Provider } from "react-redux"; // Importing Provider
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import store from "../redux/store"; // Importing redux store
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </Provider>
  );
}
