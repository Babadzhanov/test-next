import Link from "next/link";

import Layout from "../components/layout";

export default () => (
  <Layout>
    <h1>About page.</h1>
    <div>
      Back to{" "}
      <Link href="/" as={process.env.BACKEND_URL + "/"}>
        <a>Home</a>
      </Link>
    </div>
  </Layout>
);
