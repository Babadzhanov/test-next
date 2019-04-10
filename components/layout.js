import Head from "./head";
import Navbar from "./navbar";
import { GlobalStyle } from "../theme";

const Layout = props => (
  <div className="Layout">
    <Head />
    <Navbar />
    {props.children}
    <GlobalStyle />
  </div>
);

export default Layout;
