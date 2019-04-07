import Link from "next/link";

import Layout from "../components/layout";

export default () => (
  <Layout>
    <h1>Index page.</h1>
    <div>
      Hello World!
      <Link href="/about" as={process.env.BACKEND_URL + "/about"}>
        <a>About page</a>
      </Link>
    </div>
  </Layout>
);
