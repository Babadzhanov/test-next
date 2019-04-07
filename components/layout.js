import Head from "./head";
import Navbar from "./navbar";

const Layout = props => (
  <div className="Layout">
    <Head />
    <Navbar />
    {props.children}
  </div>
);

export default Layout;
