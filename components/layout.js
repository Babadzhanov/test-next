import Head from "./head";   

const Layout = props => (
    <div className="Layout">
      <Head />
      {props.children}
    </div>

);

export default Layout;
